import React from 'react';
import { DOCTOR_INFO } from '../data/clinicData';
import { Award, Shield, Check, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import draPaulaPortrait from '../assets/images/dra_paula_portrait_1789684313575.jpg';

export const AboutDoctor: React.FC = () => {
  return (
    <section id="dra-paula" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Signature Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Outer border container */}
              <div className="p-3 bg-white rounded-3xl shadow-xl border border-[#E5DCce]">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src={draPaulaPortrait}
                    alt="Dra. Paula Fischer - Especialista e Mentora"
                    className="w-full h-[460px] sm:h-[500px] object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xl font-serif font-bold tracking-wide">
                      {DOCTOR_INFO.name}
                    </div>
                    <div className="text-xs text-[#E8DEC8] mt-1 font-medium">
                      {DOCTOR_INFO.registration}
                    </div>
                  </div>
                </div>

                {/* Bottom quote note */}
                <div className="p-4 bg-[#FAF7F2] rounded-xl mt-3 border border-[#EDE4D6] text-center">
                  <p className="font-serif italic text-sm text-[#473B34]">
                    "A estética deve ressaltar quem você é, nunca mascarar quem você se tornou."
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C6D37] font-semibold mt-1 block">
                    — Dra. Paula Fischer
                  </span>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="absolute -top-3 -right-3 bg-[#1F1916] text-[#E8D39E] p-3 rounded-2xl shadow-lg border border-[#3E342F] text-center">
                <span className="text-2xl font-serif font-bold block leading-none">
                  {DOCTOR_INFO.experienceYears}+
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D3C7BD]">
                  Anos de Carreira
                </span>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
              Autoridade & Excelência Médica
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-6 tracking-tight leading-tight">
              Ciência cirúrgica, olhar artístico e o compromisso com a sua individualidade.
            </h2>

            <p className="text-base sm:text-lg text-[#52463F] leading-relaxed mb-6">
              Com mais de uma década dedicada à medicina estética de alta precisão, a <strong>Dra. Paula Fischer</strong> construiu 
              sua reputação aliando o rigor da anatomia vascular à sensibilidade artística. É pioneira na recusa de 
              padronizações que transformam rostos em cópias artificiais.
            </p>

            <p className="text-sm sm:text-base text-[#61544B] leading-relaxed mb-8">
              Como docente e mentora, fundou o instituto de treinamento para elevar a régua técnica da estética no Brasil. 
              Seus treinamentos transmitem o raciocínio clínico completo: desde o uso do ultrassom dermatológico no diagnóstico 
              até as técnicas mais avançadas com cânulas atraumáticas.
            </p>

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
          </div>
        </div>
      </div>
    </section>
  );
};
