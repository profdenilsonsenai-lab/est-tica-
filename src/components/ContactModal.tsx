import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, GraduationCap, UserCheck, ShieldCheck } from 'lucide-react';
import { COURSES, CLINICAL_PROCEDURES } from '../data/clinicData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: 'training' | 'clinic';
  defaultItem?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'training',
  defaultItem = ''
}) => {
  const [interest, setInterest] = useState<'training' | 'clinic'>(defaultInterest);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [item, setItem] = useState(defaultItem);

  useEffect(() => {
    setInterest(defaultInterest);
    setItem(defaultItem || (defaultInterest === 'training' ? COURSES[0].title : CLINICAL_PROCEDURES[0].name));
  }, [defaultInterest, defaultItem, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = interest === 'training'
      ? `Olá equipe da Dra. Paula Fischer! Meu nome é ${name}, tenho interesse na vaga/informações do treinamento: "${item}". Meu WhatsApp é ${phone}. Poderiam me enviar valores e próximas datas?`
      : `Olá equipe da Dra. Paula Fischer! Meu nome é ${name} e gostaria de agendar uma consulta para: "${item}". Meu WhatsApp é ${phone}. Quais os horários disponíveis?`;

    window.open(`https://wa.me/5511984521920?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FAF8F5] w-full max-w-md rounded-3xl p-6 sm:p-8 border border-[#E3DACD] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#4A4039] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DC] text-[#8C6D37] text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#9E7835]" />
            Atendimento Rápido VIP
          </div>
          <h3 className="text-2xl font-serif font-semibold text-[#1F1916]">
            {interest === 'training' ? 'Candidatura para Treinamento' : 'Agendamento de Consulta'}
          </h3>
          <p className="text-xs text-[#6B5D54] mt-1">
            Fale diretamente com nossa concierge exclusiva via WhatsApp.
          </p>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-2 gap-2 mb-4 bg-[#EFE9DF] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => {
              setInterest('training');
              setItem(COURSES[0].title);
            }}
            className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              interest === 'training'
                ? 'bg-[#9E7835] text-white shadow-xs'
                : 'text-[#61554E]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Treinamento VIP
          </button>
          <button
            type="button"
            onClick={() => {
              setInterest('clinic');
              setItem(CLINICAL_PROCEDURES[0].name);
            }}
            className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              interest === 'clinic'
                ? 'bg-[#1F1916] text-white shadow-xs'
                : 'text-[#61554E]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Consulta Clínica
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-[#4A4039] mb-1">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Dra. Juliana Meirelles"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#D5CABE] text-xs text-[#1F1916] focus:outline-hidden focus:border-[#9E7835]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#4A4039] mb-1">
              WhatsApp com DDD *
            </label>
            <input
              type="tel"
              required
              placeholder="(11) 98765-4321"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#D5CABE] text-xs text-[#1F1916] focus:outline-hidden focus:border-[#9E7835]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#4A4039] mb-1">
              {interest === 'training' ? 'Treinamento de interesse:' : 'Procedimento:'}
            </label>
            <select
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#D5CABE] text-xs text-[#1F1916] focus:outline-hidden focus:border-[#9E7835]"
            >
              {interest === 'training' ? (
                <>
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="Dúvida Geral sobre Treinamentos">Quero falar sobre todas as opções</option>
                </>
              ) : (
                <>
                  {CLINICAL_PROCEDURES.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Avaliação Global Estética">Avaliação Global com a Dra. Paula</option>
                </>
              )}
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 rounded-full bg-[#1F1916] hover:bg-[#3E342F] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#D8B46C]" />
            <span>Continuar para o WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
