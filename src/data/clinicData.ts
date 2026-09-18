import { TrainingCourse, ClinicalProcedure, Testimonial, FaqItem } from '../types';

export const DOCTOR_INFO = {
  name: 'Dra. Paula Fischer',
  title: 'Biomédica Esteta • CRBM 57426 • Especialista em Laser CO2 Fusion, Plexr GMW e Terapias Regenerativas',
  registration: 'CRBM 57426 • Biomédica Esteta',
  city: 'Tatuapé, São Paulo - SP',
  experienceYears: 12,
  trainedProfessionals: 850,
  treatedPatients: 4200,
  satisfactionRate: 99.6,
  bio: 'Biomédica esteta com formação avançada em tecnologias de plasma, laser e protocolos ortomoleculares, a Dra. Paula Fischer une rigor científico à sensibilidade de quem entende que cada procedimento é único — porque cada pessoa é única. Especialista certificada nas tecnologias Plexr GMW e Laser CO2 Fracionado Fusion, atua em seu consultório no Tatuapé (São Paulo) e na formação de profissionais da saúde, com imersões presenciais realizadas no Brasil e no exterior.',
  differentials: [
    {
      title: 'Ciência, Tecnologia & Resultados Reais',
      description: 'Tecnologias de alta performance — Plexr GMW, Laser CO2 Fracionado Fusion e Protocolo Ortomolecular — aplicadas com rigor científico.'
    },
    {
      title: 'Especialista em Plexr GMW & Laser CO2',
      description: 'Pioneirismo em blefaroplastia e ninfoplastia sem cortes com plasma sublimativo real e fototermólise fracionada.'
    },
    {
      title: 'Cursos & Imersões Presenciais VIP',
      description: 'Capacitação prática hands-on exclusiva para profissionais da saúde habilitados, com certificação chancelada.'
    },
    {
      title: 'Locação Profissional FT Laser Tech',
      description: 'Disponibilização de equipamentos de ponta (Laser CO2 e Plexr) com suporte técnico especializado para clínicas.'
    }
  ],
  degrees: [
    'Biomédica Esteta — CRBM 57426',
    'Especialista em Laser CO2 Fracionado Fusion',
    'Especialista Certificada em Plexr GMW (Plasma Sublimativo)',
    'Especialista em Protocolo Ortomolecular para Estrias e Cicatrizes',
    'Mentora de Imersões Clínicas no Brasil e Exterior'
  ]
};

export const COURSES: TrainingCourse[] = [
  {
    id: 'imersao-laser-co2',
    title: 'Imersão Laser CO2 Fracionado Fusion',
    subtitle: 'Rejuvenescimento Facial, Cicatrizes de Acne, Estrias e Estética Íntima',
    badge: 'Padrão-Ouro • Alta Demanda',
    duration: '2 Dias Intensivos (18 Horas)',
    targetAudience: 'Médicos, Biomédicos, Farmacêuticos, Fisioterapeutas e Enfermeiros Estetas',
    maxStudents: 4,
    highlight: 'Prática supervisionada direta com equipamento Laser CO2 Fusion em pacientes reais',
    description: 'A formação definitiva para dominar o padrão-ouro em rejuvenescimento ablativo e remodelamento dérmico. Aprenda os parâmetros ideais de densidade de pulso, energia e fluência, além de protocolos de segurança absoluta e prevenção de intercorrências.',
    modules: [
      'Física do Laser e Fototermólise Seletiva Fracionada',
      'Parâmetros e Calibração do Laser CO2 Fusion para diferentes fototipos',
      'Tratamento de Rugas Profundas, Linhas Perioculares e Periorais',
      'Remodelação de Cicatrizes de Acne, Poros Dilatados e Estrias',
      'Protocolos Associados com PRP Autólogo e Farmacologia Regenerativa',
      'Prática Hands-On Clínica Completa em Múltiplos Casos Reais'
    ],
    includes: [
      'Apostila Clínica completa com fichas de parametrização',
      'Todos os materiais de apoio e EPIs necessários',
      'Pacientes-modelo selecionados pela equipe clínica',
      'Certificado de Especialista em Laser CO2 Fusion',
      'Acesso à consultoria de locação com condições especiais FT Laser Tech',
      'Mentoria em grupo privado para discussão de casos clínicos'
    ],
    nextDate: '24 e 25 de Outubro (Restam 2 vagas)',
    investmentNote: 'Condições facilitadas de parcelamento e desconto especial à vista.'
  },
  {
    id: 'masterclass-plexr-gmw',
    title: 'Masterclass Plexr GMW: Blefaroplastia sem Cortes',
    subtitle: 'Plasma Sublimativo Real para Pálpebras, Ninfoplastia e Subablação Cutânea',
    badge: 'Tecnologia Exclusiva • VIP',
    duration: '1 Dia de Imersão Prática (9 Horas)',
    targetAudience: 'Profissionais habilitados em procedimentos estéticos e cirúrgicos não invasivos',
    maxStudents: 3,
    highlight: 'Lifting palpebral sem bisturi, sem anestesia geral e com recuperação ambulatorial rápida',
    description: 'Aprenda a aplicar o plasma sublimativo autêntico do Plexr GMW. Técnica não cirúrgica de alta precisão que retrai a pele flácida da pálpebra superior e inferior, realiza ninfoplastia sem cortes e remove lesões cutâneas benignas sem cicatrizes.',
    modules: [
      'Biofísica do Plasma Sublimativo e Diferença para Eletrocautério comum',
      'Anatomia Palpebral e Critérios de Elegibilidade de Pacientes',
      'Técnica de Spots e Retração Palpebral Superior e Inferior',
      'Ninfoplastia Não Cirúrgica com Plexr: Protocolos Íntimos Seguros',
      'Manejo de Crostas, Cuidados Home Care e Fotoproteção Rigorosa',
      'Atendimento Clínico Supervisionado com Pacientes Fornecidos'
    ],
    includes: [
      'Protocolos de pré e pós-procedimento exclusivos da Dra. Paula Fischer',
      'Prática supervisionada individualizada',
      'Certificado de Capacitação Chancelado em Plexr GMW',
      'Condições de parceria e suporte técnico com a FT Laser Tech'
    ],
    nextDate: '07 de Novembro (Apenas 3 vagas)',
    investmentNote: 'Vagas estritamente limitadas para garantir execução minuciosa.'
  },
  {
    id: 'capacitacao-protocolo-ortomolecular',
    title: 'Protocolo Ortomolecular para Estrias e Cicatrizes',
    subtitle: 'Abordagem Integrativa Sistêmica Associada ao Laser e Plasma',
    badge: 'Protocolo Exclusivo',
    duration: '1 Dia de Imersão (8 Horas)',
    targetAudience: 'Profissionais da estética avançada e integrativa',
    maxStudents: 4,
    highlight: 'Tratamento de estrias e cicatrizes antigas e recentes com regeneração tecidual acelerada',
    description: 'A abordagem integrativa criada pela Dra. Paula Fischer que potencializa os resultados de tecnologias ablativas com suplementação ortomolecular individualizada e ativos de reestruturação dérmica.',
    modules: [
      'Bases da Terapia Ortomolecular aplicada à cicatrização e colagênese',
      'Suplementação Oral e Tópica Pré e Pós-Laser',
      'Associação Sinergética com Laser CO2 Fusion e Terapia Autóloga',
      'Protocolos para Estrias Vermelhas, Brancas e Cicatrizes Hipertróficas',
      'Formulação Magistral e Fichas de Prescrição Prontas'
    ],
    includes: [
      'Guia de Fórmulas e Prescrições Ortomoleculares',
      'Estudos de casos clínicos documentados',
      'Certificado de Capacitação em Protocolo Ortomolecular'
    ],
    nextDate: '21 de Novembro (Inscrições Abertas)',
    investmentNote: 'Vagas limitadas por turma.'
  },
  {
    id: 'mentoria-individual-vip',
    title: 'Mentoria Clínica Individual VIP (Tatuapé - SP)',
    subtitle: 'Um Dia Inteiro Exclusivo ao Lado da Dra. Paula Fischer',
    badge: '1 Aluno por Edição • 100% Personalizado',
    duration: '1 Dia Completo (Você e a Dra. Paula)',
    targetAudience: 'Profissionais que desejam aceleração máxima sem divisão de tempo',
    maxStudents: 1,
    highlight: 'Foco nas tecnologias e procedimentos que você mais deseja aperfeiçoar',
    description: 'A experiência de imersão mais exclusiva. A Dra. Paula Fischer dedica seu consultório exclusivamente a você, trazendo os casos e tecnologias (Laser CO2, Plexr GMW, Ortomolecular) que você precisa dominar com segurança total.',
    modules: [
      'Alinhamento prévio das dúvidas técnicas e objetivos do aluno',
      'Atendimento e parametrização clínica conjunta com a mentora',
      'Execução assistida com correção imediata de técnica',
      'Gestão de clínica, precificação de procedimentos de alto valor e suporte FT Laser Tech',
      'Acesso direto ao WhatsApp da Dra. Paula por 6 meses'
    ],
    includes: [
      'Data flexível conforme disponibilidade da sua agenda',
      'Pacientes-modelo selecionados especificamente para suas necessidades',
      'Certificado de Residência de Mentoria Clínica Individual'
    ],
    nextDate: 'Sob consulta de agenda',
    investmentNote: 'Processo seletivo prévio mediante análise profissional.'
  }
];

export const CLINICAL_PROCEDURES: ClinicalProcedure[] = [
  {
    id: 'laser-co2-fusion',
    name: 'Laser CO2 Fracionado Fusion + Terapia Regenerativa',
    category: 'tecnologia',
    summary: 'O padrão-ouro absoluto em rejuvenescimento facial profundo, renovação epidérmica e estímulo de colágeno.',
    benefit: 'Redução expressiva de rugas e linhas de expressão, fechamento de poros, clareamento dérmico e firmeza duradoura.',
    duration: '60 a 75 minutos',
    downtime: 'Recuperação guiada com produtos regeneradores (3 a 5 dias de renovação tecidual).',
    idealFor: 'Rugas moderadas a profundas, flacidez facial, cicatrizes de acne, manchas solares e fotoenvelhecimento.',
    highlights: [
      'Fototermólise fracionada de altíssima precisão térmica',
      'Associação com fatores de crescimento autólogos (PRP)',
      '"Ciência, Tecnologia, Estética e Resultados Reais"'
    ]
  },
  {
    id: 'plexr-blefaroplastia',
    name: 'Blefaroplastia sem Cortes com Plexr GMW',
    category: 'facial',
    summary: 'Lifting palpebral não cirúrgico realizado com plasma sublimativo de alta frequência, sem cortes e sem bisturi.',
    benefit: 'Retração precisa da pele flácida das pálpebras superiores e inferiores, rejuvenescendo o olhar sem cirurgia.',
    duration: '45 a 60 minutos',
    downtime: 'Pequenas crostas puntiformes que desprendem naturalmente em 5 a 7 dias.',
    idealFor: 'Flacidez palpebral, excesso de pele periorbital, rugas perioculares e bolsas leves.',
    highlights: [
      'Sem anestesia geral — procedimento 100% ambulatorial',
      'Sublimação tecidual sem sangramento e sem cicatrizes',
      'Recuperação rápida e olhar rejuvenescido de forma natural'
    ]
  },
  {
    id: 'manchas-melasma-laser',
    name: 'Tratamento Avançado de Manchas, Melasma & Uniformização',
    category: 'rejuvenescimento',
    summary: 'Protocolo de alta precisão para controle de hipercromias, melasma resistente e manchas solares.',
    benefit: 'Pele homogênea, clara e luminosa com controle biológico do estresse oxidativo dos melanócitos.',
    duration: '45 a 50 minutos',
    downtime: 'Mínimo, pele revitalizada com proteção solar rigorosa.',
    idealFor: 'Melasma, manchas senis, hiperpigmentação pós-inflamatória e tom irregular da pele.',
    highlights: [
      'Despigmentação segura sem efeito rebote',
      'Associação com laser e dermocosméticos biomédicos',
      'Resultados clínicos visíveis e comprovados em portfólio'
    ]
  },
  {
    id: 'protocolo-ortomolecular-cicatrizes',
    name: 'Cicatrizes & Estrias com Protocolo Ortomolecular',
    category: 'rejuvenescimento',
    summary: 'Remodelação profunda de estrias (vermelhas ou brancas) e cicatrizes com associação exclusiva de Laser CO2 e terapia ortomolecular.',
    benefit: 'Acelera a regeneração dérmica, reestrutura as fibras elásticas e melhora significativamente a textura da pele.',
    duration: '60 minutos',
    downtime: 'Acompanhamento dermatofuncional com dermocosméticos ortomoleculares.',
    idealFor: 'Estrias pós-gestação ou puberdade, cicatrizes de acne atróficas e cicatrizes cirúrgicas antigas.',
    highlights: [
      'Protocolo exclusivo desenvolvido pela Dra. Paula Fischer',
      'Abordagem integrativa e celular de dentro para fora',
      'Eficácia superior comprovada em cicatrizes rebeldes'
    ]
  },
  {
    id: 'estetica-intima-plexr',
    name: 'Estética Íntima & Ninfoplastia sem Cortes com Plexr GMW',
    category: 'tecnologia',
    summary: 'Harmonização íntima feminina, clareamento e redução labial não cirúrgica com plasma de alta frequência.',
    benefit: 'Bem-estar, rejuvenescimento e resgate da autoestima com conforto, privacidade e técnica não invasiva.',
    duration: '50 a 60 minutos',
    downtime: 'Procedimento ambulatorial com recuperação rápida e sem internação.',
    idealFor: 'Hipertrofia de pequenos lábios, flacidez íntima e hiperpigmentação da região vulvar e perianal.',
    highlights: [
      'Sem cortes cirúrgicos, sem suturas e sem cicatrizes aparentes',
      'Realizado sob anestesia local em consultório',
      'Atendimento 100% humanizado, sigiloso e acolhedor'
    ]
  },
  {
    id: 'harmonizacao-naturalista',
    name: 'Harmonização Facial Anatômica & Bioestimuladores',
    category: 'facial',
    summary: 'Preenchimento estruturado com ácido hialurônico de alta pureza e estímulo potente de colágeno biológico.',
    benefit: 'Restauração sutil de volumes, sustentação malar e contorno mandibular sem artificialismo.',
    duration: '60 minutos',
    downtime: 'Retorno imediato às atividades comuns.',
    idealFor: 'Flacidez tecidual, perda de contorno, sulcos faciais e busca por rejuvenescimento elegante.',
    highlights: [
      'Mapeamento tridimensional das proporções faciais',
      'Uso exclusivo de cânulas atraumáticas de alta segurança',
      'Preservação incondicional da sua identidade e mímica natural'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Maria C.',
    role: 'Paciente da Clínica • Procedimento Blefaroplastia',
    city: 'São Paulo - SP',
    type: 'patient',
    comment: 'Fiz a blefaroplastia com Plexr GMW com a Dra. Paula e o resultado superou todas as minhas expectativas. Procedimento seguro, sem cortes de bisturi e com recuperação muito mais rápida do que imaginei. Meu olhar rejuvenesceu anos!',
    rating: 5,
    avatarText: 'MC',
    metricHighlight: 'Olhar descansado sem intervenção cirúrgica'
  },
  {
    id: '2',
    author: 'Ana F.',
    role: 'Esteticista & Biomédica • Aluna da Imersão Laser CO2',
    city: 'Campinas - SP',
    type: 'student',
    comment: 'O curso de Laser CO2 Fracionado Fusion foi transformador para a minha clínica. A Dra. Paula Fischer tem uma didática incomparável — base científica sólida e muita prática supervisionada com equipamento real. Sinto total segurança no atendimento.',
    rating: 5,
    avatarText: 'AF',
    metricHighlight: 'Segurança absoluta para operar laser de alta potência'
  },
  {
    id: '3',
    author: 'Juliana S.',
    role: 'Paciente da Clínica • Tratamento de Cicatrizes',
    city: 'São Paulo - SP',
    type: 'patient',
    comment: 'Tratei cicatrizes antigas de acne que me incomodavam há anos. Após 3 sessões de Laser CO2 combinadas com o protocolo ortomolecular da Dra. Paula, minha pele está completamente transformada. Uma profissional diferenciada e humana.',
    rating: 5,
    avatarText: 'JS',
    metricHighlight: 'Remodelação total da textura e viço da pele'
  },
  {
    id: '4',
    author: 'Dra. Camila B.',
    role: 'Cirurgiã Dentista & Aluna Masterclass Plexr',
    city: 'Curitiba - PR',
    type: 'student',
    comment: 'A Dra. Paula Fischer ensina com maestria os limites da segurança e a potência real do plasma sublimativo. A mentoria pós-curso e a facilidade de suporte técnico com a FT Laser Tech elevaram o nível dos serviços que ofereço no meu consultório.',
    rating: 5,
    avatarText: 'CB',
    metricHighlight: 'Certificação de excelência em tecnologia de plasma'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Quem pode participar dos cursos e imersões da Dra. Paula Fischer?',
    answer: 'Nossos cursos são destinados exclusivamente a profissionais da área da saúde devidamente habilitados: Biomédicos Estetas, Médicos, Farmacêuticos Estetas, Cirurgiões-Dentistas e Fisioterapeutas Dermatofuncionais. A comprovação de registro no conselho é obrigatória para emissão da certificação oficial.',
    category: 'training'
  },
  {
    question: 'Como funciona a locação de equipamentos através da FT Laser Tech?',
    answer: 'A FT Laser Tech disponibiliza equipamentos de última geração (Laser CO2 Fracionado Fusion e Plexr GMW) para diárias ou contratos mensais, com transporte, calibração, insumos e suporte técnico especializado, permitindo que você atenda com tecnologias de ponta sem imobilizar capital.',
    category: 'training'
  },
  {
    question: 'A blefaroplastia sem cortes com Plexr GMW realmente substitui a cirurgia tradicional?',
    answer: 'Para casos de flacidez palpebral leve a moderada e excesso de pele periorbital, o Plexr GMW é a alternativa mais eficaz do mercado. Ele sublima (evapora) o excesso de tecido sem sangramento, sem cicatriz linear e sem necessidade de centro cirúrgico ou anestesia geral.',
    category: 'clinic'
  },
  {
    question: 'O que é o Laser CO2 Fracionado Fusion e como ele atua?',
    answer: 'É o padrão-ouro internacional em fototermólise seletiva. Ele gera microzonas térmicas na pele, estimulando a síntese de colágeno novo (neocolagênese) e renovando a epiderme, tratando rugas, poros abertos, cicatrizes e manchas com precisão milimétrica.',
    category: 'clinic'
  },
  {
    question: 'Onde fica localizado o consultório da Dra. Paula Fischer?',
    answer: 'O consultório e centro de treinamentos está situado no bairro do Tatuapé, em São Paulo - SP, com fácil acesso, estacionamento com manobrista e estrutura de alto padrão para acolhimento e privacidade.',
    category: 'clinic'
  },
  {
    question: 'Como faço para agendar uma consulta ou solicitar orçamento de curso/locação?',
    answer: 'Basta entrar em contato pelo nosso WhatsApp oficial (11) 96620-9116 ou preencher o formulário no site. Nossa equipe retornará rapidamente com todas as orientações.',
    category: 'clinic'
  }
];

export const CLINIC_CONTACT = {
  address: 'Rua Dr. Angelo Vitá, 43 — Sala 01, Tatuapé, São Paulo — SP · CEP 03069-000',
  shortAddress: 'Tatuapé, São Paulo - SP',
  phone: '(11) 96620-9116',
  rawPhone: '11 966209116',
  whatsappUrl: 'https://wa.me/5511966209116?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20consult%C3%B3rio%20e%20cursos%20da%20Dra.%20Paula%20Fischer',
  email: 'dra.paulafischerbiomedica@gmail.com',
  hours: 'Segunda a Sexta: 08:30 às 19:30 • Sábados (Imersões VIP): 09:00 às 18:00',
  instagram: '@drapaulafischer',
  instagramUrl: 'https://www.instagram.com/drapaulafischer/',
  slogan: 'Natureza com Precisão Científica',
  equipmentPartner: 'FT Laser Tech'
};
