import { TrainingCourse, ClinicalProcedure, Testimonial, FaqItem } from '../types';

export const DOCTOR_INFO = {
  name: 'Dra. Paula Fischer',
  title: 'Médica Especialista em Estética Avançada & Mentora de Injetores',
  registration: 'CRM 148.920 / RQE Especialista',
  experienceYears: 12,
  trainedProfessionals: 850,
  treatedPatients: 3800,
  satisfactionRate: 99.4,
  bio: 'Pioneira em protocolos de harmonização anatômica sutil e referência nacional no ensino prático de injetáveis. A Dra. Paula Fischer construiu sua carreira pautada na medicina de precisão, segurança vascular e na recusa absoluta de resultados padronizados. Criadora do Método Fischer de Mapeamento Tridimensional da Face, já treinou centenas de médicos e profissionais habilitados do Brasil e exterior.',
  differentials: [
    {
      title: 'Segurança Anatômica & Ultrassom',
      description: 'Mapeamento ecográfico vascular facial e protocolos estritos de prevenção e conduta imediata em intercorrências.'
    },
    {
      title: 'Turmas Ultra VIP de 2 a 4 Alunos',
      description: 'Atenção 100% individualizada com prática real em múltiplos pacientes-modelo fornecidos pela clínica.'
    },
    {
      title: 'Elegância e Naturalidade',
      description: 'Filosofia que rejuvenesce preservando a identidade, sem estigmas de procedimentos ou volumes excessivos.'
    },
    {
      title: 'Mentoria Vitalícia Pós-Treinamento',
      description: 'Acesso direto à Dra. Paula e comunidade médica exclusiva para discussão de casos clínicos e suporte de diagnóstico.'
    }
  ]
};

export const COURSES: TrainingCourse[] = [
  {
    id: 'imersao-full-face',
    title: 'Imersão VIP Full Face Hands-On',
    subtitle: 'Do Planejamento Tridimensional à Execução Perfeita de Injetáveis',
    badge: 'Mais Procurado • Turma VIP',
    duration: '2 Dias Intensivos (18 Horas)',
    targetAudience: 'Médicos, Biomédicos, Farmacêuticos e Dentistas HOF',
    maxStudents: 4,
    highlight: 'Prática real em 8 a 10 pacientes-modelo por turma',
    description: 'Capacitação prática imersiva que ensina o raciocínio anatômico global da face. Aprenda a avaliar proporções, diagnosticar vetores de envelhecimento e executar toxina botulínica avançada, preenchimento com ácido hialurônico em camadas profundas e superficiais com total confiança.',
    modules: [
      'Anatomia Topográfica Aplicada e Zonas de Perigo Facial',
      'Toxina Botulínica Avançada: Terço Superior, Inferior, Pescoço e Microdoses',
      'Preenchimento em Múltiplos Planos (Malar, Mento, Mandíbula, Têmporas e Lábios)',
      'Uso de Cânulas vs. Agulhas: Reologia e Escolha dos Produtos Ideais',
      'Ultrassonografia Dermatológica e Protocolo de Dissolução com Hialuronidase',
      'Prática Hands-On Clínica Completa com Pacientes Fornecidos'
    ],
    includes: [
      'Apostila Clínica e Atlas de Zonas Anatômicas de Risco',
      'Todos os materiais e produtos premium inclusos para a prática',
      'Pacientes-modelo selecionados pela equipe do instituto',
      'Certificado de Capacitação Chancelado',
      'Mentoria contínua em grupo privado por 12 meses',
      'Coffee break gourmet e almoço executivo inclusos'
    ],
    nextDate: '24 e 25 de Outubro (Restam 2 vagas)',
    investmentNote: 'Condições facilitadas de parcelamento e desconto especial à vista.'
  },
  {
    id: 'masterclass-bioestimuladores',
    title: 'Masterclass Bioestimuladores & Fios de Sustentação',
    subtitle: 'Arquitetura do Colágeno: Hidroxiapatita, PLLA e Fios de Tração',
    badge: 'Avançado de Alta Demanda',
    duration: '1 Dia de Imersão Prática (9 Horas)',
    targetAudience: 'Injetores que já dominam o básico e buscam resultados de alto ticket',
    maxStudents: 3,
    highlight: 'Domínio de técnicas com Radiesse, Sculptra, Elleva e Fios de PDO',
    description: 'O segredo da sustentação tecidual sem volumização exagerada. Domine os vetores mecânicos e bioquímicos de regeneração dérmica com diluições personalizadas, hiperdiluição corporal e facial, e ancoragem estratégica com fios espiculados.',
    modules: [
      'Bioquímica comparada: Hidroxiapatita de Cálcio x Ácido Poli-L-Láctico (PLLA)',
      'Diluições e Técnicas de Vetorização em Leque e Cânula 22G/25G',
      'Tratamento de Pescoço, Colo, Mãos e Contorno Mandibular Flácido',
      'Fios de Sustentação e Tração (PDO/PCL): Vetores de Ancoragem e Bloqueio',
      'Gerenciamento de Nódulos e Prevenção de Assimetrias',
      'Prática Intensiva em Casos Reais de Flacidez Moderada a Grave'
    ],
    includes: [
      'Fichas de diluição e protocolos exclusivos da Dra. Paula',
      'Prática supervisionada individualizada',
      'Suporte para compras com fornecedores oficiais com condições exclusivas',
      'Acesso a videoaulas preparatórias antes da imersão',
      'Certificado de Especialista em Arquitetura de Colágeno'
    ],
    nextDate: '07 de Novembro (Apenas 3 vagas)',
    investmentNote: 'Vagas estritamente limitadas para garantir execução minuciosa.'
  },
  {
    id: 'mentoria-individual-vip',
    title: 'VIP 1-on-1 Mentorship (Exclusivo)',
    subtitle: 'Um Dia Inteiro Exclusivo ao Lado da Dra. Paula Fischer',
    badge: '1 Aluno por Edição • Personalizado',
    duration: '1 Dia Completo (Você e a Dra. Paula)',
    targetAudience: 'Profissionais que desejam aceleração máxima sem divisão de tempo',
    maxStudents: 1,
    highlight: 'Foco nos procedimentos que você mais deseja aperfeiçoar',
    description: 'A experiência de capacitação mais personalizada do país. A Dra. Paula Fischer dedica a clínica exclusivamente a você, trazendo os casos e técnicas que você precisa dominar com segurança total, ergonomia de injeção e atendimento de alto padrão.',
    modules: [
      'Alinhamento prévio das maiores dúvidas e objetivos técnicos do aluno',
      'Atendimento e planejamento clínico conjunto com a mentora',
      'Execução direta assistida e corrigida milímetro a milímetro',
      'Segredos de posicionamento, marketing ético e precificação de luxo',
      'Gravação em vídeo em alta definição dos seus procedimentos para portfólio',
      'Acesso direto ao WhatsApp pessoal da Dra. Paula por 6 meses'
    ],
    includes: [
      'Data flexível conforme disponibilidade da sua agenda',
      'Pacientes-modelo com perfil clínico pré-definido por você',
      'Kit instrumental cirúrgico/estético personalizado',
      'Planejamento de carreira e consultoria de precificação para sua clínica',
      'Certificado de Residência de Mentoria Clínica Individual'
    ],
    nextDate: 'Sob consulta com a coordenação de vagas',
    investmentNote: 'Processo seletivo prévio mediante análise de currículo profissional.'
  },
  {
    id: 'gestao-clinica-alto-padrao',
    title: 'Consultório de Alto Padrão & Gestão de Luxo',
    subtitle: 'Como Atrair Pacientes Particulares de Alto Ticket e Construir Autoridade',
    badge: 'Online Ao Vivo + Mentoria',
    duration: '4 Módulos Estratégicos',
    targetAudience: 'Proprietários de clínicas e consultórios de estética',
    maxStudents: 15,
    highlight: 'O método de negócios que transformou um consultório em referência',
    description: 'Aprenda a estruturar um ecossistema de encantamento que converte consultas avaliativas em planos de tratamento globais de R$ 10k a R$ 35k, sem depender de descontos ou promoções predatórias.',
    modules: [
      'Posicionamento de Imagem Médica e Elegância nas Redes Sociais',
      'Script de Consulta de Encantamento e Fechamento de Alto Valor',
      'Precificação Lucrativa e Gestão de Custos de Injetáveis',
      'Treinamento da Equipe e Secretária Concierge para Experiência 5 Estrelas'
    ],
    includes: [
      'Modelos de contratos, termos de consentimento (TCLE) blindados',
      'Planilhas automáticas de margem e precificação de procedimentos',
      'Gravações com acesso por 1 ano',
      'Sessões quinzenais de tira-dúvidas em grupo'
    ],
    nextDate: 'Turma de Novembro aberta para inscrições',
    investmentNote: 'Disponível em lote promocional de lançamento.'
  }
];

export const CLINICAL_PROCEDURES: ClinicalProcedure[] = [
  {
    id: 'harmonizacao-naturalista',
    name: 'Harmonização Facial Naturalista',
    category: 'facial',
    summary: 'Restauração sutil de volumes perdidos com foco no contorno e frescor.',
    benefit: 'Aparência descansada e jovial sem distorcer traços naturais.',
    duration: '60 a 90 minutos',
    downtime: 'Sem repouso prolongado, retorno imediato à rotina.',
    idealFor: 'Pessoas com perda de sustentação malar, queixo retraído ou olheiras profundas.',
    highlights: ['Planejamento milimétrico 3D', 'Uso exclusivo de cânulas macias atraumáticas', 'Ácido hialurônico suíço/americano de alta pureza']
  },
  {
    id: 'protocolo-bioestimulo-360',
    name: 'Protocolo Bioestímulo de Colágeno 360°',
    category: 'rejuvenescimento',
    summary: 'Ativação biológica potente dos fibroblastos para firmeza duradoura.',
    benefit: 'Melhora progressiva da textura, densidade e sustentação da pele por até 2 anos.',
    duration: '45 minutos',
    downtime: 'Mínimo (apenas leve inchaço que regride em 24h).',
    idealFor: 'Combate à flacidez de rosto, pescoço, papada e prevenção do envelhecimento.',
    highlights: ['Produtos padrão-ouro (Sculptra / Radiesse)', 'Efeito lifting sem volume indesejado', 'Estímulo de colágeno tipo I']
  },
  {
    id: 'fischer-glow-skin',
    name: 'Fischer Glow & Remodelamento Cutâneo',
    category: 'tecnologia',
    summary: 'Combinação sinérgica de microinfusão de ativos, polinucleotídeos e peeling nanoestruturado.',
    benefit: 'Luminosidade de seda, fechamento de poros e uniformização do tom.',
    duration: '50 minutos',
    downtime: 'Nenhum, pele radiante para eventos e dia a dia.',
    idealFor: 'Peles desvitalizadas, com linhas finas ou fotoenvelhecimento.',
    highlights: ['Skinbooster com PDRN de salmão', 'Hidratação de dentro para fora', 'Toque aveludado instantâneo']
  },
  {
    id: 'rejuvenescimento-periorbital',
    name: 'Rejuvenescimento do Olhar (Olheiras & Pálpebras)',
    category: 'facial',
    summary: 'Protocolo exclusivo para desinflamar, clarear e preencher a região dos olhos.',
    benefit: 'Eliminação daquele aspecto cansado e recuperação do brilho no olhar.',
    duration: '40 minutos',
    downtime: 'Leve sensibilidade no primeiro dia.',
    idealFor: 'Olheiras profundas, sulco nasojugual marcado e bolsas discretas.',
    highlights: ['Técnica não-cirúrgica indolor', 'Combinação de hialurônico específico e clareador', 'Olhar vívido e descansado']
  },
  {
    id: 'labios-couture',
    name: 'Escultura Labial Couture',
    category: 'facial',
    summary: 'Contorno e hidratação labial desenhados sob a proporção áurea de cada rosto.',
    benefit: 'Lábios definidos, hidratados e simétricos sem formato exagerado de bico.',
    duration: '45 minutos',
    downtime: 'Leve edema por 48 a 72 horas.',
    idealFor: 'Lábios finos, ressecados ou com perda de volume e arco do cupido desbotado.',
    highlights: ['Anestesia odontológica para conforto total', 'Técnica de eversão sutil', 'Suavização do código de barras']
  },
  {
    id: 'toxina-preventiva-dinamica',
    name: 'Toxina Botulínica de Precisão Dinâmica',
    category: 'rejuvenescimento',
    summary: 'Relaxamento seletivo da musculatura que previne e suaviza linhas de expressão.',
    benefit: 'Rosto jovem, relaxado e com movimentos naturais preservados.',
    duration: '30 minutos',
    downtime: 'Retorno imediato às atividades comuns.',
    idealFor: 'Pés de galinha, linhas da testa, glabela (entre as sobrancelhas) e sorriso gengival.',
    highlights: ['Sem efeito congelado ou artificial', 'Durabilidade otimizada', 'Mapeamento das mímicas individuais']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Dra. Mariana Vasconcellos',
    role: 'Médica Dermatologista • Aluna da Imersão Full Face',
    city: 'Belo Horizonte - MG',
    type: 'student',
    comment: 'Eu tinha muita insegurança ao aplicar em áreas críticas como têmporas e sulco profundo. O treinamento com a Dra. Paula foi o divisor de águas na minha carreira. A atenção individual e os pacientes que atendemos sob a supervisão dela me deram a segurança cirúrgica que nenhum outro curso me ofereceu.',
    rating: 5,
    avatarText: 'MV',
    metricHighlight: 'Faturamento de procedimentos triplicou em 4 meses'
  },
  {
    id: '2',
    author: 'Dra. Camila Bittencourt',
    role: 'Biomédica Esteta • Aluna de Mentoria VIP',
    city: 'Curitiba - PR',
    type: 'student',
    comment: 'A Dra. Paula não esconde nenhum detalhe. Ela ensina a arte do diagnóstico e principalmente como agir com precisão caso ocorra qualquer intercorrência. Além da técnica impecável, a postura dela de valorização do atendimento me ensinou a atrair pacientes que valorizam qualidade acima de preço.',
    rating: 5,
    avatarText: 'CB',
    metricHighlight: 'Segurança absoluta em procedimentos avançados'
  },
  {
    id: '3',
    author: 'Patrícia Albuquerque',
    role: 'Empresária • Paciente da Clínica há 4 anos',
    city: 'São Paulo - SP',
    type: 'patient',
    comment: 'Meu maior medo sempre foi ficar com o rosto modificado ou artificial, como vejo em tantas pessoas por aí. A Dra. Paula tem mãos de fada. As pessoas me elogiam dizendo que pareço 10 anos mais jovem e descansada, mas ninguém diz que fiz procedimento. É uma arte incomparável.',
    rating: 5,
    avatarText: 'PA',
    metricHighlight: 'Resultado natural e elegante elogiado por todos'
  },
  {
    id: '4',
    author: 'Dr. Leonardo Rezende',
    role: 'Cirurgião Dentista HOF • Aluno Masterclass Bioestimuladores',
    city: 'Brasília - DF',
    type: 'student',
    comment: 'Didática fantástica, organização impecável e materiais de altíssimo nível. A Dra. Paula compartilha os segredos das diluições e o uso do ultrassom que pouquíssimos profissionais no país conhecem com essa profundidade. Vale cada centavo investido.',
    rating: 5,
    avatarText: 'LR',
    metricHighlight: 'Excelência em anatomia e ecografia estética'
  },
  {
    id: '5',
    author: 'Renata Sanches de Mello',
    role: 'Advogada • Paciente da Clínica',
    city: 'São Paulo - SP',
    type: 'patient',
    comment: 'A experiência na clínica é mágica desde o momento em que a equipe nos recebe até o acompanhamento pós-procedimento. Nunca senti dor ou desconforto. Minha pele e contorno mandibular nunca estiveram tão bonitos e firmes.',
    rating: 5,
    avatarText: 'RS',
    metricHighlight: 'Atendimento humanizado 5 estrelas'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Quem pode participar dos treinamentos do Instituto Dra. Paula Fischer?',
    answer: 'Nossos cursos são estritamente direcionados a profissionais da saúde legalmente autorizados a realizar procedimentos injetáveis em seus respectivos conselhos de classe: Médicos, Biomédicos Estetas, Farmacêuticos Estetas, Cirurgiões-Dentistas habilitados em HOF e Enfermeiros Estetas. Solicitamos a comprovação de registro profissional no ato da inscrição.',
    category: 'training'
  },
  {
    question: 'O instituto fornece os pacientes-modelo para a prática hands-on?',
    answer: 'Sim, integralmente! Nossa equipe clínica realiza a triagem prévia de pacientes reais com diferentes graus de envelhecimento, perfis anatômicos e queixas, garantindo que você pratique em casos clínicos diversificados sob a supervisão direta e milimétrica da Dra. Paula Fischer.',
    category: 'training'
  },
  {
    question: 'Quantos alunos participam de cada turma?',
    answer: 'Trabalhamos com turmas extremamente exclusivas: no máximo 3 a 4 alunos por turma nas Imersões em grupo, e apenas 1 aluno nas mentorias personalizadas 1-on-1. Esse limite rigoroso é o que garante que você pegue na cânula, sinta os planos teciduais e receba feedback em tempo real.',
    category: 'training'
  },
  {
    question: 'Como funciona o suporte e a mentoria pós-curso?',
    answer: 'Você não sai do curso sozinho. Todos os alunos são integrados ao Grupo VIP de Mentoria Contínua com a Dra. Paula Fischer por 12 meses. Nele você pode enviar fotos de pacientes, discutir condutas diagnósticas antes de procedimentos e tirar dúvidas em tempo ágil diretamente com a mentora.',
    category: 'training'
  },
  {
    question: 'Como é realizada a primeira consulta avaliativa na clínica?',
    answer: 'A consulta com a Dra. Paula tem duração de 60 a 75 minutos. É realizado um exame detalhado das proporções faciais, análise de qualidade da pele e mapeamento das necessidades prioritárias. Desenvolvemos um plano de tratamento personalizado, sem pressa, respeitando seu estilo e orçamento.',
    category: 'clinic'
  },
  {
    question: 'Os procedimentos doem? É utilizado anestésico?',
    answer: 'O conforto do paciente é uma prioridade inegociável. Utilizamos anestésicos tópicos manipulados de alta potência e bloqueios anestésicos injetáveis locais indolores (semelhantes aos odontológicos), além de trabalharmos com microcânulas de ponta romba que deslizam pelos tecidos sem cortar vasos.',
    category: 'clinic'
  },
  {
    question: 'Qual a durabilidade média dos tratamentos com bioestimuladores e preenchedores?',
    answer: 'Os bioestimuladores de colágeno promovem uma reestruturação celular que permanece no organismo por 18 a 24 meses. Os preenchedores de ácido hialurônico de alta tecnologia mantêm sua sustentação entre 12 e 18 meses, sendo gradualmente absorvidos pelo organismo de forma segura.',
    category: 'clinic'
  },
  {
    question: 'Como faço para agendar uma consulta ou solicitar uma vaga em um treinamento?',
    answer: 'Basta clicar em qualquer botão de agendamento ou preencher nosso formulário de contato VIP nesta página. Nossa concierge exclusiva entrará em contato via WhatsApp para apresentar as datas disponíveis, valores e tirar todas as suas dúvidas.',
    category: 'clinic'
  }
];

export const CLINIC_CONTACT = {
  address: 'Av. Brigadeiro Faria Lima, 3477 - Conjunto 1402 - Itaim Bibi, São Paulo - SP',
  phone: '(11) 98452-1920',
  whatsappUrl: 'https://wa.me/5511984521920?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Cl%C3%ADnica%20e%20os%20Treinamentos%20VIP%20da%20Dra.%20Paula%20Fischer',
  email: 'contato@drapaulafischer.com.br',
  hours: 'Segunda a Sexta: 08:30 às 19:30 • Sábados (Treinamentos VIP): 09:00 às 18:00',
  instagram: '@drapaulafischer'
};
