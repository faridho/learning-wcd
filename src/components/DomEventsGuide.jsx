import React, { useState } from 'react';
import {
  Network,
  Zap,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { DOM_EVENTS_MODULES, DOM_EVENTS_CHAPTERS } from '../data/domEventsData';
import JsPlayground from './JsPlayground';

export default function DomEventsGuide() {
  const [selectedChapterId, setSelectedChapterId] = useState('dom-01');

  const currentIndex = DOM_EVENTS_CHAPTERS.findIndex((c) => c.id === selectedChapterId);
  const currentChapter = DOM_EVENTS_CHAPTERS[currentIndex] || DOM_EVENTS_CHAPTERS[0];
  const activeModule =
    DOM_EVENTS_MODULES.find((m) => m.id === currentChapter.partId) || DOM_EVENTS_MODULES[0];
  const moduleChapters = DOM_EVENTS_CHAPTERS.filter((c) => c.partId === activeModule.id);

  const handleSelectModule = (mod) => {
    setSelectedChapterId(mod.chapterIds[0]);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedChapterId(DOM_EVENTS_CHAPTERS[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < DOM_EVENTS_CHAPTERS.length - 1) {
      setSelectedChapterId(DOM_EVENTS_CHAPTERS[currentIndex + 1].id);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Hero Banner (Matches Slide 1 & Slide 2: JavaScript HTML DOM & Events) */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-lg">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Frontend Engineering Guide • 18 Chapters</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            JavaScript HTML DOM &amp; Events
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Structured chapters covering tree manipulation, dynamic styling, form validation, and event-driven architecture — lengkap dengan simulasi DOM &amp; Event interaktif.
          </p>

          {/* Two Core Modules (Slide 2) */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Curriculum Overview — Two Core Modules:
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Chapter {currentChapter.chapterNum} / 18
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DOM_EVENTS_MODULES.map((mod) => {
                const isModActive = mod.id === activeModule.id;
                const Icon = mod.id === 'part-1' ? Network : Zap;
                return (
                  <button
                    key={mod.id}
                    onClick={() => handleSelectModule(mod)}
                    className={`text-left p-5 rounded-2xl border transition-all ${
                      isModActive
                        ? 'bg-white text-slate-900 border-white shadow-md'
                        : 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase ${
                          mod.id === 'part-1'
                            ? isModActive
                              ? 'text-sky-600'
                              : 'text-sky-400'
                            : isModActive
                            ? 'text-amber-600'
                            : 'text-amber-400'
                        }`}
                      >
                        {mod.partLabel}
                      </span>
                      <Icon
                        className={`w-5 h-5 ${
                          mod.id === 'part-1' ? 'text-sky-500' : 'text-amber-500'
                        }`}
                      />
                    </div>
                    <div className="text-lg font-extrabold mb-2.5">{mod.title}</div>
                    <ul className="space-y-1 text-xs">
                      {mod.highlights.map((h, i) => (
                        <li
                          key={i}
                          className={isModActive ? 'text-slate-600' : 'text-slate-300'}
                        >
                          <strong className={isModActive ? 'text-slate-900' : 'text-white'}>
                            {h.label}:
                          </strong>{' '}
                          {h.desc}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Selector */}
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            {activeModule.title} — Pilih Chapter:
          </h3>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === DOM_EVENTS_CHAPTERS.length - 1}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {moduleChapters.map((chap) => {
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
                    isSelected ? 'bg-sky-500 text-white font-bold' : 'bg-slate-100 text-slate-600'
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
        {/* Chapter Header */}
        <div className="border-b border-slate-100 pb-5">
          <div className="inline-block text-[11px] font-bold tracking-wider uppercase text-sky-600 mb-1">
            {currentChapter.partTag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentChapter.title}
          </h2>
          <div className="w-10 h-1 bg-amber-500 rounded-full my-2.5" />
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            {currentChapter.subtitle}
          </p>
        </div>

        {/* Visual Section */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4">
            {currentChapter.section1Title}
          </h3>

          {/* Special DOM Tree Diagram + Powers for Chapter 01 (Slide 4, 5, 6) */}
          {currentChapter.visualType === 'dom-tree-and-powers' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-5 space-y-2.5">
                  {currentChapter.summaryPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm"
                    >
                      <strong className="text-slate-900">{pt.label}:</strong>{' '}
                      <span className="text-slate-600">{pt.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Slide 5: The HTML DOM Tree of Objects */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 mb-3">
                    01.2 // NODE HIERARCHY — The HTML DOM Tree of Objects
                  </span>
                  <div className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold shadow-sm">
                    Document
                  </div>
                  <div className="w-0.5 h-4 bg-slate-400" />
                  <div className="px-4 py-1.5 rounded-lg bg-sky-600 text-white font-mono text-xs font-bold shadow-sm">
                    Root Element: &lt;html&gt;
                  </div>
                  <div className="w-48 h-0.5 bg-slate-300 mt-3" />
                  <div className="grid grid-cols-2 gap-6 mt-2 w-full max-w-md text-center font-mono text-[11px]">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="px-3 py-1 rounded bg-sky-100 text-sky-900 font-bold">
                        &lt;head&gt;
                      </div>
                      <div className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
                        &lt;title&gt; &quot;My Page&quot;
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="px-3 py-1 rounded bg-sky-100 text-sky-900 font-bold">
                        &lt;body&gt;
                      </div>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        <span className="px-2 py-1 rounded bg-amber-100 text-amber-900">
                          &lt;h1&gt; &quot;Heading&quot;
                        </span>
                        <span className="px-2 py-1 rounded bg-amber-100 text-amber-900">
                          &lt;a href=&quot;...&quot;&gt;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 6: Core DOM Powers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentChapter.powers.map((pw, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200"
                  >
                    <div
                      className={`font-bold text-sm mb-1 ${
                        pw.accent === 'amber' ? 'text-amber-600' : 'text-sky-600'
                      }`}
                    >
                      {pw.title}
                    </div>
                    <p className="text-xs text-slate-600">{pw.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentChapter.visualType === 'cards' && (
            <div
              className={`grid grid-cols-1 gap-4 ${
                currentChapter.cards.length === 2
                  ? 'md:grid-cols-2'
                  : currentChapter.cards.length === 4
                  ? 'sm:grid-cols-2 lg:grid-cols-4'
                  : 'md:grid-cols-3'
              }`}
            >
              {currentChapter.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm"
                >
                  {card.tag && (
                    <div
                      className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        card.accent === 'amber' ? 'text-amber-600' : 'text-sky-600'
                      }`}
                    >
                      {card.tag}
                    </div>
                  )}
                  <h4
                    className={`font-bold text-sm sm:text-base mb-1.5 ${
                      card.accent === 'amber' ? 'text-amber-700' : 'text-sky-700'
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

          {currentChapter.visualType === 'table' && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    {currentChapter.tableHeaders.map((header, hIdx) => (
                      <th key={hIdx} className="px-5 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {currentChapter.tableRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-mono font-semibold text-sky-700">
                        {row[0]}
                      </td>
                      <td className="px-5 py-3 text-slate-700">{row[1]}</td>
                      {row[2] !== undefined && (
                        <td className="px-5 py-3 text-slate-600">{row[2]}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {currentChapter.visualType === 'checklist' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentChapter.summaryPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-sky-800">{pt.label}: </span>
                    <span className="text-slate-700">{pt.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentChapter.visualType === 'steps' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentChapter.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800"
                >
                  {step}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Concept Box + Interactive DOM & Event Playground */}
        <div className="pt-4 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="font-bold text-sky-950">{currentChapter.conceptTitle}</div>
              <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                {currentChapter.conceptPoints.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>

          <JsPlayground
            key={currentChapter.id}
            chapterId={currentChapter.id}
            initialJs={currentChapter.initialJs}
            initialHtml={currentChapter.initialHtml}
            hasDomPreview={true}
            domPreviewHeight="h-44"
            presets={currentChapter.presets || []}
          />
        </div>

        {/* Bottom Pagination */}
        <div className="pt-5 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              {currentIndex > 0
                ? `Ch. ${DOM_EVENTS_CHAPTERS[currentIndex - 1].chapterNum}: ${DOM_EVENTS_CHAPTERS[currentIndex - 1].title}`
                : 'Awal Kurikulum'}
            </span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === DOM_EVENTS_CHAPTERS.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <span>
              {currentIndex < DOM_EVENTS_CHAPTERS.length - 1
                ? `Ch. ${DOM_EVENTS_CHAPTERS[currentIndex + 1].chapterNum}: ${DOM_EVENTS_CHAPTERS[currentIndex + 1].title}`
                : 'Course Complete'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
