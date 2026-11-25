import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import CodePlayground from './CodePlayground';

export default function BasicCssGuide({ lessonData }) {
  const [selectedTopicId, setSelectedTopicId] = useState(lessonData.topics[0].id);
  const [boxPadding, setBoxPadding] = useState(24);
  const [boxMargin, setBoxMargin] = useState(16);
  const [boxBorder, setBoxBorder] = useState(4);

  const currentTopic = lessonData.topics.find((t) => t.id === selectedTopicId) || lessonData.topics[0];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Module Banner Full Width */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-violet-50 border border-indigo-200 p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200 mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>{lessonData.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lessonData.title}
            </h1>
            <p className="text-indigo-700 font-semibold text-sm sm:text-base mt-1">
              {lessonData.subtitle}
            </p>
          </div>

          {/* Quick concept cards */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl max-w-md shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Fondasi Utama CSS
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Memahami <strong>Box Model</strong>, <strong>Display & Positioning</strong>, serta <strong>Image & Form Styling</strong> adalah kunci sebelum merancang tata letak kompleks dengan Flexbox dan Grid.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-5xl leading-relaxed">
          {lessonData.description}
        </p>

        {/* Interactive CSS Box Model Explorer Diagram */}
        <div className="mt-6 pt-6 border-t border-indigo-100">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Visualizer Interaktif: Lapisan CSS Box Model
              </span>
            </div>

            {/* Quick adjuster sliders for visual demonstration */}
            <div className="flex flex-wrap items-center gap-3 text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-700 font-semibold">Margin:</span>
                <input
                  type="range"
                  min="4"
                  max="32"
                  value={boxMargin}
                  onChange={(e) => setBoxMargin(Number(e.target.value))}
                  className="w-16 accent-amber-600 cursor-pointer"
                />
                <span className="font-mono text-slate-600">{boxMargin}px</span>
              </div>

              <span className="text-slate-300">|</span>

              <div className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-semibold">Padding:</span>
                <input
                  type="range"
                  min="8"
                  max="40"
                  value={boxPadding}
                  onChange={(e) => setBoxPadding(Number(e.target.value))}
                  className="w-16 accent-emerald-600 cursor-pointer"
                />
                <span className="font-mono text-slate-600">{boxPadding}px</span>
              </div>
            </div>
          </div>

          {/* Concentric Box Model Diagram */}
          <div className="w-full bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
            
            {/* Margin Layer (Orange/Amber) */}
            <div 
              style={{ padding: `${boxMargin}px` }}
              className="bg-amber-100/70 border-2 border-dashed border-amber-400 rounded-xl w-full max-w-2xl transition-all duration-200 relative"
            >
              <span className="absolute top-1 left-2 text-[10px] font-bold text-amber-800 tracking-wider">
                MARGIN ({boxMargin}px)
              </span>

              {/* Border Layer (Yellow/Orange border) */}
              <div 
                style={{ borderWidth: `${boxBorder}px` }}
                className="bg-yellow-100/70 border-amber-500 rounded-lg transition-all duration-200 relative"
              >
                <span className="absolute top-1 left-2 text-[10px] font-bold text-yellow-900 tracking-wider">
                  BORDER ({boxBorder}px solid)
                </span>

                {/* Padding Layer (Green/Emerald) */}
                <div 
                  style={{ padding: `${boxPadding}px` }}
                  className="bg-emerald-100/70 border-2 border-dashed border-emerald-400 rounded-md transition-all duration-200 relative"
                >
                  <span className="absolute top-1 left-2 text-[10px] font-bold text-emerald-800 tracking-wider">
                    PADDING ({boxPadding}px)
                  </span>

                  {/* Content Box (Blue/Cyan) */}
                  <div className="bg-sky-500 text-white p-4 rounded text-center font-bold text-xs sm:text-sm shadow-sm">
                    📦 CONTENT (Teks / Gambar / Elemen Anak)
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-3 text-center">
              💡 <em>Cobalah geser slider di kanan atas untuk melihat bagaimana Margin menciptakan ruang ke luar dan Padding menciptakan ruang ke dalam!</em>
            </p>
          </div>
        </div>
      </div>

      {/* Topic Selection Pills Full Width */}
      <div className="w-full">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
          Pilih Sub-Bab Materi CSS Dasar:
        </h3>
        <div className="flex flex-wrap gap-2">
          {lessonData.topics.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-sm'
                }`}
              >
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topic Content Card Full Width */}
      <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {currentTopic.title}
            </h2>
            <p className="text-indigo-700 text-sm font-semibold mt-1">
              {currentTopic.summary}
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
          {currentTopic.explanation}
        </p>

        {/* Live Reactive Code Playground for this topic */}
        <CodePlayground
          key={currentTopic.id}
          topicId={currentTopic.id}
          initialCss={currentTopic.defaultCss}
          initialHtml={currentTopic.defaultHtml}
          quickControls={currentTopic.quickControls}
          tips={currentTopic.tips}
        />
      </div>
    </div>
  );
}
