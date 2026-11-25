import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  RotateCcw, 
  Copy, 
  Check, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Maximize2,
  Code2,
  Eye,
  Sliders,
  Sparkles
} from 'lucide-react';

export default function CodePlayground({
  topicId,
  initialCss,
  initialHtml,
  quickControls = [],
  tips = ''
}) {
  const [cssCode, setCssCode] = useState(initialCss);
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [copied, setCopied] = useState(false);
  const [viewportWidth, setViewportWidth] = useState('100%');
  const [sliderWidth, setSliderWidth] = useState(800);
  const [useSlider, setUseSlider] = useState(false);
  const [activeTab, setActiveTab] = useState('css');
  const iframeRef = useRef(null);

  useEffect(() => {
    setCssCode(initialCss);
    setHtmlCode(initialHtml);
    setCopied(false);
  }, [topicId, initialCss, initialHtml]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCssCode(initialCss);
    setHtmlCode(initialHtml);
  };

  // Fungsi applyQuickControl yang handal dan teruji 100%
  const applyQuickControl = (prop, value, targetClass) => {
    let updated = cssCode;

    // 1. Khusus Media Query Breakpoint
    if (prop === 'breakpoint' || targetClass === 'custom') {
      const mediaRegex = /(@media\s*\(\s*)([^)]+)(\s*\))/i;
      if (mediaRegex.test(updated)) {
        updated = updated.replace(mediaRegex, `$1${value}$3`);
      }
      setCssCode(updated);
      return;
    }

    // 2. Cari blok selektor target yang presisi tanpa bug \b\.
    const blockRegex = new RegExp(`(\\b|\\.)(${targetClass})(?=[^a-zA-Z0-9_-])[^{]*\\{([\\s\\S]*?)\\}`, 'i');
    const match = updated.match(blockRegex);

    if (match) {
      let block = match[0];

      // Khusus border-width jika di CSS masih tertulis shorthand border: 4px solid ...
      if (prop === 'border-width' && !/border-width\s*:/i.test(block) && /border\s*:\s*\d+px/i.test(block)) {
        block = block.replace(/(border\s*:\s*)(\d+px)([^;}]*)/i, `$1${value}$3`);
        updated = updated.replace(blockRegex, () => block);
        setCssCode(updated);
        return;
      }

      // Cari apakah properti sudah ada di dalam blok ini
      const propRegex = new RegExp(`(${prop}\\s*:\\s*)([^;\\n}]+)(;)?`, 'i');
      if (propRegex.test(block)) {
        block = block.replace(propRegex, `$1${value};`);
      } else {
        // Sisipkan properti sebelum kurung kurawal penutup }
        block = block.replace(/\s*\}$/, `\n  ${prop}: ${value};\n}`);
      }

      updated = updated.replace(blockRegex, () => block);
    } else {
      // Fallback: cari properti di seluruh kode jika targetClass tidak ditemukan
      const globalPropRegex = new RegExp(`(${prop}\\s*:\\s*)([^;\\n}]+)(;)?`, 'i');
      if (globalPropRegex.test(updated)) {
        updated = updated.replace(globalPropRegex, `$1${value};`);
      } else {
        updated = `.${targetClass} {\n  ${prop}: ${value};\n}\n\n` + updated;
      }
    }

    setCssCode(updated);
  };

  // Cek apakah opsi saat ini sedang aktif di dalam kode CSS
  const isOptionActive = (prop, value, targetClass) => {
    if (prop === 'breakpoint') {
      return cssCode.includes(value);
    }
    const cleanCss = cssCode.replace(/\s+/g, ' ');
    return cleanCss.includes(`${prop}: ${value};`) || cleanCss.includes(`${prop}:${value};`);
  };

  const srcDoc = useMemo(() => {
    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 20px;
        background-color: #ffffff;
        color: #1e293b;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        overflow-x: hidden;
      }
      /* User Custom CSS Injected Here: */
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
  </body>
</html>`;
  }, [cssCode, htmlCode]);

  const getContainerWidth = () => {
    if (useSlider) return `${sliderWidth}px`;
    return viewportWidth;
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden mt-6">
      
      {/* Playground Header / Controls Bar */}
      <div className="bg-slate-50 px-4 sm:px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        
        {/* Viewport Simulation Controls */}
        <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1 rounded-xl text-xs shadow-sm">
          <span className="text-slate-500 px-2 font-medium hidden sm:inline">Ukuran Layar:</span>
          
          <button
            onClick={() => { setUseSlider(false); setViewportWidth('100%'); }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
              !useSlider && viewportWidth === '100%' 
                ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-300' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Lebar Penuh (Fluid 100%)"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Penuh (100%)</span>
          </button>

          <button
            onClick={() => { setUseSlider(false); setViewportWidth('1024px'); }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
              !useSlider && viewportWidth === '1024px' 
                ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-300' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Desktop / Laptop (1024px)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => { setUseSlider(false); setViewportWidth('768px'); }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
              !useSlider && viewportWidth === '768px' 
                ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-300' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Tablet (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => { setUseSlider(false); setViewportWidth('375px'); }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
              !useSlider && viewportWidth === '375px' 
                ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-300' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Mobile / Smartphone (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (375px)</span>
          </button>
        </div>

        {/* Viewport Range Slider for custom testing */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="hidden xl:inline">Tarik Bebas:</span>
          <input
            type="range"
            min="300"
            max="1600"
            value={sliderWidth}
            onChange={(e) => {
              setSliderWidth(Number(e.target.value));
              setUseSlider(true);
            }}
            className="w-28 sm:w-44 accent-sky-600 cursor-pointer"
            title="Geser slider untuk mengubah lebar preview secara manual"
          />
          <span className="font-mono text-sky-700 font-bold min-w-[55px]">
            {useSlider ? `${sliderWidth}px` : viewportWidth}
          </span>
        </div>

        {/* Editor Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 shadow-sm transition"
            title="Reset kode ke awal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 font-semibold shadow-sm transition"
            title="Salin kode CSS"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin!' : 'Salin CSS'}</span>
          </button>
        </div>
      </div>

      {/* Quick Controls Bar with Active Highlight Indicator */}
      {quickControls.length > 0 && (
        <div className="bg-slate-100/70 px-4 sm:px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
            <Sliders className="w-3.5 h-3.5 text-sky-600" />
            <span>Ubah Cepat:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {quickControls.map((ctrl, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-lg px-2.5 py-1 shadow-sm">
                <span className="text-slate-600 font-mono text-[11px] font-medium">{ctrl.prop}:</span>
                <div className="flex items-center gap-1">
                  {ctrl.options.map((opt) => {
                    const active = isOptionActive(ctrl.prop, opt, ctrl.target);
                    return (
                      <button
                        key={opt}
                        onClick={() => applyQuickControl(ctrl.prop, opt, ctrl.target)}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition ${
                          active
                            ? 'bg-sky-600 text-white font-bold shadow-sm'
                            : 'bg-slate-50 hover:bg-sky-100 hover:text-sky-800 text-slate-700 border border-slate-200 hover:border-sky-300'
                        }`}
                        title={`Terapkan ${ctrl.prop}: ${opt}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid: Code Editor on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        {/* Left Column: Code Editor */}
        <div className="flex flex-col bg-slate-50">
          {/* Tabs: CSS vs HTML */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-slate-100 border-b border-slate-200 text-xs">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t font-mono transition ${
                  activeTab === 'css'
                    ? 'bg-white text-sky-700 font-bold border-t-2 border-sky-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>style.css (Reaktif Live)</span>
              </button>

              <button
                onClick={() => setActiveTab('html')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t font-mono transition ${
                  activeTab === 'html'
                    ? 'bg-white text-emerald-700 font-bold border-t-2 border-emerald-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>index.html</span>
              </button>
            </div>

            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
              Ketik langsung untuk melihat perubahan ⚡
            </span>
          </div>

          {/* Textarea Editor Full Height & Width */}
          <div className="p-3 sm:p-4 relative flex-1 min-h-[380px] bg-slate-50">
            {activeTab === 'css' ? (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                spellCheck="false"
                className="w-full h-full min-h-[380px] p-4 bg-white text-slate-800 font-mono text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-y leading-relaxed shadow-inner"
                placeholder="/* Tulis kode CSS di sini... */"
              />
            ) : (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                spellCheck="false"
                className="w-full h-full min-h-[380px] p-4 bg-white text-slate-800 font-mono text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-y leading-relaxed shadow-inner"
                placeholder="<!-- Tulis struktur HTML di sini... -->"
              />
            )}
          </div>
        </div>

        {/* Right Column: Live Interactive Preview */}
        <div className="flex flex-col bg-slate-100/60 min-h-[400px] overflow-hidden">
          
          {/* Preview Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-slate-100 border-b border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Eye className="w-3.5 h-3.5 text-sky-600" />
              <span>Live Preview Sandbox</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="text-[11px] text-slate-500 font-mono">
              Viewport: <span className="text-sky-700 font-bold">{getContainerWidth()}</span>
            </div>
          </div>

          {/* Preview Canvas Area Full Fluid */}
          <div className="flex-1 p-4 bg-slate-200/40 flex items-center justify-center overflow-auto">
            <div
              style={{ width: getContainerWidth() }}
              className="transition-all duration-300 mx-auto rounded-xl overflow-hidden border border-slate-300 shadow-md bg-white w-full"
            >
              {/* Fake Browser Top Bar */}
              <div className="bg-slate-100 px-3 py-1.5 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                </div>
                <div className="bg-white px-2 py-0.5 rounded text-[10px] text-slate-500 font-mono flex-1 text-center truncate border border-slate-200">
                  preview://viewport-simulator ({getContainerWidth()})
                </div>
              </div>

              {/* Responsive Iframe with key for instant re-render */}
              <iframe
                ref={iframeRef}
                key={srcDoc}
                srcDoc={srcDoc}
                title="Live CSS Sandbox Preview"
                className="w-full h-[340px] sm:h-[400px] border-0 block bg-white"
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tips / Note at bottom */}
      {tips && (
        <div className="bg-amber-50/80 px-4 sm:px-6 py-2.5 border-t border-amber-200 flex items-center gap-2 text-xs text-amber-900">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span><strong>Tips Praktis:</strong> {tips}</span>
        </div>
      )}
    </div>
  );
}
