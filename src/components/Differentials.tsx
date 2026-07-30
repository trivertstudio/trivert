import React from 'react';
import { Film, Zap, Award, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: <Film className="w-6 h-6 text-purple-400" />,
      title: 'Estética Cinematográfica',
      description: 'Gravação em sensores de grande formato, perfis de cor Log/RAW e tratamento de cor personalizado para visual de cinema.'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Cálculo Transparente Instantâneo',
      description: 'Zero enrolação no orçamento. Você escolhe os adicionais exatamente conforme a sua necessidade e sabe o valor na hora.'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Versatilidade Mobile & Social',
      description: 'Conteúdos nativos para Instagram Reels, TikTok e Shorts desenvolvidos para engajamento e alta taxa de retenção.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: 'Segurança & Equipamentos de Ponta',
      description: 'Drone 4K homologado, estabilização de última geração e backup duplo de todos os arquivos de gravação.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-400" />,
      title: 'Suporte Direto no WhatsApp',
      description: 'Comunicação fluida antes, durante e após a gravação. Resposta rápida para tirar dúvidas e alinhar roteiro.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Audio & Iluminação Profissional',
      description: 'Microfones de lapela, áudio direcional e kits de iluminação LED ajustáveis para valorizar cada ambiente.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-[#050507] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <span>Diferenciais Trivert</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por que escolher a <span className="purple-gradient-text">Trivert</span>?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Unimos técnica refinada, agilidade de entrega e transparência comercial para transformar sua visão em realidade.
          </p>
        </div>

        {/* Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all duration-300 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center purple-glow-sm">
                {diff.icon}
              </div>

              <h3 className="font-display font-bold text-lg text-white">
                {diff.title}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
