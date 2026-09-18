import React from 'react';
import { ShieldCheck, Activity, Sparkles, Zap, Dna, CheckCircle2, Award } from 'lucide-react';
import draPaulaConsultaPhoto from '../assets/images/dra_paula_fischer_consulta.jpg';

export const MethodologyPhilosophy: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D4A2D]" />
              Ciência, Tecnologia & Resultados Reais
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-6 tracking-tight leading-tight">
              Onde a sofisticação encontra o rigor científico de alta tecnologia.
            </h2>

            <p className="text-base text-[#544740] leading-relaxed mb-8">
              Na estética moderna, não há mais espaço para atuações empíricas ou padronizadas. 
              Tanto no atendimento clínico aos pacientes quanto na formação de profissionais da saúde, 
              a <strong>Dra. Paula Fischer</strong> aplica protocolos fundamentados em biofísica, farmacologia e evidências clínicas.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] flex items-center justify-center shrink-0 text-[#2D4A2D] border border-[#E8DFC8]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#1F1916] mb-1">
                    Laser CO2 Fracionado Fusion & Fototermólise Seletiva
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] leading-relaxed">
                    Microcolunas de energia térmica com precisão absoluta, promovendo remodelamento profundo do colágeno, 
                    renovação epidérmica e tratamento eficaz de cicatrizes e rugas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] flex items-center justify-center shrink-0 text-[#2D4A2D] border border-[#E8DFC8]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#1F1916] mb-1">
                    Plasma Sublimativo Plexr GMW (Sem Cortes)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] leading-relaxed">
                    Tecnologia de plasma de alta frequência que atua sem contato direto com a pele, criando microlesões 
                    controladas que retraem pálpebras (blefaroplastia) e pequenos lábios sem bisturi e sem cicatrizes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] flex items-center justify-center shrink-0 text-[#2D4A2D] border border-[#E8DFC8]">
                  <Dna className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#1F1916] mb-1">
                    Protocolo Ortomolecular para Estrias & Cicatrizes
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] leading-relaxed">
                    Abordagem integrativa que potencializa os resultados do laser e plasma com suporte ortomolecular individualizado, 
                    acelerando a regeneração celular de forma segura e duradoura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interior Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E5DAC8]">
                <img
                  src={draPaulaConsultaPhoto}
                  alt="Dra. Paula Fischer em consulta clínica individualizada no Tatuapé"
                  className="w-full aspect-[4/3] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float info card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#E5DAC8] shadow-xl max-w-xs sm:max-w-sm hidden sm:block">
                <div className="flex items-center gap-2 mb-2 text-[#2D4A2D]">
                  <Sparkles className="w-4 h-4 text-[#B8986A]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F1916]">
                    Dra. Paula Fischer • CRBM 57426
                  </span>
                </div>
                <p className="text-xs text-[#52463F] leading-relaxed font-medium">
                  "Ciência • Tecnologia • Estética • Resultados Reais — Saúde, Beleza e Autoestima." Consultório no Tatuapé, São Paulo - SP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
