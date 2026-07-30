import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  SERVICES,
  EXTRAS,
  MANDATORY_SERVICE_ID
} from '../data/services';
import { CalculatorState } from '../types';
import {
  Video,
  Camera,
  Plane,
  Smartphone,
  Film,
  Check,
  Plus,
  Lock,
  MessageCircle,
  Copy,
  Calendar,
  MapPin,
  User,
  FileText,
  Zap,
  Sparkles,
  ChevronRight,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface CalculatorProps {
  calculatorState: CalculatorState;
  onUpdateState: (newState: Partial<CalculatorState>) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  calculatorState,
  onUpdateState,
}) => {
  const [copied, setCopied] = useState(false);

  const {
    selectedServiceIds,
    selectedExtraIds,
    diarias,
    clientName,
    eventDate,
    location,
    notes,
    whatsappNumber,
  } = calculatorState;

  // Calculate Subtotals & Totals
  const selectedServices = SERVICES.filter((s) =>
    selectedServiceIds.includes(s.id)
  );

  const servicesTotalOneDay = selectedServices.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  const selectedExtras = EXTRAS.filter((e) =>
    selectedExtraIds.includes(e.id)
  );

  const extrasTotal = selectedExtras.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  // Apply discount for 2+ diárias on base services
  const rawTotal = servicesTotalOneDay * diarias + extrasTotal;
  const multiDayDiscount = diarias >= 2 ? Math.round(servicesTotalOneDay * 0.1 * (diarias - 1)) : 0;
  const finalTotal = Math.max(500, rawTotal - multiDayDiscount);

  // Toggle a non-mandatory service
  const handleToggleService = (id: string) => {
    if (id === MANDATORY_SERVICE_ID) return; // Cannot uncheck mandatory base
    const nextIds = selectedServiceIds.includes(id)
      ? selectedServiceIds.filter((item) => item !== id)
      : [...selectedServiceIds, id];
    onUpdateState({ selectedServiceIds: nextIds });
  };

  // Toggle an extra option
  const handleToggleExtra = (id: string) => {
    const nextIds = selectedExtraIds.includes(id)
      ? selectedExtraIds.filter((item) => item !== id)
      : [...selectedExtraIds, id];
    onUpdateState({ selectedExtraIds: nextIds });
  };

  // Reset to default mandatory state
  const handleReset = () => {
    onUpdateState({
      selectedServiceIds: [MANDATORY_SERVICE_ID],
      selectedExtraIds: [],
      diarias: 1,
      clientName: '',
      eventDate: '',
      location: '',
      notes: '',
    });
  };

  // Build formatted message for WhatsApp
  const generateWhatsAppMessage = () => {
    let msg = `*SOLICITAÇÃO DE ORÇAMENTO - TRIVERT AUDIOVISUAL*\n`;
    msg += `-------------------------------------------\n\n`;

    if (clientName.trim()) {
      msg += `👤 *Cliente/Empresa:* ${clientName.trim()}\n`;
    }
    if (eventDate) {
      msg += `📅 *Data Prevista:* ${eventDate}\n`;
    }
    if (location.trim()) {
      msg += `📍 *Localização:* ${location.trim()}\n`;
    }
    if (clientName || eventDate || location) {
      msg += `\n`;
    }

    msg += `🎥 *SERVIÇOS SELECIONADOS:*\n`;
    selectedServices.forEach((s) => {
      msg += `• *${s.title}*: R$ ${s.price}${s.isMandatory ? ' (Serviço Base)' : ''}\n`;
    });

    if (selectedExtras.length > 0) {
      msg += `\n⚡ *OPCIONAIS ADICIONAIS:*\n`;
      selectedExtras.forEach((e) => {
        msg += `• *${e.title}*: + R$ ${e.price}\n`;
      });
    }

    msg += `\n🗓️ *Quantidade de Diárias:* ${diarias} ${diarias === 1 ? 'diária' : 'diárias'}\n`;

    if (multiDayDiscount > 0) {
      msg += `🏷️ *Desconto Pacote Multi-diárias:* - R$ ${multiDayDiscount}\n`;
    }

    msg += `\n💰 *VALOR TOTAL ESTIMADO:* *R$ ${finalTotal.toLocaleString('pt-BR')},00*\n`;

    if (notes.trim()) {
      msg += `\n📝 *Observações do Projeto:*\n"${notes.trim()}"\n`;
    }

    msg += `\n-------------------------------------------\n`;
    msg += `Gostaria de confirmar a disponibilidade da equipe e receber a proposta formal!`;

    return msg;
  };

  // Submit Quote to WhatsApp
  const handleSubmitWhatsApp = () => {
    // Fire festive confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9333ea', '#c084fc', '#ffffff', '#a855f7'],
    });

    const message = generateWhatsAppMessage();
    const cleanPhone = whatsappNumber.replace(/\D/g, '');
    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Copy Summary text to Clipboard
  const handleCopySummary = async () => {
    try {
      const text = generateWhatsAppMessage();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-5 h-5 text-purple-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-purple-400" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-purple-400" />;
      default:
        return <Video className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="calculadora" className="py-24 bg-[#050507] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider purple-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Simulador em Tempo Real</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Calculadora de Orçamento para <span className="purple-gradient-text">Eventos</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Monte o pacote perfeito para a sua produção. O serviço de <strong className="text-white">Videomaker (R$ 500)</strong> é obrigatório e você pode adicionar fotografia, drone, storymaker e adicionais com transparência total.
          </p>
        </div>

        {/* Main Grid: Left Controls & Right Real-Time Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selection Toggles + Inputs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Services Selection */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs">
                    1
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    Selecione os Serviços
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-purple-300 transition-colors"
                  title="Resetar seleção"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar extras</span>
                </button>
              </div>

              {/* Service Cards List */}
              <div className="space-y-3">
                {SERVICES.map((service) => {
                  const isMandatory = service.isMandatory;
                  const isChecked = selectedServiceIds.includes(service.id);

                  return (
                    <div
                      key={service.id}
                      onClick={() => !isMandatory && handleToggleService(service.id)}
                      className={`group relative flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                        isMandatory
                          ? 'bg-purple-950/40 border-purple-500/40 cursor-default'
                          : isChecked
                          ? 'bg-purple-900/30 border-purple-500/60 shadow-lg shadow-purple-950/40 cursor-pointer'
                          : 'bg-zinc-900/60 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 pr-2">
                        {/* Custom Checkbox */}
                        <div
                          className={`flex items-center justify-center w-5 h-5 rounded-md border transition-all ${
                            isMandatory
                              ? 'bg-purple-600 border-purple-500 text-white'
                              : isChecked
                              ? 'bg-purple-600 border-purple-500 text-white'
                              : 'bg-zinc-950 border-zinc-700 text-transparent group-hover:border-zinc-500'
                          }`}
                        >
                          {isMandatory ? (
                            <Lock className="w-3 h-3 text-white" />
                          ) : (
                            <Check className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>

                        {/* Icon */}
                        <div className="p-2 rounded-lg bg-zinc-950 border border-white/5">
                          {getServiceIcon(service.iconName)}
                        </div>

                        {/* Text info */}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-white">
                              {service.title}
                            </span>
                            {isMandatory && (
                              <span className="px-2 py-0.5 rounded bg-purple-900/80 border border-purple-500/30 text-[10px] font-bold text-purple-300">
                                Obrigatório
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-zinc-400 block sm:hidden">
                            {isMandatory ? 'R$ 500' : `+ R$ ${service.price}`}
                          </span>
                        </div>
                      </div>

                      {/* Price Tag Right */}
                      <div className="text-right">
                        <span
                          className={`font-mono font-bold text-sm ${
                            isMandatory
                              ? 'text-purple-300'
                              : isChecked
                              ? 'text-purple-400'
                              : 'text-zinc-400'
                          }`}
                        >
                          {isMandatory ? 'R$ 500' : `+ R$ ${service.price}`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Extra Options & Multi-day Scale */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
              
              {/* Diárias Selector */}
              <div className="space-y-3 pb-4 border-b border-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs">
                      2
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      Duração do Projeto (Diárias)
                    </h3>
                  </div>
                  <span className="text-xs text-purple-400 font-semibold font-mono">
                    {diarias} {diarias === 1 ? 'Diária' : 'Diárias'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => onUpdateState({ diarias: num })}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                        diarias === num
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                      }`}
                    >
                      {num} {num === 1 ? 'Dia' : 'Dias'}
                    </button>
                  ))}
                </div>
                {diarias >= 2 && (
                  <p className="text-[11px] text-purple-300 bg-purple-950/50 p-2 rounded-lg border border-purple-500/20">
                    ✨ Aplicado desconto especial de pacote para múltiplas diárias!
                  </p>
                )}
              </div>

              {/* Extras Toggles */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <h4 className="font-semibold text-sm text-white">
                    Adicionais de Produção & Pós (Opcionais)
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EXTRAS.map((extra) => {
                    const isChecked = selectedExtraIds.includes(extra.id);

                    return (
                      <div
                        key={extra.id}
                        onClick={() => handleToggleExtra(extra.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                          isChecked
                            ? 'bg-purple-900/30 border-purple-500/60 shadow-md shadow-purple-950/30'
                            : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-xs font-semibold text-white leading-tight">
                            {extra.title}
                          </span>
                          <div
                            className={`w-4 h-4 rounded shrink-0 flex items-center justify-center text-[10px] ${
                              isChecked
                                ? 'bg-purple-600 text-white'
                                : 'bg-zinc-950 border border-zinc-700'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug whitespace-normal break-words">
                          {extra.description}
                        </p>
                        <span className="font-mono text-xs font-bold text-purple-400">
                          + R$ {extra.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Step 3: Optional Project Info Form */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs">
                  3
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Informações do Projeto (Opcional)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-400" />
                    <span>Seu Nome ou Empresa</span>
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => onUpdateState({ clientName: e.target.value })}
                    placeholder="Ex: João Silva ou Studio X"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Data Estimada</span>
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => onUpdateState({ eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>Localização / Cidade</span>
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => onUpdateState({ location: e.target.value })}
                    placeholder="Ex: São Paulo - SP (Estúdio ou Externa)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    <span>Observações / Ideias do Vídeo</span>
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => onUpdateState({ notes: e.target.value })}
                    placeholder="Descreva brevemente o objetivo do vídeo ou preferências de estilo..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Dynamic Summary & Sticky CTA */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            
            {/* Main Summary Glass Container */}
            <div className="glass-panel rounded-2xl p-6 border-2 border-purple-500/40 purple-glow-lg space-y-6">
              
              {/* Card Title Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Resumo do Orçamento
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-purple-950 border border-purple-500/30 text-[11px] font-mono text-purple-300 font-bold">
                  LIVE
                </span>
              </div>

              {/* Itemized Services Selected List */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                  Serviços Selecionados:
                </span>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {selectedServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="font-semibold text-white">
                          {service.title}
                        </span>
                        {service.isMandatory && (
                          <span className="text-[10px] text-purple-300 bg-purple-950 px-1.5 py-0.5 rounded">
                            Base
                          </span>
                        )}
                      </div>
                      <span className="font-mono font-bold text-purple-300">
                        R$ {service.price}
                      </span>
                    </div>
                  ))}

                  {selectedExtras.map((extra) => (
                    <div
                      key={extra.id}
                      className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-zinc-900/60 border border-purple-500/20"
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="text-zinc-300">{extra.title}</span>
                      </div>
                      <span className="font-mono font-bold text-purple-400">
                        + R$ {extra.price}
                      </span>
                    </div>
                  ))}
                </div>

                {diarias > 1 && (
                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 font-mono">
                    <span>Multiplicador Diárias:</span>
                    <span className="text-white font-bold">{diarias}x</span>
                  </div>
                )}

                {multiDayDiscount > 0 && (
                  <div className="flex items-center justify-between text-xs text-purple-300 pt-1 font-mono">
                    <span>Desconto Pacote:</span>
                    <span className="font-bold">- R$ {multiDayDiscount}</span>
                  </div>
                )}
              </div>

              {/* Total Display Block */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/80 via-zinc-900 to-black border border-purple-500/50 space-y-1 text-center shadow-inner">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest block">
                  Valor Total Estimado
                </span>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                  R$ {finalTotal.toLocaleString('pt-BR')},00
                </div>
                <span className="text-[11px] text-purple-300 block font-medium">
                  Até 12x no cartão ou desconto à vista no PIX
                </span>
              </div>

              {/* Primary Action Button: Request Quote on WhatsApp */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSubmitWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-green-600/30 hover:shadow-green-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySummary}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-purple-400" />
                    <span>{copied ? 'Copiado!' : 'Copiar Resumo em Texto'}</span>
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
                *O envio pelo WhatsApp gera uma mensagem pré-formatada. Nossa equipe responde em minutos para tirar dúvidas e fechar a data.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
