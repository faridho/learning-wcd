import React, { useState } from 'react';
import { LayoutGrid, Sparkles } from 'lucide-react';
import CodePlayground from './CodePlayground';

export default function GridGuide({ lessonData }) {
  const [selectedTopicId, setSelectedTopicId] = useState(lessonData.topics[0].id);

  const currentTopic = lessonData.topics.find((t) => t.id === selectedTopicId) || lessonData.topics[0];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Module Banner Full Width */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 border border-emerald-200 p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{lessonData.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lessonData.title}
            </h1>
            <p className="text-emerald-700 font-semibold text-sm sm:text-base mt-1">
              {lessonData.subtitle}
            </p>
          </div>

          {/* Quick concept cards */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl max-w-md shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Kunci Utama CSS Grid
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fokus pada <strong>2 dimensi sekaligus</strong> (baris DAN kolom). Ideal untuk bento layout, galeri kartu kompleks, dan struktur makro seluruh website.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-5xl leading-relaxed">
          {lessonData.description}
        </p>

        {/* Visual Anatomy of CSS Grid */}
        <div className="mt-6 pt-6 border-t border-emerald-100">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
            Anatomi CSS Grid: Garis Grid (Lines), Jalur (Tracks), dan Kotak (Cells)
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="font-bold text-emerald-700 text-sm mb-1.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                Grid Tracks (Jalur)
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Ruang antara dua garis grid horizontal membentuk <strong>Row Track</strong>, dan vertikal membentuk <strong>Column Track</strong>.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="font-bold text-teal-700 text-sm mb-1.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
                Satuan Fleksibel `fr`
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                `1fr 2fr` membagi ruang sisa menjadi 3 bagian: kolom pertama 1/3 bagian, kolom kedua 2/3 bagian. Bebas scroll bar horizontal!
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="font-bold text-sky-700 text-sm mb-1.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
                auto-fit + minmax()
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Trik responsif tanpa media query: kolom otomatis mengecil dan melipat ke baris baru saat ukuran kontainer menyusut.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Selection Pills Full Width */}
      <div className="w-full">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
          Pilih Sub-Bab Materi CSS Grid:
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
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
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
            <p className="text-emerald-700 text-sm font-semibold mt-1">
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
