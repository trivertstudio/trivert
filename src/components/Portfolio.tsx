import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { PortfolioItem } from '../types';
import { Play, X, ExternalLink, Film } from 'lucide-react';

const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match?.[1] ?? null;
};

const isYouTubeUrl = (url: string) => Boolean(getYouTubeVideoId(url));

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : '';
};

const getPosterImageUrl = (item: PortfolioItem) => {
  const videoUrl = item.videoUrl || item.posterUrl;
  const youtubeId = getYouTubeVideoId(videoUrl);
  return youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : item.posterUrl;
};

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('institucional');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'institucional', label: 'Institucional' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'reels', label: 'Reels & Mobile' },
    { id: 'drone', label: 'Drone Aéreo' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'fotos', label: 'Fotos' },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const photoShowcase = [
    {
      title: 'Campanha Editorial',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      description: 'Sessão de moda com direção artística, iluminação cinematográfica e estética premium.',
    },
    {
      title: 'Produção de Evento',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
      description: 'Registro elegante de convidados, detalhes e momentos marcantes em alta resolução.',
    },
    {
      title: 'Identidade Visual',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      description: 'Estética refinada para marcas que buscam uma presença visual forte e memorável.',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#08080b] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5 text-purple-400" />
            <span>Portfólio em Destaque</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nossos <span className="purple-gradient-text">Projetos</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Confira algumas das nossas produções mais recentes. Cada vídeo é pensado para capturar a essência da marca com narrativa forte e estética de cinema.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Portfolio Cards */}
        {activeCategory === 'fotos' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photoShowcase.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20"
              >
                {/* Poster Image */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <img
                    src={getPosterImageUrl(item)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg shadow-purple-600/50 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-purple-300">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono">{item.year}</span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
                    <span>Cliente: <strong className="text-zinc-300">{item.client}</strong></span>
                    <span className="flex items-center gap-1 text-purple-400 font-semibold group-hover:underline">
                      Assistir Vídeo <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl glass-panel rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl space-y-4 p-4 sm:p-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div>
                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block">
                  {selectedVideo.categoryLabel}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              {isYouTubeUrl(selectedVideo.videoUrl) ? (
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.videoUrl)}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Modal Description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400 pt-2">
              <p className="max-w-xl text-zinc-300">{selectedVideo.description}</p>
              <div className="text-right font-mono">
                Cliente: <span className="text-purple-300 font-bold">{selectedVideo.client}</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
