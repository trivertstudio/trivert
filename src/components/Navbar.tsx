import React, { useState, useEffect } from 'react';
import { Video, Calculator, Menu, X, MessageCircle, ChevronRight } from 'lucide-react';

interface NavbarProps {
  whatsappNumber: string;
  onOpenSettings: () => void;
  onNavigateToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  whatsappNumber,
  onOpenSettings,
  onNavigateToCalculator,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Calculadora', href: '#calculadora', highlight: true },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#calculadora') {
      onNavigateToCalculator();
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-purple-500/30 group-hover:border-purple-500 transition-all duration-300 purple-glow-sm">
              <Video className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                TRIVERT<span className="text-purple-500">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium -mt-1">
                Produtora Audiovisual
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  link.highlight
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onNavigateToCalculator}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs tracking-wide transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calculator className="w-4 h-4 text-purple-200" />
              <span>Simular Orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  link.highlight
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    : 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToCalculator();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/30"
            >
              <Calculator className="w-4 h-4" />
              <span>Simular Orçamento Agora</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
