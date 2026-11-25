import React from 'react';
import { X, Palette, Columns3, LayoutGrid, Smartphone, Check, Sparkles } from 'lucide-react';
import { COMPARISON_DATA } from '../data/lessonsData';

export default function CheatsheetModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Contekan Cepat CSS Modern</h3>
              <p className="text-xs text-slate-500">CSS Dasar vs Flexbox vs Grid vs Media Query</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Box Model Quick Note */}
          <div className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-indigo-900">
            <Palette className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-indigo-950 block mb-1">Rumus Emas CSS Box Model:</strong>
              Selalu gunakan <code className="bg-indigo-100 px-1.5 py-0.5 rounded font-mono text-indigo-800 font-bold">* &#123; box-sizing: border-box; &#125;</code> di awal stylesheet Anda agar padding dan border tidak menambah ukuran lebar fisik elemen di luar ekspektasi!
            </div>
          </div>

          {/* Comparison Cards: Flex vs Grid */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
              Perbandingan: Kapan Pakai Flexbox vs Grid?
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMPARISON_DATA.columns.map((col, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl border shadow-sm ${
                    idx === 0 
                      ? 'bg-sky-50/60 border-sky-200' 
                      : 'bg-emerald-50/60 border-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {idx === 0 ? (
                      <Columns3 className="w-5 h-5 text-sky-600" />
                    ) : (
                      <LayoutGrid className="w-5 h-5 text-emerald-600" />
                    )}
                    <h5 className={`font-bold text-base ${idx === 0 ? 'text-sky-900' : 'text-emerald-900'}`}>
                      {col.type}
                    </h5>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-4">
                    {col.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-200 text-xs">
                    <span className="text-slate-500">Paling Pas Untuk: </span>
                    <span className="font-semibold text-slate-800">{col.idealFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Properties Cheatsheet Table */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
              Tabel Properti Populer & Fungsinya
            </h4>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 uppercase text-[11px] font-bold border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-3.5">Kategori</th>
                    <th className="px-5 py-3.5">Properti</th>
                    <th className="px-5 py-3.5">Nilai Populer</th>
                    <th className="px-5 py-3.5">Fungsi Singkat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-indigo-700">CSS Dasar</td>
                    <td className="px-5 py-3 font-mono text-indigo-800 font-semibold">box-sizing</td>
                    <td className="px-5 py-3 font-mono text-slate-600">border-box, content-box</td>
                    <td className="px-5 py-3">Mengatur perhitungan padding dalam lebar elemen</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-indigo-700">CSS Dasar</td>
                    <td className="px-5 py-3 font-mono text-indigo-800 font-semibold">position</td>
                    <td className="px-5 py-3 font-mono text-slate-600">relative, absolute, fixed, sticky</td>
                    <td className="px-5 py-3">Mengontrol koordinat perataan di luar alur dokumen</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-indigo-700">CSS Dasar</td>
                    <td className="px-5 py-3 font-mono text-indigo-800 font-semibold">display</td>
                    <td className="px-5 py-3 font-mono text-slate-600">block, inline, inline-block, none</td>
                    <td className="px-5 py-3">Menentukan perilaku baris dan dimensi elemen</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-indigo-700">CSS Dasar</td>
                    <td className="px-5 py-3 font-mono text-indigo-800 font-semibold">object-fit</td>
                    <td className="px-5 py-3 font-mono text-slate-600">cover, contain, fill, scale-down</td>
                    <td className="px-5 py-3">Mengatur penskalaan dan cropping gambar responsif</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-indigo-700">CSS Dasar</td>
                    <td className="px-5 py-3 font-mono text-indigo-800 font-semibold">:focus ring</td>
                    <td className="px-5 py-3 font-mono text-slate-600">box-shadow, border-color, outline</td>
                    <td className="px-5 py-3">Efek visual saat field formulir sedang aktif diketik</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-sky-700">Flexbox</td>
                    <td className="px-5 py-3 font-mono text-sky-800 font-semibold">justify-content</td>
                    <td className="px-5 py-3 font-mono text-slate-600">center, space-between</td>
                    <td className="px-5 py-3">Mendistribusikan item di sumbu utama</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-sky-700">Flexbox</td>
                    <td className="px-5 py-3 font-mono text-sky-800 font-semibold">align-items</td>
                    <td className="px-5 py-3 font-mono text-slate-600">center, stretch</td>
                    <td className="px-5 py-3">Meratakan item di sumbu silang</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-emerald-700">Grid</td>
                    <td className="px-5 py-3 font-mono text-emerald-800 font-semibold">grid-template-columns</td>
                    <td className="px-5 py-3 font-mono text-slate-600">repeat(3, 1fr)</td>
                    <td className="px-5 py-3">Membuat 3 kolom berukuran proporsional</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-emerald-700">Grid</td>
                    <td className="px-5 py-3 font-mono text-emerald-800 font-semibold">auto-fit & minmax()</td>
                    <td className="px-5 py-3 font-mono text-slate-600">repeat(auto-fit, minmax(200px, 1fr))</td>
                    <td className="px-5 py-3">Kolom otomatis adaptif tanpa media query</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-pink-700">Media Query</td>
                    <td className="px-5 py-3 font-mono text-pink-800 font-semibold">@media (max-width: 640px)</td>
                    <td className="px-5 py-3 font-mono text-slate-600">Desktop-First</td>
                    <td className="px-5 py-3">Aktif saat layar smartphone &le; 640px</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-bold text-pink-700">Media Query</td>
                    <td className="px-5 py-3 font-mono text-pink-800 font-semibold">@media (min-width: 768px)</td>
                    <td className="px-5 py-3 font-mono text-slate-600">Mobile-First</td>
                    <td className="px-5 py-3">Aktif saat layar bertambah lebar ke tablet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm"
          >
            Tutup Contekan
          </button>
        </div>
      </div>
    </div>
  );
}
