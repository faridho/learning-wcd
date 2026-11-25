import React from 'react';
import { 
  Palette,
  Columns3, 
  LayoutGrid, 
  Smartphone, 
  Trophy, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  onOpenCheatsheet 
}) {
  const navItems = [
    { id: 'basic', label: '1. CSS Dasar', icon: Palette, color: 'text-indigo-600', activeBg: 'bg-indigo-50 text-indigo-800 border-indigo-300' },
    { id: 'flex', label: '2. CSS Flexbox', icon: Columns3, color: 'text-sky-600', activeBg: 'bg-sky-50 text-sky-800 border-sky-300' },
    { id: 'grid', label: '3. CSS Grid', icon: LayoutGrid, color: 'text-emerald-600', activeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
    { id: 'mediaquery', label: '4. Media Query', icon: Smartphone, color: 'text-pink-600', activeBg: 'bg-pink-50 text-pink-800 border-pink-300' },
    { id: 'challenges', label: '5. Tantangan & Kuis', icon: Trophy, color: 'text-amber-600', activeBg: 'bg-amber-50 text-amber-800 border-amber-300' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  CSS Modern Lab
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                  Full Screen
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden md:block">
                Media Pembelajaran CSS Dasar, Flexbox, Grid & Media Query (Layar Penuh)
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? `${item.activeBg} shadow-sm border`
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="hidden lg:inline">{item.label}</span>
                  <span className="lg:hidden">{item.label.split('.')[1]?.trim() || item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Cheatsheet Button */}
          <button
            onClick={onOpenCheatsheet}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-all shrink-0"
            title="Buka Lembar Contekan CSS"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span className="hidden md:inline">Contekan Ringkas</span>
          </button>
        </div>
      </div>
    </header>
  );
}
