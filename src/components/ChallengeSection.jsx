import React, { useState } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  Eye, 
  Code2, 
  Lightbulb 
} from 'lucide-react';
import { CHALLENGES_DATA } from '../data/lessonsData';

export default function ChallengeSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const challenge = CHALLENGES_DATA[selectedIdx];

  const [userCss, setUserCss] = useState(challenge.initialCss);
  const [resultStatus, setResultStatus] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleSelectChallenge = (idx) => {
    setSelectedIdx(idx);
    setUserCss(CHALLENGES_DATA[idx].initialCss);
    setResultStatus(null);
    setShowHint(false);
    setShowSolution(false);
  };

  const handleCheckSolution = () => {
    const isCorrect = challenge.solutionCheck(userCss);
    setResultStatus(isCorrect ? 'success' : 'fail');
  };

  const handleReset = () => {
    setUserCss(challenge.initialCss);
    setResultStatus(null);
    setShowHint(false);
    setShowSolution(false);
  };

  const handleRevealSolution = () => {
    setUserCss(challenge.solutionCss);
    setShowSolution(true);
    setResultStatus('success');
  };

  const srcDoc = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        padding: 16px;
        background-color: #ffffff;
        color: #1e293b;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
      }
      ${userCss}
    </style>
  </head>
  <body>
    ${challenge.initialHtml}
  </body>
</html>`;

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Banner Full Width */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-50 via-white to-orange-50 border border-amber-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Interactive Challenges</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tantangan & Uji Pemahaman
            </h1>
            <p className="text-amber-800 font-semibold text-sm sm:text-base mt-1">
              Buktikan pemahaman Anda tentang Flexbox, Grid, dan Media Query dengan menyelesaikan misi nyata di bawah ini!
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Navigation Full Width */}
      <div className="w-full flex flex-wrap gap-2.5">
        {CHALLENGES_DATA.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => handleSelectChallenge(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedIdx === idx
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-sm'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Misi {idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Main Mission Box Full Width */}
      <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>{challenge.title}</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            🎯 <strong>Target Misi:</strong> {challenge.goal}
          </p>
        </div>

        {/* Action Controls for Challenge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCheckSolution}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 text-xs sm:text-sm transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Cek Jawaban Saya</span>
            </button>

            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold rounded-xl border border-amber-300 text-xs sm:text-sm transition"
            >
              <Lightbulb className="w-4 h-4" />
              <span>{showHint ? 'Tutup Petunjuk' : 'Buka Petunjuk'}</span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 rounded-xl border border-slate-300 text-xs sm:text-sm shadow-sm transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          <button
            onClick={handleRevealSolution}
            className="text-xs text-slate-500 hover:text-sky-700 underline underline-offset-4 transition font-medium"
          >
            Lihat Kunci Jawaban
          </button>
        </div>

        {/* Hint Box */}
        {showHint && (
          <div className="bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm p-4 rounded-xl flex items-start gap-2.5 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Petunjuk:</strong> {challenge.hint}
            </div>
          </div>
        )}

        {/* Result Feedback Banner */}
        {resultStatus === 'success' && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-950 p-4 rounded-xl flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-base text-emerald-800">Luar Biasa! Jawaban Anda Tepat! 🎉</h4>
              <p className="text-xs sm:text-sm text-emerald-700">
                Tata letak telah berhasil memenuhi kriteria misi dengan sempurna. Lanjutkan ke misi berikutnya!
              </p>
            </div>
          </div>
        )}

        {resultStatus === 'fail' && (
          <div className="bg-rose-50 border border-rose-300 text-rose-950 p-4 rounded-xl flex items-center gap-3 animate-fadeIn">
            <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
            <div>
              <h4 className="font-bold text-base text-rose-800">Belum Sesuai, Coba Lagi! 💪</h4>
              <p className="text-xs sm:text-sm text-rose-700">
                Kode CSS Anda belum sepenuhnya memenuhi target misi. Gunakan tombol 'Buka Petunjuk' jika memerlukan bantuan.
              </p>
            </div>
          </div>
        )}

        {/* Code Editor and Preview for Challenge Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 overflow-hidden flex flex-col shadow-sm">
            <div className="px-4 sm:px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700 font-semibold">
              <span className="font-mono flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-600" />
                Ketik Solusi CSS Anda:
              </span>
              <span className="text-[11px] text-slate-500 font-normal">Live Validator</span>
            </div>
            <textarea
              value={userCss}
              onChange={(e) => {
                setUserCss(e.target.value);
                setResultStatus(null);
              }}
              spellCheck="false"
              className="p-4 bg-white text-slate-800 font-mono text-xs sm:text-sm min-h-[300px] focus:outline-none leading-relaxed resize-none"
            />
          </div>

          {/* Live Preview */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 overflow-hidden flex flex-col shadow-sm">
            <div className="px-4 sm:px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700 font-semibold">
              <span className="font-mono flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                Hasil Tampilan Langsung:
              </span>
            </div>
            <div className="p-4 flex-1 flex items-center justify-center bg-white min-h-[300px]">
              <iframe
                srcDoc={srcDoc}
                title="Challenge Live Preview"
                className="w-full h-72 border border-slate-200 rounded-lg bg-white"
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
