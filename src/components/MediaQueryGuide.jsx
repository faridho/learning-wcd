import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, Sparkles } from 'lucide-react';
import CodePlayground from './CodePlayground';

export default function MediaQueryGuide({ lessonData }) {
  const [selectedTopicId, setSelectedTopicId] = useState(lessonData.topics[0].id);

  const currentTopic = lessonData.topics.find((t) => t.id === selectedTopicId) || lessonData.topics[0];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Module Banner Full Width */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-50 via-white to-rose-50 border border-pink-200 p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-800 border border-pink-200 mb-3">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{lessonData.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lessonData.title}
            </h1>
            <p className="text-pink-700 font-semibold text-sm sm:text-base mt-1">
              {lessonData.subtitle}
            </p>
          </div>

          {/* Quick concept cards */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl max-w-md shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              Kunci Utama Media Query
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Memungkinkan style CSS berubah secara dinamis saat lebar layar melintasi <strong>Breakpoints</strong> tertentu (misal HP &lt; 640px, Tablet 768px, Desktop 1024px).
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-5xl leading-relaxed">
          {lessonData.description}
        </p>

        {/* Breakpoints Overview Bar */}
        <div className="mt-6 pt-6 border-t border-pink-100">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
            Standar Breakpoints Industri (Mobile-First):
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Mobile (&lt; 640px)</div>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  1 kolom vertikal, tombol berukuran sentuh jempol (min 44px), navigasi hamburger atau tumpukan vertikal.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <Tablet className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Tablet (640px - 1023px)</div>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Biasanya 2 kolom grid, menu mulai melebar secara horizontal, padding halaman sedang.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <Monitor className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Desktop (&gt;= 1024px)</div>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  3 atau 4 kolom grid, sidebar tetap terlihat di sisi kiri/kanan, layout horizontal leluasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Selection Pills Full Width */}
      <div className="w-full">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
          Pilih Sub-Bab Materi Media Query:
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
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-600/20'
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
            <p className="text-pink-700 text-sm font-semibold mt-1">
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
