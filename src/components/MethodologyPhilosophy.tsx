import React from 'react';
import { ShieldAlert, Activity, Sparkles, Stethoscope, Lock, CheckCircle2 } from 'lucide-react';
import clinicInteriorPhoto from '../assets/images/clinic_interior_spa_1789684334548.jpg';

export const MethodologyPhilosophy: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-[#9E7835]" />
              Segurança Máxima & Precisão Tecnológica
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-6 tracking-tight leading-tight">
              Onde a sofisticação encontra o padrão cirúrgico de segurança.
            </h2>

            <p className="text-base text-[#544740] leading-relaxed mb-8">
              Na estética moderna, não há mais espaço para atuações às cegas. 
              Tanto no atendimento clínico aos nossos pacientes quanto na formação 
              de nossos alunos no instituto, aplicamos protocolos de segurança que são 
              referência acadêmica internacional.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] flex items-center justify-center shrink-0 text-[#9E7835] border border-[#E8DFC8]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#1F1916] mb-1">
                    Ultrassonografia Dermatológica de Alta Resolução
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] leading-relaxed">
                    Identificação ecográfica prévia de trajetos vasculares arteriais, profundidade muscular 
                    e preenchedores prévios, eliminando qualquer risco de oclusão.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] flex items-center justify-center shrink-0 text-[#9E7835] border border-[#E8DFC8]">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#1F1916] mb-1">
                    Protocolo Fischer de Blindagem em Intercorrências
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] leading-relaxed">
                    Farmacologia avançada, cálculo preciso de hialuronidase de alta dispersão e suporte 
                    imediato. Ensinamos e praticamos a conduta médica baseada em evidências.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] flex items-center justify-center shrink-0 text-[#9E7835] border border-[#E8DFC8]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#1F1916] mb-1">
                    Exclusividade e Sigilo Absoluto
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] leading-relaxed">
                    Salas privativas com isolamento acústico, entrada reservada e atendimento com intervalo 
                    estendido entre cada paciente para garantir discrição total.
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
                  src={clinicInteriorPhoto}
                  alt="Espaço da Clínica e Instituto Dra. Paula Fischer"
                  className="w-full h-[420px] sm:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float info card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#E5DAC8] shadow-xl max-w-xs sm:max-w-sm hidden sm:block">
                <div className="flex items-center gap-2 mb-2 text-[#9E7835]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    Conforto 5 Estrelas
                  </span>
                </div>
                <p className="text-xs text-[#52463F] leading-relaxed font-medium">
                  Arquitetura concebida para proporcionar desaceleração, bem-estar e uma experiência 
                  hospitalar boutique em São Paulo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
