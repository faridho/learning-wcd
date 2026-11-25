import React, { useState } from 'react';
import { Columns3, ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import CodePlayground from './CodePlayground';

export default function FlexboxGuide({ lessonData }) {
  const [selectedTopicId, setSelectedTopicId] = useState(lessonData.topics[0].id);
  const [visualDirection, setVisualDirection] = useState('row');

  const currentTopic = lessonData.topics.find((t) => t.id === selectedTopicId) || lessonData.topics[0];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Module Banner Full Width */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border border-sky-200 p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 mb-3">
              <Columns3 className="w-3.5 h-3.5" />
              <span>{lessonData.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lessonData.title}
            </h1>
            <p className="text-sky-700 font-semibold text-sm sm:text-base mt-1">
              {lessonData.subtitle}
            </p>
          </div>

          {/* Quick concept cards */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl max-w-md shadow-sm">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Kunci Utama Flexbox
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fokus pada <strong>1 arah</strong> (sepanjang baris atau kolom). Sangat ideal untuk perataan posisi vertikal/horizontal, navbar, dan komponen internal kartu.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-5xl leading-relaxed">
          {lessonData.description}
        </p>

        {/* Interactive Axis Visualizer Diagram */}
        <div className="mt-6 pt-6 border-t border-sky-100">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Visualisasi Sumbu: Main Axis & Cross Axis
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-white border border-slate-300 p-1 rounded-lg shadow-sm">
              <button
                onClick={() => setVisualDirection('row')}
                className={`px-3 py-1 rounded-md transition ${
                  visualDirection === 'row' 
                    ? 'bg-sky-600 text-white font-bold shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                flex-direction: row
              </button>
              <button
                onClick={() => setVisualDirection('column')}
                className={`px-3 py-1 rounded-md transition ${
                  visualDirection === 'column' 
                    ? 'bg-sky-600 text-white font-bold shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                flex-direction: column
              </button>
            </div>
          </div>

          <div className="w-full bg-white p-4 sm:p-5 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center justify-around gap-4 text-xs font-mono shadow-sm">
            {visualDirection === 'row' ? (
              <>
                <div className="flex-1 flex items-center justify-center gap-2 text-sky-800 font-semibold bg-sky-50 px-4 py-2.5 rounded-lg border border-sky-200">
                  <span>Main Axis (Horizontal): Sumbu Utama</span>
                  <ArrowRight className="w-4 h-4 text-sky-600 animate-pulse" />
                  <span className="text-[11px] text-sky-700 font-normal">diatur oleh justify-content</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 text-amber-900 font-semibold bg-amber-50 px-4 py-2.5 rounded-lg border border-amber-200">
                  <span>Cross Axis (Vertikal): Sumbu Silang</span>
                  <ArrowDown className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="text-[11px] text-amber-800 font-normal">diatur oleh align-items</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 flex items-center justify-center gap-2 text-sky-800 font-semibold bg-sky-50 px-4 py-2.5 rounded-lg border border-sky-200">
                  <span>Main Axis (Vertikal): Sumbu Utama</span>
                  <ArrowDown className="w-4 h-4 text-sky-600 animate-pulse" />
                  <span className="text-[11px] text-sky-700 font-normal">diatur oleh justify-content</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 text-amber-900 font-semibold bg-amber-50 px-4 py-2.5 rounded-lg border border-amber-200">
                  <span>Cross Axis (Horizontal): Sumbu Silang</span>
                  <ArrowRight className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="text-[11px] text-amber-800 font-normal">diatur oleh align-items</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Topic Selection Pills Full Width */}
      <div className="w-full">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
          Pilih Sub-Bab Materi Flexbox:
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
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
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
            <p className="text-sky-700 text-sm font-semibold mt-1">
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
