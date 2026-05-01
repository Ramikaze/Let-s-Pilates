// ============================================
// COURSE BUILDER LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const libraryContainer = document.getElementById('builderLibrary');
  const dropzone = document.getElementById('builderDropzone');
  const filtersContainer = document.getElementById('builderFilters');
  const searchInput = document.getElementById('builderSearch');
  const countEl = document.getElementById('courseExerciseCount');
  const durationEl = document.getElementById('courseDuration');
  const clearBtn = document.getElementById('clearCourseBtn');
  const printBtn = document.getElementById('printCourseBtn');
  
  // State
  let customCourse = [];
  let draggedItem = null;
  let activeFilter = 'all';
  
  // Initialize
  initLibrary();
  initFilters();
  initDragAndDrop();
  
  // Event Listeners
  searchInput.addEventListener('input', () => renderLibrary(searchInput.value, activeFilter));
  clearBtn.addEventListener('click', clearCourse);
  printBtn.addEventListener('click', () => window.print());
  
  // --- Initialization ---
  
  function initLibrary() {
    renderLibrary();
  }
  
  function initFilters() {
    // Extract unique themes (focus areas)
    const allFocuses = EXERCISES.flatMap(ex => ex.focus || []);
    const uniqueFocuses = [...new Set(allFocuses)].sort();
    
    // Create 'All' chip
    const allChip = document.createElement('div');
    allChip.className = 'chip active';
    allChip.textContent = 'All Themes';
    allChip.dataset.theme = 'all';
    allChip.addEventListener('click', () => setFilter('all'));
    filtersContainer.appendChild(allChip);
    
    // Create chip for each theme
    uniqueFocuses.forEach(theme => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
      chip.dataset.theme = theme;
      chip.addEventListener('click', () => setFilter(theme));
      filtersContainer.appendChild(chip);
    });
  }
  
  function setFilter(theme) {
    activeFilter = theme;
    document.querySelectorAll('#builderFilters .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.theme === theme);
    });
    renderLibrary(searchInput.value, activeFilter);
  }
  
  function renderLibrary(searchQuery = '', theme = 'all') {
    libraryContainer.innerHTML = '';
    
    let filtered = EXERCISES;
    
    if (theme !== 'all') {
      filtered = filtered.filter(ex => ex.focus && ex.focus.includes(theme));
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(ex => 
        ex.nameEn.toLowerCase().includes(q) || 
        (ex.nameFr && ex.nameFr.toLowerCase().includes(q))
      );
    }
    
    if (filtered.length === 0) {
      libraryContainer.innerHTML = '<p style="color: var(--ink-whisper); font-style: italic; text-align: center; padding: 2rem 0;">No exercises found.</p>';
      return;
    }
    
    // Optionally group by theme if "all" is selected, else just list
    // For simplicity and user control, we'll list them alphabetically or by method
    // But since user asked for "groupé par theme", let's group them if 'all' is selected.
    
    if (theme === 'all' && !searchQuery.trim()) {
      const groups = {};
      filtered.forEach(ex => {
        const mainTheme = (ex.focus && ex.focus.length > 0) ? ex.focus[0] : 'other';
        if (!groups[mainTheme]) groups[mainTheme] = [];
        groups[mainTheme].push(ex);
      });
      
      Object.keys(groups).sort().forEach(groupTheme => {
        const groupLabel = document.createElement('h4');
        groupLabel.textContent = groupTheme.charAt(0).toUpperCase() + groupTheme.slice(1);
        groupLabel.style.marginTop = '1rem';
        groupLabel.style.marginBottom = '0.5rem';
        groupLabel.style.fontFamily = 'var(--serif)';
        groupLabel.style.color = 'var(--ink-soft)';
        groupLabel.style.borderBottom = '1px solid var(--line)';
        libraryContainer.appendChild(groupLabel);
        
        groups[groupTheme].forEach(ex => {
          libraryContainer.appendChild(createLibraryItem(ex));
        });
      });
    } else {
      filtered.forEach(ex => {
        libraryContainer.appendChild(createLibraryItem(ex));
      });
    }
  }
  
  function createLibraryItem(ex) {
    const el = document.createElement('div');
    el.className = 'builder-item';
    el.draggable = true;
    el.dataset.id = ex.id;
    
    el.innerHTML = `
      <div class="b-item-header">
        <div class="b-item-name">${ex.nameEn}</div>
        <div class="b-item-method">${formatMethod(ex.method)}</div>
      </div>
      <div class="b-item-details">
        <span class="b-item-duration">${ex.duration || 'N/A'}</span>
      </div>
    `;
    
    el.addEventListener('dragstart', handleDragStart);
    el.addEventListener('dragend', handleDragEnd);
    
    return el;
  }
  
  function formatMethod(method) {
    if (method === 'pilates-mat') return 'Mat';
    if (method === 'pilates-reformer') return 'Reformer';
    if (method === 'lagree') return 'Lagree';
    return method;
  }
  
  // --- Drag & Drop Logic ---
  
  function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => this.classList.add('dragging'), 0);
    e.dataTransfer.effectAllowed = 'copyMove';
    e.dataTransfer.setData('text/plain', this.dataset.id);
  }
  
  function handleDragEnd() {
    this.classList.remove('dragging');
    draggedItem = null;
    dropzone.classList.remove('drag-over');
    removeDropIndicators();
  }
  
  function initDragAndDrop() {
    dropzone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      dropzone.classList.add('drag-over');
      
      const afterElement = getDragAfterElement(dropzone, e.clientY);
      removeDropIndicators();
      
      const indicator = document.createElement('div');
      indicator.className = 'drop-indicator active';
      
      if (afterElement == null) {
        dropzone.appendChild(indicator);
      } else {
        dropzone.insertBefore(indicator, afterElement);
      }
    });
    
    dropzone.addEventListener('dragleave', e => {
      if (!dropzone.contains(e.relatedTarget)) {
        dropzone.classList.remove('drag-over');
        removeDropIndicators();
      }
    });
    
    dropzone.addEventListener('drop', e => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');
      removeDropIndicators();
      
      const exId = e.dataTransfer.getData('text/plain');
      // If dropping from library
      if (draggedItem && draggedItem.classList.contains('builder-item')) {
        const ex = EXERCISES.find(e => e.id === exId);
        if (ex) {
          const uniqueId = ex.id + '-' + Date.now();
          const courseItem = { ...ex, uniqueId };
          
          const afterElement = getDragAfterElement(dropzone, e.clientY);
          if (afterElement == null) {
            customCourse.push(courseItem);
          } else {
            const afterIndex = customCourse.findIndex(item => item.uniqueId === afterElement.dataset.uid);
            if (afterIndex !== -1) {
              customCourse.splice(afterIndex, 0, courseItem);
            } else {
              customCourse.push(courseItem);
            }
          }
          renderCourse();
        }
      } 
      // If reordering within dropzone
      else if (draggedItem && draggedItem.classList.contains('course-item')) {
        const draggedUid = draggedItem.dataset.uid;
        const afterElement = getDragAfterElement(dropzone, e.clientY);
        
        const fromIndex = customCourse.findIndex(item => item.uniqueId === draggedUid);
        if (fromIndex !== -1) {
          const itemToMove = customCourse[fromIndex];
          customCourse.splice(fromIndex, 1);
          
          if (afterElement == null) {
            customCourse.push(itemToMove);
          } else {
            const toIndex = customCourse.findIndex(item => item.uniqueId === afterElement.dataset.uid);
            if (toIndex !== -1) {
              customCourse.splice(toIndex, 0, itemToMove);
            }
          }
          renderCourse();
        }
      }
    });
  }
  
  function removeDropIndicators() {
    const indicators = dropzone.querySelectorAll('.drop-indicator');
    indicators.forEach(i => i.remove());
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
  
  // --- Course Rendering ---
  
  function renderCourse() {
    // Clear existing course items
    const existingItems = dropzone.querySelectorAll('.course-item');
    existingItems.forEach(item => item.remove());
    
    if (customCourse.length > 0) {
      dropzone.classList.add('has-items');
    } else {
      dropzone.classList.remove('has-items');
    }
    
    customCourse.forEach((ex, index) => {
      const el = document.createElement('div');
      el.className = 'course-item';
      el.draggable = true;
      el.dataset.uid = ex.uniqueId;
      
      el.innerHTML = `
        <div class="course-item-drag-handle">≡</div>
        <div class="course-item-content">
          <div class="course-item-title">${index + 1}. ${ex.nameEn}</div>
          <div class="course-item-meta">
            <span>${formatMethod(ex.method)}</span>
            <span>&bull;</span>
            <span>${ex.duration || 'N/A'}</span>
          </div>
        </div>
        <button class="course-item-remove" aria-label="Remove">&times;</button>
      `;
      
      // Reordering logic
      el.addEventListener('dragstart', function(e) {
        draggedItem = this;
        setTimeout(() => this.classList.add('dragging'), 0);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.uid); // Not really used, just for compatibility
      });
      el.addEventListener('dragend', handleDragEnd);
      
      // Remove logic
      el.querySelector('.course-item-remove').addEventListener('click', () => {
        removeCourseItem(ex.uniqueId);
      });
      
      dropzone.appendChild(el);
    });
    
    updateStats();
  }
  
  function removeCourseItem(uid) {
    customCourse = customCourse.filter(item => item.uniqueId !== uid);
    renderCourse();
  }
  
  function clearCourse() {
    if (customCourse.length === 0) return;
    if (confirm('Are you sure you want to clear your entire course?')) {
      customCourse = [];
      renderCourse();
    }
  }
  
  function updateStats() {
    countEl.textContent = customCourse.length;
    
    let totalMinutes = 0;
    customCourse.forEach(ex => {
      if (ex.duration) {
        // Very basic parsing of "1-2 min", "5 min", "60-90 sec"
        const dur = ex.duration.toLowerCase();
        if (dur.includes('min')) {
          const matches = dur.match(/(\d+)/g);
          if (matches && matches.length > 0) {
            // Take the average if there's a range like 1-2
            if (matches.length >= 2) {
              totalMinutes += (parseInt(matches[0]) + parseInt(matches[1])) / 2;
            } else {
              totalMinutes += parseInt(matches[0]);
            }
          }
        } else if (dur.includes('sec')) {
          const matches = dur.match(/(\d+)/g);
          if (matches && matches.length > 0) {
            if (matches.length >= 2) {
              totalMinutes += ((parseInt(matches[0]) + parseInt(matches[1])) / 2) / 60;
            } else {
              totalMinutes += parseInt(matches[0]) / 60;
            }
          }
        }
      }
    });
    
    durationEl.textContent = Math.round(totalMinutes);
  }
});
