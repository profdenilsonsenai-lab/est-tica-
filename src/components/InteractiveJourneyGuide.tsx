import React, { useState } from 'react';
import { Sparkles, GraduationCap, UserCheck, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

interface InteractiveJourneyGuideProps {
  onOpenContactModal: (interest: 'training' | 'clinic', selectedItem?: string) => void;
}

export const InteractiveJourneyGuide: React.FC<InteractiveJourneyGuideProps> = ({ onOpenContactModal }) => {
  const [profile, setProfile] = useState<'training' | 'clinic'>('training');

  // Professional Quiz State
  const [profession, setProfession] = useState('medico');
  const [experience, setExperience] = useState('intermediario');
  const [goal, setGoal] = useState('fullface');

  // Patient Quiz State
  const [concern, setConcern] = useState('flacidez');
  const [recoveryTime, setRecoveryTime] = useState('imediato');
  const [priority, setPriority] = useState('colageno');

  // Compute recommendation for professional
  const getTrainingRecommendation = () => {
    if (experience === 'avancado' || goal === 'mentoria') {
      return {
        title: 'VIP 1-on-1 Mentorship Individual',
        reason: 'Para quem já tem prática e busca o mais alto nível de refinamento personalizado sem dividir a atenção com outros alunos.',
        cta: 'Aplicar para Mentoria 1-on-1'
      };
    }
    if (goal === 'bioestimulo') {
      return {
        title: 'Masterclass Bioestimuladores & Fios de Sustentação',
        reason: 'O curso definitivo para você dominar sustentação tecidual sem volumização com Sculptra, Radiesse e Fios.',
        cta: 'Garantir Vaga na Masterclass'
      };
    }
    if (goal === 'gestao') {
      return {
        title: 'Consultório de Alto Padrão & Gestão de Luxo',
        reason: 'Focado em estratégia de posicionamento, atração de pacientes particulares de alto poder aquisitivo e precificação.',
        cta: 'Conhecer Imersão de Gestão'
      };
    }
    return {
      title: 'Imersão VIP Full Face Hands-On',
      reason: 'A formação mais completa: raciocínio anatômico global, prevenção de riscos e prática real em múltiplos pacientes.',
      cta: 'Solicitar Vaga na Imersão Full Face'
    };
  };

  // Compute recommendation for patient
  const getClinicRecommendation = () => {
    if (concern === 'olheiras') {
      return {
        title: 'Rejuvenescimento do Olhar & Suavização de Olheiras',
        reason: 'Elimina o aspecto cansado devolvendo luz ao terço superior sem dor e com retorno imediato.',
        cta: 'Agendar Consulta para Olhar Descansado'
      };
    }
    if (concern === 'labios') {
      return {
        title: 'Escultura Labial Couture',
        reason: 'Definição do arco do cupido, hidratação profunda e simetria respeitando a anatomia natural da sua boca.',
        cta: 'Agendar Consulta de Escultura Labial'
      };
    }
    if (priority === 'colageno' || concern === 'flacidez') {
      return {
        title: 'Protocolo Bioestímulo de Colágeno 360°',
        reason: 'A melhor tecnologia mundial para reestruturar a firmeza da pele por até 24 meses sem alterar seus traços.',
        cta: 'Agendar Avaliação de Bioestímulo'
      };
    }
    return {
      title: 'Harmonização Facial Naturalista',
      reason: 'Diagnóstico 3D completo e planejamento global para rejuvenescer de forma sofisticada e imperceptível.',
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
            Consultor de Jornada Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#1F1916] mb-3">
            Descubra o caminho exato para a sua necessidade
          </h2>
          <p className="text-sm sm:text-base text-[#5E5149]">
            Seja você um profissional buscando seu próximo salto de carreira ou uma paciente 
            planejando seu rejuvenescimento, receba uma indicação personalizada em poucos cliques.
          </p>
        </div>

        {/* Profile Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#E4DBCB] p-1.5 rounded-full flex gap-1 border border-[#D5CABB]">
            <button
              onClick={() => setProfile('training')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                profile === 'training'
                  ? 'bg-[#9E7835] text-white shadow-sm'
                  : 'text-[#54463F] hover:text-[#1F1916]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Sou Profissional da Saúde
            </button>
            <button
              onClick={() => setProfile('clinic')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                profile === 'clinic'
                  ? 'bg-[#1F1916] text-white shadow-sm'
                  : 'text-[#54463F] hover:text-[#1F1916]'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              Sou Paciente da Clínica
            </button>
          </div>
        </div>

        {/* Interactive Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E0D5C3] shadow-md">
          {profile === 'training' ? (
            /* PROFESSIONAL QUIZ */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Step 1 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    1. Sua Formação Profissional:
                  </label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="medico">Médico(a) / Dermatologista / Cirurgião</option>
                    <option value="biomedico">Biomédico(a) Esteta</option>
                    <option value="dentista">Cirurgião-Dentista / HOF</option>
                    <option value="farmaceutico">Farmacêutico(a) Esteta</option>
                    <option value="enfermeiro">Enfermeiro(a) Esteta</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    2. Sua Vivência com Injetáveis:
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="iniciante">Iniciando na estética / Pouca prática</option>
                    <option value="intermediario">Já aplico, mas sinto insegurança em áreas de risco</option>
                    <option value="avancado">Experiente, busco mentoria VIP refinada</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    3. Seu Maior Objetivo Atual:
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="fullface">Dominar Full Face & Preenchimento Global</option>
                    <option value="bioestimulo">Bioestimuladores de Colágeno & Fios PDO</option>
                    <option value="mentoria">Mentoria Individual 1-on-1 Exclusiva</option>
                    <option value="gestao">Atrair Pacientes de Alto Ticket & Gestão</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="bg-[#FAF7F2] border border-[#E5DAC8] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#9E7835] text-white">
                      Treinamento Recomendado
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
          ) : (
            /* PATIENT QUIZ */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Step 1 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    1. O Que Mais Incomoda no Espelho:
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="flacidez">Flacidez facial / Perda do contorno da mandíbula</option>
                    <option value="olheiras">Olhar cansado, olheiras profundas ou caídas</option>
                    <option value="labios">Lábios sem volume ou contorno desbotado</option>
                    <option value="rugas">Rugas na testa e linhas entre as sobrancelhas</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    2. Recuperação Desejada:
                  </label>
                  <select
                    value={recoveryTime}
                    onChange={(e) => setRecoveryTime(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="imediato">Retorno imediato às atividades sem marcas visíveis</option>
                    <option value="curto">Posso aguardar 24 a 48h de leve sensibilidade</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2">
                    3. Prioridade do Tratamento:
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#DCD0BD] bg-[#FAF8F5] text-xs font-medium text-[#2A2421] focus:outline-hidden focus:border-[#9E7835]"
                  >
                    <option value="colageno">Estímulo biológico duradouro (sem inchar o rosto)</option>
                    <option value="contorno">Redefinição milimétrica imediata de pontos de luz</option>
                    <option value="glow">Luminosidade, textura e qualidade da pele</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="bg-[#FAF7F2] border border-[#E5DAC8] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#1F1916] text-white">
                      Protocolo Clínico Ideal
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
                  className="shrink-0 px-6 py-3.5 rounded-full bg-[#1F1916] hover:bg-[#3B3029] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>{clinicRec.cta}</span>
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
