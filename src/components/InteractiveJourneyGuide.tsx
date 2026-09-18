import React, { useState } from 'react';
import { Sparkles, GraduationCap, UserCheck, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

interface InteractiveJourneyGuideProps {
  onOpenContactModal: (interest: 'training' | 'clinic', selectedItem?: string) => void;
}

export const InteractiveJourneyGuide: React.FC<InteractiveJourneyGuideProps> = ({ onOpenContactModal }) => {
  const [profile, setProfile] = useState<'clinic' | 'training'>('clinic');

  // Professional Quiz State
  const [profession, setProfession] = useState('biomedico');
  const [experience, setExperience] = useState('intermediario');
  const [goal, setGoal] = useState('laser');

  // Patient Quiz State
  const [concern, setConcern] = useState('palpebras');
  const [recoveryTime, setRecoveryTime] = useState('curto');
  const [priority, setPriority] = useState('tecnologia');

  // Compute recommendation for professional
  const getTrainingRecommendation = () => {
    if (experience === 'avancado' || goal === 'mentoria') {
      return {
        title: 'VIP Day 1-on-1: Imersão Prática Exclusiva',
        reason: 'Dia inteiro com consultório dedicado exclusivamente a você, operando Laser CO2 e Plexr GMW sob mentoria direta da Dra. Paula Fischer.',
        cta: 'Aplicar para VIP Day 1-on-1'
      };
    }
    if (goal === 'laser') {
      return {
        title: 'Formação Avançada em Laser CO2 Fracionado Fusion',
        reason: 'Domine fototermólise seletiva, parametrização segura de energia e protocolos associados de fatores de crescimento.',
        cta: 'Garantir Vaga no Curso Laser CO2'
      };
    }
    if (goal === 'plexr') {
      return {
        title: 'Capacitação em Plasma Sublimativo Plexr GMW',
        reason: 'O curso de referência para blefaroplastia sem cortes, estética íntima e retração dérmica sem bisturi.',
        cta: 'Garantir Vaga no Curso Plexr'
      };
    }
    return {
      title: 'Protocolos Ortomoleculares para Estrias & Cicatrizes',
      reason: 'Aprenda a abordagem integrativa que une regeneração celular, ortomolecular e tecnologias para resultados duradouros.',
      cta: 'Conhecer Imersão Ortomolecular'
    };
  };

  // Compute recommendation for patient
  const getClinicRecommendation = () => {
    if (concern === 'palpebras') {
      return {
        title: 'Blefaroplastia sem Cortes com Plexr GMW',
        reason: 'Lifting de pálpebras caídas sem cirurgia, sem anestesia geral e sem cicatrizes. Retração dérmica segura com tecnologia italiana de plasma.',
        cta: 'Agendar Avaliação de Blefaroplastia'
      };
    }
    if (concern === 'manchas') {
      return {
        title: 'Tratamento de Manchas, Melasma & Uniformização',
        reason: 'Despigmentação segura com Laser CO2 Fusion e controle celular para uniformizar o tom da pele sem efeito rebote.',
        cta: 'Agendar Consulta para Manchas'
      };
    }
    if (concern === 'estrias') {
      return {
        title: 'Protocolo Ortomolecular para Estrias & Cicatrizes',
        reason: 'Abordagem celular exclusiva da Dra. Paula Fischer que regenera o colágeno dérmico e suaviza cicatrizes com alta previsibilidade.',
        cta: 'Agendar Avaliação Ortomolecular'
      };
    }
    if (concern === 'rugas' || priority === 'tecnologia') {
      return {
        title: 'Laser CO2 Fracionado Fusion & Rejuvenescimento Profundo',
        reason: 'Padrão-ouro em renovação da pele, fechamento de poros e neocolagênese profunda para linhas finas e flacidez.',
        cta: 'Agendar Sessão de Laser CO2'
      };
    }
    return {
      title: 'Harmonização Facial Natural & Bioestimuladores',
      reason: 'Planejamento individualizado que respeita sua anatomia craniofacial, devolvendo sustentação sem exageros ou rostos padronizados.',
      cta: 'Agendar Avaliação Global'
    };
  };

  const trainingRec = getTrainingRecommendation();
  const clinicRec = getClinicRecommendation();

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F2ECE3] to-[#FAF8F5] border-y border-[#E6DDCF]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5DCCE] text-[#826430] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
            Consultor Clínico Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#1F1916] mb-3">
            Descubra o protocolo ou treinamento exato para você
          </h2>
          <p className="text-sm sm:text-base text-[#5E5149]">
            Seja você uma paciente buscando rejuvenescimento com tecnologias avançadas ou um profissional 
            em busca de formação prática de elite com a Dra. Paula Fischer.
          </p>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#EAE2D5] p-1.5 rounded-full inline-flex border border-[#D9CEBC] shadow-xs">
            <button
              onClick={() => setProfile('clinic')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                profile === 'clinic'
                  ? 'bg-[#1F1916] text-white shadow-xs'
                  : 'text-[#5C4F47] hover:text-[#1F1916]'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Sou Paciente (Tratamentos)</span>
            </button>
            <button
              onClick={() => setProfile('training')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                profile === 'training'
                  ? 'bg-[#9E7835] text-white shadow-xs'
                  : 'text-[#5C4F47] hover:text-[#1F1916]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Sou Profissional (Cursos)</span>
            </button>
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E0D5C5] shadow-lg">
          {profile === 'clinic' ? (
            /* PATIENT QUIZ */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Step 1 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    1. Sua Principal Queixa ou Desejo:
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="palpebras">Pálpebras caídas / Flacidez nos olhos (Blefaro)</option>
                    <option value="manchas">Manchas solares, Melasma ou Tom irregular</option>
                    <option value="rugas">Rugas, Poros abertos ou Cicatrizes de acne</option>
                    <option value="estrias">Estrias corporais ou Cicatrizes inestéticas</option>
                    <option value="harmonizacao">Sustentação facial e Contorno natural</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    2. Tempo de Recuperação Aceitável:
                  </label>
                  <select
                    value={recoveryTime}
                    onChange={(e) => setRecoveryTime(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="imediato">Retorno imediato às atividades habituais</option>
                    <option value="curto">3 a 7 dias de casquinhas finas para resultado máximo</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    3. Preferência de Tecnologia:
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="tecnologia">Tecnologias consagradas (Laser CO2 / Plexr Plasma)</option>
                    <option value="ortomolecular">Protocolo Ortomolecular e Biológico</option>
                    <option value="injetavel">Bioestimuladores de colágeno injetáveis</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="bg-[#FAF7F2] border border-[#E5DAC8] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#1F1916] text-white">
                      Protocolo Clínico Indicado
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
                    {clinicRec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] mt-1 max-w-xl">
                    {clinicRec.reason}
                  </p>
                </div>

                <button
                  onClick={() => onOpenContactModal('clinic', clinicRec.title)}
                  className="shrink-0 px-6 py-3.5 rounded-full bg-[#1F1916] hover:bg-[#382F2A] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>{clinicRec.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#D8B46C]" />
                </button>
              </div>
            </div>
          ) : (
            /* PROFESSIONAL QUIZ */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Step 1 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    1. Sua Formação na Saúde:
                  </label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="biomedico">Biomédica(o) Esteta</option>
                    <option value="medico">Médica(o)</option>
                    <option value="dentista">Cirurgiã(o)-Dentista</option>
                    <option value="farmaceutico">Farmacêutica(o) Esteta</option>
                    <option value="enfermeiro">Enfermeira(o) Esteta</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    2. Sua Prática Atual:
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="iniciante">Quero aprender a operar Laser CO2 e Plexr</option>
                    <option value="intermediario">Já aplico injetáveis e busco tecnologias avançadas</option>
                    <option value="avancado">Experiente, busco mentoria VIP 1-on-1</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    3. Tecnologia de Maior Interesse:
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="laser">Laser CO2 Fracionado Fusion & PRP</option>
                    <option value="plexr">Plasma Sublimativo Plexr GMW</option>
                    <option value="ortomolecular">Protocolo Ortomolecular (Estrias/Cicatrizes)</option>
                    <option value="mentoria">VIP Day 1-on-1 com a Dra. Paula Fischer</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="bg-[#FAF7F2] border border-[#E5DAC8] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#9E7835] text-white">
                      Formação Recomendada
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
                    {trainingRec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61534B] mt-1 max-w-xl">
                    {trainingRec.reason}
                  </p>
                </div>

                <button
                  onClick={() => onOpenContactModal('training', trainingRec.title)}
                  className="shrink-0 px-6 py-3.5 rounded-full bg-[#9E7835] hover:bg-[#856327] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>{trainingRec.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
