import React, { useState } from 'react';
import { X, MessageCircle, Check, PhoneCall, RotateCcw } from 'lucide-react';

interface WhatsAppSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (newNumber: string) => void;
}

export const WhatsAppSettingsModal: React.FC<WhatsAppSettingsModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber,
}) => {
  const [tempNumber, setTempNumber] = useState(currentNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveNumber(tempNumber);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefault = () => {
    setTempNumber('5511999998888');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md glass-panel rounded-2xl p-6 border border-purple-500/40 shadow-2xl space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-green-950/80 border border-green-500/30 text-green-400">
              <MessageCircle className="w-5 h-5 fill-green-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Configurar WhatsApp
              </h3>
              <p className="text-[11px] text-zinc-400">
                Defina o número que receberá as cotações
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 flex items-center justify-between">
              <span>Número do WhatsApp (com DDD):</span>
              <button
                type="button"
                onClick={handleResetDefault}
                className="text-[10px] text-purple-400 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Padrão
              </button>
            </label>

            <div className="relative">
              <input
                type="text"
                value={tempNumber}
                onChange={(e) => setTempNumber(e.target.value)}
                placeholder="Ex: 5511999998888"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Insira o código do país + DDD + número. Exemplo para o Brasil: <code className="text-purple-300 font-mono">5511999998888</code>
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Salvo!</span>
                </>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4" />
                  <span>Salvar Número</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
