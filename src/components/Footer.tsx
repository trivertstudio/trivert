import React from 'react';
import { Video, ArrowUp, Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigateToCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToCalculator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030304] text-zinc-400 border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-zinc-800/80">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Pronto para gravar a sua próxima história?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              Simule seu orçamento online com total autonomia em poucos cliques ou entre em contato direto com nossa equipe no WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
            <button
              onClick={onNavigateToCalculator}
              className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all"
            >
              Calcular Orçamento Agora
            </button>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-purple-500/40">
                <Video className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                TRIVERT<span className="text-purple-500">.</span>
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Produtora Audiovisual especializada em vídeos institucionais, comerciais, cobertura de eventos, drones 4K e mídias verticais.
            </p>

            <div className="flex items-center gap-3 pt-1 text-zinc-400">
              <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-purple-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-purple-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-purple-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-purple-300 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-purple-300 transition-colors">Serviços</a></li>
              <li><a href="#calculadora" className="hover:text-purple-300 transition-colors">Calculadora de Orçamento</a></li>
              <li><a href="#portfolio" className="hover:text-purple-300 transition-colors">Portfólio de Vídeos</a></li>
              <li><a href="#faq" className="hover:text-purple-300 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li className="text-zinc-300 font-semibold">🎥 Videomaker (R$ 500)</li>
              <li>📸 Fotografia (+ R$ 250)</li>
              <li>🚁 Drone 4K (+ R$ 200)</li>
              <li>📱 Storymaker (+ R$ 180)</li>
              <li>📲 Videomaker Mobile (+ R$ 150)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>WhatsApp: (11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>contato@trivert.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>São Paulo - SP • Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Back to top button */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Trivert. Todos os direitos reservados. Design e cálculo audiovisual premium.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
