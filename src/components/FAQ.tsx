import React, { useState } from 'react';
import { FAQS } from '../data/services';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#08080b] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas <span className="purple-gradient-text">Frequentes</span>
          </h2>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Respostas para as dúvidas mais comuns sobre o processo de orçamento, gravações e prazos de entrega.
          </p>
        </div>

        {/* Accordion FAQ items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-purple-500/50 bg-purple-950/20' : 'border-white/10 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-purple-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-purple-900/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
