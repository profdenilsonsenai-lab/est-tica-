import React, { useState } from 'react';
import { CLINICAL_PROCEDURES } from '../data/clinicData';
import { Sparkles, Clock, CalendarCheck, ShieldCheck, Check, ArrowRight, Dna, Activity, Eye, Zap, Layers } from 'lucide-react';
import laserCo2Photo from '../assets/images/dra_paula_fischer_laser_co2.jpg';
import blefaroResultPhoto from '../assets/images/dra_paula_fischer_antes_depois_blefaro.jpg';
import manchasResultPhoto from '../assets/images/dra_paula_fischer_antes_depois_manchas.jpg';

interface ProceduresSectionProps {
  onOpenContactModal: (interest?: 'training' | 'clinic', selectedItem?: string) => void;
}

export const ProceduresSection: React.FC<ProceduresSectionProps> = ({ onOpenContactModal }) => {
  const [filter, setFilter] = useState<'all' | 'tecnologia' | 'facial' | 'rejuvenescimento'>('all');

  const filteredProcedures = filter === 'all'
    ? CLINICAL_PROCEDURES
    : CLINICAL_PROCEDURES.filter(p => p.category === filter);

  return (
    <section id="procedimentos" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
            Consultório Clínico • Tatuapé, São Paulo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-4 tracking-tight">
            Protocolos Clínicos & Tecnologias de Alta Performance
          </h2>
          <p className="text-[#5E5149] text-base md:text-lg leading-relaxed">
            Procedimentos conduzidos pela <strong>Dra. Paula Fischer</strong> (CRBM 57426) com as tecnologias padrão-ouro 
            <strong> Plexr GMW</strong>, <strong>Laser CO2 Fracionado Fusion</strong> e <strong>Protocolo Ortomolecular</strong>.
          </p>
        </div>

        {/* Featured Protocols 3-Card Showcase with Real Clinical Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Laser CO2 Fracionado Fusion */}
          <div className="bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE6] to-[#FAF8F5] rounded-3xl p-6 border border-[#E3D8C6] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#D9CEBC] mb-5 aspect-[4/3] bg-[#EFE8DC]">
                <img
                  src={laserCo2Photo}
                  alt="Dra. Paula Fischer operando Laser CO2 Fracionado Fusion com PRP"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#1F1916]/85 backdrop-blur-xs text-[#E8D39E] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#D4AF37]" />
                  Tecnologia Padrão-Ouro
                </div>
              </div>

              <span className="text-[11px] uppercase font-bold tracking-widest text-[#9E7835] block mb-1">
                Fototermólise Fracionada
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F1916] mb-2 leading-tight">
                Laser CO2 Fracionado Fusion
              </h3>
              <p className="text-xs sm:text-sm text-[#52463F] leading-relaxed mb-4">
                Remodelamento dérmico profundo para rugas, flacidez facial e cicatrizes de acne, combinado com bioestimulação regenerativa.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#423730]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Renovação celular e fechamento de poros</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Estímulo potente de neocolagênese profunda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Recuperação guiada com acompanhamento clínico</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenContactModal('clinic', 'Laser CO2 Fracionado Fusion')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1F1916] hover:bg-[#382F2A] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <span>Agendar Consulta: Laser CO2</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8B46C]" />
              </button>
            </div>
          </div>

          {/* Card 2: Blefaroplastia sem Cortes com Plexr GMW */}
          <div className="bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE6] to-[#FAF8F5] rounded-3xl p-6 border border-[#E3D8C6] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#D9CEBC] mb-5 aspect-[4/3] bg-[#2A2421] flex items-center justify-center">
                <img
                  src={blefaroResultPhoto}
                  alt="Resultado Clínico: Blefaroplastia sem Cortes com Plexr GMW pela Dra. Paula Fischer"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#2D4A2D]/90 backdrop-blur-xs text-[#E8D39E] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="w-3 h-3 text-[#E8D39E]" />
                  Caso Clínico • Portfólio
                </div>
              </div>

              <span className="text-[11px] uppercase font-bold tracking-widest text-[#9E7835] block mb-1">
                Plasma Sublimativo GMW
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F1916] mb-2 leading-tight">
                Blefaroplastia sem Cortes
              </h3>
              <p className="text-xs sm:text-sm text-[#52463F] leading-relaxed mb-4">
                Lifting de pálpebras sem cirurgia, sem bisturi e sem pontos. O plasma evapora o excesso de pele com recuperação ambulatorial rápida.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#423730]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Sem anestesia geral e sem internação hospitalar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Retração precisa da pele flácida do olhar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Recuperação guiada em 5 a 7 dias</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenContactModal('clinic', 'Blefaroplastia sem Cortes com Plexr')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1F1916] hover:bg-[#382F2A] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <span>Agendar Avaliação: Plexr GMW</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8B46C]" />
              </button>
            </div>
          </div>

          {/* Card 3: Tratamento de Manchas e Melasma */}
          <div className="bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE6] to-[#FAF8F5] rounded-3xl p-6 border border-[#E3D8C6] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#D9CEBC] mb-5 aspect-[4/3] bg-[#2A2421] flex items-center justify-center">
                <img
                  src={manchasResultPhoto}
                  alt="Resultado Clínico: Tratamento de Manchas e Melasma com Laser CO2 Fusion"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#2D4A2D]/90 backdrop-blur-xs text-[#E8D39E] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#E8D39E]" />
                  Caso Clínico • Portfólio
                </div>
              </div>

              <span className="text-[11px] uppercase font-bold tracking-widest text-[#9E7835] block mb-1">
                Uniformização Dérmica
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F1916] mb-2 leading-tight">
                Tratamento de Manchas & Melasma
              </h3>
              <p className="text-xs sm:text-sm text-[#52463F] leading-relaxed mb-4">
                Despigmentação controlada de hipercromias, melanoses solares e melasma resistente com equilíbrio celular seguro.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#423730]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Uniformização e clareamento progressivo da pele</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Sem efeito rebote — controle biológico do melanócito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9E7835] shrink-0" />
                  <span>Protocolo home care personalizado</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenContactModal('clinic', 'Tratamento de Manchas e Melasma')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1F1916] hover:bg-[#382F2A] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <span>Agendar Avaliação: Manchas</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8B46C]" />
              </button>
            </div>
          </div>
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
            Todos os Procedimentos ({CLINICAL_PROCEDURES.length})
          </button>
          <button
            onClick={() => setFilter('tecnologia')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'tecnologia'
                ? 'bg-[#2D4A2D] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#2D4A2D]'
            }`}
          >
            Laser CO2 & Plexr GMW
          </button>
          <button
            onClick={() => setFilter('facial')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'facial'
                ? 'bg-[#2D4A2D] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#2D4A2D]'
            }`}
          >
            Pálpebras & Harmonização
          </button>
          <button
            onClick={() => setFilter('rejuvenescimento')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'rejuvenescimento'
                ? 'bg-[#2D4A2D] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#2D4A2D]'
            }`}
          >
            Manchas & Protocolo Ortomolecular
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
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8A6E45] bg-[#F7F2EB] px-2.5 py-1 rounded-md">
                    {proc.category === 'facial' ? 'Pálpebras / Facial' : proc.category === 'tecnologia' ? 'Laser / Plasma' : 'Regeneração Celular'}
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
                  <div className="font-semibold text-[#1F1916] mb-1">Benefício Clínico:</div>
                  <p className="text-[#594C45]">{proc.benefit}</p>
                </div>

                <div className="space-y-1.5 mb-5 text-xs text-[#4C4039]">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#8C6D37] mb-1">
                    Destaques do protocolo:
                  </div>
                  {proc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2D4A2D] shrink-0" />
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

        {/* Philosophy Comparison Box */}
        <div className="mt-16 bg-[#F4EFE9] border border-[#DDD3C2] rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#9E7835]">
              O Manifesto da Dra. Paula Fischer
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1F1916] mt-2">
              Ciência aplicada à estética com propósito e naturalidade
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#DCD0BE] shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-serif font-semibold text-lg mb-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-xs font-bold">✓</div>
                O que entregamos no nosso consultório:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#473B34]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Tecnologias de ponta certificadas (Laser CO2 Fusion e Plexr GMW).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Lifting palpebral e ninfoplastia sem cortes cirúrgicos e sem cicatrizes lineares.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Protocolo ortomolecular exclusivo para recuperação acelerada de estrias e cicatrizes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Avaliação minuciosa e plano individualizado para cada paciente.</span>
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
                  <span>Procedimentos padronizados que descaracterizam a identidade individual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Equipamentos sem calibração ou sem procedência comprovada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Promessas milagrosas sem fundamentação científica e evidência clínica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87413B] font-bold">•</span>
                  <span>Atendimento impessoal ou sem acompanhamento pós-procedimento rigoroso.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
