export const DOM_EVENTS_MODULES = [
  {
    id: 'part-1',
    partLabel: 'PART 01 // CHAPTERS 01–10',
    title: 'HTML DOM Mastery',
    highlights: [
      { label: 'Tree & API', desc: 'Document structure and object interfaces' },
      { label: 'Manipulation', desc: 'Selecting nodes, HTML, and CSS updates' },
      { label: 'Interactive UI', desc: 'Forms, animations, and references' },
      { label: 'Practice', desc: 'Hands-on DOM coding challenge' }
    ],
    chapterIds: [
      'dom-01',
      'dom-02',
      'dom-03',
      'dom-04',
      'dom-05',
      'dom-06',
      'dom-07',
      'dom-08',
      'dom-09',
      'dom-10'
    ]
  },
  {
    id: 'part-2',
    partLabel: 'PART 02 // CHAPTERS 11–18',
    title: 'JS HTML Events',
    highlights: [
      { label: 'Event Types', desc: 'Mouse, keyboard, and page load hooks' },
      { label: 'Propagation', desc: 'Bubbling, capturing, and delegation' },
      { label: 'Listeners', desc: 'Modern addEventListener architecture' },
      { label: 'Practice', desc: 'Real-world event coding challenge' }
    ],
    chapterIds: [
      'evt-11',
      'evt-12',
      'evt-13',
      'evt-14',
      'evt-15',
      'evt-16',
      'evt-17',
      'evt-18'
    ]
  }
];

export const DOM_EVENTS_CHAPTERS = [
  // ================= PART 01: HTML DOM MASTERY =================
  {
    id: 'dom-01',
    partId: 'part-1',
    chapterNum: '01',
    partTag: 'CHAPTER 01 // PART I',
    title: 'HTML DOM',
    subtitle: 'How browsers transform static HTML documents into live, programmable object trees.',
    visualType: 'dom-tree-and-powers',
    section1Title: '01.1 // FUNDAMENTALS — What Is the HTML DOM?',
    summaryPoints: [
      { label: 'Object Model', desc: 'Represents every HTML tag as a JS object' },
      { label: 'Live Structure', desc: 'Reflects real-time page state in memory' },
      { label: 'Language Neutral', desc: 'Accessed primarily via JavaScript' }
    ],
    powers: [
      { title: 'Change HTML', desc: 'Update elements and attributes dynamically.', accent: 'blue' },
      { title: 'Change CSS', desc: 'Modify inline styles and toggle classes.', accent: 'amber' },
      { title: 'React to Events', desc: 'Execute handlers on user interactions.', accent: 'blue' },
      { title: 'Add & Remove', desc: 'Create or delete DOM nodes on demand.', accent: 'amber' }
    ],
    conceptTitle: '01.3 // Core DOM Powers in JavaScript',
    conceptPoints: [
      'The Document Object Model (DOM) is a W3C standard programming interface for web documents.',
      'JavaScript accesses nodes starting from document and updates the live tree in memory.'
    ],
    initialHtml: `<h1 id="title" style="color: #0f172a; margin: 0 0 8px 0;">Hello DOM</h1>
<p id="desc" style="color: #475569; font-size: 13px; margin: 0;">Static HTML diubah menjadi live object tree oleh browser.</p>`,
    initialJs: `// Live JavaScript Object Access
const heading = document.getElementById("title");
console.log("Initial text:", heading.textContent);

heading.textContent = "Hello Live DOM Tree!";
heading.style.color = "#0284c7";
console.log("Updated text:", heading.textContent);`
  },
  {
    id: 'dom-02',
    partId: 'part-1',
    chapterNum: '02',
    partTag: 'CHAPTER 02 // PART I',
    title: 'HTML DOM API',
    subtitle: 'Understanding objects, properties, and methods exposed by the browser environment.',
    visualType: 'cards',
    section1Title: '02.1 // INTERFACE ANATOMY — DOM Properties vs. DOM Methods',
    cards: [
      {
        tag: 'VALUES YOU GET OR SET',
        title: 'DOM Properties',
        desc: 'Attributes stored on HTML element objects that hold data or state. Contoh: element.innerHTML = "Updated";',
        accent: 'blue'
      },
      {
        tag: 'ACTIONS YOU PERFORM',
        title: 'DOM Methods',
        desc: 'Functions attached to DOM objects that execute operations on nodes. Contoh: document.getElementById("demo");',
        accent: 'amber'
      }
    ],
    conceptTitle: '02.2 & 02.3 // Combining Method, Property & Global document Object',
    conceptPoints: [
      'document: Entry point to the page (automatically attached to window.document).',
      'getElementById(): Method locating node; innerHTML: Property replacing content.',
      'Exposes built-in collections like document.forms and document.images.'
    ],
    initialHtml: `<p id="demo" style="padding: 10px 14px; background: #f1f5f9; border-radius: 8px; font-weight: 600;">Initial Text</p>`,
    initialJs: `// JavaScript DOM API Call
const node = document.getElementById("demo");
console.log("Before:", node.innerHTML);

node.innerHTML = "Hello World!";
console.log("After:", node.innerHTML);`
  },
  {
    id: 'dom-03',
    partId: 'part-1',
    chapterNum: '03',
    partTag: 'CHAPTER 03 // PART I',
    title: 'Selecting Elements',
    subtitle: 'Five standard techniques to query single elements or collections from the DOM tree.',
    visualType: 'table',
    section1Title: '03.5 // COLLECTION COMPARISON — HTMLCollection vs. NodeList',
    tableHeaders: ['Feature', 'HTMLCollection', 'NodeList (querySelectorAll)'],
    tableRows: [
      ['Returned By', 'getElementsByTagName / ClassName', 'querySelectorAll()'],
      ['Live vs. Static', 'Live (auto-updates with DOM)', 'Static snapshot at query time'],
      ['Node Types', 'Element nodes only', 'Any DOM node (elements, text)'],
      ['forEach() Support', 'No (convert with Array.from)', 'Yes (native method)']
    ],
    conceptTitle: '03.1 – 03.4 // Five Selection Techniques',
    conceptPoints: [
      'getElementById("intro"): Fastest single unique element lookup (no "#" prefix).',
      'getElementsByTagName("p") & getElementsByClassName("card"): Return live HTMLCollection.',
      'querySelector() & querySelectorAll(): Full CSS selector syntax; NodeList supports .forEach().'
    ],
    initialHtml: `<div id="intro" style="font-weight: bold; margin-bottom: 8px;">Welcome!</div>
<div id="nav" style="margin-bottom: 8px;">
  <button class="btn primary" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #0284c7; background: #e0f2fe; color: #0369a1;">Primary Action</button>
</div>
<div class="card" style="padding: 8px; border: 2px solid #cbd5e1; border-radius: 6px; margin-bottom: 6px;">Card 1</div>
<ul style="margin: 6px 0 0 18px; padding: 0;">
  <li class="item">Item A</li>
  <li class="item">Item B</li>
</ul>`,
    initialJs: `// 1. By ID
const el = document.getElementById("intro");
if (el) console.log("getElementById:", el.innerHTML);

// 2. By ClassName
const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].style.borderColor = "#0284C7";
}

// 3. querySelector & querySelectorAll
const btn = document.querySelector("#nav .btn.primary");
console.log("querySelector:", btn.textContent);

const items = document.querySelectorAll("ul > li.item");
items.forEach(item => console.log("NodeList item:", item.textContent));`,
    presets: [
      {
        label: 'Semua Selektor',
        js: `const el = document.getElementById("intro");
console.log("By ID:", el.innerHTML);
const items = document.querySelectorAll("ul > li.item");
items.forEach(i => console.log("querySelectorAll:", i.textContent));`
      },
      {
        label: 'getElementsByTagName("li")',
        js: `const lis = document.getElementsByTagName("li");
console.log("HTMLCollection length:", lis.length);
lis[0].style.color = "#0284c7";
lis[0].style.fontWeight = "bold";`
      }
    ]
  },
  {
    id: 'dom-04',
    partId: 'part-1',
    chapterNum: '04',
    partTag: 'CHAPTER 04 // PART I',
    title: 'Changing HTML',
    subtitle: 'Updating element text, injecting markup, modifying attributes, and building nodes.',
    visualType: 'cards',
    section1Title: '04.1 – 04.4 // Core HTML Mutation Patterns',
    cards: [
      {
        tag: '04.1 TEXT & MARKUP',
        title: 'innerHTML vs. textContent',
        desc: 'innerHTML parses HTML tags; textContent escapes tags safely to prevent XSS.',
        accent: 'blue'
      },
      {
        tag: '04.2 ATTRIBUTES',
        title: 'setAttribute() & Properties',
        desc: 'Direct access (img.src, input.value) or setAttribute("data-id", "42") for custom attributes.',
        accent: 'amber'
      },
      {
        tag: '04.4 NODE CONSTRUCTION',
        title: 'createElement() & appendChild()',
        desc: 'Instantiate detached node in memory, configure text/classes, then attach to live tree.',
        accent: 'blue'
      }
    ],
    conceptTitle: 'Security & Best Practices',
    conceptPoints: [
      'Use textContent for user-supplied strings to block XSS.',
      'Prefer createElement() + appendChild() over document.write() after page load.'
    ],
    initialHtml: `<div id="box" style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px;">Original Box</div>
<ul id="todo-list" style="margin: 0; padding-left: 20px; font-size: 13px;">
  <li>Existing Task</li>
</ul>`,
    initialJs: `// 1. innerHTML vs textContent
const box = document.getElementById("box");
box.innerHTML = "<strong style='color:#0284c7'>Bold HTML Title</strong>";

// 2. Creating & Appending New Nodes
const li = document.createElement("li");
li.textContent = "New List Item (via createElement)";
li.setAttribute("data-status", "new");

const list = document.getElementById("todo-list");
list.appendChild(li);
console.log("Total items:", list.children.length);`,
    presets: [
      {
        label: 'innerHTML vs textContent',
        html: `<div id="box1" style="padding:8px; border:1px solid #cbd5e1; border-radius:6px; margin-bottom:6px;"></div>
<div id="box2" style="padding:8px; border:1px solid #cbd5e1; border-radius:6px;"></div>`,
        js: `document.getElementById("box1").innerHTML = "<strong>Bold Title (innerHTML)</strong>";
document.getElementById("box2").textContent = "<strong>Plain Text (textContent)</strong>";
console.log("textContent escapes HTML tags safely!");`
      },
      {
        label: 'createElement & appendChild',
        html: `<ul id="todo-list" style="padding-left: 20px;"><li>Task 1</li></ul>`,
        js: `const li = document.createElement("li");
li.textContent = "New Dynamic Item";
document.getElementById("todo-list").appendChild(li);
console.log("Appended <li>!");`
      }
    ]
  },
  {
    id: 'dom-05',
    partId: 'part-1',
    chapterNum: '05',
    partTag: 'CHAPTER 05 // PART I',
    title: 'Changing CSS',
    subtitle: 'Controlling visual presentation through inline style properties and classList APIs.',
    visualType: 'cards',
    section1Title: '05.2 // CLASSLIST API — Clean Styling with element.classList',
    cards: [
      {
        tag: 'ADD CLASS',
        title: 'classList.add()',
        desc: 'Appends one or more classes cleanly: el.classList.add("active");',
        accent: 'blue'
      },
      {
        tag: 'REMOVE CLASS',
        title: 'classList.remove()',
        desc: 'Strips specified classes from element: el.classList.remove("hidden");',
        accent: 'amber'
      },
      {
        tag: 'TOGGLE CLASS',
        title: 'classList.toggle()',
        desc: 'Switches class presence on or off: el.classList.toggle("dark");',
        accent: 'blue'
      }
    ],
    conceptTitle: '05.1 & 05.3 // Inline Style camelCase vs. Theme Toggle',
    conceptPoints: [
      'Hyphenated CSS becomes camelCase in JS (background-color -> backgroundColor) with unit strings ("24px").',
      'classList.toggle("dark-mode") keeps CSS rules inside stylesheets with zero inline bloat.'
    ],
    initialHtml: `<style>
  .dark-mode { background-color: #0f172a !important; color: #f8fafc !important; }
  .dark-mode #banner { background-color: #1e293b !important; border: 1px solid #334155; }
</style>
<div id="banner" style="padding: 16px; border-radius: 10px; background: #0284C7; color: #ffffff; margin-bottom: 10px;">
  Dynamic Banner
</div>
<button id="themeBtn" style="padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; background: #fff; cursor: pointer; font-weight: 600;">
  Toggle Dark Mode
</button>`,
    initialJs: `const banner = document.getElementById("banner");
banner.style.fontSize = "20px";
banner.style.fontWeight = "bold";

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  console.log("Dark active:", isDark);
}

document.getElementById("themeBtn").addEventListener("click", toggleTheme);
console.log("Klik tombol 'Toggle Dark Mode' di preview!");`
  },
  {
    id: 'dom-06',
    partId: 'part-1',
    chapterNum: '06',
    partTag: 'CHAPTER 06 // PART I',
    title: 'Form Validation',
    subtitle: 'Verifying user-submitted data in the browser before sending requests to the server.',
    visualType: 'cards',
    section1Title: '06.1 // VALIDATION PIPELINE — Client-Side Form Validation Steps',
    cards: [
      { tag: 'STEP 01', title: 'Intercept Submit', desc: 'Capture form submission event.', accent: 'blue' },
      { tag: 'STEP 02', title: 'Read Field Value', desc: 'Extract trimmed input values.', accent: 'amber' },
      { tag: 'STEP 03', title: 'Verify Rules', desc: 'Check empty, length, or range.', accent: 'blue' },
      { tag: 'STEP 04', title: 'Show Feedback', desc: 'Block invalid submit with message.', accent: 'amber' }
    ],
    conceptTitle: '06.2 & 06.3 // Custom Script Checks & Constraint Validation API',
    conceptPoints: [
      'document.forms["signup"]["age"].value reads form inputs by name; return false halts submission.',
      'Native Constraint Validation API exposes input.checkValidity() and input.validationMessage.'
    ],
    initialHtml: `<form name="signup" id="signupForm" style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
  <input name="age" id="ageInput" placeholder="Masukkan umur (18+)" style="padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;" />
  <button type="submit" style="padding: 7px 14px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Submit</button>
</form>
<p id="err" style="color: #dc2626; font-size: 13px; font-weight: 600; margin-top: 8px;"></p>`,
    initialJs: `const form = document.getElementById("signupForm");
const errEl = document.getElementById("err");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const age = document.forms["signup"]["age"].value.trim();

  if (age === "" || isNaN(age) || Number(age) < 18) {
    errEl.style.color = "#dc2626";
    errEl.textContent = "Enter age 18+";
    console.error("Validation failed:", age || "(empty)");
    return false;
  }

  errEl.style.color = "#059669";
  errEl.textContent = "Valid! Age accepted: " + age;
  console.log("Form valid! Age:", age);
  return true;
});`,
    presets: [
      {
        label: 'Custom Script Checks',
        html: `<form name="signup" id="signupForm" style="display: flex; gap: 8px; align-items: center;">
  <input name="age" placeholder="Umur (18+)" style="padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 6px;" />
  <button type="submit" style="padding: 7px 14px; background: #0284c7; color: #fff; border: none; border-radius: 6px; cursor: pointer;">Submit</button>
</form>
<p id="err" style="font-size: 13px; font-weight: 600; margin-top: 8px;"></p>`,
        js: `document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const age = document.forms["signup"]["age"].value.trim();
  if (age === "" || isNaN(age) || Number(age) < 18) {
    document.getElementById("err").textContent = "Enter age 18+";
    console.error("Invalid age:", age);
    return;
  }
  document.getElementById("err").textContent = "Valid age: " + age;
  console.log("Valid age:", age);
});`
      },
      {
        label: 'Constraint Validation API',
        html: `<div style="display:flex; gap:8px; align-items:center;">
  <input id="qty" type="number" min="1" max="10" value="15" style="padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 6px; width: 120px;" />
  <button id="checkBtn" style="padding: 7px 14px; background: #d97706; color: #fff; border: none; border-radius: 6px; cursor: pointer;">Check Validity</button>
</div>
<p id="msg" style="color: #dc2626; font-size: 13px; margin-top: 8px;"></p>`,
        js: `const input = document.getElementById("qty");
const msg = document.getElementById("msg");

function runCheck() {
  if (!input.checkValidity()) {
    msg.style.color = "#dc2626";
    msg.textContent = input.validationMessage;
    console.error("rangeOverflow:", input.validity.rangeOverflow, "|", input.validationMessage);
  } else {
    msg.style.color = "#059669";
    msg.textContent = "Valid quantity: " + input.value;
    console.log("Valid quantity:", input.value);
  }
}
document.getElementById("checkBtn").addEventListener("click", runCheck);
runCheck();`
      }
    ]
  },
  {
    id: 'dom-07',
    partId: 'part-1',
    chapterNum: '07',
    partTag: 'CHAPTER 07 // PART I',
    title: 'DOM Animations',
    subtitle: 'Creating smooth programmatic motion by updating element coordinates over time.',
    visualType: 'cards',
    section1Title: '07.1 // STAGE & ACTOR SETUP — Container vs. Animated Element',
    cards: [
      {
        tag: 'OUTER STAGE',
        title: '#container',
        desc: 'Positioning: position: relative. Boundaries: Explicit width and height. Clipping: overflow: hidden.',
        accent: 'blue'
      },
      {
        tag: 'MOVING ACTOR',
        title: '#animate',
        desc: 'Positioning: position: absolute. Coordinates: Driven by top and left. Frame Loop: Increments pixels per step.',
        accent: 'amber'
      }
    ],
    conceptTitle: '07.2 & 07.3 // setInterval() vs. requestAnimationFrame()',
    conceptPoints: [
      'setInterval(fn, 5) updates position every 5ms; always clearInterval(id) at destination.',
      'requestAnimationFrame(step) syncs DOM updates with the 60fps display refresh rate with zero jitter.'
    ],
    initialHtml: `<div id="container" style="position: relative; width: 100%; height: 70px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden;">
  <div id="animate" style="position: absolute; top: 15px; left: 0; width: 40px; height: 40px; background: #0284c7; border-radius: 8px;"></div>
</div>
<button id="replayBtn" style="margin-top: 10px; padding: 6px 14px; background: #0f172a; color: #fff; border: none; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">Replay Animasi</button>`,
    initialJs: `const box = document.getElementById("animate");

function startAnimation() {
  let x = 0;
  box.style.transform = "translateX(0px)";
  function step() {
    x += 3;
    box.style.transform = \`translateX(\${x}px)\`;
    if (x < 280) {
      requestAnimationFrame(step);
    } else {
      console.log("Animasi selesai di x =", x);
    }
  }
  requestAnimationFrame(step);
}

document.getElementById("replayBtn").addEventListener("click", startAnimation);
startAnimation();`,
    presets: [
      {
        label: 'requestAnimationFrame (60fps)',
        js: `const box = document.getElementById("animate");
let x = 0;
function step() {
  x += 3;
  box.style.transform = \`translateX(\${x}px)\`;
  if (x < 280) requestAnimationFrame(step);
  else console.log("60fps animation finished!");
}
requestAnimationFrame(step);`
      },
      {
        label: 'setInterval (5ms loop)',
        js: `const box = document.getElementById("animate");
box.style.transform = "none";
let pos = 0;
const id = setInterval(() => {
  if (pos >= 280) {
    clearInterval(id);
    console.log("clearInterval(id) dipanggil di pos =", pos);
  } else {
    pos += 2;
    box.style.left = pos + "px";
  }
}, 5);`
      }
    ]
  },
  {
    id: 'dom-08',
    partId: 'part-1',
    chapterNum: '08',
    partTag: 'CHAPTER 08 // PART I',
    title: 'Document Reference',
    subtitle: 'Quick lookup guide for core properties and methods on the HTML document object.',
    visualType: 'table',
    section1Title: '08.1 // DOCUMENT PROPERTIES — Essential document Properties',
    tableHeaders: ['Property', 'Description', 'Return Type'],
    tableRows: [
      ['document.body', 'Returns the <body> element', 'Element'],
      ['document.head', 'Returns the <head> element', 'Element'],
      ['document.forms', 'Returns all <form> elements', 'HTMLCollection'],
      ['document.title', 'Gets or sets document title', 'String'],
      ['document.URL', 'Returns complete document URL', 'String']
    ],
    conceptTitle: '08.2 // Essential document Methods',
    conceptPoints: [
      'createElement(tag) & createTextNode(text) build new DOM nodes in memory.',
      'getElementById(id), querySelector(css), and hasFocus() query and inspect document state.'
    ],
    initialHtml: `<div id="info" style="font-size: 13px; color: #334155;"></div>`,
    initialJs: `document.title = "DOM Reference Sandbox";

const info = document.getElementById("info");
const p = document.createElement("p");
const text = document.createTextNode("Title: " + document.title + " | Forms count: " + document.forms.length);
p.appendChild(text);
info.appendChild(p);

console.log("document.title:", document.title);
console.log("document.body tag:", document.body.tagName);
console.log("document.hasFocus():", document.hasFocus());`
  },
  {
    id: 'dom-09',
    partId: 'part-1',
    chapterNum: '09',
    partTag: 'CHAPTER 09 // PART I',
    title: 'Element Reference',
    subtitle: 'Core properties and traversal methods available on every HTML element node.',
    visualType: 'table',
    section1Title: '09.1 // ELEMENT PROPERTIES — Core HTMLElement Properties',
    tableHeaders: ['Property', 'Purpose', 'Example'],
    tableRows: [
      ['element.id', "Gets or sets the element's unique identifier", 'el.id = "card-1"'],
      ['element.classList', 'Returns DOMTokenList of active CSS classes', 'el.classList.add("active")'],
      ['element.children', 'Returns live HTMLCollection of child elements', 'el.children.length'],
      ['element.parentElement', 'Returns the direct parent element node', 'el.parentElement.id'],
      ['element.dataset', 'Provides read/write access to custom data-* attributes', 'el.dataset.role']
    ],
    conceptTitle: '09.2 // Core HTMLElement Methods',
    conceptPoints: [
      'getAttribute(name) & setAttribute(name, val) manage HTML attributes.',
      'closest(selector) finds nearest ancestor; remove() deletes node; focus() sets keyboard focus.'
    ],
    initialHtml: `<section id="wrapper" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px;">
  <div id="userCard" data-role="admin" class="badge">User Profile</div>
</section>`,
    initialJs: `const card = document.getElementById("userCard");
console.log("id:", card.id);
console.log("dataset.role:", card.dataset.role);
console.log("parentElement id:", card.parentElement.id);
console.log("closest('section').id:", card.closest("section").id);

card.dataset.status = "verified";
console.log("Updated dataset.status:", card.getAttribute("data-status"));`
  },
  {
    id: 'dom-10',
    partId: 'part-1',
    chapterNum: '10',
    partTag: 'CHAPTER 10 // PART I CAPSTONE',
    title: 'Code Challenge: HTML DOM',
    subtitle: 'Apply element selection, node creation, and class manipulation in a complete task builder.',
    visualType: 'steps',
    section1Title: '10.1 // CHALLENGE REQUIREMENTS — Build a Dynamic Task Item Creator',
    steps: [
      '1. Select Input: Read text from #taskInput and trim whitespace',
      '2. Validate Text: Abort if string is empty and show error message',
      '3. Create Node: Instantiate a new <li> with class "task-item"',
      '4. Append & Clear: Append node to #taskList and reset input field'
    ],
    conceptTitle: '10.2 // Reference Solution: Dynamic Task Item Creator',
    conceptPoints: [
      'Gabungkan getElementById(), value.trim(), createElement("li"), classList.add("task-item"), dan appendChild().'
    ],
    initialHtml: `<style>
  .task-item { padding: 6px 10px; margin-top: 6px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; font-size: 13px; color: #1e3a8a; }
</style>
<div style="display: flex; gap: 8px;">
  <input id="taskInput" placeholder="Ketik tugas baru..." style="flex: 1; padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;" />
  <button id="addBtn" style="padding: 7px 14px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Add Task</button>
</div>
<ul id="taskList" style="list-style: none; padding: 0; margin: 10px 0 0 0;"></ul>`,
    initialJs: `function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) {
    console.warn("Task tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("task-item");

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  console.log("Task ditambahkan:", text);
}

document.getElementById("addBtn").addEventListener("click", addTask);`
  },

  // ================= PART 02: JS HTML EVENTS =================
  {
    id: 'evt-11',
    partId: 'part-2',
    chapterNum: '11',
    partTag: 'CHAPTER 11 // PART II: JS HTML EVENTS',
    title: 'Intro to Events',
    subtitle: 'Making web pages interactive by reacting to signals triggered by users and the browser.',
    visualType: 'cards',
    section1Title: '11.1 // EVENT-DRIVEN MODEL — Common Browser Event Triggers',
    cards: [
      { title: 'User Clicks', desc: 'Button taps, links, and double clicks.', accent: 'blue' },
      { title: 'Key Presses', desc: 'Typing characters and shortcuts.', accent: 'amber' },
      { title: 'Form Changes', desc: 'Input edits, focus, and submission.', accent: 'blue' },
      { title: 'Page Lifecycle', desc: 'Document load, resize, and scroll.', accent: 'amber' }
    ],
    conceptTitle: '11.2 & 11.3 // Inline Event Attributes vs. DOM Property Assignment',
    conceptPoints: [
      'Inline attributes (onclick="...") mix markup with logic and are harder to scale.',
      'DOM property (btn.onclick = fn) keeps HTML clean, but only allows one handler per event property (second overwrites first).'
    ],
    initialHtml: `<h2 onclick="this.innerHTML='Clicked!'" style="cursor: pointer; color: #0f172a; margin: 0 0 10px 0; font-size: 18px;">Click Me (Inline onclick)</h2>
<button id="saveBtn" style="padding: 8px 14px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Save Data (btn.onclick)</button>`,
    initialJs: `const btn = document.getElementById("saveBtn");

// Assign function reference (no parentheses)
btn.onclick = function() {
  console.log("Data saved!");
};`
  },
  {
    id: 'evt-12',
    partId: 'part-2',
    chapterNum: '12',
    partTag: 'CHAPTER 12 // PART II',
    title: 'Mouse Events',
    subtitle: 'Handling pointer clicks, hover states, button presses, and cursor coordinates.',
    visualType: 'table',
    section1Title: '12.1 // POINTER EVENTS REFERENCE — Essential Mouse Event Types',
    tableHeaders: ['Event', 'When It Fires'],
    tableRows: [
      ['click', 'User presses and releases primary mouse button'],
      ['dblclick', 'User double-clicks rapidly on an element'],
      ['mouseover / mouseout', 'Cursor enters or leaves an element (bubbles)'],
      ['mouseenter / mouseleave', 'Cursor enters or leaves element (no bubbling)'],
      ['mousedown / mouseup', 'Mouse button is depressed or released']
    ],
    conceptTitle: '12.2 & 12.3 // Hover Feedback & Cursor Coordinates (mousemove)',
    conceptPoints: [
      'mouseenter / mouseleave ignore inner child transitions (no child flicker).',
      'Every MouseEvent carries live viewport coordinates: event.clientX and event.clientY.'
    ],
    initialHtml: `<div id="promoCard" style="padding: 14px; border: 1px solid #cbd5e1; border-radius: 10px; background: #ffffff; margin-bottom: 10px; transition: background 0.15s; cursor: pointer;">
  Arahkan kursor ke kartu ini (mouseenter / mouseleave)
</div>
<div id="trackPad" style="padding: 14px; border: 1px dashed #0284c7; border-radius: 10px; background: #f8fafc; font-family: monospace; font-size: 13px;">
  Gerakkan mouse di sini -> <strong id="coords">X: 0, Y: 0</strong>
</div>`,
    initialJs: `const card = document.getElementById("promoCard");
card.addEventListener("mouseenter", () => {
  card.style.backgroundColor = "#E0F2FE";
  console.log("mouseenter: #promoCard");
});
card.addEventListener("mouseleave", () => {
  card.style.backgroundColor = "#FFFFFF";
});

const pad = document.getElementById("trackPad");
const out = document.getElementById("coords");
pad.addEventListener("mousemove", (e) => {
  out.textContent = \`X: \${e.clientX}, Y: \${e.clientY}\`;
});`
  },
  {
    id: 'evt-13',
    partId: 'part-2',
    chapterNum: '13',
    partTag: 'CHAPTER 13 // PART II',
    title: 'Keyboard Events',
    subtitle: 'Detecting keystrokes, identifying physical keys, and building keyboard shortcuts.',
    visualType: 'cards',
    section1Title: '13.1 // KEYSTROKE PHASES — keydown vs. keyup Events',
    cards: [
      {
        tag: 'INITIAL PRESS',
        title: 'keydown',
        desc: 'Fires immediately when a key is pressed down. Repeats if held. Best for: Shortcuts, game controls, Enter submission.',
        accent: 'blue'
      },
      {
        tag: 'KEY RELEASE',
        title: 'keyup',
        desc: 'Fires once after the user lifts their finger off the key. Best for: Live search filtering after input updates.',
        accent: 'amber'
      }
    ],
    conceptTitle: '13.2 & 13.3 // event.key, event.code & Modifier Keys',
    conceptPoints: [
      'event.key: Generated character value (e.g., "a", "A", "Enter", "Escape").',
      'event.code: Physical keyboard location (e.g., "KeyA", "Space").',
      'Combine ctrlKey, shiftKey, altKey, metaKey + e.preventDefault() for custom shortcuts.'
    ],
    initialHtml: `<input id="keyInput" placeholder="Klik di sini lalu tekan tombol atau Ctrl+S..." style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 13px;" />
<div id="keyInfo" style="margin-top: 8px; font-family: monospace; font-size: 12px; color: #334155;">Menunggu penekanan tombol...</div>`,
    initialJs: `const input = document.getElementById("keyInput");
const info = document.getElementById("keyInfo");

input.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    info.textContent = "Shortcut Ctrl+S terdeteksi (native save dicegah)!";
    console.log("Ctrl+S shortcut triggered!");
    return;
  }
  info.textContent = \`key: "\${event.key}" | code: "\${event.code}"\`;
  console.log("Character:", event.key, "| Physical Key:", event.code);
});`
  },
  {
    id: 'evt-14',
    partId: 'part-2',
    chapterNum: '14',
    partTag: 'CHAPTER 14 // PART II',
    title: 'Load Events',
    subtitle: 'Executing initialization scripts safely once DOM nodes or external assets finish loading.',
    visualType: 'cards',
    section1Title: '14.1 // DOCUMENT READINESS — DOMContentLoaded vs. window.load',
    cards: [
      {
        tag: 'FAST DOM ACCESS',
        title: 'DOMContentLoaded',
        desc: 'Fires as soon as HTML is parsed and the DOM tree is built—without waiting for images or stylesheets.',
        accent: 'blue'
      },
      {
        tag: 'FULL PAGE READY',
        title: 'window load',
        desc: 'Fires only after the entire page, including all images, fonts, and external frames, has loaded.',
        accent: 'amber'
      }
    ],
    conceptTitle: '14.2 & 14.3 // Safe Bootstrap & beforeunload',
    conceptPoints: [
      'Wrap DOM queries in DOMContentLoaded when scripts load in <head> (or use defer).',
      'window.addEventListener("beforeunload", e => e.preventDefault()) warns users before leaving unsaved form edits.'
    ],
    initialHtml: `<div id="app" style="padding: 12px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; color: #065f46; font-weight: 600;">Loading...</div>`,
    initialJs: `document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.textContent = "DOM Ready! (DOMContentLoaded fired)";
  console.log("1. DOMContentLoaded fired");
});

window.addEventListener("load", () => {
  console.log("2. window.load fired: All assets loaded.");
});`
  },
  {
    id: 'evt-15',
    partId: 'part-2',
    chapterNum: '15',
    partTag: 'CHAPTER 15 // PART II',
    title: 'Manage Events',
    subtitle: 'Controlling event bubbling, capturing phases, default actions, and event delegation.',
    visualType: 'cards',
    section1Title: '15.1 // PROPAGATION PHASES — Event Capturing vs. Event Bubbling',
    cards: [
      {
        tag: 'PHASE 1: TOP-DOWN',
        title: 'Capturing Phase',
        desc: 'Event travels down from window and document to the target element.',
        accent: 'blue'
      },
      {
        tag: 'PHASE 2: ORIGIN',
        title: 'Target Phase',
        desc: 'Event reaches the exact element where the interaction occurred.',
        accent: 'amber'
      },
      {
        tag: 'PHASE 3: BOTTOM-UP',
        title: 'Bubbling Phase',
        desc: 'Event bubbles upward through parent elements back to window (default).',
        accent: 'blue'
      }
    ],
    conceptTitle: '15.2 & 15.3 // stopPropagation(), preventDefault() & Event Delegation',
    conceptPoints: [
      'preventDefault() cancels native browser behavior; stopPropagation() halts parent bubbling.',
      'Event Delegation attaches one listener on a parent container using e.target.matches("...") for lower memory & dynamic children.'
    ],
    initialHtml: `<style>
  .menu-item { padding: 6px 10px; margin-bottom: 4px; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; font-size: 13px; }
  .menu-item.selected { background: #dbeafe; border-color: #2563eb; color: #1e40af; font-weight: 600; }
</style>
<ul id="menu" style="list-style: none; padding: 0; margin: 0;">
  <li class="menu-item">Menu Item 1 (Klik untuk toggle)</li>
  <li class="menu-item">Menu Item 2</li>
  <li class="menu-item">Menu Item 3</li>
</ul>`,
    initialJs: `// Event Delegation: 1 listener untuk seluruh <li>
document.getElementById("menu").addEventListener("click", (e) => {
  if (e.target.matches("li.menu-item")) {
    e.target.classList.toggle("selected");
    console.log("Delegated click:", e.target.textContent, "| selected:", e.target.classList.contains("selected"));
  }
});`,
    presets: [
      {
        label: 'Event Delegation',
        html: `<style>
  .menu-item { padding: 6px 10px; margin-bottom: 4px; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; font-size: 13px; }
  .menu-item.selected { background: #dbeafe; border-color: #2563eb; color: #1e40af; font-weight: 600; }
</style>
<ul id="menu" style="list-style: none; padding: 0; margin: 0;">
  <li class="menu-item">Menu Item 1</li>
  <li class="menu-item">Menu Item 2</li>
</ul>`,
        js: `document.getElementById("menu").addEventListener("click", (e) => {
  if (e.target.matches("li.menu-item")) {
    e.target.classList.toggle("selected");
    console.log("Toggled:", e.target.textContent);
  }
});`
      },
      {
        label: 'Bubbling vs stopPropagation()',
        html: `<div id="parentBox" style="padding: 16px; background: #f1f5f9; border: 1px solid #94a3b8; border-radius: 8px;">
  Parent Container
  <div style="margin-top: 8px; display: flex; gap: 8px;">
    <button id="bubbleBtn" style="padding: 6px 12px; cursor: pointer;">Click (Bubbles)</button>
    <button id="stopBtn" style="padding: 6px 12px; cursor: pointer;">Click (stopPropagation)</button>
  </div>
</div>`,
        js: `document.getElementById("parentBox").addEventListener("click", () => {
  console.log("Parent listener fired (bubbled)!");
});
document.getElementById("bubbleBtn").addEventListener("click", () => {
  console.log("Child bubbleBtn clicked");
});
document.getElementById("stopBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child stopBtn clicked (bubbling stopped)");
});`
      }
    ]
  },
  {
    id: 'evt-16',
    partId: 'part-2',
    chapterNum: '16',
    partTag: 'CHAPTER 16 // PART II',
    title: 'Event Examples',
    subtitle: 'Practical UI components powered by real-time DOM event handlers.',
    visualType: 'cards',
    section1Title: '16.1 & 16.2 // Real-World Interactive Patterns',
    cards: [
      {
        tag: '16.1 REAL-TIME INPUT FEEDBACK',
        title: 'Live Character Counter',
        desc: 'input event fires immediately on typing, pasting, or cutting for instant UI sync.',
        accent: 'blue'
      },
      {
        tag: '16.2 INTERACTIVE DISCLOSURE',
        title: 'Collapsible FAQ Accordion',
        desc: 'querySelectorAll(".faq-btn") + nextElementSibling.classList.toggle("open").',
        accent: 'amber'
      }
    ],
    conceptTitle: 'Coba Kedua Contoh di Playground',
    conceptPoints: [
      'Gunakan Skenario Cepat di bawah untuk mencoba Live Character Counter dan FAQ Accordion.'
    ],
    initialHtml: `<textarea id="bioInput" rows="2" maxlength="140" placeholder="Tulis bio singkat Anda..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 13px;"></textarea>
<div id="charCount" style="font-size: 12px; font-weight: 600; color: #0284c7; margin-top: 4px;">140 chars left</div>`,
    initialJs: `const bio = document.getElementById("bioInput");
const count = document.getElementById("charCount");

bio.addEventListener("input", () => {
  const remaining = 140 - bio.value.length;
  count.textContent = \`\${remaining} chars left\`;
  console.log("Remaining chars:", remaining);
});`,
    presets: [
      {
        label: '1. Live Character Counter',
        html: `<textarea id="bioInput" rows="2" maxlength="140" placeholder="Tulis bio singkat..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 8px;"></textarea>
<div id="charCount" style="font-size: 12px; font-weight: 600; color: #0284c7; margin-top: 4px;">140 chars left</div>`,
        js: `const bio = document.getElementById("bioInput");
const count = document.getElementById("charCount");
bio.addEventListener("input", () => {
  const remaining = 140 - bio.value.length;
  count.textContent = \`\${remaining} chars left\`;
});`
      },
      {
        label: '2. Collapsible FAQ Accordion',
        html: `<style>
  .faq-btn { width: 100%; text-align: left; padding: 8px 12px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600; cursor: pointer; margin-top: 6px; }
  .faq-panel { display: none; padding: 8px 12px; font-size: 13px; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; }
  .faq-panel.open { display: block; }
</style>
<button class="faq-btn">Apa itu DOM?</button>
<div class="faq-panel">Document Object Model adalah representasi pohon objek dari HTML.</div>
<button class="faq-btn">Apa itu Event Delegation?</button>
<div class="faq-panel">Menangani event anak melalui satu listener pada parent container.</div>`,
        js: `document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle("open");
    console.log("Toggled FAQ:", btn.textContent);
  });
});`
      }
    ]
  },
  {
    id: 'evt-17',
    partId: 'part-2',
    chapterNum: '17',
    partTag: 'CHAPTER 17 // PART II',
    title: 'Event Listener',
    subtitle: 'The standard modern interface for registering, configuring, and removing event handlers.',
    visualType: 'checklist',
    section1Title: '17.1 // MODERN STANDARD — Why Use addEventListener()?',
    summaryPoints: [
      { label: 'Multiple Handlers', desc: 'Attach many independent functions to the same event without overwriting' },
      { label: 'Phase Control', desc: 'Optional third parameter selects capturing (true) or bubbling (false)' },
      { label: 'One-Time Option', desc: 'Pass { once: true } to auto-remove after first trigger' }
    ],
    conceptTitle: '17.2 // Removing Listeners: removeEventListener()',
    conceptPoints: [
      'Named Reference Required: Anonymous arrow functions cannot be removed.',
      'Prevent Leaks: Clean up global window listeners when components unmount.'
    ],
    initialHtml: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <button id="multiBtn" style="padding: 8px 14px; background: #0284c7; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Multi-Handler Button</button>
  <button id="onceBtn" style="padding: 8px 14px; background: #d97706; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Once-Only Button</button>
  <button id="detachBtn" style="padding: 8px 14px; background: #dc2626; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Remove Handler 1</button>
</div>`,
    initialJs: `const multiBtn = document.getElementById("multiBtn");

function handlerOne() {
  console.log("Handler 1 executed!");
}

multiBtn.addEventListener("click", handlerOne);
multiBtn.addEventListener("click", () => {
  console.log("Handler 2 executed (tidak menimpa Handler 1)!");
});

document.getElementById("onceBtn").addEventListener("click", () => {
  console.log("Once-only handler fired! Klik lagi tidak akan memicu log ini.");
}, { once: true });

document.getElementById("detachBtn").addEventListener("click", () => {
  multiBtn.removeEventListener("click", handlerOne);
  console.warn("Handler 1 dihapus dengan removeEventListener!");
});`
  },
  {
    id: 'evt-18',
    partId: 'part-2',
    chapterNum: '18',
    partTag: 'CHAPTER 18 // PART II CAPSTONE',
    title: 'Code Challenge: JS Events',
    subtitle: 'Combine click, mouseover, and keyboard listeners into a responsive interactive widget.',
    visualType: 'steps',
    section1Title: '18.1 // CHALLENGE REQUIREMENTS — Build an Interactive Status Controller',
    steps: [
      '1. Click Counter: Increment counter display each time #actionBtn is clicked',
      '2. Hover Highlight: Add class "highlight" on mouseenter and remove on mouseleave',
      '3. Keyboard Reset: Reset counter to zero when user presses the "r" key',
      '4. Clean Binding: Implement all handlers using addEventListener()'
    ],
    conceptTitle: '18.2 // Reference Solution: Interactive Status Controller',
    conceptPoints: [
      'Klik tombol di preview untuk menambah counter, arahkan kursor untuk efek highlight, dan klik area preview lalu tekan tombol "r" untuk reset!'
    ],
    initialHtml: `<style>
  #actionBtn { padding: 10px 18px; border-radius: 8px; border: 2px solid #cbd5e1; background: #ffffff; font-weight: 700; cursor: pointer; transition: all 0.15s; }
  #actionBtn.highlight { background: #e0f2fe; border-color: #0284c7; color: #0369a1; transform: translateY(-1px); }
</style>
<div style="display: flex; align-items: center; gap: 14px;">
  <button id="actionBtn">Click Me!</button>
  <span style="font-size: 14px; font-weight: 600;">Count: <strong id="countDisplay" style="color: #0284c7; font-size: 18px;">0</strong></span>
</div>
<p style="font-size: 12px; color: #64748b; margin-top: 8px;">Tips: Klik area preview lalu tekan tombol <strong>R</strong> di keyboard untuk reset ke 0.</p>`,
    initialJs: `let count = 0;
const btn = document.getElementById("actionBtn");
const display = document.getElementById("countDisplay");

btn.addEventListener("click", () => {
  display.textContent = ++count;
  console.log("Clicked! Count:", count);
});

btn.addEventListener("mouseenter", () => btn.classList.add("highlight"));
btn.addEventListener("mouseleave", () => btn.classList.remove("highlight"));

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    count = 0;
    display.textContent = 0;
    console.warn("Counter di-reset oleh tombol 'r'!");
  }
});`
  }
];
