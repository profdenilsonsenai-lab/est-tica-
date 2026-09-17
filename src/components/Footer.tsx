import React from 'react';
import { CLINIC_CONTACT, DOCTOR_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Instagram, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#14100E] text-[#B8AAA0] pt-16 pb-12 border-t border-[#2B231E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#29221C]">
          {/* Brand & Credential */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-serif tracking-[0.2em] font-semibold text-[#EDE4DA] uppercase mb-1">
              Dra. Paula Fischer
            </h3>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-4">
              Clínica & Instituto de Estética Avançada
            </p>
            <p className="text-xs text-[#99897E] leading-relaxed mb-4">
              Referência em harmonização facial anatômica naturalista e mentoria prática VIP 
              para profissionais da saúde estética.
            </p>
            <div className="text-[11px] text-[#A8988C] font-mono bg-[#1E1815] p-3 rounded-xl border border-[#302621]">
              <strong>Responsável Técnica:</strong> Dra. Paula Fischer<br />
              {DOCTOR_INFO.registration}
            </div>
          </div>

          {/* Quick links: Treinamentos */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D8B46C] mb-4">
              Instituto & Ensino
            </h4>
            <ul className="space-y-2 text-xs text-[#C5B7AC]">
              <li>
                <button
                  onClick={() => scrollTo('treinamentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Imersão VIP Full Face Hands-On
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('treinamentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Masterclass Bioestimuladores & Fios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('treinamentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  VIP 1-on-1 Mentorship Individual
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('treinamentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Consultório de Alto Padrão & Gestão
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('metodologia')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ultrassonografia & Zonas de Risco
                </button>
              </li>
            </ul>
          </div>

          {/* Quick links: A Clínica */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D8B46C] mb-4">
              Tratamentos Clínicos
            </h4>
            <ul className="space-y-2 text-xs text-[#C5B7AC]">
              <li>
                <button
                  onClick={() => scrollTo('procedimentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Harmonização Naturalista
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('procedimentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bioestímulo 360°
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('procedimentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Rejuvenescimento do Olhar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('procedimentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Escultura Labial Couture
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('procedimentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Toxina Preventiva Dinâmica
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D8B46C] mb-4">
              Atendimento Concierge
            </h4>
            <p className="text-xs text-[#C5B7AC] mb-2 leading-relaxed">
              {CLINIC_CONTACT.address}
            </p>
            <p className="text-xs text-[#C5B7AC] mb-2">
              WhatsApp: <strong className="text-white">{CLINIC_CONTACT.phone}</strong>
            </p>
            <p className="text-xs text-[#C5B7AC] mb-4">
              Instagram: <strong className="text-white">{CLINIC_CONTACT.instagram}</strong>
            </p>
            <div className="flex items-center gap-2 text-xs text-[#948479]">
              <ShieldCheck className="w-4 h-4 text-[#D8B46C]" />
              <span>Ambiente regulamentado pela Vigilância Sanitária</span>
            </div>
          </div>
        </div>

        {/* Ethical Medical Disclaimer */}
        <div className="pt-8 pb-4 text-[11px] text-[#7A6B62] leading-relaxed space-y-2 text-justify sm:text-left">
          <p>
            <strong>Aviso Legal Ético:</strong> As informações contidas neste website têm objetivo estritamente 
            educativo e institucional, em consonância com as resoluções vigentes do Conselho Federal de Medicina (CFM) 
            e Conselhos Federais das Classes da Saúde autorizadas. Os resultados de procedimentos estéticos e imersões de 
            treinamento dependem de avaliação anatômica individual, histórico clínico e características biológicas particulares, 
            sendo vedada qualquer promessa absoluta de resultado. Os treinamentos são direcionados exclusivamente a profissionais 
            graduados e habilitados nos termos da legislação sanitária brasileira.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#241D19] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6C63]">
          <div>
            © {new Date().getFullYear()} Clínica & Instituto Dra. Paula Fischer. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Privacidade & LGPD</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Manual do Aluno</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
