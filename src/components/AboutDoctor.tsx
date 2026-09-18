import React, { useState } from 'react';
import { DOCTOR_INFO, CLINIC_CONTACT } from '../data/clinicData';
import { Award, Shield, Check, HeartHandshake, Sparkles, MapPin, MessageCircle, Instagram } from 'lucide-react';
import draPaulaJaleco from '../assets/images/dra_paula_fischer_oficial.jpg';
import draPaulaLaserCo2 from '../assets/images/dra_paula_fischer_laser_co2.jpg';
import draPaulaAlunas from '../assets/images/dra_paula_fischer_alunas.jpg';

export const AboutDoctor: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'jaleco' | 'laser' | 'alunas'>('jaleco');

  const photoData = {
    jaleco: {
      src: draPaulaJaleco,
      title: 'Dra. Paula Fischer — Biomédica Esteta (CRBM 57426)',
      quote: '"Biomédica Esteta especialista em Plexr GMW, Laser CO2 e Protocolos Ortomoleculares"',
      tabLabel: '🥼 Perfil Oficial'
    },
    laser: {
      src: draPaulaLaserCo2,
      title: 'Laser CO2 Fracionado Fusion & Terapias Regenerativas',
      quote: '"Ciência • Tecnologia • Estética • Resultados Reais — Saúde, Beleza e Autoestima"',
      tabLabel: '🔬 Laser CO2 Fusion'
    },
    alunas: {
      src: draPaulaAlunas,
      title: 'Mentoria & Treinamento Hands-On com Alunas Habilitadas',
      quote: '"Ensino focado na prática real: você opera as tecnologias com segurança absoluta"',
      tabLabel: '👩‍🏫 Com as Alunas'
    }
  };

  const current = photoData[activePhoto];

  return (
    <section id="dra-paula" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Signature Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Outer border container */}
              <div className="p-3 bg-white rounded-3xl shadow-xl border border-[#E5DCce]">
                {/* Photo Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#F4EFE6] rounded-xl mb-2.5 text-xs">
                  <button
                    onClick={() => setActivePhoto('jaleco')}
                    className={`py-2 px-2 rounded-lg font-medium transition-all cursor-pointer text-center truncate ${
                      activePhoto === 'jaleco'
                        ? 'bg-white text-[#1F1916] shadow-xs font-semibold'
                        : 'text-[#6B5D54] hover:text-[#1F1916]'
                    }`}
                  >
                    <span>{photoData.jaleco.tabLabel}</span>
                  </button>
                  <button
                    onClick={() => setActivePhoto('laser')}
                    className={`py-2 px-2 rounded-lg font-medium transition-all cursor-pointer text-center truncate ${
                      activePhoto === 'laser'
                        ? 'bg-white text-[#1F1916] shadow-xs font-semibold'
                        : 'text-[#6B5D54] hover:text-[#1F1916]'
                    }`}
                  >
                    <span>{photoData.laser.tabLabel}</span>
                  </button>
                  <button
                    onClick={() => setActivePhoto('alunas')}
                    className={`py-2 px-2 rounded-lg font-medium transition-all cursor-pointer text-center truncate ${
                      activePhoto === 'alunas'
                        ? 'bg-white text-[#1F1916] shadow-xs font-semibold'
                        : 'text-[#6B5D54] hover:text-[#1F1916]'
                    }`}
                  >
                    <span>{photoData.alunas.tabLabel}</span>
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden relative aspect-[3/4] bg-[#F2ECE3]">
                  <img
                    src={current.src}
                    alt={current.title}
                    className="w-full h-full object-cover object-top transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/85 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-lg font-serif font-bold tracking-wide flex items-center justify-between">
                      <span>{DOCTOR_INFO.name}</span>
                      <span className="text-[10px] font-sans font-semibold bg-[#2D4A2D] px-2.5 py-0.5 rounded-full text-[#E8D39E] border border-[#B8986A]/40">
                        CRBM 57426
                      </span>
                    </div>
                    <div className="text-xs text-[#E8DEC8] mt-1 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B8986A]" /> Tatuapé, São Paulo - SP
                    </div>
                    <p className="text-[11px] text-[#CBBDAF] mt-1.5 italic line-clamp-2">
                      {current.quote}
                    </p>
                  </div>
                </div>

                {/* Bottom quote note */}
                <div className="p-4 bg-[#FAF7F2] rounded-xl mt-3 border border-[#EDE4D6] text-center">
                  <p className="font-serif italic text-xs sm:text-sm text-[#473B34] leading-relaxed">
                    "Cada procedimento é único — porque cada pessoa é única. A estética avançada une rigor científico à sensibilidade humana."
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#8C6D37] font-semibold">
                      — Dra. Paula Fischer • CRBM 57426
                    </span>
                    <a
                      href={CLINIC_CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#2D4A2D] hover:underline font-semibold"
                    >
                      <Instagram className="w-3 h-3 text-[#B8986A]" />
                      @drapaulafischer
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="absolute -top-3 -right-3 bg-[#2D4A2D] text-[#E8D39E] p-3 rounded-2xl shadow-lg border border-[#3D6B3A] text-center z-10">
                <span className="text-2xl font-serif font-bold block leading-none">
                  CRBM
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4E8CE]">
                  57426
                </span>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
              Ciência Aplicada com Propósito
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-6 tracking-tight leading-tight">
              Tecnologias de alta performance aliadas ao rigor científico e sensibilidade estética.
            </h2>

            <p className="text-base sm:text-lg text-[#52463F] leading-relaxed mb-6">
              Biomédica esteta com formação avançada em tecnologias de plasma, laser e protocolos ortomoleculares, a <strong>Dra. Paula Fischer</strong> une
              rigor científico à sensibilidade de quem entende que cada plano de tratamento deve respeitar a individualidade anatômica e a saúde celular.
            </p>

            <p className="text-sm sm:text-base text-[#61544B] leading-relaxed mb-6">
              Especialista certificada nas tecnologias <strong>Plexr GMW</strong> (plasma sublimativo de última geração) e <strong>Laser CO2 Fracionado Fusion</strong>,
              atua tanto em seu consultório no <strong>Tatuapé (São Paulo)</strong> quanto na formação de profissionais da saúde, com imersões e mentorias realizadas no Brasil e no exterior.
            </p>

            {/* Qualifications list */}
            <div className="mb-8 space-y-2">
              {DOCTOR_INFO.degrees.map((deg, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#473B34]">
                  <div className="w-4 h-4 rounded-full bg-[#EFE8DC] text-[#8C6D37] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="font-medium">{deg}</span>
                </div>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {DOCTOR_INFO.differentials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 rounded-xl border border-[#E7DECf] shadow-xs hover:border-[#9E7835] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#F4EFE6] text-[#9E7835] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <h4 className="font-serif font-semibold text-[#1F1916] text-sm sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66574D] leading-relaxed pl-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Contact Button */}
            <div className="mt-8 pt-6 border-t border-[#E7DECf] flex flex-wrap items-center gap-4">
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#2D4A2D] hover:bg-[#1F331F] text-[#F0EDE6] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#B8986A]" />
                <span>Agendar Consulta no Tatuapé (SP)</span>
              </a>
              <span className="text-xs text-[#7A6B60]">
                Atendimento presencial com avaliação minuciosa e individualizada.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
