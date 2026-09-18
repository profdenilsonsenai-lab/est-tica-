import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, GraduationCap, UserCheck, ShieldCheck } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NavbarProps {
  onOpenContactModal: (interest?: 'training' | 'clinic', selectedItem?: string) => void;
  activeTarget: 'all' | 'training' | 'clinic';
  setActiveTarget: (target: 'all' | 'training' | 'clinic') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContactModal,
  activeTarget,
  setActiveTarget
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Announcement top bar */}
      <div className="bg-[#1C1816] text-[#E8DEC8] px-4 py-1.5 text-xs font-medium tracking-wide text-center flex items-center justify-center gap-2 border-b border-[#3D342E]">
        <span className="inline-flex items-center gap-1.5 bg-[#B38D4A]/20 text-[#D8B46C] px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-[#D8B46C]" />
          Turmas Exclusivas 2026
        </span>
        <span className="hidden sm:inline">Vagas abertas para Imersão VIP Hands-On em Harmonização Facial.</span>
        <span className="sm:hidden">Imersão VIP Hands-On com vagas abertas.</span>
        <button
          onClick={() => {
            setActiveTarget('training');
            scrollToSection('treinamentos');
          }}
          className="underline hover:text-white transition-colors cursor-pointer ml-1 font-semibold"
        >
          Ver Vagas &rarr;
        </button>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 px-4 md:px-8 border-b ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-[#E3DACD] shadow-sm py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo brand */}
          <a
            href="#"
            className="flex flex-col text-left group transition-transform"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-xl md:text-2xl font-serif tracking-[0.2em] font-semibold text-[#1F1916] uppercase leading-none">
              Dra. Paula Fischer
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#8C6D37] font-medium mt-1">
              Biomédica Esteta • CRBM 57426
            </span>
          </a>

          {/* Target Audience Quick Pills (Desktop) */}
          <div className="hidden lg:flex items-center bg-[#EFE9DF] p-1 rounded-full border border-[#DED4C3]">
            <button
              onClick={() => setActiveTarget('all')}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                activeTarget === 'all'
                  ? 'bg-white text-[#1F1916] shadow-xs'
                  : 'text-[#61554E] hover:text-[#1F1916]'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => {
                setActiveTarget('training');
                scrollToSection('treinamentos');
              }}
              className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1.5 transition-all ${
                activeTarget === 'training'
                  ? 'bg-[#9E7835] text-white shadow-xs'
                  : 'text-[#61554E] hover:text-[#9E7835]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Para Profissionais da Saúde
            </button>
            <button
              onClick={() => {
                setActiveTarget('clinic');
                scrollToSection('procedimentos');
              }}
              className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1.5 transition-all ${
                activeTarget === 'clinic'
                  ? 'bg-[#1F1916] text-white shadow-xs'
                  : 'text-[#61554E] hover:text-[#1F1916]'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Para Pacientes da Clínica
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-7 text-sm font-medium text-[#4A4039]">
            <button
              onClick={() => scrollToSection('dra-paula')}
              className="hover:text-[#9E7835] transition-colors cursor-pointer"
            >
              A Dra. Paula
            </button>
            <button
              onClick={() => {
                setActiveTarget('training');
                scrollToSection('treinamentos');
              }}
              className="hover:text-[#9E7835] transition-colors cursor-pointer flex items-center gap-1"
            >
              Treinamentos VIP
              <span className="w-1.5 h-1.5 rounded-full bg-[#B38D4A]"></span>
            </button>
            <button
              onClick={() => {
                setActiveTarget('clinic');
                scrollToSection('procedimentos');
              }}
              className="hover:text-[#9E7835] transition-colors cursor-pointer"
            >
              Procedimentos
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="hover:text-[#9E7835] transition-colors cursor-pointer"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="hover:text-[#9E7835] transition-colors cursor-pointer"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#9E7835] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              id="nav-contact-button"
              onClick={() => onOpenContactModal(activeTarget === 'training' ? 'training' : 'clinic')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-[#1F1916] hover:bg-[#3D332D] active:scale-98 transition-all shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8B46C]" />
              Falar com a Concierge
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="xl:hidden p-2 rounded-lg text-[#2A2421] hover:bg-[#EFE9DF] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-4 pb-6 border-t border-[#E3DACD] bg-[#FAF8F5] px-2 flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 p-2 bg-[#F2EDE4] rounded-xl mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6D37] px-1">
                Escolha seu foco:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setActiveTarget('training');
                    scrollToSection('treinamentos');
                  }}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                    activeTarget === 'training'
                      ? 'bg-[#9E7835] text-white'
                      : 'bg-white text-[#4A4039] border border-[#DDD3C2]'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  Cursos & Treinamentos
                </button>
                <button
                  onClick={() => {
                    setActiveTarget('clinic');
                    scrollToSection('procedimentos');
                  }}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                    activeTarget === 'clinic'
                      ? 'bg-[#1F1916] text-white'
                      : 'bg-white text-[#4A4039] border border-[#DDD3C2]'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  Tratamentos Clínicos
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('dra-paula')}
              className="text-left py-2 px-3 text-[#2A2421] font-medium hover:bg-[#F2ECE3] rounded-lg transition-colors"
            >
              Sobre a Dra. Paula Fischer
            </button>
            <button
              onClick={() => scrollToSection('treinamentos')}
              className="text-left py-2 px-3 text-[#2A2421] font-medium hover:bg-[#F2ECE3] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Treinamentos e Imersões VIP</span>
              <span className="text-[10px] bg-[#9E7835] text-white px-2 py-0.5 rounded-full">Turmas 2026</span>
            </button>
            <button
              onClick={() => scrollToSection('procedimentos')}
              className="text-left py-2 px-3 text-[#2A2421] font-medium hover:bg-[#F2ECE3] rounded-lg transition-colors"
            >
              Protocolos Clínicos e Tratamentos
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-left py-2 px-3 text-[#2A2421] font-medium hover:bg-[#F2ECE3] rounded-lg transition-colors"
            >
              Segurança e Metodologia
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-left py-2 px-3 text-[#2A2421] font-medium hover:bg-[#F2ECE3] rounded-lg transition-colors"
            >
              Depoimentos de Alunos e Pacientes
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 px-3 text-[#2A2421] font-medium hover:bg-[#F2ECE3] rounded-lg transition-colors"
            >
              Perguntas Frequentes
            </button>

            <div className="pt-3 border-t border-[#E3DACD] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal('training');
                }}
                className="w-full py-3 bg-[#9E7835] text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center shadow-xs"
              >
                Candidatar-se a Vaga de Treinamento
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal('clinic');
                }}
                className="w-full py-3 bg-[#1F1916] text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center shadow-xs"
              >
                Agendar Consulta na Clínica
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
