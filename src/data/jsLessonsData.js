export const JS_STAGES = [
  {
    id: 'foundations',
    number: '01',
    title: 'Foundations',
    subtitle: 'Intro, placement, output, syntax.',
    color: 'indigo',
    chapterIds: ['ch-01', 'ch-02', 'ch-03', 'ch-04']
  },
  {
    id: 'logic',
    number: '02',
    title: 'Logic & Primitives',
    subtitle: 'Operators, conditions, loops, strings, numbers.',
    color: 'amber',
    chapterIds: ['ch-05', 'ch-06', 'ch-07', 'ch-08', 'ch-09']
  },
  {
    id: 'modularity',
    number: '03',
    title: 'Modularity',
    subtitle: 'Functions, timers, objects, scope, dates.',
    color: 'sky',
    chapterIds: ['ch-10', 'ch-11', 'ch-12', 'ch-13', 'ch-14']
  },
  {
    id: 'collections',
    number: '04',
    title: 'Collections & Safety',
    subtitle: 'Arrays, sets, maps, regex, errors.',
    color: 'emerald',
    chapterIds: ['ch-15', 'ch-16', 'ch-17', 'ch-18', 'ch-19', 'ch-20', 'ch-21', 'ch-22']
  }
];

export const JS_CHAPTERS = [
  // STAGE 01: FOUNDATIONS
  {
    id: 'ch-01',
    stageId: 'foundations',
    chapterNum: '01',
    title: 'JS Introduction',
    subtitle: 'The programming language of the web for dynamic browser behavior.',
    section1Title: '1.1 Core Browser Capabilities',
    section1Type: 'checklist',
    section1Items: [
      { label: 'DOM Manipulation', desc: 'Modify HTML content dynamically.' },
      { label: 'Attribute Control', desc: 'Update element sources and links.' },
      { label: 'Style Updates', desc: 'Change CSS properties in real time.' },
      { label: 'Visibility Toggles', desc: 'Show or hide interface components instantly.' }
    ],
    section2Title: '1.2 Changing HTML Content',
    conceptTitle: 'Selecting Elements',
    conceptPoints: [
      'Use getElementById() to target specific nodes.',
      'Assign new text strings via the innerHTML property.'
    ],
    hasDomPreview: true,
    initialHtml: `<h2 id="demo" style="display: none; color: #1d4ed8; font-family: sans-serif;">Teks Awal</h2>
<p style="color: #475569; font-size: 13px;">Elemen #demo di atas diubah konten dan visibilitasnya oleh JavaScript.</p>`,
    initialJs: `// Select element by ID and update text
const title = document.getElementById("demo");
title.innerHTML = "Hello JavaScript!";

// Toggle visibility via CSS style
title.style.display = "block";
console.log("Updated #demo:", title.innerHTML);`,
    presets: [
      {
        label: 'Tampilkan & Ubah Teks',
        js: `const title = document.getElementById("demo");
title.innerHTML = "Hello JavaScript!";
title.style.display = "block";
console.log("Updated #demo:", title.innerHTML);`
      },
      {
        label: 'Sembunyikan Elemen',
        js: `const title = document.getElementById("demo");
title.style.display = "none";
console.log("Elemen #demo disembunyikan");`
      },
      {
        label: 'Ubah Warna & Style',
        js: `const title = document.getElementById("demo");
title.innerHTML = "Styled via JavaScript!";
title.style.display = "block";
title.style.color = "#d97706";
title.style.backgroundColor = "#fef3c7";
title.style.padding = "12px";
title.style.borderRadius = "8px";
console.log("Style updated!");`
      }
    ]
  },
  {
    id: 'ch-02',
    stageId: 'foundations',
    chapterNum: '02',
    title: 'JS Where To',
    subtitle: 'Embedding inline scripts versus linking external JavaScript modules.',
    section1Title: '2.1 Script Placement Options',
    section1Type: 'cards',
    section1Items: [
      { title: 'HTML <head>', desc: 'Preloads scripts before body rendering.', accent: 'blue' },
      { title: 'Bottom of <body>', desc: 'Improves display speed after DOM parsing.', accent: 'amber' },
      { title: 'External .js File', desc: 'Separates logic and enables browser caching.', accent: 'blue' }
    ],
    section2Title: '2.2 Linking External Scripts',
    conceptTitle: 'The src & defer Attributes',
    conceptPoints: [
      'External files omit internal <script> tags.',
      'Use defer to execute code after HTML finishes parsing.'
    ],
    hasDomPreview: true,
    initialHtml: `<!DOCTYPE html>
<html>
<body>
  <h1 id="app" style="font-family: sans-serif; color: #0f172a;">Welcome</h1>
  <p id="status" style="font-family: sans-serif; color: #64748b; font-size: 13px;">Menunggu eksekusi script...</p>
</body>
</html>`,
    initialJs: `// Simulasi eksekusi script setelah HTML selesai di-parse (defer)
const heading = document.getElementById("app");
const status = document.getElementById("status");

heading.textContent = "Welcome to External JS (defer)!";
status.textContent = "DOM siap diakses tanpa error null.";
console.log("Script executed after DOM parsing:", heading.textContent);`,
    presets: [
      {
        label: 'Dengan defer (Aman)',
        js: `const heading = document.getElementById("app");
const status = document.getElementById("status");
heading.textContent = "Welcome to External JS (defer)!";
status.textContent = "DOM siap diakses tanpa error null.";
console.log("DOM ready:", heading.textContent);`
      },
      {
        label: 'Cek Urutan Parsing',
        js: `console.log("1. HTML parsed");
console.log("2. Deferred script executes");
console.log("3. Target element:", document.getElementById("app").tagName);`
      }
    ]
  },
  {
    id: 'ch-03',
    stageId: 'foundations',
    chapterNum: '03',
    title: 'JS Output',
    subtitle: 'Four primary channels for displaying data and debugging applications.',
    section1Title: '3.1 Output Channels',
    section1Type: 'table',
    tableHeaders: ['Method', 'Target Destination', 'Primary Use Case'],
    section1Items: [
      ['innerHTML', 'HTML Element', 'Render UI content'],
      ['console.log()', 'Browser DevTools', 'Debug variables'],
      ['window.alert()', 'Modal Dialog', 'Urgent user notices'],
      ['document.write()', 'Raw Document Stream', 'Testing only']
    ],
    section2Title: '3.2 Console Debugging & DOM Write',
    conceptTitle: 'Developer Workflow',
    conceptPoints: [
      'Prefer console.log() over blocking alerts.',
      'Avoid document.write() after load to prevent wiping HTML.'
    ],
    hasDomPreview: true,
    initialHtml: `<div style="font-family: sans-serif;">
  <span style="font-size: 12px; color: #64748b;">Output container (#out):</span>
  <div id="out" style="margin-top: 6px; padding: 12px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; font-weight: bold; font-size: 18px; color: #1e40af;">-</div>
</div>`,
    initialJs: `// Log values to browser console
const total = 42 + 8;
console.log("Calculated total:", total);

// Inject markup into container
document.getElementById("out").innerHTML = total;`,
    presets: [
      {
        label: 'Console & innerHTML',
        js: `const total = 42 + 8;
console.log("Calculated total:", total);
document.getElementById("out").innerHTML = total;`
      },
      {
        label: 'Simulasi window.alert()',
        js: `const total = 42 + 8;
window.alert("Calculated total: " + total);
document.getElementById("out").innerHTML = "Alert ditampilkan (" + total + ")";`
      }
    ]
  },
  {
    id: 'ch-04',
    stageId: 'foundations',
    chapterNum: '04',
    title: 'JS Syntax',
    subtitle: 'Rules governing statements, variables, identifiers, and case sensitivity.',
    section1Title: '4.1 Values & Variables',
    section1Type: 'cards',
    section1Items: [
      {
        title: 'Fixed Literals',
        desc: 'Numbers: Written with or without decimals. Strings: Text wrapped in quotes.',
        accent: 'blue'
      },
      {
        title: 'Variable Declarations',
        desc: 'const: Declares unchangeable block constants. let: Declares reassignable block variables.',
        accent: 'amber'
      }
    ],
    section2Title: '4.2 Identifiers, Comments & Casing',
    conceptTitle: 'Naming Conventions',
    conceptPoints: [
      'JavaScript treats lastName and lastname as distinct.',
      'Always start names with a letter, $, or underscore.'
    ],
    hasDomPreview: false,
    initialJs: `// Case-sensitive camelCase identifiers
const maxScore = 100;
let currentScore = 85;

/* Multi-line block comment */
const isPassed = currentScore >= 60;
console.log("isPassed:", isPassed);

// Case sensitivity demo
const lastName = "Lovelace";
const lastname = "Babbage";
console.log("lastName:", lastName, "| lastname:", lastname);`,
    presets: [
      {
        label: 'Lulus (>= 60)',
        js: `const maxScore = 100;
let currentScore = 85;
const isPassed = currentScore >= 60;
console.log("Score:", currentScore, "-> isPassed:", isPassed);`
      },
      {
        label: 'Uji Reassign const (Error)',
        js: `const maxScore = 100;
maxScore = 200; // Akan memicu TypeError!`
      }
    ]
  },

  // STAGE 02: LOGIC & PRIMITIVES
  {
    id: 'ch-05',
    stageId: 'logic',
    chapterNum: '05',
    title: 'JS Operators',
    subtitle: 'Symbols for arithmetic math, variable assignment, and strict comparison.',
    section1Title: '5.1 Operator Categories',
    section1Type: 'cards',
    section1Items: [
      { title: 'Arithmetic', desc: '+, -, *, **, /, %, ++, --', accent: 'blue' },
      { title: 'Assignment', desc: '=, +=, -=, *=, /=, ??=', accent: 'amber' },
      { title: 'Comparison', desc: '===, !==, >, <, >=, <=', accent: 'blue' },
      { title: 'Logical', desc: '&& (AND), || (OR), ! (NOT)', accent: 'amber' }
    ],
    section2Title: '5.2 Strict Equality & Logical Expressions',
    conceptTitle: 'Avoid Type Coercion Bugs',
    conceptPoints: [
      'Use === to check both value and data type.',
      'Combine conditions cleanly with && and ||.'
    ],
    hasDomPreview: false,
    initialJs: `let points = 10;
points += 5; // 15

console.log("15 === '15' (strict):", 15 === "15"); // false
console.log("15 == '15' (loose):", 15 == "15");   // true

const canAccess = points >= 15 && true;
console.log("points:", points, "| canAccess:", canAccess);`
  },
  {
    id: 'ch-06',
    stageId: 'logic',
    chapterNum: '06',
    title: 'JS If Conditions',
    subtitle: 'Branching execution paths using conditional blocks, ternary, and switch.',
    section1Title: '6.1 Conditional Constructs',
    section1Type: 'checklist',
    section1Items: [
      { label: 'if / else if / else', desc: 'Execute blocks based on boolean truth.' },
      { label: 'Ternary (? :)', desc: 'Inline shorthand for two-way value selection.' },
      { label: 'switch Statement', desc: 'Match single expression against multiple discrete cases.' }
    ],
    section2Title: '6.2 If-Else & Ternary Patterns',
    conceptTitle: 'Clean Branching',
    conceptPoints: [
      'Conditions always evaluate to true or false.',
      'Use ternary expressions for concise variable assignments.'
    ],
    hasDomPreview: false,
    initialJs: `const hour = 14;
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

const status = hour < 17 ? "Open" : "Closed";
console.log("Hour:", hour);
console.log("Greeting:", greeting);
console.log("Status:", status);`,
    presets: [
      {
        label: 'Pagi (hour = 9)',
        js: `const hour = 9;
let greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
const status = hour < 17 ? "Open" : "Closed";
console.log({ hour, greeting, status });`
      },
      {
        label: 'Siang (hour = 14)',
        js: `const hour = 14;
let greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
const status = hour < 17 ? "Open" : "Closed";
console.log({ hour, greeting, status });`
      },
      {
        label: 'Malam (hour = 20)',
        js: `const hour = 20;
let greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
const status = hour < 17 ? "Open" : "Closed";
console.log({ hour, greeting, status });`
      }
    ]
  },
  {
    id: 'ch-07',
    stageId: 'logic',
    chapterNum: '07',
    title: 'JS Loops',
    subtitle: 'Repeating code blocks efficiently across counters, ranges, and collections.',
    section1Title: '7.1 Loop Structures',
    section1Type: 'cards',
    section1Items: [
      { title: 'for Loop', desc: 'Runs a known number of iterations.', accent: 'blue' },
      { title: 'while Loop', desc: 'Repeats while specified condition remains true.', accent: 'amber' },
      { title: 'for...of Loop', desc: 'Iterates directly over iterable values.', accent: 'blue' }
    ],
    section2Title: '7.2 Loop Control with break & continue',
    conceptTitle: 'Controlling Execution',
    conceptPoints: [
      'break exits the entire loop immediately.',
      'continue skips only the current iteration step.'
    ],
    hasDomPreview: false,
    initialJs: `for (let i = 0; i < 6; i++) {
  if (i === 2) continue; // Skip 2
  if (i === 5) break;    // Stop at 5
  console.log("Step:", i);
}

const tags = ["js", "es6"];
for (const tag of tags) {
  console.log("Tag:", tag);
}`
  },
  {
    id: 'ch-08',
    stageId: 'logic',
    chapterNum: '08',
    title: 'JS Strings',
    subtitle: 'Immutable character sequences, template literals, and text manipulation methods.',
    section1Title: '8.1 Essential String Methods',
    section1Type: 'table',
    tableHeaders: ['Property / Method', 'Operation', 'Return Value'],
    section1Items: [
      ['.length', 'Count UTF-16 code units', 'Integer count'],
      ['.slice(start, end)', 'Extract substring range', 'New string'],
      ['.includes(sub)', 'Search substring presence', 'Boolean'],
      ['.trim()', 'Strip outer whitespace', 'Cleaned string']
    ],
    section2Title: '8.2 Template Literals & Formatting',
    conceptTitle: 'Backtick Syntax',
    conceptPoints: [
      'Embed expressions directly with ${...}.',
      'Supports multi-line strings without escape characters.'
    ],
    hasDomPreview: false,
    initialJs: `const rawName = "  Ada Lovelace  ";
const clean = rawName.trim();

// Backticks enable interpolation
const msg = \`Welcome, \${clean.toUpperCase()}!\`;
console.log(msg); // Welcome, ADA LOVELACE!
console.log("includes('Ada'):", clean.includes("Ada")); // true
console.log("length:", clean.length, "| slice(0,3):", clean.slice(0, 3));`
  },
  {
    id: 'ch-09',
    stageId: 'logic',
    chapterNum: '09',
    title: 'JS Numbers',
    subtitle: '64-bit floating-point arithmetic, BigInt precision, and numeric parsing.',
    section1Title: '9.1 Number Properties & Types',
    section1Type: 'cards',
    section1Items: [
      { title: '64-bit', desc: 'IEEE 754 floating-point format', accent: 'blue' },
      { title: 'NaN', desc: 'Result of invalid math', accent: 'amber' },
      { title: 'BigInt', desc: 'Arbitrary-length safe integers', accent: 'blue' }
    ],
    section2Title: '9.2 Parsing & Formatting Numbers',
    conceptTitle: 'Safe Numeric Conversion',
    conceptPoints: [
      'Use Number.isNaN() to detect invalid math.',
      'Format decimals for display via toFixed().'
    ],
    hasDomPreview: false,
    initialJs: `const price = 19.9876;
console.log("toFixed(2):", price.toFixed(2)); // "19.99"

const qty = Number.parseInt("42px", 10); // 42
const bad = Number("abc"); // NaN
console.log("qty:", qty);
console.log("bad:", bad, "| isNaN:", Number.isNaN(bad)); // true`
  },

  // STAGE 03: MODULARITY
  {
    id: 'ch-10',
    stageId: 'modularity',
    chapterNum: '10',
    title: 'JS Functions',
    subtitle: 'Reusable logic blocks, parameters, return values, and arrow syntax.',
    section1Title: '10.1 Function Anatomy',
    section1Type: 'cards',
    section1Items: [
      { title: 'Declarations', desc: 'Hoisted named functions reusable anywhere.', accent: 'blue' },
      { title: 'Default Parameters', desc: 'Fallback argument values when omitted.', accent: 'amber' },
      { title: 'Arrow Functions', desc: 'Concise syntax with lexical this binding.', accent: 'blue' }
    ],
    section2Title: '10.2 Declaration vs. Arrow Function',
    conceptTitle: 'Implicit Returns',
    conceptPoints: [
      'Single-expression arrow functions omit return.',
      'Functions stop execution immediately when returning a value.'
    ],
    hasDomPreview: false,
    initialJs: `function calcTax(amount, rate = 0.1) {
  return amount * rate;
}

// Concise ES6 arrow expression
const multiply = (a, b) => a * b;

console.log("calcTax(200):", calcTax(200));     // 20
console.log("calcTax(200, 0.15):", calcTax(200, 0.15)); // 30
console.log("multiply(4, 5):", multiply(4, 5)); // 20`
  },
  {
    id: 'ch-11',
    stageId: 'modularity',
    chapterNum: '11',
    title: 'JS Timers',
    subtitle: 'Scheduling delayed executions and recurring intervals in milliseconds.',
    section1Title: '11.1 Timeout vs. Interval',
    section1Type: 'cards',
    section1Items: [
      {
        title: 'setTimeout(fn, ms)',
        desc: 'Execution: Runs callback once after delay. Cancellation: Stopped via clearTimeout(id).',
        accent: 'blue'
      },
      {
        title: 'setInterval(fn, ms)',
        desc: 'Execution: Repeats callback continuously every period. Cancellation: Stopped via clearInterval(id).',
        accent: 'amber'
      }
    ],
    section2Title: '11.2 Managing Scheduled Tasks',
    conceptTitle: 'Preventing Memory Leaks',
    conceptPoints: [
      'Always store the numeric timer ID.',
      'Clear intervals once the target condition completes.'
    ],
    hasDomPreview: false,
    initialJs: `let count = 0;
console.log("Timer dimulai (interval 600ms)...");

const timerId = setInterval(() => {
  count++;
  console.log("Tick:", count);
  if (count === 3) {
    clearInterval(timerId);
    console.log("Timer dihentikan dengan clearInterval(timerId)!");
  }
}, 600);`
  },
  {
    id: 'ch-12',
    stageId: 'modularity',
    chapterNum: '12',
    title: 'JS Objects',
    subtitle: 'Key-value collections modeling structured entities, properties, and methods.',
    section1Title: '12.1 Properties, Methods & Destructuring',
    section1Type: 'checklist',
    section1Items: [
      { label: 'Object Literals', desc: 'Group named properties inside curly braces.' },
      { label: 'Methods & this', desc: 'Functions stored as object properties.' },
      { label: 'Destructuring', desc: 'Unpack properties into standalone variables cleanly.' }
    ],
    section2Title: '12.2 Object Methods & Destructuring',
    conceptTitle: 'The this Keyword',
    conceptPoints: [
      'Inside object methods, this references the owner object.',
      'Access properties via dot notation or bracket syntax.'
    ],
    hasDomPreview: false,
    initialJs: `const user = {
  name: "Maya",
  role: "Engineer",
  greet() {
    return \`Hi, I am \${this.name}\`;
  }
};

const { name, role } = user;
console.log(user.greet(), "| Role:", role);`
  },
  {
    id: 'ch-13',
    stageId: 'modularity',
    chapterNum: '13',
    title: 'JS Scope',
    subtitle: 'Variable visibility boundaries across global, function, and block levels.',
    section1Title: '13.1 Three Scope Tiers',
    section1Type: 'cards',
    section1Items: [
      { title: 'Block Scope', desc: 'let and const stay inside curly braces.', accent: 'blue' },
      { title: 'Function Scope', desc: 'Local variables remain private to functions.', accent: 'amber' },
      { title: 'Global Scope', desc: 'Top-level declarations accessible everywhere.', accent: 'blue' }
    ],
    section2Title: '13.2 Lexical Scope & Block Isolation',
    conceptTitle: 'Why Avoid var?',
    conceptPoints: [
      'var ignores block boundaries and leaks outward.',
      'Inner functions automatically inherit outer lexical variables.'
    ],
    hasDomPreview: false,
    initialJs: `const app = "Studio"; // Global scope

function run() {
  if (true) {
    let local = 99; // Block scoped
    console.log("Inside block:", app, local); // Studio 99
  }
  // Uncomment baris di bawah untuk melihat ReferenceError:
  // console.log(local);
}

run();`
  },
  {
    id: 'ch-14',
    stageId: 'modularity',
    chapterNum: '14',
    title: 'JS Dates',
    subtitle: 'Working with Unix timestamps, ISO strings, and calendar getters.',
    section1Title: '14.1 Date Inspection Methods',
    section1Type: 'table',
    tableHeaders: ['Method', 'Extracted Component', 'Range / Format'],
    section1Items: [
      ['getFullYear()', 'Four-digit year', 'e.g. 2026'],
      ['getMonth()', 'Zero-indexed month', '0 (Jan) to 11 (Dec)'],
      ['getDate()', 'Day of month', '1 to 31'],
      ['toISOString()', 'Standard UTC string', 'YYYY-MM-DDTHH:mm:ssZ']
    ],
    section2Title: '14.2 Creating & Formatting Dates',
    conceptTitle: 'Zero-Based Months',
    conceptPoints: [
      'Always add 1 to getMonth() for human display.',
      'Use Date.now() for fast elapsed time measurements.'
    ],
    hasDomPreview: false,
    initialJs: `const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;

const launch = new Date("2026-11-25");
console.log("Launch ISO:", launch.toISOString());
console.log("Current Year-Month:", \`\${year}-\${month}\`);
console.log("Timestamp (Date.now()):", Date.now());`
  },

  // STAGE 04: COLLECTIONS & SAFETY
  {
    id: 'ch-15',
    stageId: 'collections',
    chapterNum: '15',
    title: 'JS Arrays',
    subtitle: 'Ordered, zero-indexed lists with functional transformation pipelines.',
    section1Title: '15.1 Core Array Operations',
    section1Type: 'cards',
    section1Items: [
      { title: 'push() / pop()', desc: 'Add or remove trailing elements.', accent: 'blue' },
      { title: 'map()', desc: 'Transform every item into new array.', accent: 'amber' },
      { title: 'filter()', desc: 'Keep items matching boolean predicate.', accent: 'blue' },
      { title: 'reduce()', desc: 'Accumulate list into single value.', accent: 'amber' }
    ],
    section2Title: '15.2 Functional Array Pipelines',
    conceptTitle: 'Immutable Chaining',
    conceptPoints: [
      'filter() and map() return fresh arrays without mutating input.',
      'Chain methods sequentially for readable data processing.'
    ],
    hasDomPreview: false,
    initialJs: `const scores = [55, 82, 91, 68, 95];

const bonusTop = scores
  .filter(n => n >= 80)
  .map(n => n + 5);

console.log("Original:", scores);
console.log("Bonus Top (>=80, +5):", bonusTop); // [87, 96, 100]`
  },
  {
    id: 'ch-16',
    stageId: 'collections',
    chapterNum: '16',
    title: 'JS Sets',
    subtitle: 'Collections of guaranteed unique values with fast membership lookup.',
    section1Title: '16.1 Set Characteristics',
    section1Type: 'checklist',
    section1Items: [
      { label: 'Strict Uniqueness', desc: 'Duplicate values are ignored automatically upon insertion.' },
      { label: 'Fast Lookup', desc: 'Check membership via .has() in O(1) time.' },
      { label: 'Size Tracking', desc: 'Read total element count via .size property.' }
    ],
    section2Title: '16.2 Array Deduplication with Set',
    conceptTitle: 'One-Line Deduplication',
    conceptPoints: [
      'Convert any Set back to an array using spread [...set].',
      'Preserves original insertion order reliably.'
    ],
    hasDomPreview: false,
    initialJs: `const tags = ["js", "css", "js", "html"];
const uniqueSet = new Set(tags);

uniqueSet.add("node");
uniqueSet.delete("css");

console.log("has('js'):", uniqueSet.has("js")); // true
console.log("size:", uniqueSet.size);
const cleanList = [...uniqueSet];
console.log("cleanList:", cleanList);`
  },
  {
    id: 'ch-17',
    stageId: 'collections',
    chapterNum: '17',
    title: 'JS Maps',
    subtitle: 'Ordered key-value dictionaries supporting keys of any data type.',
    section1Title: '17.1 Map vs. Plain Object',
    section1Type: 'cards',
    section1Items: [
      {
        title: 'JS Map',
        desc: 'Key Types: Accepts objects, functions, or primitives. Size Check: Direct .size property access.',
        accent: 'blue'
      },
      {
        title: 'Plain Object',
        desc: 'Key Types: Restricted to strings and symbols. Size Check: Requires Object.keys(obj).length calculation.',
        accent: 'amber'
      }
    ],
    section2Title: '17.2 Storing & Retrieving Map Entries',
    conceptTitle: 'Explicit API Methods',
    conceptPoints: [
      'Write entries with .set(key, val) and read with .get(key).',
      'Maps avoid accidental prototype key collisions.'
    ],
    hasDomPreview: false,
    initialJs: `const inventory = new Map();
inventory.set("apples", 50);
inventory.set("bananas", 30);

console.log("apples:", inventory.get("apples")); // 50
console.log("size before delete:", inventory.size); // 2

inventory.delete("bananas");
console.log("size after delete:", inventory.size); // 1`
  },
  {
    id: 'ch-18',
    stageId: 'collections',
    chapterNum: '18',
    title: 'JS Iterations',
    subtitle: 'Traversing iterables uniformly via the Symbol.iterator protocol.',
    section1Title: '18.1 Built-in Iterable Structures',
    section1Type: 'cards',
    section1Items: [
      { title: 'Strings & Arrays', desc: 'Yield characters or elements sequentially.', accent: 'blue' },
      { title: 'Sets & Maps', desc: 'Yield values or [key, value] pairs.', accent: 'amber' },
      { title: 'Object Helpers', desc: 'Object.entries() converts objects into iterables.', accent: 'blue' }
    ],
    section2Title: '18.2 Iterating Maps & Object Entries',
    conceptTitle: 'Unified Traversal',
    conceptPoints: [
      'Combine for...of with array destructuring for clean loops.',
      'Supports early exit via break unlike forEach().'
    ],
    hasDomPreview: false,
    initialJs: `const config = { host: "localhost", port: 8080 };

for (const [key, val] of Object.entries(config)) {
  console.log(\`\${key} => \${val}\`);
}

const letters = new Set(["A", "B"]);
letters.forEach(char => console.log("Set char:", char));`
  },
  {
    id: 'ch-19',
    stageId: 'collections',
    chapterNum: '19',
    title: 'JS Math',
    subtitle: 'Static mathematical constants, rounding functions, and random number generation.',
    section1Title: '19.1 Rounding & Utility Methods',
    section1Type: 'table',
    tableHeaders: ['Method', 'Rounding Rule', 'Example Output'],
    section1Items: [
      ['Math.round(4.6)', 'Nearest integer', '5'],
      ['Math.ceil(4.1)', 'Round up to integer', '5'],
      ['Math.floor(4.9)', 'Round down to integer', '4'],
      ['Math.random()', 'Pseudo-random float', '0.0 to < 1.0']
    ],
    section2Title: '19.2 Random Integers & Extrema',
    conceptTitle: 'Random Range Formula',
    conceptPoints: [
      'Pair Math.floor() with Math.random() for whole numbers.',
      'Math is static; never invoke it with new.'
    ],
    hasDomPreview: false,
    initialJs: `// Random integer from 1 to 10
const roll = Math.floor(Math.random() * 10) + 1;

const peak = Math.max(12, 45, 29); // 45
const area = Math.PI * Math.pow(5, 2);
console.log("Random roll (1-10):", roll);
console.log("Max peak:", peak, "| Circle area:", area.toFixed(2));`
  },
  {
    id: 'ch-20',
    stageId: 'collections',
    chapterNum: '20',
    title: 'JS RegExp',
    subtitle: 'Regular expressions for pattern matching, input validation, and text replacement.',
    section1Title: '20.1 Flags & Character Tokens',
    section1Type: 'checklist',
    section1Items: [
      { label: 'Modifiers (i, g, m)', desc: 'Case-insensitive, global, and multiline search flags.' },
      { label: 'Metacharacters (\\d, \\w, \\s)', desc: 'Match digits, word characters, or whitespace.' },
      { label: 'Quantifiers (+, *, ?)', desc: 'Specify one-or-more, zero-or-more, or optional matches.' }
    ],
    section2Title: '20.2 Pattern Validation & Replacement',
    conceptTitle: 'Testing vs. Replacing',
    conceptPoints: [
      'Use regex.test(str) for fast boolean validation.',
      'Combine /g and /i flags to replace all case variants.'
    ],
    hasDomPreview: false,
    initialJs: `const zipRegex = /^\\d{5}$/;
console.log("90210 valid?", zipRegex.test("90210")); // true
console.log("9021A valid?", zipRegex.test("9021A")); // false

const note = "Visit JS and js docs";
const updated = note.replace(/js/gi, "JavaScript");
console.log("Updated:", updated);`
  },
  {
    id: 'ch-21',
    stageId: 'collections',
    chapterNum: '21',
    title: 'JS Data Types',
    subtitle: 'Dynamic typing across seven primitive values and reference objects.',
    section1Title: '21.1 Primitives vs. Reference Types',
    section1Type: 'cards',
    section1Items: [
      {
        title: '7 Primitive Types',
        desc: 'Core: String, Number, Boolean, BigInt. Special: Undefined, Null, Symbol.',
        accent: 'blue'
      },
      {
        title: 'Reference Types',
        desc: 'Structures: Objects, Arrays, Functions, Dates. Storage: Copied by memory reference.',
        accent: 'amber'
      }
    ],
    section2Title: '21.2 Inspecting Types with typeof & Array.isArray',
    conceptTitle: 'Runtime Type Checks',
    conceptPoints: [
      'typeof identifies primitives and functions reliably.',
      'Use Array.isArray() because arrays report as "object".'
    ],
    hasDomPreview: false,
    initialJs: `console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof 42:", typeof 42);           // "number"
console.log("typeof true:", typeof true);       // "boolean"

const items = [1, 2, 3];
console.log("typeof items:", typeof items);     // "object"
console.log("Array.isArray(items):", Array.isArray(items)); // true`
  },
  {
    id: 'ch-22',
    stageId: 'collections',
    chapterNum: '22',
    title: 'JS Errors',
    subtitle: 'Graceful runtime exception handling with try, catch, finally, and throw.',
    section1Title: '22.1 Exception Handling Blocks',
    section1Type: 'cards',
    section1Items: [
      { title: 'try', desc: 'Wraps risky code for runtime errors.', accent: 'blue' },
      { title: 'catch (err)', desc: 'Handles thrown errors without crashing app.', accent: 'amber' },
      { title: 'throw', desc: 'Creates custom Error instances manually.', accent: 'blue' },
      { title: 'finally', desc: 'Executes cleanup code regardless of outcome.', accent: 'amber' }
    ],
    section2Title: '22.2 Custom Validation with try...catch',
    conceptTitle: 'Error Object Anatomy',
    conceptPoints: [
      'Inspect err.name and err.message inside catch blocks.',
      'Common built-in types include ReferenceError and TypeError.'
    ],
    hasDomPreview: false,
    initialJs: `function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log("Result:", divide(10, 0));
} catch (err) {
  console.error(err.name + ":", err.message);
} finally {
  console.log("Operation finished");
}`,
    presets: [
      {
        label: 'Error (divide by 0)',
        js: `function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
try {
  console.log("Result:", divide(10, 0));
} catch (err) {
  console.error(err.name + ":", err.message);
} finally {
  console.log("Operation finished");
}`
      },
      {
        label: 'Sukses (10 / 2)',
        js: `function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
try {
  console.log("Result:", divide(10, 2));
} catch (err) {
  console.error(err.name + ":", err.message);
} finally {
  console.log("Operation finished");
}`
      }
    ]
  }
];
