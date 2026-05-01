// ============================================
// THE METHOD LIBRARY — App Logic
// ============================================

// --- Theme toggle with persistence ---
(function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }
  });
})();

// --- Mobile menu toggle ---
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-label', 'Open menu');
  };

  const openMenu = () => {
    nav.classList.add('open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-label', 'Close menu');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('open')) {
      closeMenu();
      toggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
    } else {
      openMenu();
      toggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg>';
    }
  });

  // Close on link click (so users actually navigate)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close menu if window resized to desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && nav.classList.contains('open')) {
        closeMenu();
      }
    }, 100);
  });
});

// --- URL params helper ---
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// --- Labels ---
function methodLabel(m) {
  return ({
    'pilates-mat': 'Pilates Mat',
    'pilates-reformer': 'Reformer',
    'lagree': 'Lagree'
  })[m] || m;
}

function focusLabel(f) {
  return ({
    'core': 'core',
    'back': 'back',
    'spine': 'spine',
    'hips': 'hips',
    'legs': 'legs',
    'shoulders': 'shoulders',
    'balance': 'balance',
    'breathing': 'breathing',
    'coordination': 'coordination',
    'alignment': 'alignment'
  })[f] || f;
}

// --- Global homepage search ---
function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove('active'); results.innerHTML = ''; return; }

    const exMatches = EXERCISES.filter(ex => {
      const hay = [
        ex.nameEn, ex.nameFr, ex.objective,
        ...(ex.cues || []).map(c => c.en + ' ' + c.fr),
        ...(ex.focus || [])
      ].join(' ').toLowerCase();
      return hay.includes(q);
    }).slice(0, 5);

    const classMatches = (typeof CLASSES !== 'undefined' ? CLASSES : []).filter(c => {
      const hay = [c.title, c.description, ...(c.focus || []), c.goal].join(' ').toLowerCase();
      return hay.includes(q);
    }).slice(0, 4);

    const allMatches = [...classMatches, ...exMatches];

    if (allMatches.length === 0) {
      results.innerHTML = '<div class="search-result-item">No results found.</div>';
    } else {
      const html = [];
      classMatches.forEach(c => {
        html.push(`
          <a href="class.html?id=${c.id}" class="search-result-item">
            <span class="result-type">Class · ${methodLabel(c.method)} · ${c.duration} min</span>
            <div><span class="result-title">${c.title}</span></div>
          </a>
        `);
      });
      exMatches.forEach(ex => {
        html.push(`
          <a href="exercise.html?id=${ex.id}" class="search-result-item">
            <span class="result-type">Exercise · ${methodLabel(ex.method)} · ${ex.level}</span>
            <div><span class="result-title">${ex.nameEn}</span> <span class="result-fr">— ${ex.nameFr}</span></div>
          </a>
        `);
      });
      results.innerHTML = html.join('');
    }
    results.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!results.contains(e.target) && e.target !== input) {
      results.classList.remove('active');
    }
  });
}

// --- Filter state ---
let filterState = {
  search: '',
  methods: new Set(),
  levels: new Set(),
  focus: new Set()
};

// --- Initial state from URL ---
function initFilterStateFromURL() {
  const m = getParam('method');
  const l = getParam('level');
  const f = getParam('focus');
  if (m) filterState.methods.add(m);
  if (l) filterState.levels.add(l);
  if (f) filterState.focus.add(f);
}

// --- Apply filters and render ---
function applyAndRender() {
  let list = EXERCISES.slice();

  // Search
  if (filterState.search) {
    const q = filterState.search.toLowerCase();
    list = list.filter(ex => {
      const hay = [ex.nameEn, ex.nameFr, ex.objective, ...(ex.focus || [])].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  // Methods (OR within the group)
  if (filterState.methods.size > 0) {
    list = list.filter(ex => filterState.methods.has(ex.method));
  }

  // Levels
  if (filterState.levels.size > 0) {
    list = list.filter(ex => filterState.levels.has(ex.level));
  }

  // Focus (OR within group — if any tag matches)
  if (filterState.focus.size > 0) {
    list = list.filter(ex => (ex.focus || []).some(f => filterState.focus.has(f)));
  }

  // Sort: classical order if same method, else by name
  list.sort((a, b) => {
    if (a.method === b.method && a.classicalOrder && b.classicalOrder) {
      return a.classicalOrder - b.classicalOrder;
    }
    return a.nameEn.localeCompare(b.nameEn);
  });

  renderExerciseGrid(list);
  updateFilterCount(list.length);
}

// --- Render exercise cards ---
function renderExerciseGrid(list) {
  const container = document.getElementById('exerciseGrid');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state"><h2>No exercises match</h2><p>Try removing a filter or clearing the search.</p></div>';
    return;
  }

  container.innerHTML = list.map(ex => `
    <a href="exercise.html?id=${ex.id}" class="exercise-card ex-card-${ex.method}">
      <div class="ex-meta">
        <span class="ex-method-tag">${methodLabel(ex.method)}</span>
        <span class="level-badge level-${ex.level}">${ex.level}</span>
      </div>
      <div class="ex-name-en">${ex.nameEn}</div>
      <div class="ex-name-fr">${ex.nameFr}</div>
      <div class="ex-objective">${ex.objective.substring(0, 125)}${ex.objective.length > 125 ? '…' : ''}</div>
      <div class="ex-card-footer">
        ${(ex.focus || []).map(f => `<span class="focus-tag">${focusLabel(f)}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

// --- Update filter result count ---
function updateFilterCount(n) {
  const el = document.getElementById('filterCount');
  if (!el) return;
  const total = EXERCISES.length;
  el.innerHTML = `<strong>${n}</strong> of ${total} ${n === 1 ? 'exercise' : 'exercises'}`;
}

// --- Build filter UI ---
function buildFilterUI() {
  const panel = document.getElementById('filtersPanel');
  if (!panel) return;

  // Collect all focus tags
  const allFocus = new Set();
  EXERCISES.forEach(ex => (ex.focus || []).forEach(f => allFocus.add(f)));
  const focusArr = Array.from(allFocus).sort();

  panel.innerHTML = `
    <div class="filters-search">
      <input type="search" id="filterSearch" placeholder="Search by name, French, muscle, cue…">
    </div>

    <div class="filter-row">
      <div class="filter-block">
        <h5>Method</h5>
        <div class="chip-group" id="chipsMethod">
          <button class="chip" data-filter="method" data-value="pilates-mat">Pilates Mat</button>
          <button class="chip" data-filter="method" data-value="pilates-reformer">Reformer</button>
          <button class="chip" data-filter="method" data-value="lagree">Lagree</button>
        </div>
      </div>

      <div class="filter-block">
        <h5>Level</h5>
        <div class="chip-group" id="chipsLevel">
          <button class="chip" data-filter="level" data-value="fundamental">Fundamental</button>
          <button class="chip" data-filter="level" data-value="intermediate">Intermediate</button>
          <button class="chip" data-filter="level" data-value="advanced">Advanced</button>
        </div>
      </div>

      <div class="filter-block" style="flex: 2; min-width: 260px;">
        <h5>Body focus</h5>
        <div class="chip-group" id="chipsFocus">
          ${focusArr.map(f => `<button class="chip" data-filter="focus" data-value="${f}">${focusLabel(f)}</button>`).join('')}
        </div>
      </div>
    </div>

    <div class="filter-footer">
      <div class="filter-count" id="filterCount"></div>
      <button class="clear-filters" id="clearFilters">Clear all filters</button>
    </div>
  `;

  // Wire up search
  const searchInput = document.getElementById('filterSearch');
  searchInput.addEventListener('input', (e) => {
    filterState.search = e.target.value.trim();
    applyAndRender();
  });

  // Wire up chips
  panel.querySelectorAll('.chip').forEach(chip => {
    const filter = chip.dataset.filter;
    const value = chip.dataset.value;
    const setMap = { method: 'methods', level: 'levels', focus: 'focus' };
    const stateKey = setMap[filter];

    // Restore active state from URL
    if (filterState[stateKey].has(value)) chip.classList.add('active');

    chip.addEventListener('click', () => {
      if (filterState[stateKey].has(value)) {
        filterState[stateKey].delete(value);
        chip.classList.remove('active');
      } else {
        filterState[stateKey].add(value);
        chip.classList.add('active');
      }
      applyAndRender();
    });
  });

  // Clear all
  document.getElementById('clearFilters').addEventListener('click', () => {
    filterState = { search: '', methods: new Set(), levels: new Set(), focus: new Set() };
    searchInput.value = '';
    panel.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
    applyAndRender();
  });
}

// --- Exercise detail page ---
function renderExerciseDetail() {
  const container = document.getElementById('exerciseDetail');
  if (!container) return;

  const id = getParam('id');
  const ex = EXERCISES.find(e => e.id === id);

  if (!ex) {
    container.innerHTML = '<div class="empty-state"><h2>Exercise not found</h2><p><a href="exercises.html">← Back to all exercises</a></p></div>';
    return;
  }

  document.title = `${ex.nameEn} — The Method Library`;

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Home</a> · <a href="exercises.html?method=${ex.method}">${methodLabel(ex.method)}</a> · <span>${ex.nameEn}</span>
    </nav>

    <header class="exercise-header">
      <div class="title-en">${ex.nameEn}</div>
      <div class="title-fr">${ex.nameFr}</div>
      <div class="meta-grid">
        <div><strong>Method</strong>${methodLabel(ex.method)}</div>
        <div><strong>Level</strong><span class="level-badge level-${ex.level}">${ex.level}</span></div>
        <div><strong>Duration</strong>${ex.duration}</div>
        <div><strong>Reps</strong>${ex.reps}</div>
        ${ex.classicalOrder ? `<div><strong>Classical order</strong>#${ex.classicalOrder}</div>` : ''}
      </div>
    </header>

    <section class="section">
      <h2>Objective</h2>
      <p>${ex.objective}</p>
    </section>

    <section class="section">
      <h2>Starting Position</h2>
      <p>${ex.starting}</p>
    </section>

    <section class="section">
      <h2>Breathing</h2>
      <p>${ex.breathing}</p>
    </section>

    <section class="section">
      <h2>Execution</h2>
      <ol>${ex.execution.map(step => `<li>${step}</li>`).join('')}</ol>
    </section>

    <section class="section">
      <h2>Target Muscles <span class="sub-fr">/ muscles cibles</span></h2>
      <table class="muscle-table">
        <thead><tr><th>Role</th><th>Muscles</th></tr></thead>
        <tbody>
          <tr><td>Prime movers <em>Agonistes</em></td><td>${ex.muscles.prime}</td></tr>
          <tr><td>Synergists <em>Synergistes</em></td><td>${ex.muscles.synergists}</td></tr>
          <tr><td>Stabilizers <em>Stabilisateurs</em></td><td>${ex.muscles.stabilizers}</td></tr>
          <tr><td>Antagonists <em>Antagonistes</em></td><td>${ex.muscles.antagonists}</td></tr>
        </tbody>
      </table>
    </section>

    <section class="section">
      <h2>Verbal Cues <span class="sub-fr">/ cueing</span></h2>
      ${ex.cues.map(c => `
        <div class="cue">
          <div class="cue-en">${c.en}</div>
          <div class="cue-fr">« ${c.fr} »</div>
        </div>
      `).join('')}
    </section>

    <section class="section">
      <h2>Fatal Errors <span class="sub-fr">/ erreurs fatales</span></h2>
      ${ex.errors.map(err => `
        <div class="error-item">
          <strong>${err.title}</strong>
          ${err.detail}
        </div>
      `).join('')}
    </section>

    <section class="section">
      <h2>Variations <span class="sub-fr">/ variantes</span></h2>
      ${ex.variations.map(v => `
        <div class="variation-item">
          <strong>${v.type}</strong> — ${v.detail}
        </div>
      `).join('')}
    </section>

    <section class="section">
      <h2>Contraindications <span class="sub-fr">/ contre-indications</span></h2>
      <div class="contraindication-list">
        <ul>${ex.contraindications.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </section>

    ${ex.note ? `
    <section class="section">
      <h2>Teaching Note</h2>
      <div class="note-box">${ex.note}</div>
    </section>
    ` : ''}

    <section class="section">
      <h2>Illustration</h2>
      <div class="image-placeholder">Image to be generated — Step 3: Art Direction</div>
    </section>

    <nav style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--line);">
      <a href="exercises.html?method=${ex.method}">← Back to ${methodLabel(ex.method)}</a>
    </nav>
  `;
}

// --- Programs rendering ---
function renderProgramsList() {
  const container = document.getElementById('programsGrid');
  if (!container) return;

  if (typeof PROGRAMS === 'undefined' || PROGRAMS.length === 0) {
    container.innerHTML = '<div class="empty-state"><h2>Programs coming soon</h2></div>';
    return;
  }

  container.innerHTML = PROGRAMS.map(p => `
    <a href="program.html?id=${p.id}" class="exercise-card ex-card-${p.method}">
      <div class="ex-meta">
        <span class="ex-method-tag">${methodLabel(p.method)}</span>
        <span class="level-badge level-${p.level}">${p.level}</span>
      </div>
      <div class="ex-name-en">${p.title}</div>
      <div class="ex-name-fr">${p.frequency} · ${p.duration}</div>
      <div class="ex-objective">${p.description.substring(0, 125)}${p.description.length > 125 ? '…' : ''}</div>
    </a>
  `).join('');
}

function renderProgramDetail() {
  const container = document.getElementById('programDetail');
  if (!container) return;

  const id = getParam('id');
  const p = PROGRAMS.find(pr => pr.id === id);
  if (!p) {
    container.innerHTML = '<div class="empty-state"><h2>Program not found</h2></div>';
    return;
  }

  document.title = `${p.title} — The Method Library`;

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Home</a> · <a href="programs.html">Programs</a> · <span>${p.title}</span>
    </nav>

    <header class="exercise-header">
      <div class="title-en">${p.title}</div>
      <div class="meta-grid">
        <div><strong>Method</strong>${methodLabel(p.method)}</div>
        <div><strong>Level</strong><span class="level-badge level-${p.level}">${p.level}</span></div>
        <div><strong>Duration</strong>${p.duration}</div>
        <div><strong>Frequency</strong>${p.frequency}</div>
      </div>
    </header>

    <section class="section">
      <h2>Overview</h2>
      <p>${p.description}</p>
    </section>

    <section class="section">
      <h2>Weekly Structure</h2>
      <table class="muscle-table">
        <thead><tr><th>Week</th><th>Theme</th><th>Intensity</th><th>Focus</th></tr></thead>
        <tbody>
          ${p.weeks.map(w => `<tr><td>#${w.week}</td><td>${w.theme}</td><td>${w.intensity}</td><td>${w.focus}</td></tr>`).join('')}
        </tbody>
      </table>
    </section>

    <div class="note-box">
      Detailed session-by-session breakdowns will be added here. Each week will expand into 3 full sessions with exercise lists, reps, tempo, and cueing.
    </div>
  `;
}

// ============================================
// CLASSES — Ready-to-teach sessions
// ============================================

let classFilterState = {
  search: '',
  methods: new Set(),
  levels: new Set(),
  goals: new Set(),
  durations: new Set()
};

function initClassFilterFromURL() {
  const m = getParam('method');
  const l = getParam('level');
  const g = getParam('goal');
  const d = getParam('duration');
  if (m) classFilterState.methods.add(m);
  if (l) classFilterState.levels.add(l);
  if (g) classFilterState.goals.add(g);
  if (d) classFilterState.durations.add(d);
}

function goalLabel(g) {
  return ({
    'foundation': 'Foundation',
    'strength': 'Strength',
    'mobility': 'Mobility',
    'posture': 'Posture',
    'recovery': 'Recovery',
    'prenatal': 'Prenatal',
    'classical': 'Classical',
    'wake-up': 'Wake-up'
  })[g] || g;
}

function durationBucket(mins) {
  if (mins <= 30) return 'short';
  if (mins <= 45) return 'medium';
  return 'long';
}

function durationLabel(bucket) {
  return ({ 'short': '≤ 30 min', 'medium': '30–45 min', 'long': '> 45 min' })[bucket] || bucket;
}

function applyClassFilters() {
  let list = CLASSES.slice();

  if (classFilterState.search) {
    const q = classFilterState.search.toLowerCase();
    list = list.filter(c => {
      const hay = [c.title, c.description, ...(c.focus || []), goalLabel(c.goal)].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }
  if (classFilterState.methods.size > 0) {
    list = list.filter(c => classFilterState.methods.has(c.method));
  }
  if (classFilterState.levels.size > 0) {
    list = list.filter(c => classFilterState.levels.has(c.level));
  }
  if (classFilterState.goals.size > 0) {
    list = list.filter(c => classFilterState.goals.has(c.goal));
  }
  if (classFilterState.durations.size > 0) {
    list = list.filter(c => classFilterState.durations.has(durationBucket(c.duration)));
  }

  // Sort: shortest first within method groups
  list.sort((a, b) => a.duration - b.duration);

  renderClassGrid(list);
  const el = document.getElementById('classFilterCount');
  if (el) el.innerHTML = `<strong>${list.length}</strong> of ${CLASSES.length} ${list.length === 1 ? 'class' : 'classes'}`;
}

function renderClassGrid(list) {
  const container = document.getElementById('classGrid');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state"><h2>No classes match</h2><p>Try removing a filter.</p></div>';
    return;
  }

  container.innerHTML = list.map(c => `
    <a href="class.html?id=${c.id}" class="exercise-card ex-card-${c.method} class-card">
      <div class="class-duration-badge">${c.duration}<span>min</span></div>
      <div class="ex-meta">
        <span class="ex-method-tag">${methodLabel(c.method)}</span>
        <span class="level-badge level-${c.level}">${c.level}</span>
      </div>
      <div class="ex-name-en">${c.title}</div>
      <div class="ex-name-fr">${goalLabel(c.goal)} · ${c.focus.slice(0, 3).map(focusLabel).join(' · ')}</div>
      <div class="ex-objective">${c.description.substring(0, 130)}${c.description.length > 130 ? '…' : ''}</div>
      <div class="ex-card-footer">
        ${(c.equipment || []).map(e => `<span class="focus-tag">${e}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

function buildClassFilterUI() {
  const panel = document.getElementById('classFiltersPanel');
  if (!panel) return;

  // Collect goals
  const allGoals = new Set();
  CLASSES.forEach(c => allGoals.add(c.goal));
  const goalsArr = Array.from(allGoals).sort();

  panel.innerHTML = `
    <div class="filters-search">
      <input type="search" id="classFilterSearch" placeholder="Search a class, a goal, a focus…">
    </div>

    <div class="filter-row">
      <div class="filter-block">
        <h5>Method</h5>
        <div class="chip-group">
          <button class="chip" data-cfilter="method" data-value="pilates-mat">Pilates Mat</button>
          <button class="chip" data-cfilter="method" data-value="pilates-reformer">Reformer</button>
          <button class="chip" data-cfilter="method" data-value="lagree">Lagree</button>
          <button class="chip" data-cfilter="method" data-value="hybrid">Hybrid</button>
        </div>
      </div>

      <div class="filter-block">
        <h5>Level</h5>
        <div class="chip-group">
          <button class="chip" data-cfilter="level" data-value="fundamental">Fundamental</button>
          <button class="chip" data-cfilter="level" data-value="intermediate">Intermediate</button>
          <button class="chip" data-cfilter="level" data-value="advanced">Advanced</button>
        </div>
      </div>

      <div class="filter-block">
        <h5>Duration</h5>
        <div class="chip-group">
          <button class="chip" data-cfilter="duration" data-value="short">≤ 30 min</button>
          <button class="chip" data-cfilter="duration" data-value="medium">30–45 min</button>
          <button class="chip" data-cfilter="duration" data-value="long">&gt; 45 min</button>
        </div>
      </div>

      <div class="filter-block" style="flex: 2; min-width: 260px;">
        <h5>Goal</h5>
        <div class="chip-group">
          ${goalsArr.map(g => `<button class="chip" data-cfilter="goal" data-value="${g}">${goalLabel(g)}</button>`).join('')}
        </div>
      </div>
    </div>

    <div class="filter-footer">
      <div class="filter-count" id="classFilterCount"></div>
      <button class="clear-filters" id="clearClassFilters">Clear all filters</button>
    </div>
  `;

  const searchInput = document.getElementById('classFilterSearch');
  searchInput.addEventListener('input', (e) => {
    classFilterState.search = e.target.value.trim();
    applyClassFilters();
  });

  const setMap = { method: 'methods', level: 'levels', goal: 'goals', duration: 'durations' };
  panel.querySelectorAll('.chip').forEach(chip => {
    const filter = chip.dataset.cfilter;
    const value = chip.dataset.value;
    const stateKey = setMap[filter];

    if (classFilterState[stateKey].has(value)) chip.classList.add('active');

    chip.addEventListener('click', () => {
      if (classFilterState[stateKey].has(value)) {
        classFilterState[stateKey].delete(value);
        chip.classList.remove('active');
      } else {
        classFilterState[stateKey].add(value);
        chip.classList.add('active');
      }
      applyClassFilters();
    });
  });

  document.getElementById('clearClassFilters').addEventListener('click', () => {
    classFilterState = { search: '', methods: new Set(), levels: new Set(), goals: new Set(), durations: new Set() };
    searchInput.value = '';
    panel.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
    applyClassFilters();
  });
}

function renderClassDetail() {
  const container = document.getElementById('classDetail');
  if (!container) return;

  const id = getParam('id');
  const c = CLASSES.find(cl => cl.id === id);
  if (!c) {
    container.innerHTML = '<div class="empty-state"><h2>Class not found</h2><p><a href="classes.html">← Back to all classes</a></p></div>';
    return;
  }

  document.title = `${c.title} — Let's Pilates`;

  const totalExercises = c.blocks.reduce((sum, b) => sum + b.items.length, 0);

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Home</a> · <a href="classes.html">Classes</a> · <span>${c.title}</span>
    </nav>

    <header class="exercise-header">
      <div class="title-en">${c.title}</div>
      <div class="title-fr">${goalLabel(c.goal)} · ${c.focus.map(focusLabel).join(' · ')}</div>
      <div class="meta-grid">
        <div><strong>Method</strong>${methodLabel(c.method)}</div>
        <div><strong>Level</strong><span class="level-badge level-${c.level}">${c.level}</span></div>
        <div><strong>Duration</strong>${c.duration} min</div>
        <div><strong>Exercises</strong>${totalExercises}</div>
        <div><strong>Equipment</strong>${(c.equipment || []).join(', ')}</div>
      </div>
    </header>

    <section class="section">
      <h2>Overview</h2>
      <p>${c.description}</p>
    </section>

    ${c.blocks.map((block, i) => `
      <section class="section class-block">
        <h2>${String(i + 1).padStart(2, '0')} · ${block.name} <span class="sub-fr">/ ${block.duration} min</span></h2>
        <div class="class-items">
          ${block.items.map((item, j) => `
            <div class="class-item">
              <div class="class-item-num">${j + 1}</div>
              <div class="class-item-body">
                <div class="class-item-name">${item.name}</div>
                <div class="class-item-reps">${item.reps}</div>
                ${item.notes ? `<div class="class-item-notes">${item.notes}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('')}

    ${c.contraindicationsNote ? `
    <section class="section">
      <h2>Teaching Note</h2>
      <div class="note-box">${c.contraindicationsNote}</div>
    </section>
    ` : ''}

    <div class="print-hint">
      <button onclick="window.print()" class="print-btn">Print this class</button>
    </div>

    <nav style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--line);">
      <a href="classes.html">← Back to all classes</a>
    </nav>
  `;
}

// ============================================
// GLOSSARY rendering
// ============================================
let glossaryFilter = { search: '', categories: new Set() };

function categoryLabel(c) {
  return ({
    'anatomy': 'Anatomy',
    'principles': 'Principles',
    'actions': 'Actions',
    'cueing': 'Cueing',
    'equipment': 'Equipment',
    'lagree': 'Lagree',
    'conditions': 'Conditions'
  })[c] || c;
}

function renderGlossary() {
  const panel = document.getElementById('glossaryPanel');
  const container = document.getElementById('glossaryContainer');
  if (!panel || !container) return;
  if (typeof GLOSSARY === 'undefined') {
    container.innerHTML = '<div class="empty-state">Glossary unavailable.</div>';
    return;
  }

  // Build filter UI
  const cats = Array.from(new Set(GLOSSARY.map(g => g.category)));
  panel.innerHTML = `
    <div class="filters-search">
      <input type="search" id="glossarySearch" placeholder="Search a term in English or French…">
    </div>
    <div class="filter-row">
      <div class="filter-block" style="flex: 1; min-width: 100%;">
        <h5>Category</h5>
        <div class="chip-group" id="glossaryChips">
          ${cats.map(c => `<button class="chip" data-gcat="${c}">${categoryLabel(c)}</button>`).join('')}
        </div>
      </div>
    </div>
    <div class="filter-footer">
      <div class="filter-count" id="glossaryCount"></div>
      <button class="clear-filters" id="clearGlossary">Clear all filters</button>
    </div>
  `;

  const searchInput = document.getElementById('glossarySearch');
  searchInput.addEventListener('input', (e) => {
    glossaryFilter.search = e.target.value.trim().toLowerCase();
    applyGlossary();
  });

  panel.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.gcat;
      if (glossaryFilter.categories.has(cat)) {
        glossaryFilter.categories.delete(cat);
        chip.classList.remove('active');
      } else {
        glossaryFilter.categories.add(cat);
        chip.classList.add('active');
      }
      applyGlossary();
    });
  });

  document.getElementById('clearGlossary').addEventListener('click', () => {
    glossaryFilter = { search: '', categories: new Set() };
    searchInput.value = '';
    panel.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
    applyGlossary();
  });

  applyGlossary();
}

function applyGlossary() {
  const container = document.getElementById('glossaryContainer');
  if (!container) return;

  let list = GLOSSARY.slice();
  if (glossaryFilter.search) {
    const q = glossaryFilter.search;
    list = list.filter(g => {
      return (g.term + ' ' + g.fr + ' ' + g.def).toLowerCase().includes(q);
    });
  }
  if (glossaryFilter.categories.size > 0) {
    list = list.filter(g => glossaryFilter.categories.has(g.category));
  }

  // Sort alphabetically by term
  list.sort((a, b) => a.term.localeCompare(b.term));

  const countEl = document.getElementById('glossaryCount');
  if (countEl) {
    countEl.innerHTML = `<strong>${list.length}</strong> of ${GLOSSARY.length} terms`;
  }

  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state"><h2>No terms match</h2></div>';
    return;
  }

  // Group by category if no category filter, else flat list
  let html = '';
  if (glossaryFilter.categories.size === 0 && !glossaryFilter.search) {
    // Group by category
    const grouped = {};
    list.forEach(g => {
      if (!grouped[g.category]) grouped[g.category] = [];
      grouped[g.category].push(g);
    });
    const catOrder = ['principles', 'anatomy', 'actions', 'cueing', 'equipment', 'lagree', 'conditions'];
    catOrder.forEach(cat => {
      if (!grouped[cat]) return;
      html += `<section class="glossary-section">
        <h2 class="glossary-section-title">${categoryLabel(cat)}</h2>
        <div class="glossary-grid">
          ${grouped[cat].map(g => renderGlossaryItem(g)).join('')}
        </div>
      </section>`;
    });
  } else {
    html = `<div class="glossary-grid">${list.map(g => renderGlossaryItem(g)).join('')}</div>`;
  }

  container.innerHTML = html;
}

function renderGlossaryItem(g) {
  return `
    <article class="glossary-item">
      <div class="glossary-term-en">${g.term}</div>
      <div class="glossary-term-fr">« ${g.fr} »</div>
      <div class="glossary-def">${g.def}</div>
    </article>
  `;
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initGlobalSearch();

  if (document.getElementById('filtersPanel')) {
    initFilterStateFromURL();
    buildFilterUI();
    applyAndRender();
  }

  if (document.getElementById('classFiltersPanel')) {
    initClassFilterFromURL();
    buildClassFilterUI();
    applyClassFilters();
  }

  renderExerciseDetail();
  renderProgramsList();
  renderProgramDetail();
  renderClassDetail();
  renderGlossary();
});
