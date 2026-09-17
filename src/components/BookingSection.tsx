import React, { useState } from 'react';
import { COURSES, CLINICAL_PROCEDURES, CLINIC_CONTACT } from '../data/clinicData';
import { 
  Send, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  UserCheck 
} from 'lucide-react';

interface BookingSectionProps {
  preselectedInterest?: 'training' | 'clinic';
  preselectedItem?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedInterest = 'training',
  preselectedItem
}) => {
  const [interest, setInterest] = useState<'training' | 'clinic'>(preselectedInterest);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [selectedCourseOrProc, setSelectedCourseOrProc] = useState(preselectedItem || '');
  const [period, setPeriod] = useState('manha');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Prepare WhatsApp personalized message
    const msg = interest === 'training'
      ? `Olá equipe Dra. Paula Fischer! Meu nome é ${name}, sou ${profession || 'profissional da saúde'} e tenho interesse no treinamento: "${selectedCourseOrProc || 'Geral'}". Meu WhatsApp é ${phone} e prefiro contato no período da ${period}. Mensagem adicional: ${notes || 'Sem observações'}`
      : `Olá equipe Dra. Paula Fischer! Meu nome é ${name} e gostaria de agendar uma consulta avaliativa para o procedimento: "${selectedCourseOrProc || 'Avaliação Global'}". Meu WhatsApp é ${phone} e prefiro contato no período da ${period}. Observação: ${notes || 'Sem observações'}`;

    const waUrl = `https://wa.me/5511984521920?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-[#1C1816] text-[#F3EFE9] relative overflow-hidden">
      {/* Subtle gold glow accents in dark luxury setting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9E7835]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332A24] text-[#D8B46C] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B46C]" />
              Atendimento Concierge VIP
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-6 leading-tight">
              Inicie sua jornada de excelência com a Dra. Paula Fischer.
            </h2>

            <p className="text-sm sm:text-base text-[#D3C6BC] leading-relaxed mb-8">
              Nossa equipe concierge oferece um atendimento atencioso e personalizado. 
              Para profissionais, auxiliamos na validação de pré-requisitos para os treinamentos. 
              Para pacientes, agendamos sua consulta avaliativa com tempo dedicado e sem pressa.
            </p>

            <div className="space-y-5 text-xs sm:text-sm text-[#E5DACE]">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#2E241E] flex items-center justify-center shrink-0 text-[#D8B46C] border border-[#473B32]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white mb-0.5">Endereço da Clínica & Instituto:</strong>
                  <span>{CLINIC_CONTACT.address}</span>
                  <span className="block text-[11px] text-[#A6978C] mt-0.5">
                    Serviço de manobrista no local • Estacionamento privativo com segurança
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#2E241E] flex items-center justify-center shrink-0 text-[#D8B46C] border border-[#473B32]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white mb-0.5">Telefone & WhatsApp Direto:</strong>
                  <span>{CLINIC_CONTACT.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#2E241E] flex items-center justify-center shrink-0 text-[#D8B46C] border border-[#473B32]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white mb-0.5">Horários de Atendimento:</strong>
                  <span>{CLINIC_CONTACT.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#2E241E] flex items-center justify-center shrink-0 text-[#D8B46C] border border-[#473B32]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white mb-0.5">Instagram Oficial:</strong>
                  <span>{CLINIC_CONTACT.instagram}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Application Form */}
          <div className="lg:col-span-7 bg-[#26201D] p-6 sm:p-10 rounded-3xl border border-[#3E342E] shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-sm text-[#D3C7BD] max-w-md mx-auto leading-relaxed">
                  Abrimos uma conversa prioritária no WhatsApp com nossa concierge. 
                  Você também receberá uma mensagem de confirmação em instantes.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#3B3029] text-[#E8DCCB] text-xs font-semibold uppercase tracking-wider hover:bg-[#4E3F35] transition-colors cursor-pointer"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Interest Toggle */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8B46C] mb-2">
                    Qual é o seu objetivo principal?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setInterest('training');
                        setSelectedCourseOrProc(COURSES[0].title);
                      }}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        interest === 'training'
                          ? 'bg-[#9E7835] text-white border-[#B38D4A]'
                          : 'bg-[#1C1816] text-[#A6978C] border-[#3D332C] hover:border-[#9E7835]'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                      Inscrição em Treinamento
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setInterest('clinic');
                        setSelectedCourseOrProc(CLINICAL_PROCEDURES[0].name);
                      }}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        interest === 'clinic'
                          ? 'bg-[#C5A059] text-[#1A1412] font-bold border-[#D4AF37]'
                          : 'bg-[#1C1816] text-[#A6978C] border-[#3D332C] hover:border-[#C5A059]'
                      }`}
                    >
                      <UserCheck className="w-4 h-4" />
                      Consulta na Clínica
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Mariana Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#1C1816] border border-[#3E342E] text-white text-xs placeholder-[#736359] focus:outline-hidden focus:border-[#D8B46C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#1C1816] border border-[#3E342E] text-white text-xs placeholder-[#736359] focus:outline-hidden focus:border-[#D8B46C]"
                    />
                  </div>
                </div>

                {/* Email & Profession / Reason */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#1C1816] border border-[#3E342E] text-white text-xs placeholder-[#736359] focus:outline-hidden focus:border-[#D8B46C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                      {interest === 'training' ? 'Sua Formação / Conselho *' : 'Cidade onde reside'}
                    </label>
                    <input
                      type="text"
                      placeholder={interest === 'training' ? 'Ex: Médica / CRM 12345' : 'Ex: São Paulo - SP'}
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#1C1816] border border-[#3E342E] text-white text-xs placeholder-[#736359] focus:outline-hidden focus:border-[#D8B46C]"
                    />
                  </div>
                </div>

                {/* Course or Procedure selection */}
                <div>
                  <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                    {interest === 'training' ? 'Treinamento de Interesse:' : 'Procedimento Desejado:'}
                  </label>
                  <select
                    value={selectedCourseOrProc}
                    onChange={(e) => setSelectedCourseOrProc(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#1C1816] border border-[#3E342E] text-white text-xs focus:outline-hidden focus:border-[#D8B46C]"
                  >
                    {interest === 'training' ? (
                      <>
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.title} className="bg-[#1C1816]">
                            {c.title} — ({c.duration})
                          </option>
                        ))}
                        <option value="Quero orientação pedagógica sobre todos os cursos" className="bg-[#1C1816]">
                          Gostaria de falar sobre todos os cursos
                        </option>
                      </>
                    ) : (
                      <>
                        {CLINICAL_PROCEDURES.map((p) => (
                          <option key={p.id} value={p.name} className="bg-[#1C1816]">
                            {p.name}
                          </option>
                        ))}
                        <option value="Avaliação Global com a Dra. Paula" className="bg-[#1C1816]">
                          Avaliação Global Personalizada
                        </option>
                      </>
                    )}
                  </select>
                </div>

                {/* Preferred Period */}
                <div>
                  <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                    Melhor período para contato:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['manha', 'tarde', 'noite'].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPeriod(p)}
                        className={`py-2 rounded-lg text-xs font-medium capitalize border transition-all cursor-pointer ${
                          period === p
                            ? 'bg-[#473A32] text-[#E8DEC8] border-[#9E7835]'
                            : 'bg-[#1C1816] text-[#8C7D73] border-[#382E28]'
                        }`}
                      >
                        {p === 'manha' ? 'Manhã' : p === 'tarde' ? 'Tarde' : 'Noite'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional notes */}
                <div>
                  <label className="block text-xs font-medium text-[#D3C7BD] mb-1">
                    Alguma observação ou dúvida prévia? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Conte-nos brevemente o que você espera..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#1C1816] border border-[#3E342E] text-white text-xs placeholder-[#736359] focus:outline-hidden focus:border-[#D8B46C]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#D4AF37] hover:bg-[#C49E27] text-[#1A1412] font-semibold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {interest === 'training'
                      ? 'Solicitar Reserva de Vaga via WhatsApp'
                      : 'Solicitar Horário de Consulta via WhatsApp'}
                  </span>
                </button>

                <p className="text-[11px] text-center text-[#99877C] leading-tight">
                  Seus dados estão protegidos sob sigilo médico e confidencialidade.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
