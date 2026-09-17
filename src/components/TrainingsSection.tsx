import React, { useState } from 'react';
import { COURSES } from '../data/clinicData';
import { TrainingCourse } from '../types';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import clinicTrainingPhoto from '../assets/images/clinic_training_workshop_1789684323842.jpg';

interface TrainingsSectionProps {
  onOpenContactModal: (interest?: 'training' | 'clinic', selectedItem?: string) => void;
}

export const TrainingsSection: React.FC<TrainingsSectionProps> = ({ onOpenContactModal }) => {
  const [selectedCourse, setSelectedCourse] = useState<TrainingCourse>(COURSES[0]);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(COURSES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  return (
    <section id="treinamentos" className="py-20 md:py-28 bg-[#F4EFEA] relative overflow-hidden">
      {/* Background architectural accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EBE2D3]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5DCce] text-[#826430] text-xs font-semibold uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4 text-[#9E7835]" />
            Instituto de Ensino & Imersão Prática
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-5 tracking-tight">
            Treinamentos VIP para Injetores que Buscam a Alta Performance
          </h2>
          <p className="text-[#594C45] text-base md:text-lg leading-relaxed">
            Metodologia hands-on desenvolvida pela <strong>Dra. Paula Fischer</strong> com turmas 
            ultrarraduzidas (2 a 4 alunos) e prática real em pacientes-modelo. Elimine a insegurança 
            de intercorrências e atinja a perfeição técnica.
          </p>
        </div>

        {/* Highlight Banner: Why our training is different */}
        <div className="mb-16 bg-white rounded-2xl p-6 md:p-8 border border-[#E3DACD] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-md">
              <img
                src={clinicTrainingPhoto}
                alt="Treinamento VIP Hands-on na Clínica Dra. Paula Fischer"
                className="w-full h-64 md:h-72 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9E7835] block mb-2">
                O Diferencial do Instituto
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#1F1916] mb-4">
                Você não assiste da plateia. Você injeta com a Dra. Paula guiando sua mão.
              </h3>
              <p className="text-[#5A4E46] text-sm md:text-base leading-relaxed mb-6">
                Muitos cursos teóricos deixam o profissional desamparado na hora de aplicar no consultório.
                No Instituto Dra. Paula Fischer, nós disponibilizamos os pacientes, os produtos das 
                melhores marcas mundiais e o ultrassom dermatológico para visualização anatômica em tempo real.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-[#3E342F] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9E7835] shrink-0" />
                  <span>Máximo de 4 alunos por imersão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9E7835] shrink-0" />
                  <span>Pacientes-modelo inclusos e triados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9E7835] shrink-0" />
                  <span>Todos os injetáveis e cânulas fornecidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9E7835] shrink-0" />
                  <span>12 meses de mentoria continuada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid / Detailed Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#DDD3C2] pb-4">
            <h3 className="text-xl font-serif font-semibold text-[#1F1916]">
              Grade de Treinamentos e Imersões Oficiais
            </h3>
            <span className="text-xs font-medium text-[#7A685D]">
              Exclusivo para Médicos, Biomédicos, Dentistas HOF, Farmacêuticos e Enfermeiros Estetas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => {
              const isExpanded = expandedCourseId === course.id;

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-[#E3DACD] hover:border-[#C4A568] transition-all shadow-xs hover:shadow-md p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#F3EDE2] text-[#8C6D37] border border-[#E4D7C1]">
                        {course.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#6B5D54] font-medium">
                        <Users className="w-3.5 h-3.5 text-[#9E7835]" />
                        <span>Máx {course.maxStudents} alunos</span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h4 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F1916] mb-2 leading-snug">
                      {course.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#8A6A32] mb-4">
                      {course.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#594C45] leading-relaxed mb-5">
                      {course.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EFE8DC] mb-5">
                      <div className="text-xs font-semibold text-[#1F1916] flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
                        <span>Destaque Principal:</span>
                      </div>
                      <p className="text-xs text-[#61554E] font-medium">
                        {course.highlight}
                      </p>
                    </div>

                    {/* Meta info tags */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#52463F] mb-5">
                      <div className="flex items-center gap-1.5 bg-[#F6F1E9] p-2 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-[#9E7835]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F6F1E9] p-2 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-[#9E7835]" />
                        <span className="truncate">{course.nextDate}</span>
                      </div>
                    </div>

                    {/* Collapsible Curriculum Details */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-[#EFE8DC] space-y-4 animate-fadeIn">
                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[#9E7835]" />
                            Conteúdo Programático & Módulos:
                          </h5>
                          <ul className="space-y-1.5">
                            {course.modules.map((mod, idx) => (
                              <li key={idx} className="text-xs text-[#4F443E] flex items-start gap-2">
                                <span className="text-[#9E7835] font-bold shrink-0">•</span>
                                <span>{mod}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-[#1F1916] mb-2 flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#9E7835]" />
                            O que está incluso na sua inscrição:
                          </h5>
                          <ul className="space-y-1.5">
                            {course.includes.map((inc, idx) => (
                              <li key={idx} className="text-xs text-[#4F443E] flex items-start gap-2">
                                <span className="text-[#9E7835] font-bold shrink-0">✓</span>
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-2.5 bg-[#F8F4EE] rounded-lg text-[11px] text-[#695B52]">
                          <strong>Observação:</strong> {course.investmentNote}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 border-t border-[#EFE8DC] mt-4 flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleExpand(course.id)}
                      className="text-xs font-semibold text-[#8C6D37] hover:text-[#1F1916] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <span>Recolher Ementa</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Ver Grade Completa</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenContactModal('training', course.title)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#9E7835] hover:bg-[#856327] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Garantir Vaga</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="mt-14 bg-[#1F1916] text-[#F3EFE9] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#D4B066] font-semibold block mb-1">
              Atendimento Dedicado à Carreira Médica
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-2">
              Deseja uma consultoria sobre qual treinamento é ideal para o seu momento?
            </h3>
            <p className="text-xs sm:text-sm text-[#D3C7BD] leading-relaxed">
              Fale diretamente com nossa coordenadora pedagógica. Analisamos sua experiência 
              prévia para indicar a imersão com o maior retorno prático e financeiro para a sua clínica.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal('training', 'Consultoria Pedagógica com Coordenação')}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C29E2E] text-[#1A1412] font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg cursor-pointer"
          >
            Falar com a Coordenação de Cursos
          </button>
        </div>
      </div>
    </section>
  );
};
