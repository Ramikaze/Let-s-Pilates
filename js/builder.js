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

  // --- Tooltip Setup ---
  const tooltip = document.createElement('div');
  tooltip.className = 'exercise-tooltip';
  document.body.appendChild(tooltip);
  let tooltipTimeout;

  function handleTooltipOver(e) {
    if (draggedItem) return; // Don't show while dragging
    const item = e.target.closest('.builder-item, .course-item');
    if (!item) return;

    const exId = item.dataset.id;
    const ex = enhancedExercises.find(x => x.id === exId);
    if (!ex) return;

    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      tooltip.innerHTML = `
        <div class="tooltip-title">${ex.nameEn} <span class="tooltip-fr">${ex.nameFr}</span></div>
        <div class="tooltip-body">${ex.objective.substring(0, 160)}${ex.objective.length > 160 ? '...' : ''}</div>
      `;
      
      tooltip.style.display = 'block';
      const rect = item.getBoundingClientRect();
      
      let left = rect.right + 15;
      let top = rect.top + window.scrollY + (rect.height / 2) - (tooltip.offsetHeight / 2);
      
      if (item.classList.contains('course-item') || left + 320 > window.innerWidth) {
        left = rect.left - 320;
      }
      
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
      
      setTimeout(() => tooltip.classList.add('visible'), 10);
    }, 400); // 400ms delay to prevent flashing
  }

  function handleTooltipOut(e) {
    clearTimeout(tooltipTimeout);
    tooltip.classList.remove('visible');
    setTimeout(() => {
      if (!tooltip.classList.contains('visible')) tooltip.style.display = 'none';
    }, 200);
  }

  // Hide tooltip globally on scroll or drag
  window.addEventListener('scroll', handleTooltipOut);

  // --- Dynamic Categorization ---
  // The user requested sorting by body part / phase rather than just 'level'.
  const enhancedExercises = (typeof EXERCISES !== 'undefined' ? EXERCISES : []).map(ex => {
    let category = 'core'; // default
    const f = (ex.focus || []).join(' ').toLowerCase();
    
    if (f.includes('breathing') || f.includes('alignment') || ex.id.includes('hundred')) {
      category = 'échauffement';
    } else if (f.includes('legs') || f.includes('hips')) {
      category = 'jambes';
    } else if (f.includes('shoulders') || f.includes('arms')) {
      category = 'bras';
    } else if (f.includes('spine') || f.includes('back')) {
      category = 'dos';
    } else if (f.includes('core')) {
      category = 'core';
    }

    return { ...ex, category };
  });

  // State
  let courseItems = [];
  let currentFilter = 'all';

  const themes = [
    { id: 'all', label: 'Tout' },
    { id: 'échauffement', label: 'Échauffement' },
    { id: 'jambes', label: 'Jambes' },
    { id: 'core', label: 'Centre (Core)' },
    { id: 'bras', label: 'Bras' },
    { id: 'dos', label: 'Dos' }
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

    // Tooltip listeners
    libraryContainer.addEventListener('mouseover', handleTooltipOver);
    libraryContainer.addEventListener('mouseout', handleTooltipOut);
    dropzone.addEventListener('mouseover', handleTooltipOver);
    dropzone.addEventListener('mouseout', handleTooltipOut);
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
    
    const filtered = enhancedExercises.filter(ex => {
      const matchesSearch = ex.nameEn.toLowerCase().includes(query) || (ex.nameFr && ex.nameFr.toLowerCase().includes(query));
      const matchesFilter = currentFilter === 'all' || ex.category === currentFilter;
      return matchesSearch && matchesFilter;
    });

    libraryContainer.innerHTML = '';
    
    if (filtered.length === 0) {
      libraryContainer.innerHTML = '<p class="empty-state-text">Aucun exercice trouvé.</p>';
      return;
    }

    filtered.forEach(ex => {
      const item = document.createElement('div');
      item.className = 'builder-item draggable';
      item.draggable = true;
      item.dataset.id = ex.id;
      item.innerHTML = `
        <div class="item-drag-handle">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </div>
        <div class="item-content">
          <strong>${ex.nameEn}</strong>
          <span class="item-meta">${ex.level} • ${ex.category}</span>
        </div>
        <button class="item-add-btn" aria-label="Add to course">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
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
    handleTooltipOut(); // Hide tooltip immediately when dragging starts
    draggedItem = e.target.closest('.draggable');
    dragSource = draggedItem.parentElement.id === 'builderLibrary' ? 'library' : 'course';
    e.dataTransfer.effectAllowed = 'copyMove';
    e.dataTransfer.setData('text/plain', draggedItem.dataset.id);
    draggedItem.classList.add('dragging');
    
    // Add visual feedback
    setTimeout(() => {
      draggedItem.style.opacity = '0.5';
      if (dragSource === 'library') dropzone.classList.add('highlight-dropzone');
    }, 0);
  }

  function handleDragEnd(e) {
    if (draggedItem) {
      draggedItem.classList.remove('dragging');
      draggedItem.style.opacity = '1';
      draggedItem = null;
    }
    dropzone.classList.remove('highlight-dropzone');
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
      dropzone.classList.remove('highlight-dropzone');
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
    const ex = enhancedExercises.find(e => e.id === id);
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
      <div class="item-drag-handle">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      </div>
      <div class="item-content">
        <div class="item-header">
          <strong>${ex.nameEn}</strong>
          <span class="badge-category">${ex.category}</span>
        </div>
        <div class="item-notes-input" contenteditable="true" placeholder="Ajouter des notes, ressorts, variations...">${ex.focus ? ex.focus.join(', ') : ''}</div>
      </div>
      <div class="item-duration">${mins} min</div>
      <button class="item-remove-btn" aria-label="Remove from course">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    item.addEventListener('dragstart', handleDragStart);
    
    item.querySelector('.item-remove-btn').addEventListener('click', () => {
      item.classList.add('removing');
      setTimeout(() => {
        item.remove();
        updateCourseStateFromDOM();
      }, 200); // Wait for animation
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
          <div class="empty-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <p>Glissez et déposez des exercices ici pour créer votre séance.</p>
        </div>
      `;
    }
    
    updateStats();
  }

  function updateStats() {
    countEl.textContent = courseItems.length;
    
    let totalMins = 0;
    courseItems.forEach(item => {
      const ex = enhancedExercises.find(e => e.id === item.id);
      if (ex) {
        let minText = ex.duration.replace(/[^0-9-]/g, '').split('-')[0];
        let mins = parseInt(minText) || 1;
        totalMins += mins;
      }
    });
    
    durationEl.textContent = totalMins;
  }

  function clearCourse() {
    if (courseItems.length === 0) return;
    if (confirm('Êtes-vous sûr de vouloir vider le cours entier ?')) {
      dropzone.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <p>Glissez et déposez des exercices ici pour créer votre séance.</p>
        </div>
      `;
      courseItems = [];
      updateStats();
    }
  }

  init();
});