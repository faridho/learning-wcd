import React, { useState } from 'react';
import Header from './components/Header';
import BasicCssGuide from './components/BasicCssGuide';
import FlexboxGuide from './components/FlexboxGuide';
import GridGuide from './components/GridGuide';
import MediaQueryGuide from './components/MediaQueryGuide';
import JsGuide from './components/JsGuide';
import DomEventsGuide from './components/DomEventsGuide';
import ChallengeSection from './components/ChallengeSection';
import CheatsheetModal from './components/CheatsheetModal';
import { LESSONS_DATA } from './data/lessonsData';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' | 'flex' | 'grid' | 'mediaquery' | 'challenges'
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* Header Navigation Full Width */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
      />

      {/* Main Content Area: Full Width Screen */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        
        {/* Intro Hero Badge Full Width */}
        <div className="mb-6 w-full flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3.5 rounded-2xl text-xs shadow-sm">
          <div className="flex items-center gap-2 text-slate-700">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              <strong>Mode Pembelajaran Layar Penuh:</strong> Setiap snippet CSS dapat diedit langsung dan otomatis mengupdate tampilan seketika di canvas sandbox yang lapang!
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-slate-500 hidden sm:inline">Pintasan:</span>
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'basic' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              CSS Dasar
            </button>
            <button
              onClick={() => setActiveTab('flex')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'flex' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Flexbox
            </button>
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'grid' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setActiveTab('mediaquery')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'mediaquery' ? 'bg-pink-100 text-pink-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Media Query
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'js' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Javascript
            </button>
            <button
              onClick={() => setActiveTab('domevents')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'domevents' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              DOM &amp; Events
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                activeTab === 'challenges' ? 'bg-violet-100 text-violet-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Kuis / Misi
            </button>
          </div>
        </div>

        {/* Tab Content Rendering Full Screen */}
        <div className="w-full">
          {activeTab === 'basic' && <BasicCssGuide lessonData={LESSONS_DATA.basic} />}
          {activeTab === 'flex' && <FlexboxGuide lessonData={LESSONS_DATA.flex} />}
          {activeTab === 'grid' && <GridGuide lessonData={LESSONS_DATA.grid} />}
          {activeTab === 'mediaquery' && <MediaQueryGuide lessonData={LESSONS_DATA.mediaquery} />}
          {activeTab === 'js' && <JsGuide />}
          {activeTab === 'domevents' && <DomEventsGuide />}
          {activeTab === 'challenges' && <ChallengeSection />}
        </div>
      </main>

      {/* Cheatsheet Modal */}
      <CheatsheetModal
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
      />

      {/* Footer Full Width */}
      <footer className="w-full bg-white border-t border-slate-200 py-6 mt-12 text-xs text-slate-500">
        <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">CSS Modern Lab</span>
            <span>—</span>
            <span>Media Pembelajaran Interaktif CSS Dasar, Flexbox, Grid, & Media Query (Layar Penuh)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Dibuat dengan React & Tailwind CSS</span>
            <span>•</span>
            <button
              onClick={() => setIsCheatsheetOpen(true)}
              className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium"
            >
              Contekan Ringkas
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
