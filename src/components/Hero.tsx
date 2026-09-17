import React from 'react';
import { Sparkles, GraduationCap, Calendar, ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import draPaulaPortrait from '../assets/images/dra_paula_portrait_1789684313575.jpg';
import clinicTrainingPhoto from '../assets/images/clinic_training_workshop_1789684323842.jpg';
import { DOCTOR_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenContactModal: (interest?: 'training' | 'clinic', selectedItem?: string) => void;
  onSelectTarget: (target: 'training' | 'clinic') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal, onSelectTarget }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5]">
      {/* Subtle architectural background aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#E8DCBE]/40 blur-3xl -mr-48"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#E5D7BF]/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Top authority badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DDD0BC] text-[#826430] w-fit mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B38D4A]" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Referência em Imersões Hands-On & Estética Facial
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-[#1F1916] leading-[1.12] tracking-tight mb-6">
              A maestria da anatomia facial aliada à <span className="italic font-normal text-[#8A6729]">mentoria médica de elite</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#52463F] font-normal leading-relaxed mb-8 max-w-2xl">
              Sob a liderança da <strong>Dra. Paula Fischer</strong>, proporcionamos tratamentos
              estéticos de refinamento natural e imersões práticas VIP para profissionais
              que desejam dominar injetáveis com segurança vascular absoluta.
            </p>

            {/* Dual CTAs tailored for both audiences */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <button
                id="hero-cta-training"
                onClick={() => {
                  onSelectTarget('training');
                  scrollTo('treinamentos');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#9E7835] hover:bg-[#856327] text-white font-medium text-sm tracking-wider uppercase transition-all shadow-md active:scale-98 group cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-[#F3E7CA]" />
                <span>Quero me Capacitar (Treinamentos)</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3E7CA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-cta-clinic"
                onClick={() => {
                  onSelectTarget('clinic');
                  scrollTo('procedimentos');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#1F1916] hover:bg-[#382F2A] text-white font-medium text-sm tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D8B46C]" />
                <span>Agendar Consulta na Clínica</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5DCce]">
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#1F1916]">
                  +{DOCTOR_INFO.trainedProfessionals}
                </div>
                <div className="text-xs text-[#6B5D54] mt-0.5 font-medium">
                  Injetores Capacitados
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#1F1916]">
                  +{DOCTOR_INFO.treatedPatients}
                </div>
                <div className="text-xs text-[#6B5D54] mt-0.5 font-medium">
                  Pacientes Atendidos
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#8A6729]">
                  Max. 4
                </div>
                <div className="text-xs text-[#6B5D54] mt-0.5 font-medium">
                  Alunos por Turma VIP
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#1F1916]">
                  12 Meses
                </div>
                <div className="text-xs text-[#6B5D54] mt-0.5 font-medium">
                  Mentoria Pós-Treinamento
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DED4C3] bg-white">
                <img
                  src={draPaulaPortrait}
                  alt="Dra. Paula Fischer - Médica Especialista em Estética Avançada e Mentora"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent"></div>

                {/* Legend at image bottom */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[11px] uppercase tracking-widest text-[#E8D39E] font-semibold">
                      Direção Clínica & Coordenação Acadêmica
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold leading-snug">
                    Dra. Paula Fischer
                  </h3>
                  <p className="text-xs text-[#E3D9D0]">
                    {DOCTOR_INFO.registration} • Speaker e Mentora de Harmonização Facial
                  </p>
                </div>
              </div>

              {/* Floating secondary badge 1: Hands-On Experience */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E3DACD] shadow-lg items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-full bg-[#F3ECE0] flex items-center justify-center shrink-0 text-[#8C6D37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F1916]">
                    Metodologia 90% Prática
                  </div>
                  <div className="text-[11px] text-[#6E6157] leading-tight">
                    Treinamento real em pacientes fornecidos
                  </div>
                </div>
              </div>

              {/* Floating secondary badge 2: Safety & Anatomy */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#E3DACD] shadow-lg items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#8C6D37]" />
                <span className="text-xs font-semibold text-[#1F1916]">
                  Mapeamento Vascular Guiado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
