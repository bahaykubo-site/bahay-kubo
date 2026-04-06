/* ============================================================
   BAHAY KUBO — APP LOGIC  (index.html only)
   Depends on: js/data.js (must load first)
   ============================================================ */
 
/* ────────────────────────────────────────
   PAGE / SECTION NAVIGATION
   ──────────────────────────────────────── */
 
/** Switch between top-level pages (landing, student, teacher) */
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}
 
/** Show a named section inside the student page */
function showStudentSection(name) {
  const page = document.getElementById('page-student');
  page.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  page.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
 
  const sec = document.getElementById('stu-' + name);
  if (sec) sec.classList.add('active');
 
  // Highlight correct nav link
  const map = { dashboard: 0, modules: 1, assessments: 2 };
  const links = page.querySelectorAll('.nav-link');
  if (map[name] !== undefined && links[map[name]]) links[map[name]].classList.add('active');
 
  if (name === 'assessments') renderStudentAssessments();
}
 
/** Show a named section inside the teacher page */
function showTeacherSection(id) {
  const page = document.getElementById('page-teacher');
  page.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  page.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
 
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
 
  const map = { 't-home': 0, 't-dll': 1, 't-modules': 2, 't-resources': 3 };
  const links = page.querySelectorAll('.nav-link');
  if (map[id] !== undefined && links[map[id]]) links[map[id]].classList.add('active');
 
  if (id === 't-dll')       renderDLLList();
  if (id === 't-modules')   renderModulePanel();
  if (id === 't-resources') { loadDriveLink(); renderAssessmentCards(); }
}
 
/* ────────────────────────────────────────
   PASSCODE
   ──────────────────────────────────────── */
const PASSCODE = '1234';
let _pin = '';
 
function openPasscode() {
  document.getElementById('passcode-overlay').classList.add('open');
  _pin = '';
  _updateDots();
  document.getElementById('pin-err').textContent = '';
}
function closePasscode() {
  document.getElementById('passcode-overlay').classList.remove('open');
  _pin = '';
  _updateDots();
}
function pressKey(k) {
  if (_pin.length >= 4) return;
  _pin += k;
  _updateDots();
  if (_pin.length === 4) setTimeout(submitPin, 150);
}
function clearKey() {
  _pin = _pin.slice(0, -1);
  _updateDots();
  document.getElementById('pin-err').textContent = '';
}
function _updateDots() {
  for (let i = 0; i < 4; i++) {
    const d = document.getElementById('pin-dot-' + i);
    d.classList.toggle('on', i < _pin.length);
    d.classList.remove('err');
  }
}
function submitPin() {
  if (_pin === PASSCODE) {
    closePasscode();
    goTo('page-teacher');
    showTeacherSection('t-home');
  } else {
    document.getElementById('pin-err').textContent = 'Incorrect passcode. Try again.';
    for (let i = 0; i < 4; i++) {
      const d = document.getElementById('pin-dot-' + i);
      d.classList.add('err');
      d.classList.remove('on');
    }
    setTimeout(() => { _pin = ''; _updateDots(); document.getElementById('pin-err').textContent = ''; }, 900);
  }
}
 
/* ────────────────────────────────────────
   STORAGE HELPERS
   ──────────────────────────────────────── */
const LS = {
  get: (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};
 
/* ────────────────────────────────────────
   DLL SYSTEM
   ──────────────────────────────────────── */
let _dllTab     = 'premade'; // 'premade' | 'copies' | 'archived'
let _dllEditId  = null;      // id of DLL currently in editor
let _dllReadonly = true;     // whether editor is readonly
 
function renderDLLList() {
  // Show correct tab content
  const copies   = LS.get('dll_copies', {});
  const archived = LS.get('dll_archived', []);
 
  const grid = document.getElementById('dll-grid');
  if (!grid) return;
 
  let html = '';
 
  if (_dllTab === 'premade') {
    PREMADE_DLLS.forEach(dll => {
      html += `
        <div class="dll-card">
          <div class="dll-meta">Pre-made · Locked</div>
          <div class="dll-title">${dll.title}</div>
          <div class="dll-sub">TLE Grade 9 · Industrial Arts</div>
          <div><span class="badge badge-premade">🔒 Locked</span></div>
          <div class="dll-actions">
            <button onclick="openDLLEditor('${dll.id}', true, false)">📖 View</button>
            <button onclick="makeDLLCopy('${dll.id}')">✏️ Make Editable Copy</button>
          </div>
        </div>`;
    });
    if (!html) html = '<p class="dll-sub">No pre-made DLLs found.</p>';
 
  } else if (_dllTab === 'copies') {
    const keys = Object.keys(copies).filter(k => !archived.includes(k));
    if (!keys.length) {
      html = '<p class="dll-sub" style="font-style:italic;color:var(--brown-light)">No editable copies yet. Make a copy from a pre-made DLL.</p>';
    } else {
      keys.forEach(id => {
        const d = copies[id];
        html += `
          <div class="dll-card">
            <div class="dll-meta">My Copy</div>
            <div class="dll-title">${d.title || 'Untitled'}</div>
            <div class="dll-sub">TLE Grade 9 · Industrial Arts</div>
            <div><span class="badge badge-editable">✏️ Editable</span></div>
            <div class="dll-actions">
              <button onclick="openDLLEditor('${id}', false, false)">✏️ Edit</button>
              <button onclick="printDLL('${id}')">🖨 Print</button>
              <button class="btn-danger" onclick="archiveDLL('${id}')">📦 Archive</button>
            </div>
          </div>`;
      });
    }
 
  } else if (_dllTab === 'archived') {
    const archivedKeys = archived.filter(k => copies[k]);
    if (!archivedKeys.length) {
      html = '<p class="dll-sub" style="font-style:italic;color:var(--brown-light)">No archived DLLs.</p>';
    } else {
      archivedKeys.forEach(id => {
        const d = copies[id];
        html += `
          <div class="dll-card">
            <div class="dll-meta">Archived</div>
            <div class="dll-title">${d.title || 'Untitled'}</div>
            <div><span class="badge badge-archived">📦 Archived</span></div>
            <div class="dll-actions">
              <button class="btn-restore" onclick="restoreDLL('${id}')">↩️ Restore</button>
              <button class="btn-danger" onclick="deleteDLLPermanently('${id}')">🗑 Delete</button>
            </div>
          </div>`;
      });
    }
  }
 
  grid.innerHTML = html;
 
  // Highlight active tab
  ['premade','copies','archived'].forEach(t => {
    const btn = document.getElementById('dll-tab-' + t);
    if (btn) btn.classList.toggle('active', t === _dllTab);
  });
}
 
function switchDLLTab(tab) {
  _dllTab = tab;
  // Close editor if open
  document.getElementById('dll-editor').classList.remove('open');
  document.getElementById('dll-list').style.display = '';
  renderDLLList();
}
 
function makeDLLCopy(premadeId) {
  const src = PREMADE_DLLS.find(d => d.id === premadeId);
  if (!src) return;
  const copies = LS.get('dll_copies', {});
  const newId  = 'copy_' + premadeId + '_' + Date.now();
  copies[newId] = { ...src, id: newId };
  LS.set('dll_copies', copies);
  _dllTab = 'copies';
  renderDLLList();
  // Open immediately for editing
  openDLLEditor(newId, false, false);
}
 
/**
 * Open the DLL editor.
 * @param {string}  id          – DLL id (premade id or copy id)
 * @param {boolean} isPremade   – true if viewing a premade (always readonly)
 * @param {boolean} readonly    – force readonly even for copies
 */
function openDLLEditor(id, isPremade, readonly) {
  let data;
  if (isPremade) {
    data = PREMADE_DLLS.find(d => d.id === id);
    readonly = true;
  } else {
    const copies = LS.get('dll_copies', {});
    data = copies[id];
    readonly = false;
  }
  if (!data) return;
 
  _dllEditId  = id;
  _dllReadonly = readonly;
 
  // Show editor, hide list
  document.getElementById('dll-list').style.display = 'none';
  document.getElementById('dll-editor').classList.add('open');
 
  // Populate rename field (editable copies only)
  const renameField = document.getElementById('dll-rename');
  if (renameField) {
    renameField.value = data.title || '';
    renameField.style.display = readonly ? 'none' : '';
    document.getElementById('dll-editor-label').style.display = readonly ? '' : 'none';
    document.getElementById('dll-editor-label').textContent = data.title || '';
  }
 
  // Map data → form fields
  const fieldMap = {
    'f-school':          data.school         || '',
    'f-teacher':         '', // Teacher name intentionally omitted
    'f-grade':           data.grade          || '',
    'f-subject':         data.subject        || '',
    'f-quarter':         data.quarter        || '',
    'f-week':            data.week           || '',
    'f-content-std':     data.contentStandards || '',
    'f-perf-std':        data.perfStandards  || '',
    'f-objectives':      data.objectives     || '',
    'f-subject-matter':  data.subjectMatter  || '',
    'f-references':      data.references     || '',
    'f-materials':       data.materials      || '',
    'f-review':          data.review         || '',
    'f-purpose':         data.purpose        || '',
    'f-examples':        data.examples       || '',
    'f-discuss1':        data.discuss1       || '',
    'f-discuss2':        data.discuss2       || '',
    'f-mastery':         data.mastery        || '',
    'f-application':     data.application    || '',
    'f-generalization':  data.generalization || '',
    'f-evaluation':      data.evaluation     || '',
    'f-assignment':      data.assignment     || '',
    'f-remarks':         data.remarks        || '',
    'f-ref1':            data.ref1           || '',
    'f-ref2':            data.ref2           || '',
    'f-ref3':            data.ref3           || '',
    'f-ref4':            data.ref4           || '',
    'f-refE':            data.refE           || '',
    'f-refF':            data.refF           || '',
    'f-refG':            data.refG           || '',
  };
  Object.entries(fieldMap).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value    = val;
    el.readOnly = readonly;
  });
 
  // Show/hide save button
  const saveBtn = document.getElementById('dll-save-btn');
  if (saveBtn) saveBtn.style.display = readonly ? 'none' : '';
  const saveBtnBot = document.getElementById('dll-save-btn-bot');
  if (saveBtnBot) saveBtnBot.style.display = readonly ? 'none' : '';
 
  document.getElementById('dll-save-msg').textContent = '';
}
 
function closeDLLEditor() {
  document.getElementById('dll-list').style.display = '';
  document.getElementById('dll-editor').classList.remove('open');
  renderDLLList();
}
 
function saveCurrentDLL() {
  if (!_dllEditId || _dllReadonly) return;
  const copies = LS.get('dll_copies', {});
  const renameField = document.getElementById('dll-rename');
 
  copies[_dllEditId] = {
    ...copies[_dllEditId],
    title:            renameField ? renameField.value.trim() || 'Untitled' : (copies[_dllEditId].title || 'Untitled'),
    school:           document.getElementById('f-school').value,
    grade:            document.getElementById('f-grade').value,
    subject:          document.getElementById('f-subject').value,
    quarter:          document.getElementById('f-quarter').value,
    week:             document.getElementById('f-week').value,
    contentStandards: document.getElementById('f-content-std').value,
    perfStandards:    document.getElementById('f-perf-std').value,
    objectives:       document.getElementById('f-objectives').value,
    subjectMatter:    document.getElementById('f-subject-matter').value,
    references:       document.getElementById('f-references').value,
    materials:        document.getElementById('f-materials').value,
    review:           document.getElementById('f-review').value,
    purpose:          document.getElementById('f-purpose').value,
    examples:         document.getElementById('f-examples').value,
    discuss1:         document.getElementById('f-discuss1').value,
    discuss2:         document.getElementById('f-discuss2').value,
    mastery:          document.getElementById('f-mastery').value,
    application:      document.getElementById('f-application').value,
    generalization:   document.getElementById('f-generalization').value,
    evaluation:       document.getElementById('f-evaluation').value,
    assignment:       document.getElementById('f-assignment').value,
    remarks:          document.getElementById('f-remarks').value,
    ref1:             document.getElementById('f-ref1').value,
    ref2:             document.getElementById('f-ref2').value,
    ref3:             document.getElementById('f-ref3').value,
    ref4:             document.getElementById('f-ref4').value,
    refE:             document.getElementById('f-refE').value,
    refF:             document.getElementById('f-refF').value,
    refG:             document.getElementById('f-refG').value,
  };
  LS.set('dll_copies', copies);
 
  const msg = document.getElementById('dll-save-msg');
  msg.textContent = '✅ Saved!';
  setTimeout(() => { msg.textContent = ''; }, 2000);
}
 
function archiveDLL(id) {
  if (!confirm('Archive this DLL copy?')) return;
  const archived = LS.get('dll_archived', []);
  if (!archived.includes(id)) archived.push(id);
  LS.set('dll_archived', archived);
  renderDLLList();
}
 
function restoreDLL(id) {
  const archived = LS.get('dll_archived', []).filter(k => k !== id);
  LS.set('dll_archived', archived);
  _dllTab = 'copies';
  renderDLLList();
}
 
function deleteDLLPermanently(id) {
  if (!confirm('Permanently delete this DLL? This cannot be undone.')) return;
  const copies   = LS.get('dll_copies', {});
  const archived = LS.get('dll_archived', []).filter(k => k !== id);
  delete copies[id];
  LS.set('dll_copies', copies);
  LS.set('dll_archived', archived);
  renderDLLList();
}

 



/** Print any DLL by id (premade or copy) */
function printDLL(id) {
  let data = PREMADE_DLLS.find(d => d.id === id);
  if (!data) {
    const copies = LS.get('dll_copies', {});
    data = copies[id];
  }
  if (!data) return;

  const esc = s => (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const row = (label, val) => (val||'').trim()
    ? `<tr><td class="lbl">${esc(label)}</td><td>${(val||'').replace(/\n/g,'<br/>')}</td></tr>` : '';

  const html = `
    <h2>DAILY LESSON LOG</h2>
    <p class="print-subtitle">${esc(data.title||'')} &nbsp;·&nbsp; TLE Grade 9 · Industrial Arts · Carpentry Works in Residential Structure</p>
    <table>
      <tr><td class="lbl">School</td><td>${esc(data.school||'')}</td><td class="lbl">Grade &amp; Section</td><td>${esc(data.grade||'')}</td></tr>
      <tr><td class="lbl">Subject</td><td>${esc(data.subject||'')}</td><td class="lbl">Quarter</td><td>${esc(data.quarter||'')}</td></tr>
      <tr><td class="lbl">Date / Time / Venue</td><td colspan="3">${esc(data.week||'')}</td></tr>
    </table>
    <table>
      <tr class="sec"><th colspan="2">I. OBJECTIVES</th></tr>
      ${row('A. Content Standards', data.contentStandards)}
      ${row('B. Performance Standards', data.perfStandards)}
      ${row('C. Learning Competencies / Objectives', data.objectives)}
    </table>
    <table>
      <tr class="sec"><th colspan="2">II. CONTENT</th></tr>
      ${row('Subject Matter', data.subjectMatter)}
      ${row('References', data.references)}
      ${row('Materials / Learning Resources', data.materials)}
    </table>
    <table>
      <tr class="sec"><th colspan="2">III. PROCEDURES</th></tr>
      ${row('A. Reviewing / Presenting the New Lesson', data.review)}
      ${row('B. Establishing a Purpose / Motivation', data.purpose)}
      ${row('C. Presenting Examples / Instances', data.examples)}
      ${row('D. Discussing New Concepts and Practicing New Skills #1', data.discuss1)}
      ${row('E. Discussing New Concepts and Practicing New Skills #2', data.discuss2)}
      ${row('F. Developing Mastery', data.mastery)}
      ${row('G. Practical Application', data.application)}
      ${row('H. Generalization', data.generalization)}
      ${row('I. Evaluating Learning', data.evaluation)}
      ${row('J. Additional Activities / Remediation', data.assignment)}
    </table>
    <table>
      <tr class="sec"><th colspan="2">IV. REMARKS</th></tr>
      ${row('Remarks', data.remarks)}
    </table>
    <table>
      <tr class="sec"><th colspan="2">V. REFLECTION</th></tr>
      ${row('A. No. of learners who earned 80%', data.ref1)}
      ${row('B. No. of learners who need remediation', data.ref2)}
      ${row('C. Did remedial lessons work?', data.ref3)}
      ${row('D. No. who continue to need remediation', data.ref4)}
      ${row('E. Teaching strategies that worked', data.refE)}
      ${row('F. Difficulties encountered', data.refF)}
      ${row('G. Innovation / localized materials', data.refG)}
    </table>`;

 

const printDiv = document.getElementById('dll-printable');
  printDiv.innerHTML = html;
  printDiv.style.display = 'block';
  setTimeout(() => {
    window.print();
    setTimeout(() => { printDiv.style.display = 'none'; }, 800);
  }, 200);
}

/** Called from the editor Print button — saves first, then prints */
function printCurrentDLL() {
  if (!_dllEditId) return;
  if (!_dllReadonly) saveCurrentDLL();
  printDLL(_dllEditId);
}






/* ────────────────────────────────────────
   MODULE ACTIVITIES PANEL (Teacher side)
   Resource cards → drag into module drop zones
   ──────────────────────────────────────── */
 
// All module keys in display order
const MODULE_KEYS   = ['partitions','roofs','ceilings','doors','windows','floors','stairs','cabinets'];
const MODULE_LABELS = {
  partitions:'01 Partitions', roofs:'02 Roofs', ceilings:'03 Ceilings',
  doors:'04 Doors', windows:'05 Windows', floors:'06 Floors',
  stairs:'07 Stairs & Railings', cabinets:'08 Cabinets'
};
 
// Storage helpers
const getCards        = ()  => LS.get('mod_cards', []);
const saveCards       = (c) => LS.set('mod_cards', c);
const getAssignments  = ()  => LS.get('mod_assignments', {});
const saveAssignments = (a) => LS.set('mod_assignments', a);
 
let _editingCardId = null;
 
function renderModulePanel() {
  _renderCardPool();
  _renderDropZones();
}
 
function _renderCardPool() {
  const cards    = getCards();
  const pool     = document.getElementById('card-pool');
  const emptyMsg = document.getElementById('pool-empty');
  if (!pool) return;
 
  if (!cards.length) {
    pool.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    _renderDropZones();
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';
 
  pool.innerHTML = cards.map(c => `
    <div class="drag-card" draggable="true" id="dcard-${c.id}"
         ondragstart="onCardDragStart(event,'${c.id}')">
      <div class="drag-type">${c.type}</div>
      <div class="drag-name">${c.name}</div>
      ${c.desc ? `<div style="font-size:.78rem;color:var(--brown-light);margin-top:2px">${c.desc}</div>` : ''}
      <div style="display:flex;gap:6px;margin-top:8px">
        <button class="btn-sm" onclick="editCard('${c.id}')">Edit</button>
        <button class="btn-sm danger" onclick="deleteCard('${c.id}')">Delete</button>
      </div>
    </div>`).join('');
 
  _renderDropZones();
}
 
function _renderDropZones() {
  const grid        = document.getElementById('drop-zones');
  const cards       = getCards();
  const assignments = getAssignments();
  if (!grid) return;
 
  grid.innerHTML = MODULE_KEYS.map(key => {
    const ids           = assignments[key] || [];
    const assignedCards = ids.map(id => cards.find(c => c.id === id)).filter(Boolean);
 
    // Built-in section cards from MODULE_DATA
    const mod = (typeof MODULE_DATA !== 'undefined') ? MODULE_DATA[key] : null;
    const sections = mod ? [
      { id: `${key}-recall`,     label: "📖 Let's Recall",     content: mod.recall     },
      { id: `${key}-understand`, label: "📚 Let's Understand",  content: mod.understand },
      { id: `${key}-apply`,      label: "✏️ Let's Apply",       content: mod.apply      },
      { id: `${key}-analyze`,    label: "🔍 Let's Analyze",     content: mod.analyze    },
      { id: `${key}-create`,     label: "🔨 Let's Create",      content: mod.letsCreate },
      { id: `${key}-try`,        label: "📝 Let's Try",         content: mod.letsTry    },
    ].filter(s => s.content) : [];
 
    const builtinHTML = sections.map(s => `
      <div class="dropped-item" style="opacity:.9;border-style:dashed;flex-direction:column;align-items:flex-start;gap:4px">
        <span style="font-size:.78rem;font-weight:600">🔒 ${s.label}</span>
        <button style="font-size:.72rem;color:var(--brown-mid);background:none;border:1px solid var(--comp-border);border-radius:999px;padding:2px 10px;cursor:pointer;margin-top:2px"
          onclick="(function(btn){var d=btn.nextElementSibling;d.style.display=d.style.display==='none'?'block':'none';btn.textContent=d.style.display==='block'?'Hide ▲':'Preview ▼'})(this)">Preview ▼</button>
        <div style="display:none;margin-top:6px;padding:8px;background:var(--card-bg);border:1px solid var(--comp-border);border-radius:6px;font-size:.78rem;color:var(--brown-dark);line-height:1.6;max-height:200px;overflow-y:auto;width:100%">
          ${s.content}
        </div>
      </div>`).join('');
 
    const teacherItems = assignedCards.map(c => `
      <div class="dropped-item">
        <span>${c.type} ${c.name}</span>
        <button class="drop-remove" onclick="removeFromZone('${key}','${c.id}')" title="Remove">×</button>
      </div>`).join('');
 
    const items = builtinHTML + teacherItems || '<div class="drop-hint">Drop cards here</div>';
 
    return `
      <div class="drop-zone" id="zone-${key}"
           ondragover="event.preventDefault();this.classList.add('over')"
           ondragleave="this.classList.remove('over')"
           ondrop="onDropToZone(event,'${key}')">
        <h6>${MODULE_LABELS[key]}</h6>
        <div class="drop-list">${items}</div>
      </div>`;
  }).join('');
}
// ── Card CRUD ──
 
function openNewCard() {
  _editingCardId = null;
  document.getElementById('card-form-title').textContent = 'New Resource Card';
  document.getElementById('cf-name').value = '';
  document.getElementById('cf-type').value = '🎮 Quizizz';
  document.getElementById('cf-desc').value = '';
  document.getElementById('cf-link').value = '';
  document.getElementById('card-form').style.display = 'flex';
}
function closeCardForm() {
  document.getElementById('card-form').style.display = 'none';
  _editingCardId = null;
}
function saveCard() {
  const name = document.getElementById('cf-name').value.trim();
  if (!name) { alert('Please enter a card name.'); return; }
  const cards = getCards();
  const card  = {
    id:   _editingCardId || ('card_' + Date.now()),
    name, type: document.getElementById('cf-type').value,
    desc: document.getElementById('cf-desc').value,
    link: document.getElementById('cf-link').value
  };
  if (_editingCardId) {
    const idx = cards.findIndex(c => c.id === _editingCardId);
    if (idx > -1) cards[idx] = card;
  } else {
    cards.push(card);
  }
  saveCards(cards);
  closeCardForm();
  _renderCardPool();
}
function editCard(id) {
  const c = getCards().find(x => x.id === id);
  if (!c) return;
  _editingCardId = id;
  document.getElementById('card-form-title').textContent = 'Edit Resource Card';
  document.getElementById('cf-name').value = c.name;
  document.getElementById('cf-type').value = c.type;
  document.getElementById('cf-desc').value = c.desc || '';
  document.getElementById('cf-link').value = c.link || '';
  document.getElementById('card-form').style.display = 'flex';
}
function deleteCard(id) {
  if (!confirm('Delete this card? It will be removed from all modules.')) return;
  saveCards(getCards().filter(c => c.id !== id));
  // Remove from all zone assignments
  const a = getAssignments();
  MODULE_KEYS.forEach(k => { if (a[k]) a[k] = a[k].filter(x => x !== id); });
  saveAssignments(a);
  _renderCardPool();
}
 
// ── Drag & Drop ──
 
function onCardDragStart(event, cardId) {
  event.dataTransfer.setData('cardId', cardId);
  document.getElementById('dcard-' + cardId)?.classList.add('dragging');
}
document.addEventListener('dragend', () => {
  document.querySelectorAll('.drag-card.dragging').forEach(el => el.classList.remove('dragging'));
  document.querySelectorAll('.drop-zone.over').forEach(el => el.classList.remove('over'));
});
function onDropToZone(event, key) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData('cardId');
  if (!cardId) return;
  const a = getAssignments();
  if (!a[key]) a[key] = [];
  if (!a[key].includes(cardId)) { a[key].push(cardId); saveAssignments(a); }
  document.getElementById('zone-' + key)?.classList.remove('over');
  _renderDropZones();
}
function removeFromZone(key, cardId) {
  const a = getAssignments();
  if (a[key]) { a[key] = a[key].filter(id => id !== cardId); saveAssignments(a); }
  _renderDropZones();
}
 
/* ────────────────────────────────────────
   ASSESSMENT CARDS (Teacher Resources tab)
   These appear in the Student Assessments tab.
   ──────────────────────────────────────── */
const getAssCards  = ()  => LS.get('assess_cards', []);
const saveAssCards = (c) => LS.set('assess_cards', c);
let _editingAssId  = null;
 
function openNewAssessment() {
  _editingAssId = null;
  document.getElementById('assess-form-title').textContent = 'Add Assessment Card';
  document.getElementById('af-title').value = '';
  document.getElementById('af-type').value  = '📄 Document';
  document.getElementById('af-desc').value  = '';
  document.getElementById('af-link').value  = '';
  document.getElementById('assess-form').style.display = 'flex';
}
function closeAssessmentForm() {
  document.getElementById('assess-form').style.display = 'none';
  _editingAssId = null;
}
function saveAssessmentCard() {
  const title = document.getElementById('af-title').value.trim();
  if (!title) { alert('Please enter a title.'); return; }
  const cards = getAssCards();
  const card  = {
    id:    _editingAssId || ('ass_' + Date.now()),
    title, type: document.getElementById('af-type').value,
    desc:  document.getElementById('af-desc').value,
    link:  document.getElementById('af-link').value
  };
  if (_editingAssId) {
    const idx = cards.findIndex(c => c.id === _editingAssId);
    if (idx > -1) cards[idx] = card;
  } else {
    cards.push(card);
  }
  saveAssCards(cards);
  closeAssessmentForm();
  renderAssessmentCards();
}
function renderAssessmentCards() {
  const cards = getAssCards();
  const list  = document.getElementById('assess-cards-list');
  if (!list) return;
 
  // Also collect built-in module Let's Try cards for teacher view
  const builtinKeys = ['partitions','roofs','ceilings','doors','windows','floors','stairs','cabinets'];
  const builtinCards = builtinKeys.map(k => {
    const m = (typeof MODULE_DATA !== 'undefined') ? MODULE_DATA[k] : null;
    if (!m || !m.letsTry) return null;
    return {
      id: `builtin_assessment_${k}`,
      title: `Let's Try (Evaluation) — ${m.title}`,
      type: '📝 Assessment',
      desc: `Module ${m.num} evaluation with answer keys. (Teacher view)`,
      content: m.letsTry,
      isBuiltin: true
    };
  }).filter(Boolean);
 
  const allCards = [...builtinCards, ...cards];
 
  if (!allCards.length) {
    list.innerHTML = '<p style="color:var(--brown-light);font-style:italic;font-size:.9rem">No assessment cards yet.</p>';
    return;
  }
 
  list.innerHTML = allCards.map(c => `
    <div class="rc-card" style="${c.isBuiltin ? 'border-color:var(--gold);' : ''}">
      <div class="rc-type">${c.type}${c.isBuiltin ? ' &nbsp;🔒 Built-in' : ''}</div>
      <div class="rc-title">${c.title}</div>
      <div class="rc-desc">${c.desc || ''}</div>
      ${c.content ? `
        <div style="margin-top:10px">
          <button class="btn-sm" style="margin-bottom:6px"
            onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none';this.textContent=this.textContent.includes('▼')?'Hide Content ▲':'Show Content ▼'">
            Show Content ▼
          </button>
          <div style="display:none;margin-top:8px;padding:12px;background:var(--card-bg);border:1px solid var(--comp-border);border-radius:8px;font-size:.88rem;color:var(--brown-dark);line-height:1.75">
            ${c.content}
          </div>
        </div>` : ''}
      <div class="rc-acts">
        ${c.link ? `<a href="${c.link}" target="_blank">🔗 Open</a>` : ''}
        ${!c.isBuiltin ? `<button class="btn-sm" onclick="editAssCard('${c.id}')">Edit</button>` : ''}
        ${!c.isBuiltin ? `<button class="btn-sm danger" onclick="deleteAssCard('${c.id}')">Delete</button>` : ''}
      </div>
    </div>`).join('');
}
 
function toggleAssContent(btn) {
  const body = btn.nextElementSibling;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  btn.textContent = open ? 'Show Assessment ▼' : 'Hide Assessment ▲';
}
 
function editAssCard(id) {
  const c = getAssCards().find(x => x.id === id);
  if (!c) return;
  _editingAssId = id;
  document.getElementById('assess-form-title').textContent = 'Edit Assessment Card';
  document.getElementById('af-title').value = c.title;
  document.getElementById('af-type').value  = c.type;
  document.getElementById('af-desc').value  = c.desc || '';
  document.getElementById('af-link').value  = c.link || '';
  document.getElementById('assess-form').style.display = 'flex';
}
function deleteAssCard(id) {
  if (!confirm('Delete this assessment card?')) return;
  saveAssCards(getAssCards().filter(c => c.id !== id));
  renderAssessmentCards();
}
 
/* ────────────────────────────────────────
   STUDENT ASSESSMENTS
   ──────────────────────────────────────── */
function renderStudentAssessments() {
  const cards = getAssCards();
  const list  = document.getElementById('stu-assess-list');
  const empty = document.getElementById('stu-assess-empty');
  if (!list) return;
 
  // Built-in Let's Try cards (student view — no answer keys shown)
  const builtinKeys = ['partitions','roofs','ceilings','doors','windows','floors','stairs','cabinets'];
  const builtinCards = builtinKeys.map(k => {
    const m = (typeof MODULE_DATA !== 'undefined') ? MODULE_DATA[k] : null;
    if (!m || !m.letsTry) return null;
    // Strip answer keys from student view
    const studentContent = stripAnswerKeys(m.letsTry);
    return {
      id: `builtin_assessment_${k}`,
      title: `Let's Try (Evaluation) — ${m.title}`,
      type: '📝 Assessment',
      desc: `Module ${m.num} — ${m.subtitle}`,
      content: studentContent,
      link: ''
    };
  }).filter(Boolean);
 
  const allCards = [...builtinCards, ...cards];
 
  if (!allCards.length) {
    list.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
 
  list.innerHTML = allCards.map(c => `
    <div class="rc-card" style="grid-column:1/-1">
      <div class="rc-type">${c.type}</div>
      <div class="rc-title">${c.title}</div>
      <div class="rc-desc">${c.desc || ''}</div>
      ${c.content ? `
        <div style="margin-top:12px">
          <button class="btn ghost" style="font-size:.82rem;padding:5px 14px"
            onclick="toggleAssContent(this)">Show Assessment ▼</button>
          <div class="ass-content-body" style="display:none;margin-top:10px;padding:14px;background:var(--card-bg);border:1px solid var(--comp-border);border-radius:8px;font-size:.9rem;color:var(--brown-dark);line-height:1.75">
            ${c.content}
          </div>
        </div>` : ''}
      <div class="rc-acts">${c.link ? `<a href="${c.link}" target="_blank">🔗 Open Activity</a>` : ''}</div>
    </div>`).join('');
}
 
/* Helper: strips answer key text from MC questions for student view */
function stripAnswerKeys(html) {
  return html
    // Remove bold from correct answer choices e.g. <strong>B. Hip Roof</strong>
    .replace(/<strong>([A-D]\..+?)<\/strong>/g, '$1')
    // Remove (Answer: anything) in em tags
    .replace(/<em>\s*\(Answer:[^<]*\)\s*<\/em>/gi, '')
    // Remove bare (Answer: anything) patterns
    .replace(/\(Answer:[^)]*\)/gi, '')
    // Remove "Answer Key" sections and everything after them until next paragraph
    .replace(/<p[^>]*>\s*<strong>Answer Key[^<]*<\/strong>[^]*?<\/p>/gi, '')
    // Remove answer key lines that start with number-answer format
    .replace(/<li>[^<]*<em>\(Answer:[^<]*\)<\/em>[^<]*<\/li>/gi, (match) => 
      match.replace(/<em>\(Answer:[^<]*\)<\/em>/gi, ''));
}
function toggleAssContent(btn) {
  const body = btn.nextElementSibling;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  btn.textContent = open ? 'Show Assessment ▼' : 'Hide Assessment ▲';
}
 
/* ────────────────────────────────────────
   DRIVE LINK
   ──────────────────────────────────────── */
function saveDriveLink() {
  const url = (document.getElementById('drive-input').value || '').trim();
  if (url) LS.set('drive_link', url);
  loadDriveLink();
  const s = document.getElementById('drive-msg');
  s.textContent = '✅ Drive link saved!';
  setTimeout(() => { s.textContent = ''; }, 2000);
}
function loadDriveLink() {
  const url   = LS.get('drive_link', null);
  const input = document.getElementById('drive-input');
  const prev  = document.getElementById('drive-preview');
  const link  = document.getElementById('drive-link');
  if (!input) return;
  if (url) {
    input.value = url;
    if (prev)  prev.style.display = 'flex';
    if (link)  link.href = url;
  } else {
    if (prev)  prev.style.display = 'none';
  }
}
 

document.addEventListener('DOMContentLoaded', () => {
  // Close passcode modal when clicking backdrop
  document.getElementById('passcode-overlay').addEventListener('click', function(e) {
    if (e.target === this) closePasscode();
  });
 
  // Initial renders
  renderDLLList();
  renderModulePanel();
});
 