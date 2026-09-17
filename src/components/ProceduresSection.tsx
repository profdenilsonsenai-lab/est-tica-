import React, { useState } from 'react';
import { CLINICAL_PROCEDURES } from '../data/clinicData';
import { ClinicalProcedure } from '../types';
import { Sparkles, Clock, CalendarCheck, ShieldCheck, Check, ArrowRight, Heart } from 'lucide-react';

interface ProceduresSectionProps {
  onOpenContactModal: (interest?: 'training' | 'clinic', selectedItem?: string) => void;
}

export const ProceduresSection: React.FC<ProceduresSectionProps> = ({ onOpenContactModal }) => {
  const [filter, setFilter] = useState<'all' | 'facial' | 'rejuvenescimento' | 'tecnologia'>('all');

  const filteredProcedures = filter === 'all'
    ? CLINICAL_PROCEDURES
    : CLINICAL_PROCEDURES.filter(p => p.category === filter);

  return (
    <section id="procedimentos" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DC] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
            A Clínica • Procedimentos Exclusivos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-4 tracking-tight">
            Protocolos de Refinamento e Juventude Natural
          </h2>
          <p className="text-[#5E5149] text-base md:text-lg leading-relaxed">
            Tratamentos individualizados planejados sob medida para valorizar a sua beleza singular.
            Trabalhamos exclusivamente com marcas padrão-ouro mundial e tecnologias biocompatíveis.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1F1916] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            Todos os Protocolos ({CLINICAL_PROCEDURES.length})
          </button>
          <button
            onClick={() => setFilter('facial')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'facial'
                ? 'bg-[#9E7835] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            Harmonização e Contorno Facial
          </button>
          <button
            onClick={() => setFilter('rejuvenescimento')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'rejuvenescimento'
                ? 'bg-[#9E7835] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            Bioestímulo & Firmeza de Pele
          </button>
          <button
            onClick={() => setFilter('tecnologia')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'tecnologia'
                ? 'bg-[#9E7835] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            Glow & Qualidade Cutânea
          </button>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProcedures.map((proc) => (
            <div
              key={proc.id}
              className="bg-white rounded-2xl border border-[#E5DCD0] hover:border-[#9E7835] transition-all shadow-xs hover:shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7835] bg-[#F7F2EB] px-2.5 py-1 rounded-md">
                    {proc.category === 'facial' ? 'Harmonização' : proc.category === 'rejuvenescimento' ? 'Bioestimulador' : 'Glow & Pele'}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#736359]">
                    <Clock className="w-3.5 h-3.5 text-[#9E7835]" />
                    <span>{proc.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#1F1916] mb-2 leading-snug">
                  {proc.name}
                </h3>
                <p className="text-xs text-[#6B5D54] leading-relaxed mb-4">
                  {proc.summary}
                </p>

                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EDE4D6] mb-4 text-xs">
                  <div className="font-semibold text-[#1F1916] mb-1">Resultado Esperado:</div>
                  <p className="text-[#594C45]">{proc.benefit}</p>
                </div>

                <div className="space-y-1.5 mb-5 text-xs text-[#4C4039]">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#8C6D37] mb-1">
                    Diferenciais do protocolo:
                  </div>
                  {proc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0] flex items-center justify-between">
                <span className="text-[11px] text-[#7A6B62]">
                  Recuperação: <strong className="text-[#1F1916]">{proc.downtime.split(',')[0]}</strong>
                </span>
                <button
                  onClick={() => onOpenContactModal('clinic', proc.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D37] hover:text-[#1F1916] transition-colors cursor-pointer"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Comparison Box: Naturalidade vs Artificialidade */}
        <div className="mt-16 bg-[#F4EFE9] border border-[#DDD3C2] rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#9E7835]">
              O Manifesto da Dra. Paula Fischer
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1F1916] mt-2">
              Por que dizemos NÃO a rostos padronizados
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#DCD0BE] shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-serif font-semibold text-lg mb-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-xs font-bold">✓</div>
                O que entregamos na nossa clínica:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#473B34]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Harmonia que preserva a identidade e o dinamismo do sorriso.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Estímulo do seu próprio colágeno para sustentação a longo prazo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Planejamento em etapas conservadoras: você sempre no controle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Procedimentos com anestesia confortável e sem cortes cirúrgicos.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EFE7DC] p-6 rounded-xl border border-[#D9CEBC]">
              <div className="flex items-center gap-2 text-[#783933] font-serif font-semibold text-lg mb-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#783933] text-xs font-bold">✕</div>
                O que recusamos expressamente:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#54443E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Mandíbulas excessivamente quadradas ou rostos inflados ("pillow face").</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Lábios desproporcionais que perdem a anatomia natural do arco do cupido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Sobrecarga de produtos sem indicação clínica real.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Execução rápida sem estudo individualizado do formato craniofacial.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
