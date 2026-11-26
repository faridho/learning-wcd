import React, { useState } from 'react';
import {
  Terminal,
  GitBranch,
  Boxes,
  Layers,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { JS_STAGES, JS_CHAPTERS } from '../data/jsLessonsData';
import JsPlayground from './JsPlayground';

const STAGE_ICONS = {
  foundations: Terminal,
  logic: GitBranch,
  modularity: Boxes,
  collections: Layers
};

const STAGE_STYLES = {
  indigo: {
    active: 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-500/20',
    icon: 'text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-800'
  },
  amber: {
    active: 'bg-amber-50 border-amber-400 ring-2 ring-amber-500/20',
    icon: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-800'
  },
  sky: {
    active: 'bg-sky-50 border-sky-400 ring-2 ring-sky-500/20',
    icon: 'text-sky-600',
    badge: 'bg-sky-100 text-sky-800'
  },
  emerald: {
    active: 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-500/20',
    icon: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-800'
  }
};

export default function JsGuide() {
  const [selectedChapterId, setSelectedChapterId] = useState('ch-01');

  const currentChapterIndex = JS_CHAPTERS.findIndex((c) => c.id === selectedChapterId);
  const currentChapter = JS_CHAPTERS[currentChapterIndex] || JS_CHAPTERS[0];
  const activeStage = JS_STAGES.find((s) => s.id === currentChapter.stageId) || JS_STAGES[0];
  const stageChapters = JS_CHAPTERS.filter((c) => c.stageId === activeStage.id);

  const handleSelectStage = (stage) => {
    setSelectedChapterId(stage.chapterIds[0]);
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setSelectedChapterId(JS_CHAPTERS[currentChapterIndex - 1].id);
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < JS_CHAPTERS.length - 1) {
      setSelectedChapterId(JS_CHAPTERS[currentChapterIndex + 1].id);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Hero Banner (Matches Slide 1 & Slide 2: Mastering Modern JavaScript + Curriculum Architecture) */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-lg">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Developer Curriculum • 22 Modules</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Mastering Modern JavaScript
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Core syntax, data structures, control flow, and practical code patterns across 22 modules — lengkap dengan simulasi eksekusi kode interaktif.
          </p>

          {/* 4 Progressive Stages (Slide 2: Curriculum Architecture) */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Curriculum Architecture — Pilih Tahap Pembelajaran:
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Chapter {currentChapter.chapterNum} / 22
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {JS_STAGES.map((stage) => {
                const Icon = STAGE_ICONS[stage.id] || Terminal;
                const isStageActive = stage.id === activeStage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleSelectStage(stage)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      isStageActive
                        ? 'bg-white text-slate-900 border-white shadow-md scale-[1.01]'
                        : 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon
                        className={`w-5 h-5 ${
                          isStageActive
                            ? STAGE_STYLES[stage.color].icon
                            : 'text-amber-400'
                        }`}
                      />
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isStageActive
                            ? STAGE_STYLES[stage.color].badge
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {stage.chapterIds.length} Chapters
                      </span>
                    </div>
                    <div className="font-bold text-sm sm:text-base">
                      {stage.number}. {stage.title}
                    </div>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isStageActive ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {stage.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Pills for Active Stage */}
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            Stage {activeStage.number} ({activeStage.title}) — Pilih Chapter:
          </h3>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrevChapter}
              disabled={currentChapterIndex === 0}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              onClick={handleNextChapter}
              disabled={currentChapterIndex === JS_CHAPTERS.length - 1}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {stageChapters.map((chap) => {
            const isSelected = chap.id === currentChapter.id;
            return (
              <button
                key={chap.id}
                onClick={() => setSelectedChapterId(chap.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-sm'
                }`}
              >
                <span
                  className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {chap.chapterNum}
                </span>
                <span>{chap.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Chapter Slide Content + Interactive Playground */}
      <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Chapter Header (Matches Chapter Cover Slide) */}
        <div className="border-b border-slate-100 pb-5">
          <div className="inline-block text-[11px] font-bold tracking-wider uppercase text-amber-600 mb-1">
            CHAPTER {currentChapter.chapterNum}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentChapter.title}
          </h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            {currentChapter.subtitle}
          </p>
        </div>

        {/* Section X.1: Slide Visual Representation (Checklist / Cards / Table) */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
            {currentChapter.section1Title}
          </h3>

          {currentChapter.section1Type === 'checklist' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentChapter.section1Items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-blue-700">{item.label}: </span>
                    <span className="text-slate-700">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentChapter.section1Type === 'cards' && (
            <div
              className={`grid grid-cols-1 gap-4 ${
                currentChapter.section1Items.length === 2
                  ? 'md:grid-cols-2'
                  : currentChapter.section1Items.length === 4
                  ? 'sm:grid-cols-2 lg:grid-cols-4'
                  : 'md:grid-cols-3'
              }`}
            >
              {currentChapter.section1Items.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm"
                >
                  <h4
                    className={`font-bold text-sm sm:text-base mb-1.5 ${
                      card.accent === 'amber' ? 'text-amber-600' : 'text-blue-600'
                    }`}
                  >
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {currentChapter.section1Type === 'table' && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    {currentChapter.tableHeaders.map((header, hIdx) => (
                      <th key={hIdx} className="px-5 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {currentChapter.section1Items.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-mono font-semibold text-blue-600">
                        {row[0]}
                      </td>
                      <td className="px-5 py-3 text-slate-700">{row[1]}</td>
                      <td className="px-5 py-3 text-slate-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Section X.2: Concept Notes + Interactive JS Simulation */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {currentChapter.section2Title}
              </h3>
            </div>
          </div>

          {/* Concept Highlight Box (Matches the side explanation in .2 slides) */}
          <div className="mt-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="font-bold text-blue-900">{currentChapter.conceptTitle}</div>
              <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                {currentChapter.conceptPoints.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive JS Playground */}
          <JsPlayground
            key={currentChapter.id}
            chapterId={currentChapter.id}
            initialJs={currentChapter.initialJs}
            initialHtml={currentChapter.initialHtml || ''}
            hasDomPreview={currentChapter.hasDomPreview}
            presets={currentChapter.presets || []}
          />
        </div>

        {/* Bottom Chapter Pagination */}
        <div className="pt-5 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm">
          <button
            onClick={handlePrevChapter}
            disabled={currentChapterIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              {currentChapterIndex > 0
                ? `Ch. ${JS_CHAPTERS[currentChapterIndex - 1].chapterNum}: ${JS_CHAPTERS[currentChapterIndex - 1].title}`
                : 'Awal Kurikulum'}
            </span>
          </button>

          <button
            onClick={handleNextChapter}
            disabled={currentChapterIndex === JS_CHAPTERS.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <span>
              {currentChapterIndex < JS_CHAPTERS.length - 1
                ? `Ch. ${JS_CHAPTERS[currentChapterIndex + 1].chapterNum}: ${JS_CHAPTERS[currentChapterIndex + 1].title}`
                : 'Kurikulum Selesai'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
