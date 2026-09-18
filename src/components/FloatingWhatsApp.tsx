import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    window.open(CLINIC_CONTACT.whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2.5 bg-white text-[#2A2421] p-3 rounded-2xl shadow-xl border border-[#E3DACD] text-xs max-w-xs animate-fadeIn relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Fechar dica"
            className="absolute top-2 right-2 text-[#8C7D73] hover:text-[#1F1916] p-0.5 cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center justify-between font-semibold text-[#8C6D37] text-[11px] uppercase tracking-wider mb-1 pr-5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              WhatsApp Dra. Paula
            </div>
            <span className="text-[10px] text-[#554740] font-mono lowercase">11 96620-9116</span>
          </div>
          <p className="text-[11px] text-[#54463F] leading-snug">
            Fale diretamente com nossa concierge no WhatsApp <strong>{CLINIC_CONTACT.phone}</strong> para agendamentos e treinamentos VIP.
          </p>
        </div>
      )}

      <button
        id="floating-whatsapp-btn"
        onClick={handleClick}
        aria-label={`Conversar pelo WhatsApp da Clínica: ${CLINIC_CONTACT.phone}`}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold tracking-wide flex items-center gap-1.5">
          <span>WhatsApp</span>
          <span className="opacity-90 font-mono text-[11px]">11 96620-9116</span>
        </span>
      </button>
    </div>
  );
};
