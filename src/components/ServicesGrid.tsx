import React from 'react';
import { SERVICES } from '../data/services';
import { Video, Camera, Plane, Smartphone, Film, Check, Plus, Lock } from 'lucide-react';

interface ServicesGridProps {
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
  onNavigateToCalculator: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  selectedServiceIds,
  onToggleService,
  onNavigateToCalculator,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-purple-400" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-purple-400" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-purple-400" />;
      default:
        return <Video className="w-6 h-6 text-purple-400" />;
    }
  };

  const handleServiceSelect = (id: string, isMandatory?: boolean) => {
    if (!isMandatory) {
      onToggleService(id);
    }
    onNavigateToCalculator();
  };

  return (
    <section id="servicos" className="py-24 bg-[#09090c] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <span>Nossa Esteira de Produção</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Serviços <span className="purple-gradient-text">Especializados</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Selecione e combine exatamente os serviços que o seu projeto exige. O serviço de Videomaker serve como base fixa, permitindo acoplar fotografia, drone e mídias sociais.
          </p>
        </div>

        {/* Grid of 5 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceIds.includes(service.id);
            const isMandatory = service.isMandatory;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isMandatory
                    ? 'glass-card border-purple-500/50 shadow-xl shadow-purple-900/10'
                    : isSelected
                    ? 'glass-card-active'
                    : 'glass-card hover:border-zinc-700'
                }`}
              >
                {/* Top Image Preview with Gradient */}
                <div className="relative h-48 overflow-hidden bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/60 to-transparent" />

                  {/* Icon & Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md">
                      {getIcon(service.iconName)}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-md ${
                        isMandatory
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                          : 'bg-zinc-900/90 text-purple-300 border border-purple-500/30'
                      }`}
                    >
                      {isMandatory ? 'Obrigatório • R$ 500' : service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display font-bold text-2xl text-white">
                        {service.title}
                      </h3>
                      <span className="font-extrabold text-lg text-purple-400 font-mono">
                        {isMandatory ? 'R$ 500' : `+ R$ ${service.price}`}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverable Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      O que está incluído:
                    </span>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleServiceSelect(service.id, isMandatory)}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer ${
                        isMandatory
                          ? 'bg-purple-950/60 text-purple-300 border border-purple-500/40 cursor-default'
                          : isSelected
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                          : 'bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700'
                      }`}
                    >
                      {isMandatory ? (
                        <>
                          <Lock className="w-4 h-4 text-purple-400" />
                          <span>Serviço Base (Incluído)</span>
                        </>
                      ) : isSelected ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Selecionado na Calculadora</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-purple-400" />
                          <span>Adicionar por + R$ {service.price}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
