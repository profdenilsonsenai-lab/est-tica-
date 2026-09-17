import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, GraduationCap, UserCheck, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'student' | 'patient'>('all');

  const filtered = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.type === filter);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F5EFE8] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DEC8] text-[#8C6D37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7835]" />
            Experiências Reais & Transformações
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#1F1916] mb-4 tracking-tight">
            A voz de quem vivencia nossa prática e nosso ensino
          </h2>
          <p className="text-[#594C45] text-base md:text-lg leading-relaxed">
            De profissionais que alcançaram a autonomia cirúrgica em seus consultórios a pacientes 
            que redescobriram sua melhor versão no espelho.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1F1916] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            Todos os Depoimentos
          </button>
          <button
            onClick={() => setFilter('student')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
              filter === 'student'
                ? 'bg-[#9E7835] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Alunos & Mentorados
          </button>
          <button
            onClick={() => setFilter('patient')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
              filter === 'patient'
                ? 'bg-[#1F1916] text-white shadow-xs'
                : 'bg-white text-[#52463F] border border-[#DDD4C5] hover:border-[#9E7835]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Pacientes da Clínica
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DAC8] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      t.type === 'student'
                        ? 'bg-[#F2ECE0] text-[#9E7835]'
                        : 'bg-[#F0EAE1] text-[#473B34]'
                    }`}
                  >
                    {t.type === 'student' ? 'Capacitação Profissional' : 'Paciente da Clínica'}
                  </span>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Highlight Badge */}
                {t.metricHighlight && (
                  <div className="mb-4 text-xs font-semibold text-[#8C6D37] bg-[#FAF6F0] p-2 rounded-lg border border-[#EDE2CE]">
                    ✦ {t.metricHighlight}
                  </div>
                )}

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-[#54463F] leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#F2ECE3] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE8DC] text-[#7A5F2C] font-serif font-bold flex items-center justify-center text-sm shrink-0 border border-[#DFD3BE]">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1F1916]">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#73645B] leading-tight">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-[#99877C] mt-0.5">
                    {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
