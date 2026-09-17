import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/clinicData';
import { ChevronDown, ChevronUp, HelpCircle, GraduationCap, UserCheck, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenContactModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContactModal }) => {
  const [activeCategory, setActiveCategory] = useState<'training' | 'clinic'>('training');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = FAQ_ITEMS.filter(item => item.category === activeCategory);

  const toggleIndex = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DC] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#9E7835]" />
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#1F1916] mb-3">
            Tire suas dúvidas antes de agendar
          </h2>
          <p className="text-[#594C45] text-sm sm:text-base">
            Informações claras e transparentes sobre nossos treinamentos e nossos protocolos clínicos.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#ECE4D8] p-1 rounded-full flex gap-1 border border-[#DFD5C5]">
            <button
              onClick={() => {
                setActiveCategory('training');
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === 'training'
                  ? 'bg-[#9E7835] text-white shadow-xs'
                  : 'text-[#574941] hover:text-[#1F1916]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Dúvidas sobre Treinamentos
            </button>
            <button
              onClick={() => {
                setActiveCategory('clinic');
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === 'clinic'
                  ? 'bg-[#1F1916] text-white shadow-xs'
                  : 'text-[#574941] hover:text-[#1F1916]'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Dúvidas sobre a Clínica
            </button>
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E3DACD] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-semibold text-base sm:text-lg text-[#1F1916] hover:text-[#8C6D37] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#8C6D37] flex items-center justify-center shrink-0 border border-[#E5DAC8]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#544740] leading-relaxed border-t border-[#F2EDE4]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 text-center p-6 bg-[#F3EDE3] rounded-2xl border border-[#E0D5C3]">
          <p className="text-xs sm:text-sm text-[#52463F] font-medium mb-3">
            Não encontrou a resposta que procurava?
          </p>
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1916] hover:bg-[#382E28] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            Conversar com a Equipe pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
