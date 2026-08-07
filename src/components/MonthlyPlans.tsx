import React from 'react';
import { Sparkles, ShieldCheck, Star, ArrowRight } from 'lucide-react';

interface MonthlyPlansProps {
  whatsappNumber: string;
}

export const MonthlyPlans: React.FC<MonthlyPlansProps> = ({ whatsappNumber }) => {
  const plans = [
    {
      title: 'Plano Essencial',
      priceLabel: 'De R$ 850,00 por R$ 600,00',
      promo: true,
      description: 'Inclui 6 vídeos estratégicos para redes sociais com produção profissional.',
      features: [
        '6 vídeos estratégicos para redes sociais',
        'Apenas R$ 100 por vídeo',
        'Captação profissional',
        'Edição profissional',
        'Entrega em alta qualidade',
        'Ideal para pequenos negócios e empreendedores',
      ],
      badge: 'Promoção',
      highlight: true,
    },
    {
      title: 'Plano Profissional',
      priceLabel: 'De R$ 1.500,00 por R$ 1.200,00',
      promo: true,
      description: 'Produção frequente e entrega prioritária para marcas que querem crescer.',
      features: [
        '12 vídeos estratégicos para redes sociais',
        'Apenas R$ 100 por vídeo',
        'Captação profissional',
        'Edição profissional',
        'Planejamento de conteúdo',
        'Entrega prioritária',
        'Ideal para empresas que produzem conteúdo com frequência',
      ],
      badge: 'Mais contratado',
      highlight: false,
    },
    {
      title: 'Plano Corporativo',
      priceLabel: 'Orçamento Personalizado',
      promo: false,
      description: 'Produção sob medida para campanhas, comerciais e projetos empresariais.',
      features: [
        'Produções cinematográficas',
        'Comerciais institucionais',
        'Campanhas publicitárias',
        'Conteúdo para redes sociais',
        'Cobertura audiovisual personalizada',
        'Planejamento estratégico',
        'Produção sob demanda',
        'Equipe e estrutura adaptadas às necessidades da empresa',
      ],
      badge: 'Personalizado',
      highlight: false,
      corporate: true,
    },
  ];

  const openWhatsAppQuote = (planTitle: string) => {
    const cleanPhone = whatsappNumber.replace(/\D/g, '');
    const message =
      planTitle === 'Plano Corporativo'
        ? 'Olá! Tenho interesse no Plano Corporativo e gostaria de solicitar um orçamento personalizado'
        : `Olá! Tenho interesse no ${planTitle} e gostaria de solicitar um orçamento.`;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planos" className="py-24 bg-[#050507] border-t border-white/5 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Planos Mensais
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Planos mensais para manter sua marca em destaque
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Escolha o ritmo certo de produção e receba conteúdo estratégico todo mês com qualidade de estúdio, entrega ágil e comunicação direta.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4 -mx-4 snap-x snap-mandatory scroll-smooth overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:grid lg:grid-cols-3 lg:px-0 lg:-mx-0 lg:snap-none lg:overscroll-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`flex-shrink-0 min-w-[78%] sm:min-w-[64%] md:min-w-[46%] lg:min-w-0 lg:flex-1 snap-center [scroll-snap-stop:always] group relative rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 sm:p-7 shadow-2xl shadow-purple-900/10 transition duration-300 ease-out hover:-translate-y-1 lg:snap-none ${
                plan.highlight ? 'border-purple-500/40 bg-purple-950/50 shadow-purple-600/20' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-300">
                    {plan.badge}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-white">
                    {plan.title}
                  </h3>
                </div>
                <div className="rounded-3xl p-3 shadow-lg shadow-purple-900/20 bg-gradient-to-br from-purple-700 to-violet-700 text-white">
                  <Star className="w-5 h-5" />
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {plan.description}
              </p>

              {plan.priceLabel && !plan.corporate && (
                <div className="mb-6 rounded-3xl border border-purple-500/20 bg-purple-950/30 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">Promoção</p>
                  <p className="mt-3 text-base text-zinc-300 line-through">{plan.priceLabel.split(' por ')[0]}</p>
                  <p className="mt-2 text-3xl font-extrabold text-white">{plan.priceLabel.split(' por ')[1]}</p>
                </div>
              )}
              {plan.priceLabel && plan.corporate && (
                <div className="mb-6 rounded-3xl border border-purple-500/20 bg-purple-950/30 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">Orçamento</p>
                  <p className="mt-3 text-2xl font-extrabold text-white">{plan.priceLabel}</p>
                </div>
              )}

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ShieldCheck className="mt-1 w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className={feature.includes('Apenas R$ 100 por vídeo') ? 'font-semibold text-white' : ''}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <button
                  onClick={() => openWhatsAppQuote(plan.title)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-zinc-400 text-sm sm:text-base">
          <p>
            Todos os planos incluem atendimento personalizado, entrega otimizada e suporte para ajustar roteiros e pautas de conteúdo.
          </p>
        </div>
      </div>
    </section>
  );
};
