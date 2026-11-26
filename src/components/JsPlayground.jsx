import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Code2,
  Eye,
  Trash2,
  Sparkles,
  Square
} from 'lucide-react';

export default function JsPlayground({
  chapterId,
  initialJs,
  initialHtml = '',
  hasDomPreview = false,
  domPreviewHeight = 'h-36',
  presets = []
}) {
  const [jsCode, setJsCode] = useState(initialJs);
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [editorTab, setEditorTab] = useState('js');
  const [logs, setLogs] = useState([]);
  const [copied, setCopied] = useState(false);
  const [runCounter, setRunCounter] = useState(0);
  const [srcDoc, setSrcDoc] = useState('');
  const runIdRef = useRef(0);

  const buildSandboxDoc = useCallback((code, html, currentRunId) => {
    const safeJs = code.replace(/<\/script>/gi, '<\\/script>');
    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 14px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #0f172a;
        background: #ffffff;
      }
      .alert-banner {
        margin-top: 10px;
        padding: 8px 12px;
        border-radius: 8px;
        background: #fef3c7;
        border: 1px solid #fcd34d;
        color: #92400e;
        font-size: 12px;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    ${html || '<div id="root"></div>'}
    <script>
      (function() {
        const RUN_ID = ${currentRunId};
        function formatArg(val) {
          if (val === undefined) return 'undefined';
          if (val === null) return 'null';
          if (typeof val === 'number' && Number.isNaN(val)) return 'NaN';
          if (typeof val === 'string') return val;
          if (typeof val === 'function') return '[Function: ' + (val.name || 'anonymous') + ']';
          if (val instanceof Set) return 'Set(' + val.size + ') ' + JSON.stringify([...val]);
          if (val instanceof Map) return 'Map(' + val.size + ') ' + JSON.stringify([...val.entries()]);
          if (val instanceof Date) return val.toISOString();
          if (val instanceof Error) return val.name + ': ' + val.message;
          try {
            return JSON.stringify(val);
          } catch (e) {
            return String(val);
          }
        }
        function emit(type, args) {
          window.parent.postMessage({
            source: 'js-sandbox',
            runId: RUN_ID,
            type: type,
            message: Array.from(args).map(formatArg).join(' ')
          }, '*');
        }
        const origLog = console.log;
        const origErr = console.error;
        const origWarn = console.warn;
        console.log = function() { emit('log', arguments); origLog.apply(console, arguments); };
        console.error = function() { emit('error', arguments); origErr.apply(console, arguments); };
        console.warn = function() { emit('warn', arguments); origWarn.apply(console, arguments); };
        window.alert = function(msg) {
          emit('alert', ['[window.alert] ' + msg]);
          const banner = document.createElement('div');
          banner.className = 'alert-banner';
          banner.textContent = 'window.alert: ' + msg;
          document.body.appendChild(banner);
        };
        window.onerror = function(msg, url, line) {
          emit('error', [msg + (line ? ' (line ' + line + ')' : '')]);
          return true;
        };
      })();
    </script>
    <script>
      try {
        ${safeJs}
      } catch (err) {
        console.error(err.name + ': ' + err.message);
      }
    </script>
  </body>
</html>`;
  }, []);

  const executeCode = useCallback(
    (codeToRun = jsCode, htmlToRun = htmlCode) => {
      const nextId = runIdRef.current + 1;
      runIdRef.current = nextId;
      setLogs([]);
      setRunCounter((c) => c + 1);
      setSrcDoc(buildSandboxDoc(codeToRun, htmlToRun, nextId));
    },
    [jsCode, htmlCode, buildSandboxDoc]
  );

  const stopExecution = () => {
    runIdRef.current += 1;
    setSrcDoc('');
    setLogs((prev) => [
      ...prev,
      { type: 'warn', message: 'Eksekusi & timer aktif dihentikan.' }
    ]);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      const data = event.data;
      if (!data || data.source !== 'js-sandbox') return;
      if (data.runId !== runIdRef.current) return;
      setLogs((prev) => [...prev, { type: data.type, message: data.message }]);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    setJsCode(initialJs);
    setHtmlCode(initialHtml);
    setEditorTab('js');
    setCopied(false);
    const nextId = runIdRef.current + 1;
    runIdRef.current = nextId;
    setLogs([]);
    setRunCounter((c) => c + 1);
    setSrcDoc(buildSandboxDoc(initialJs, initialHtml, nextId));
  }, [chapterId, initialJs, initialHtml, buildSandboxDoc]);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setJsCode(initialJs);
    setHtmlCode(initialHtml);
    executeCode(initialJs, initialHtml);
  };

  const applyPreset = (preset) => {
    const nextHtml = preset.html !== undefined ? preset.html : htmlCode;
    setJsCode(preset.js);
    if (preset.html !== undefined) {
      setHtmlCode(preset.html);
    }
    executeCode(preset.js, nextHtml);
  };

  return (
    <div className="mt-6 space-y-4">
      {/* Presets bar if available */}
      {presets.length > 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mr-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Skenario Cepat:</span>
          </div>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-800 border border-slate-300 hover:border-amber-300 transition shadow-sm"
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Split Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Code Editor */}
        <div className="lg:col-span-7 flex flex-col rounded-2xl border border-slate-300 bg-slate-900 overflow-hidden shadow-sm">
          {/* Editor Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setEditorTab('js')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  editorTab === 'js'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>script.js</span>
              </button>

              {hasDomPreview && (
                <button
                  onClick={() => setEditorTab('html')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition ${
                    editorTab === 'html'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>index.html</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition"
                title="Salin kode JS"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin' : 'Salin'}</span>
              </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition"
                title="Reset ke kode awal"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={stopExecution}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-rose-300 hover:text-white hover:bg-rose-600/40 transition"
                title="Hentikan timer/eksekusi"
              >
                <Square className="w-3 h-3" />
                <span>Stop</span>
              </button>

              <button
                onClick={() => executeCode()}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Jalankan</span>
              </button>
            </div>
          </div>

          {/* Textarea Editor */}
          <textarea
            value={editorTab === 'js' ? jsCode : htmlCode}
            onChange={(e) =>
              editorTab === 'js' ? setJsCode(e.target.value) : setHtmlCode(e.target.value)
            }
            spellCheck={false}
            aria-label={editorTab === 'js' ? 'JavaScript Code Editor' : 'HTML Code Editor'}
            className="w-full h-72 sm:h-80 p-4 bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed resize-y focus:outline-none selection:bg-amber-500/30"
          />
        </div>

        {/* Right: Console & Optional DOM Preview */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* DOM Output Preview (for Chapters 01-03) */}
          {hasDomPreview && (
            <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <Eye className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Browser DOM Preview</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">sandboxed</span>
              </div>
              <iframe
                key={`dom-${chapterId}-${runCounter}`}
                title="JavaScript DOM Preview"
                sandbox="allow-scripts"
                srcDoc={srcDoc}
                className={`w-full ${domPreviewHeight} border-0 bg-white`}
              />
            </div>
          )}

          {/* Hidden iframe when no DOM preview */}
          {!hasDomPreview && srcDoc && (
            <iframe
              key={`bg-${chapterId}-${runCounter}`}
              title="JavaScript Console Runner"
              sandbox="allow-scripts"
              srcDoc={srcDoc}
              className="hidden"
            />
          )}

          {/* Console Output */}
          <div className="flex-1 flex flex-col rounded-2xl border border-slate-300 bg-slate-950 overflow-hidden shadow-sm min-h-[200px]">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Console Output</span>
              </div>
              <button
                onClick={() => setLogs([])}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition"
                title="Bersihkan console"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>

            <div className="flex-1 p-3.5 font-mono text-xs space-y-1.5 overflow-y-auto max-h-64">
              {logs.length === 0 ? (
                <div className="text-slate-500 italic">
                  Klik &quot;Jalankan&quot; untuk melihat output console...
                </div>
              ) : (
                logs.map((entry, idx) => (
                  <div
                    key={idx}
                    className={`px-2.5 py-1.5 rounded-lg border leading-relaxed break-words ${
                      entry.type === 'error'
                        ? 'bg-rose-950/60 border-rose-800/60 text-rose-300'
                        : entry.type === 'warn' || entry.type === 'alert'
                        ? 'bg-amber-950/50 border-amber-800/50 text-amber-300'
                        : 'bg-slate-900/80 border-slate-800 text-emerald-300'
                    }`}
                  >
                    <span className="text-slate-500 mr-2 select-none">&gt;</span>
                    <span>{entry.message}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
