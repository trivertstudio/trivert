import React from 'react';
import { Calculator, Play, Sparkles, CheckCircle2, Film, Camera, Plane, Smartphone, Video } from 'lucide-react';
import { responsiveImageSet, responsiveImageUrl } from '../utils/image';

interface HeroProps {
  onNavigateToCalculator: () => void;
  onNavigateToPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToCalculator,
  onNavigateToPortfolio,
}) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-700/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-purple-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold tracking-wide purple-glow-sm">
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>TRIVERT AUDIOVISUAL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span className="text-zinc-300 font-normal">Sua Visão em Cinema 4K</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Sua história contada com estética{" "}
              <span className="purple-gradient-text block sm:inline text-3xl sm:text-4xl">
                cinematográfica.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Produções audiovisuais de alto nível para marcas, eventos e criadores. Combine nossos serviços de <strong className="text-zinc-200">Videomaker</strong>, <strong className="text-zinc-200">Fotografia</strong>, <strong className="text-zinc-200">Drone</strong> e <strong className="text-zinc-200">Mobile Content</strong> com orçamento transparente e em tempo real.
            </p>

            {/* Interactive Price Badge Preview */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md max-w-md mx-auto lg:mx-0">
              <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-400">
                <Video className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <span className="text-zinc-400 block font-medium">Serviço Principal Obrigatório:</span>
                <span className="text-white font-bold text-sm">Videomaker a partir de <span className="text-purple-400 font-extrabold text-base">R$ 500,00</span></span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onNavigateToCalculator}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-purple-200" />
                <span>Simular Orçamento Agora</span>
              </button>

              <button
                onClick={onNavigateToPortfolio}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span>Ver Portfólio</span>
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Captação 4K HDR & 60FPS
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Entrega Ágil
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Sem Custos Ocultos
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Mockup / Card Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-purple-900 to-indigo-600 opacity-30 blur-lg"></div>

              {/* Main Visual Box */}
              <div className="relative rounded-2xl glass-card p-4 sm:p-5 border border-white/10 space-y-4 shadow-2xl">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">TRIVERT CAM // REEL 01</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-purple-900/50 border border-purple-500/30 text-purple-300 text-[11px] font-mono">4K LOG</span>
                </div>

                {/* Simulated Film Preview Frame */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 group cursor-pointer" onClick={onNavigateToPortfolio}>
                  <img
                    src={responsiveImageUrl('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80', 800)}
                    srcSet={responsiveImageSet('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80')}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Equipamento de gravação Trivert"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg shadow-purple-600/50 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-200 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="font-mono">SHOWREEL TRIVERT 2026</span>
                    <span className="text-purple-400 font-semibold">01:45</span>
                  </div>
                </div>

                {/* Mini Services Badge Carousel */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-purple-500/20 text-xs">
                    <Video className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Videomaker</div>
                      <div className="text-[10px] text-purple-300 font-bold">R$ 500 (Obrigatório)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
                    <Camera className="w-4 h-4 text-zinc-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-200">Fotografia</div>
                      <div className="text-[10px] text-zinc-400">+ R$ 250</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
                    <Plane className="w-4 h-4 text-zinc-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-200">Drone 4K</div>
                      <div className="text-[10px] text-zinc-400">+ R$ 200</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
                    <Smartphone className="w-4 h-4 text-zinc-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-200">Storymaker</div>
                      <div className="text-[10px] text-zinc-400">+ R$ 180</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
