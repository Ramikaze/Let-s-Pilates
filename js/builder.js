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
    const ex = libraryItems.find(x => x.id === exId);
    if (!ex) return;

    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      tooltip.innerHTML = `
        <div class="tooltip-title">${ex.nameEn} <span class="tooltip-fr">${ex.nameFr}</span></div>
        <div class="tooltip-body">${ex.objective.substring(0, 300)}${ex.objective.length > 300 ? '...' : ''}</div>
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
  const libraryItems = [];
  
  if (typeof EXERCISES !== 'undefined') {
    EXERCISES.forEach(ex => {
      let category = 'core'; // default
      const f = (ex.focus || []).join(' ').toLowerCase();
      if (f.includes('breathing') || f.includes('alignment') || ex.id.includes('hundred')) category = 'échauffement';
      else if (f.includes('legs') || f.includes('hips')) category = 'jambes';
      else if (f.includes('shoulders') || f.includes('arms')) category = 'bras';
      else if (f.includes('spine') || f.includes('back')) category = 'dos';
      else if (f.includes('core')) category = 'core';

      libraryItems.push({
        id: ex.id,
        type: 'exercise',
        nameEn: ex.nameEn,
        nameFr: ex.nameFr,
        level: ex.level,
        category: category,
        duration: ex.duration,
        objective: ex.objective || ''
      });
    });
  }

  if (typeof CLASSES !== 'undefined') {
    CLASSES.forEach(cls => {
      libraryItems.push({
        id: cls.id,
        type: 'class',
        nameEn: cls.title,
        nameFr: 'Séance Complète',
        level: cls.level,
        category: 'classe',
        duration: cls.duration + ' min',
        objective: cls.description || ''
      });
    });
  }

  // State
  let courseItems = [];
  let currentFilter = 'all';

  const themes = [
    { id: 'all', label: 'Tout' },
    { id: 'classe', label: 'Séances (Classes)' },
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
    setupCalendar();
    updateStats();

    searchInput.addEventListener('input', renderLibrary);
    clearBtn.addEventListener('click', clearCourse);
    printBtn.addEventListener('click', () => window.print());
    
    const exportWeekBtn = document.getElementById('exportWeekBtn');
    if (exportWeekBtn) {
      exportWeekBtn.addEventListener('click', () => {
        window.print();
      });
    }

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
    
    const filtered = libraryItems.filter(item => {
      const matchesSearch = item.nameEn.toLowerCase().includes(query) || (item.nameFr && item.nameFr.toLowerCase().includes(query));
      const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
      return matchesSearch && matchesFilter;
    });

    libraryContainer.innerHTML = '';
    
    if (filtered.length === 0) {
      libraryContainer.innerHTML = '<p class="empty-state-text">Aucun élément trouvé.</p>';
      return;
    }

    filtered.forEach(item => {
      const el = document.createElement('div');
      el.className = 'builder-item draggable';
      el.draggable = true;
      el.dataset.id = item.id;
      el.dataset.type = item.type;
      el.innerHTML = `
        <div class="item-drag-handle">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </div>
        <div class="item-content">
          <strong>${item.nameEn}</strong>
          <span class="item-meta">${item.type === 'class' ? 'SÉANCE' : item.level} • ${item.category}</span>
        </div>
        <button class="item-add-btn" aria-label="Add to course">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      `;

      el.addEventListener('dragstart', handleDragStart);
      el.querySelector('.item-add-btn').addEventListener('click', () => {
        addExerciseToCourse(item.id);
      });

      libraryContainer.appendChild(el);
    });
  }

  let draggedItem = null;
  let dragSource = null;

  function handleDragStart(e) {
    handleTooltipOut(); // Hide tooltip immediately when dragging starts
    draggedItem = e.target.closest('.draggable');
    
    if (draggedItem.classList.contains('saved-course-card')) {
      dragSource = 'calendar-card';
    } else {
      dragSource = draggedItem.parentElement.id === 'builderLibrary' ? 'library' : 'course';
    }
    
    e.dataTransfer.effectAllowed = 'copyMove';
    e.dataTransfer.setData('text/plain', draggedItem.dataset.id || draggedItem.id);
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
      if (dragSource === 'calendar-card') return; // Cannot drop a whole course into the course builder dropzone
      
      const exId = e.dataTransfer.getData('text/plain');
      
      if (dragSource === 'library' && exId) {
        const afterElement = getDragAfterElement(dropzone, e.clientY);
        addExerciseToCourse(exId, afterElement);
      } else if (dragSource === 'course') {
        updateCourseStateFromDOM();
      }
    });
  }

  const WEEK_DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  let currentDayIndex = 0;
  let weeklySchedule = {};
  WEEK_DAYS.forEach(day => weeklySchedule[day] = {});

  function renderTimeslots() {
    const timeslotsContainer = document.getElementById('calendarTimeslots');
    if (!timeslotsContainer) return;
    timeslotsContainer.innerHTML = '';
    
    const currentDay = WEEK_DAYS[currentDayIndex];
    document.getElementById('currentDayLabel').textContent = currentDay;
    
    for (let h = 7; h <= 21; h++) {
      for (let m of ['00', '30']) {
        if (h === 21 && m === '30') continue; // End at 21:00
        
        const timeStr = `${h.toString().padStart(2, '0')}:${m}`;
        const slotEl = document.createElement('div');
        slotEl.className = 'timeslot';
        slotEl.innerHTML = `
          <div class="timeslot-label">${timeStr}</div>
          <div class="timeslot-dropzone" data-time="${timeStr}"></div>
        `;
        
        const existingCourse = weeklySchedule[currentDay][timeStr];
        if (existingCourse) {
          const dropzone = slotEl.querySelector('.timeslot-dropzone');
          const courseCard = document.createElement('div');
          courseCard.className = 'calendar-course-block';
          courseCard.innerHTML = `
            <strong>${existingCourse.name}</strong>
            <span>${existingCourse.duration} min • ${existingCourse.count} exos</span>
            <button class="remove-block-btn" data-time="${timeStr}">×</button>
          `;
          courseCard.querySelector('.remove-block-btn').addEventListener('click', (e) => {
            delete weeklySchedule[currentDay][e.target.dataset.time];
            renderTimeslots();
            renderWeekOverview();
          });
          dropzone.appendChild(courseCard);
        }
        
        timeslotsContainer.appendChild(slotEl);
      }
    }
    
    const dropzones = timeslotsContainer.querySelectorAll('.timeslot-dropzone');
    dropzones.forEach(zone => {
      zone.addEventListener('dragover', e => {
        e.preventDefault();
        if (dragSource === 'course-handle') {
          zone.classList.add('drag-over');
          e.dataTransfer.dropEffect = 'copy';
        }
      });
      zone.addEventListener('dragleave', e => {
        zone.classList.remove('drag-over');
      });
      zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (dragSource === 'course-handle' && courseItems.length > 0) {
          const time = zone.dataset.time;
          let courseName = prompt("Nom de la séance ?", "Séance Mat - Full Body");
          if (!courseName) return;
          
          weeklySchedule[currentDay][time] = {
            name: courseName,
            duration: durationEl.textContent,
            count: countEl.textContent,
            items: [...courseItems]
          };
          renderTimeslots();
          renderWeekOverview();
          clearCourse(true);
        }
      });
    });
  }

  function renderWeekOverview() {
    const grid = document.getElementById('weekGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    WEEK_DAYS.forEach(day => {
      const col = document.createElement('div');
      col.className = 'week-day-col';
      col.innerHTML = `<h4>${day}</h4>`;
      
      const daySchedule = weeklySchedule[day];
      const times = Object.keys(daySchedule).sort();
      
      if (times.length === 0) {
        col.innerHTML += `<div style="font-size:0.8rem; color:var(--ink-soft); text-align:center;">Vide</div>`;
      } else {
        times.forEach(time => {
          const course = daySchedule[time];
          const item = document.createElement('div');
          item.className = 'week-overview-item';
          item.innerHTML = `
            <span class="week-overview-item-time">${time}</span>
            <span class="week-overview-item-name">${course.name}</span>
          `;
          col.appendChild(item);
        });
      }
      grid.appendChild(col);
    });
  }

  function setupCalendar() {
    const prevBtn = document.getElementById('prevDayBtn');
    const nextBtn = document.getElementById('nextDayBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      currentDayIndex = (currentDayIndex - 1 + 7) % 7;
      renderTimeslots();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      currentDayIndex = (currentDayIndex + 1) % 7;
      renderTimeslots();
    });
    
    const dragHandle = document.getElementById('courseDragHandle');
    if (dragHandle) {
      dragHandle.addEventListener('dragstart', (e) => {
        if (courseItems.length === 0) {
          e.preventDefault();
          alert("La séance est vide. Ajoutez des exercices avant de planifier.");
          return;
        }
        dragSource = 'course-handle';
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', 'course'); 
      });
    }
    
    // Handle the old save button to alert the new workflow
    const saveBtn = document.getElementById('saveCourseBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        alert("Pour planifier cette séance, glissez le bouton 'Glisser la séance' vers un créneau horaire du calendrier à droite.");
      });
    }

    renderTimeslots();
    renderWeekOverview();
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
    const itemData = libraryItems.find(e => e.id === id);
    if (!itemData) return;

    const instanceId = id + '-' + Date.now();
    
    const el = document.createElement('div');
    el.className = 'course-item draggable';
    if (itemData.type === 'class') el.classList.add('is-class-item');
    el.draggable = true;
    el.dataset.id = id;
    el.dataset.instanceId = instanceId;
    el.dataset.type = itemData.type;
    
    let minText = String(itemData.duration).replace(/[^0-9-]/g, '').split('-')[0];
    let mins = parseInt(minText) || 1;

    el.innerHTML = `
      <div class="item-drag-handle">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      </div>
      <div class="item-content">
        <div class="item-header">
          <strong>${itemData.nameEn}</strong>
          <span class="badge-category">${itemData.category}</span>
        </div>
        <div class="item-notes-input" contenteditable="true" placeholder="Ajouter des notes...">${itemData.type === 'class' ? 'Séance Complète' : ''}</div>
      </div>
      <div class="item-duration">${mins} min</div>
      <button class="item-remove-btn" aria-label="Remove from course">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    el.addEventListener('dragstart', handleDragStart);
    
    el.querySelector('.item-remove-btn').addEventListener('click', () => {
      el.classList.add('removing');
      setTimeout(() => {
        el.remove();
        updateCourseStateFromDOM();
      }, 200);
    });

    const emptyState = dropzone.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    if (insertBeforeElement) {
      dropzone.insertBefore(el, insertBeforeElement);
    } else {
      dropzone.appendChild(el);
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
      const itm = libraryItems.find(e => e.id === item.id);
      if (itm) {
        let minText = String(itm.duration).replace(/[^0-9-]/g, '').split('-')[0];
        let mins = parseInt(minText) || 1;
        totalMins += mins;
      }
    });
    
    durationEl.textContent = totalMins;
  }

  function clearCourse(skipConfirm = false) {
    if (courseItems.length === 0) return;
    if (skipConfirm || confirm('Êtes-vous sûr de vouloir vider le cours entier ?')) {
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