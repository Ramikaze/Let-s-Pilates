// ============================================
// COURSE BUILDER LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const libraryContainer = document.getElementById('builderLibrary');
  const dropzone = document.getElementById('builderDropzone');
  const searchInput = document.getElementById('builderSearch');
  const filterContainer = document.getElementById('builderFilters');
  const countEl = document.getElementById('courseExerciseCount');
  const durationEl = document.getElementById('courseDuration');
  const clearBtn = document.getElementById('clearCourseBtn');
  const printBtn = document.getElementById('printCourseBtn');
  
  if (!libraryContainer || !dropzone) return;

  // State
  let courseItems = [];
  let currentFilter = 'all';

  const themes = [
    { id: 'all', label: 'All' },
    { id: 'fundamental', label: 'Fundamental' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  // Initialize
  function init() {
    renderFilters();
    renderLibrary();
    setupDropzone();
    updateStats();

    searchInput.addEventListener('input', renderLibrary);
    clearBtn.addEventListener('click', clearCourse);
    printBtn.addEventListener('click', () => window.print());
  }

  function renderFilters() {
    filterContainer.innerHTML = '';
    themes.forEach(theme => {
      const btn = document.createElement('button');
      btn.className = `filter-chip ${theme.id === currentFilter ? 'active' : ''}`;
      btn.textContent = theme.label;
      btn.addEventListener('click', () => {
        currentFilter = theme.id;
        document.querySelectorAll('#builderFilters .filter-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        renderLibrary();
      });
      filterContainer.appendChild(btn);
    });
  }

  function renderLibrary() {
    const query = searchInput.value.toLowerCase();
    
    const filtered = (typeof EXERCISES !== 'undefined' ? EXERCISES : []).filter(ex => {
      const matchesSearch = ex.nameEn.toLowerCase().includes(query) || (ex.nameFr && ex.nameFr.toLowerCase().includes(query));
      const matchesFilter = currentFilter === 'all' || ex.level === currentFilter;
      return matchesSearch && matchesFilter;
    });

    libraryContainer.innerHTML = '';
    
    if (filtered.length === 0) {
      libraryContainer.innerHTML = '<p class="empty-state-text">No exercises found.</p>';
      return;
    }

    filtered.forEach(ex => {
      const item = document.createElement('div');
      item.className = 'builder-item draggable';
      item.draggable = true;
      item.dataset.id = ex.id;
      item.innerHTML = `
        <div class="item-drag-handle">☰</div>
        <div class="item-content">
          <strong>${ex.nameEn}</strong>
          <span class="item-meta">${ex.level} • ${ex.duration}</span>
        </div>
        <button class="item-add-btn" aria-label="Add to course">+</button>
      `;

      item.addEventListener('dragstart', handleDragStart);
      item.querySelector('.item-add-btn').addEventListener('click', () => {
        addExerciseToCourse(ex.id);
      });

      libraryContainer.appendChild(item);
    });
  }

  let draggedItem = null;
  let dragSource = null;

  function handleDragStart(e) {
    draggedItem = e.target.closest('.draggable');
    dragSource = draggedItem.parentElement.id === 'builderLibrary' ? 'library' : 'course';
    e.dataTransfer.effectAllowed = 'copyMove';
    e.dataTransfer.setData('text/plain', draggedItem.dataset.id);
    draggedItem.classList.add('dragging');
    
    setTimeout(() => {
      draggedItem.style.opacity = '0.5';
    }, 0);
  }

  function handleDragEnd(e) {
    if (draggedItem) {
      draggedItem.classList.remove('dragging');
      draggedItem.style.opacity = '1';
      draggedItem = null;
    }
  }

  document.addEventListener('dragend', handleDragEnd);

  function setupDropzone() {
    dropzone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = dragSource === 'library' ? 'copy' : 'move';
      
      const afterElement = getDragAfterElement(dropzone, e.clientY);
      const draggable = document.querySelector('.dragging');
      if (draggable && dragSource === 'course') {
        if (afterElement == null) {
          dropzone.appendChild(draggable);
        } else {
          dropzone.insertBefore(draggable, afterElement);
        }
      }
    });

    dropzone.addEventListener('drop', e => {
      e.preventDefault();
      const exId = e.dataTransfer.getData('text/plain');
      
      if (dragSource === 'library' && exId) {
        const afterElement = getDragAfterElement(dropzone, e.clientY);
        addExerciseToCourse(exId, afterElement);
      } else if (dragSource === 'course') {
        updateCourseStateFromDOM();
      }
    });
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.course-item:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  function addExerciseToCourse(id, insertBeforeElement = null) {
    const ex = EXERCISES.find(e => e.id === id);
    if (!ex) return;

    const instanceId = id + '-' + Date.now();
    
    const item = document.createElement('div');
    item.className = 'course-item draggable';
    item.draggable = true;
    item.dataset.id = id;
    item.dataset.instanceId = instanceId;
    
    let minText = ex.duration.replace(/[^0-9-]/g, '').split('-')[0];
    let mins = parseInt(minText) || 1;

    item.innerHTML = `
      <div class="item-drag-handle">☰</div>
      <div class="item-content">
        <strong>${ex.nameEn}</strong>
        <div class="item-notes-input" contenteditable="true" placeholder="Add specific cues or variations...">${ex.focus ? ex.focus.join(', ') : ''}</div>
      </div>
      <div class="item-duration">${mins} min</div>
      <button class="item-remove-btn" aria-label="Remove from course">×</button>
    `;

    item.addEventListener('dragstart', handleDragStart);
    
    item.querySelector('.item-remove-btn').addEventListener('click', () => {
      item.remove();
      updateCourseStateFromDOM();
    });

    const emptyState = dropzone.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    if (insertBeforeElement) {
      dropzone.insertBefore(item, insertBeforeElement);
    } else {
      dropzone.appendChild(item);
    }

    updateCourseStateFromDOM();
  }

  function updateCourseStateFromDOM() {
    const items = [...dropzone.querySelectorAll('.course-item')];
    courseItems = items.map(item => ({
      id: item.dataset.id,
      instanceId: item.dataset.instanceId
    }));
    
    if (courseItems.length === 0 && !dropzone.querySelector('.empty-state')) {
      dropzone.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⨁</div>
          <p>Drag exercises here to build your sequence.</p>
        </div>
      `;
    }
    
    updateStats();
  }

  function updateStats() {
    countEl.textContent = courseItems.length;
    
    let totalMins = 0;
    courseItems.forEach(item => {
      const ex = EXERCISES.find(e => e.id === item.id);
      if (ex) {
        let minText = ex.duration.replace(/[^0-9-]/g, '').split('-')[0];
        let mins = parseInt(minText) || 1;
        totalMins += mins;
      }
    });
    
    durationEl.textContent = totalMins;
  }

  function clearCourse() {
    if (confirm('Are you sure you want to clear the entire sequence?')) {
      dropzone.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⨁</div>
          <p>Drag exercises here to build your sequence.</p>
        </div>
      `;
      courseItems = [];
      updateStats();
    }
  }

  init();
});