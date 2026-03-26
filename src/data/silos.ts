export const WHATSAPP_LINK = "https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento.%20Vim%20pelo%20site.";
export const SITE_URL = "https://encanador-eletricista-belo-horizonte.lovable.app";
export const PHONE = "(31) 98731-6012";

export interface SiloChild {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  keywords: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiloData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  content: string[];
  keywords: string[];
  icon: string;
  imageUrl: string;
  imageAlt: string;
  faq: FAQItem[];
  children: SiloChild[];
}

export interface LocalData {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  highlights: string[];
  keywords: string[];
  faq: FAQItem[];
  nearbyLocals: string[];
  serviceDetails: { service: string; text: string }[];
}

export const silos: SiloData[] = [
  {
    slug: "marido-de-aluguel",
    title: "Marido de Aluguel",
    h1: "Marido de Aluguel em Belo Horizonte – Pequenos Reparos Residenciais",
    metaTitle: "Marido de Aluguel em BH | Reparos Residenciais 24h",
    metaDescription: "Marido de aluguel em BH: pequenos reparos, montagem de móveis e instalações. Profissional experiente com atendimento rápido. Orçamento grátis!",
    intro: "Precisa de um marido de aluguel em Belo Horizonte? A S.O.S Manutenções Residenciais resolve desde pequenos reparos até instalações completas na sua casa ou apartamento.",
    content: [
      "Nossa equipe de profissionais qualificados atende toda Belo Horizonte, com destaque para a região da Pampulha e Zona Norte. Realizamos instalações, montagens, trocas e reparos diversos com agilidade e preço justo.",
      "Trabalhamos com pontualidade e respeito ao seu lar. Cada serviço é executado com ferramentas adequadas e materiais de qualidade, garantindo durabilidade e segurança para você e sua família.",
      "Não importa o tamanho do problema — estamos prontos para ajudar. Solicite seu orçamento pelo WhatsApp e resolva hoje mesmo!"
    ],
    keywords: ["marido de aluguel bh", "marido de aluguel belo horizonte", "pequenos reparos residenciais", "manutenção residencial bh"],
    icon: "Wrench",
    imageUrl: "https://i.ibb.co/v6TfXJDH/IMG-7008.jpg",
    imageAlt: "Serviços de marido de aluguel em Belo Horizonte - S.O.S Manutenções Residenciais",
    faq: [
      { question: "Quanto custa um marido de aluguel em BH?", answer: "O valor varia conforme o serviço. Pequenos reparos como fixar prateleiras ou trocar fechaduras custam a partir de R$ 80. Solicite orçamento grátis pelo WhatsApp para saber o valor exato do seu serviço." },
      { question: "Vocês atendem no mesmo dia?", answer: "Sim! Na maioria dos casos conseguimos atender no mesmo dia, especialmente na região da Pampulha e Zona Norte onde estamos localizados." },
      { question: "O marido de aluguel faz serviço elétrico e hidráulico?", answer: "Fazemos pequenos reparos elétricos e hidráulicos. Para serviços mais complexos, contamos com encanadores e eletricistas especializados na equipe." },
      { question: "Vocês emitem nota fiscal?", answer: "Sim, emitimos nota fiscal para todos os serviços realizados." },
      { question: "Qual a garantia dos serviços?", answer: "Oferecemos garantia de 90 dias para todos os serviços de manutenção e instalação realizados." }
    ],
    children: [
      {
        slug: "pampulha",
        title: "Marido de Aluguel na Pampulha",
        h1: "Marido de Aluguel na Pampulha – Atendimento Rápido",
        metaTitle: "Marido de Aluguel na Pampulha | Atendimento Rápido em BH",
        metaDescription: "Marido de aluguel na Pampulha com atendimento rápido. Reparos, instalações e manutenção residencial. Chame no WhatsApp!",
        content: [
          "Moradores da Pampulha contam com atendimento prioritário da S.O.S Manutenções Residenciais. Estamos localizados na região e chegamos rápido ao seu imóvel, seja casa ou apartamento.",
          "Atendemos nos bairros Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Santa Amélia, Itapoã, Dona Clara e toda a orla da Lagoa da Pampulha. Pequenos reparos, instalações de prateleiras, montagem de móveis e muito mais.",
          "Nosso diferencial é a proximidade. Por estarmos na Pampulha, reduzimos o tempo de espera e garantimos mais agilidade no seu atendimento. Chame agora no WhatsApp!"
        ],
        keywords: ["marido de aluguel pampulha", "reparos pampulha", "manutenção residencial pampulha"]
      },
      {
        slug: "pequenos-reparos",
        title: "Pequenos Reparos Residenciais em BH",
        h1: "Pequenos Reparos Residenciais em Belo Horizonte",
        metaTitle: "Pequenos Reparos Residenciais em BH | Marido de Aluguel",
        metaDescription: "Serviço de pequenos reparos residenciais em BH. Consertos rápidos e profissionais para sua casa. Orçamento grátis!",
        content: [
          "Problemas pequenos em casa podem virar grandes dores de cabeça se não forem resolvidos a tempo. A S.O.S Manutenções Residenciais cuida de todos os pequenos reparos do seu lar em Belo Horizonte.",
          "Fixamos quadros, ajustamos portas empenadas, trocamos borrachas de vedação, consertamos gavetas emperradas, reparamos rodapés soltos e muito mais. São aqueles serviços que parecem simples, mas exigem ferramenta certa e mão de obra qualificada.",
          "Não deixe acumular! Agende uma visita e resolva tudo de uma vez. Atendemos com horário marcado para sua comodidade."
        ],
        keywords: ["pequenos reparos bh", "consertos residenciais belo horizonte", "reparos domésticos bh"]
      },
      {
        slug: "instalacao-prateleiras",
        title: "Instalação de Prateleiras e Suportes",
        h1: "Instalação de Prateleiras e Suportes em BH",
        metaTitle: "Instalação de Prateleiras em BH | Suportes de TV e Quadros",
        metaDescription: "Instalação de prateleiras, suportes de TV e quadros em BH. Serviço profissional com acabamento perfeito. Agende agora!",
        content: [
          "Quer instalar prateleiras, nichos ou suportes de TV na sua casa em Belo Horizonte? Nossa equipe faz a instalação com precisão, nivelamento perfeito e acabamento impecável.",
          "Trabalhamos com todos os tipos de parede: alvenaria, drywall e concreto. Usamos buchas e parafusos adequados para cada superfície, garantindo segurança e durabilidade na fixação.",
          "Também instalamos quadros decorativos, espelhos, cortinas e acessórios de banheiro. Tudo com cuidado para não danificar sua parede. Chame no WhatsApp para agendar!"
        ],
        keywords: ["instalação prateleiras bh", "suporte tv belo horizonte", "instalar prateleira parede"]
      },
      {
        slug: "montagem-moveis",
        title: "Montagem de Móveis em Belo Horizonte",
        h1: "Montagem de Móveis em Belo Horizonte – Rápido e Profissional",
        metaTitle: "Montagem de Móveis em BH | Serviço Rápido e Profissional",
        metaDescription: "Montagem de móveis em BH. Guarda-roupas, estantes, mesas e mais. Montador profissional com experiência. Ligue agora!",
        content: [
          "Comprou móveis novos e precisa de montagem profissional em Belo Horizonte? A S.O.S Manutenções Residenciais monta todos os tipos de móveis com rapidez e cuidado.",
          "Montamos guarda-roupas, cômodas, estantes, racks, escrivaninhas, berços, beliches e móveis de cozinha. Seguimos o manual do fabricante e utilizamos ferramentas adequadas para cada peça.",
          "Também realizamos desmontagem para mudança e remontagem no novo endereço. Conte com profissionais experientes para cuidar dos seus móveis. Solicite orçamento pelo WhatsApp!"
        ],
        keywords: ["montagem moveis bh", "montador moveis belo horizonte", "montar guarda roupa bh"]
      },
      {
        slug: "troca-fechaduras",
        title: "Troca de Fechaduras e Dobradiças",
        h1: "Troca de Fechaduras e Dobradiças em BH",
        metaTitle: "Troca de Fechaduras em BH | Dobradiças e Maçanetas",
        metaDescription: "Troca de fechaduras, dobradiças e maçanetas em BH. Segurança para sua casa com atendimento rápido. Chame no WhatsApp!",
        content: [
          "Fechadura emperrada, maçaneta solta ou dobradiça rangendo? Em Belo Horizonte, a S.O.S Manutenções Residenciais resolve rapidamente qualquer problema com portas e portões.",
          "Fazemos troca de fechaduras comuns e de segurança, instalação de fechaduras digitais, substituição de dobradiças desgastadas e ajuste de portas desalinhadas. Trabalhamos com portas de madeira, alumínio e aço.",
          "Sua segurança é prioridade. Não adie a troca de uma fechadura com defeito. Entre em contato agora e agende o serviço para hoje ou amanhã!"
        ],
        keywords: ["troca fechadura bh", "trocar fechadura belo horizonte", "conserto porta bh"]
      }
    ]
  },
  {
    slug: "encanador",
    title: "Encanador",
    h1: "Encanador em Belo Horizonte – Serviços Hidráulicos Residenciais",
    metaTitle: "Encanador em BH | Atendimento no Mesmo Dia – Orçamento Grátis",
    metaDescription: "Encanador em BH: conserto de vazamentos, troca de torneiras e instalações. Atendimento no mesmo dia. Orçamento grátis pelo WhatsApp!",
    intro: "Procurando encanador em Belo Horizonte? A S.O.S Manutenções Residenciais oferece serviços hidráulicos completos com profissionais experientes e atendimento ágil.",
    content: [
      "Atuamos em toda Belo Horizonte com serviços de conserto de vazamentos, troca de torneiras, reparo de descargas, instalação hidráulica e manutenção preventiva. Nossa equipe identifica o problema com precisão e resolve no mesmo dia.",
      "Utilizamos materiais de qualidade e técnicas atualizadas para garantir que o serviço dure. Seja em casa ou apartamento, nosso encanador chega preparado com as ferramentas necessárias.",
      "Vazamento não espera! Quanto mais tempo, maior o prejuízo. Chame agora no WhatsApp e resolva seu problema hidráulico hoje mesmo."
    ],
    keywords: ["encanador bh", "encanador belo horizonte", "serviços hidráulicos bh", "conserto hidráulico"],
    icon: "Wrench",
    imageUrl: "https://i.ibb.co/1YnM1GV2/IMG-7003-2.jpg",
    imageAlt: "Serviços de encanador em Belo Horizonte - S.O.S Manutenções Residenciais",
    faq: [
      { question: "Quanto custa chamar um encanador em BH?", answer: "O valor depende do serviço. Troca de torneira simples a partir de R$ 60, conserto de vazamento a partir de R$ 100. Envie fotos pelo WhatsApp para orçamento imediato." },
      { question: "Vocês atendem emergências de vazamento?", answer: "Sim! Vazamentos são tratados com prioridade. Atendemos no mesmo dia, inclusive aos sábados e domingos." },
      { question: "Como identificar um vazamento escondido?", answer: "Sinais comuns: conta de água alta sem motivo, manchas de umidade em paredes, mofo no teto ou som de água correndo. Nossa equipe localiza o vazamento sem quebrar desnecessariamente." },
      { question: "Vocês trabalham com caixa d'água?", answer: "Sim, fazemos instalação, reparo e limpeza de caixa d'água e boias, além de toda a tubulação conectada." }
    ],
    children: [
      {
        slug: "pampulha",
        title: "Encanador na Pampulha",
        h1: "Encanador na Pampulha – Atendimento Rápido e Profissional",
        metaTitle: "Encanador na Pampulha | Atendimento Rápido em BH",
        metaDescription: "Encanador na Pampulha com chegada rápida. Vazamentos, torneiras, registros e mais. Chame no WhatsApp agora!",
        content: [
          "Moradores da Pampulha têm atendimento prioritário da S.O.S Manutenções. Nosso encanador está sempre próximo da região, garantindo chegada rápida ao seu imóvel.",
          "Atendemos Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Itapoã, Santa Amélia e toda a orla da Lagoa. Resolvemos vazamentos, entupimentos, troca de torneiras e instalações hidráulicas.",
          "Na Pampulha, cada minuto conta quando há vazamento. Nossa proximidade garante resposta imediata. Ligue ou mande mensagem no WhatsApp!"
        ],
        keywords: ["encanador pampulha", "encanador pampulha bh", "hidráulica pampulha"]
      },
      {
        slug: "conserto-vazamentos",
        title: "Conserto de Vazamentos em BH",
        h1: "Conserto de Vazamentos em Belo Horizonte",
        metaTitle: "Conserto de Vazamentos em BH | Encanador Profissional",
        metaDescription: "Conserto de vazamentos em BH. Localização e reparo sem quebradeira. Atendimento urgente. Orçamento grátis pelo WhatsApp!",
        content: [
          "Vazamento de água é sinônimo de prejuízo. Além do desperdício na conta, pode causar infiltrações, mofo e danos estruturais. Em Belo Horizonte, conte com a S.O.S Manutenções para resolver rápido.",
          "Localizamos vazamentos em paredes, pisos, lajes e tubulações com técnicas não destrutivas sempre que possível. Reparamos canos furados, conexões soltas, registros com defeito e sifões danificados.",
          "Atuamos em casas, apartamentos e condomínios. Não espere o problema crescer — solicite uma visita agora pelo WhatsApp!"
        ],
        keywords: ["conserto vazamento bh", "vazamento água belo horizonte", "reparo vazamento"]
      },
      {
        slug: "troca-torneiras",
        title: "Troca de Torneiras e Registros",
        h1: "Troca de Torneiras e Registros em Belo Horizonte",
        metaTitle: "Troca de Torneiras em BH | Registros e Misturadores",
        metaDescription: "Troca de torneiras e registros em BH. Instalação profissional sem vazamento. Atendimento rápido. Chame no WhatsApp!",
        content: [
          "Torneira pingando ou registro travado? Em Belo Horizonte, a S.O.S Manutenções faz a troca com rapidez e sem complicação. Trabalhamos com todas as marcas e modelos.",
          "Instalamos torneiras de cozinha, lavatório e tanque, misturadores, torneiras com filtro e registros de pressão e gaveta. Garantimos vedação perfeita e acabamento limpo.",
          "Uma torneira pingando pode desperdiçar mais de 40 litros de água por dia. Resolva agora — chame nosso profissional pelo WhatsApp!"
        ],
        keywords: ["troca torneira bh", "trocar registro belo horizonte", "instalar torneira"]
      },
      {
        slug: "conserto-descarga",
        title: "Conserto de Descarga Acoplada",
        h1: "Conserto de Descarga Acoplada em BH",
        metaTitle: "Conserto de Descarga em BH | Caixa Acoplada e Válvula",
        metaDescription: "Conserto de descarga acoplada em BH. Reparo de caixa acoplada e válvula. Serviço rápido e garantido. WhatsApp!",
        content: [
          "Descarga não para de correr? Caixa acoplada com vazamento? Em Belo Horizonte, resolvemos o problema da sua descarga no mesmo dia com peças de qualidade.",
          "Fazemos reparo e troca de mecanismo interno da caixa acoplada, substituição de válvula de entrada, ajuste de boia e vedação do assento. Trabalhamos com Deca, Celite, Incepa e outras marcas.",
          "Descarga com defeito desperdiça muita água e aumenta sua conta. Não adie — entre em contato pelo WhatsApp e agende a visita!"
        ],
        keywords: ["conserto descarga bh", "caixa acoplada belo horizonte", "descarga vazando bh"]
      },
      {
        slug: "instalacao-hidraulica",
        title: "Instalação Hidráulica Residencial",
        h1: "Instalação Hidráulica Residencial em Belo Horizonte",
        metaTitle: "Instalação Hidráulica em BH | Encanamento Residencial",
        metaDescription: "Instalação hidráulica residencial em BH. Encanamento para banheiro, cozinha e área de serviço. Orçamento grátis!",
        content: [
          "Precisa de instalação hidráulica em Belo Horizonte? Nossa equipe projeta e executa toda a tubulação para banheiros, cozinhas, áreas de serviço e áreas externas.",
          "Trabalhamos com tubulação em PVC, CPVC e PEX, seguindo normas técnicas para garantir segurança e durabilidade. Fazemos instalação de ponto de água para máquina de lavar, lava-louça e filtro.",
          "Reforma no banheiro ou cozinha? Conte com nosso encanador para reposicionar pontos de água e esgoto. Peça seu orçamento pelo WhatsApp!"
        ],
        keywords: ["instalação hidráulica bh", "encanamento residencial belo horizonte", "instalar ponto de água"]
      }
    ]
  },
  {
    slug: "eletricista",
    title: "Eletricista",
    h1: "Eletricista em Belo Horizonte – Serviços Elétricos Residenciais",
    metaTitle: "Eletricista em BH | Serviço Seguro e Garantido – 24h",
    metaDescription: "Eletricista em BH: tomadas, disjuntores, chuveiros e fiação. Serviço seguro com materiais certificados. Chame no WhatsApp agora!",
    intro: "Precisa de eletricista em Belo Horizonte? A S.O.S Manutenções Residenciais oferece serviços elétricos com segurança, qualidade e atendimento rápido em toda a cidade.",
    content: [
      "Nossa equipe de eletricistas qualificados atende residências e comércios em Belo Horizonte. Realizamos desde a troca de uma tomada até a revisão completa da instalação elétrica do seu imóvel.",
      "Segurança elétrica é coisa séria. Trabalhamos seguindo normas da ABNT e utilizamos materiais certificados pelo INMETRO. Cada serviço é executado com cuidado para proteger você e sua família.",
      "Curto-circuito, disjuntor desarmando, tomada queimada — qualquer problema elétrico, estamos prontos para resolver. Chame no WhatsApp!"
    ],
    keywords: ["eletricista bh", "eletricista belo horizonte", "serviços elétricos bh", "instalação elétrica residencial"],
    icon: "Bolt",
    imageUrl: "https://i.ibb.co/NzndpZS/Servi-os-de-eletricista-em-Belo-Horizonte-com-a-S-O-S-Manuten-es-Residenciais-Marido-de-Aluguel-B.jpg",
    imageAlt: "Serviços de eletricista em Belo Horizonte - S.O.S Manutenções Residenciais",
    faq: [
      { question: "Quanto custa o serviço de eletricista em BH?", answer: "Troca de tomada ou interruptor a partir de R$ 50. Instalação de chuveiro a partir de R$ 80. Revisão elétrica completa sob orçamento. Envie detalhes pelo WhatsApp." },
      { question: "Vocês fazem revisão da fiação elétrica?", answer: "Sim! Verificamos toda a instalação, identificamos fios desencapados, sobrecarga e pontos de risco. Ideal para imóveis com mais de 15 anos." },
      { question: "Quando devo trocar o disjuntor?", answer: "Quando desarma frequentemente, apresenta sinais de queimado, ou quando a carga elétrica do imóvel aumentou (novo ar-condicionado, chuveiro potente, etc.)." },
      { question: "Vocês instalam ventilador de teto?", answer: "Sim, instalamos ventiladores de teto de todas as marcas, incluindo fiação e suporte adequados para o peso do aparelho." }
    ],
    children: [
      {
        slug: "pampulha",
        title: "Eletricista na Pampulha",
        h1: "Eletricista na Pampulha – Serviço Rápido e Seguro",
        metaTitle: "Eletricista na Pampulha | Atendimento Rápido em BH",
        metaDescription: "Eletricista na Pampulha com atendimento imediato. Tomadas, disjuntores, chuveiros e fiação. Chame no WhatsApp!",
        content: [
          "Na Pampulha, nosso eletricista chega rápido porque estamos na região. Atendemos Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Itapoã e toda a orla da Lagoa.",
          "Resolvemos curto-circuito, instalação de tomadas, troca de disjuntores, instalação de chuveiro elétrico e revisão da fiação. Tudo com segurança e materiais de primeira linha.",
          "Problema elétrico não pode esperar. Na Pampulha, chegamos em minutos. Chame agora no WhatsApp!"
        ],
        keywords: ["eletricista pampulha", "eletricista pampulha bh", "elétrica pampulha"]
      },
      {
        slug: "troca-disjuntores",
        title: "Troca de Disjuntores",
        h1: "Troca de Disjuntores em Belo Horizonte",
        metaTitle: "Troca de Disjuntores em BH | Quadro Elétrico Seguro",
        metaDescription: "Troca de disjuntores em BH. Disjuntor desarmando? Nosso eletricista resolve com segurança. Agende agora!",
        content: [
          "Disjuntor desarmando toda hora? Isso pode indicar sobrecarga na rede elétrica ou disjuntor com defeito. Em Belo Horizonte, nossa equipe identifica a causa e faz a troca com segurança.",
          "Substituímos disjuntores monopolares, bipolares e tripolares de todas as amperagens. Também fazemos organização e identificação do quadro de distribuição para facilitar futuras manutenções.",
          "Disjuntor com defeito é risco de incêndio. Não ignore os sinais — entre em contato pelo WhatsApp e agende a visita do nosso eletricista!"
        ],
        keywords: ["troca disjuntor bh", "disjuntor desarmando belo horizonte", "quadro elétrico bh"]
      },
      {
        slug: "instalacao-tomadas",
        title: "Instalação de Tomadas e Interruptores",
        h1: "Instalação de Tomadas e Interruptores em BH",
        metaTitle: "Instalação de Tomadas em BH | Interruptores e Pontos Novos",
        metaDescription: "Instalação de tomadas e interruptores em BH. Pontos novos, troca e reparo. Eletricista qualificado. Ligue agora!",
        content: [
          "Precisa de mais tomadas na sua casa em Belo Horizonte? Instalamos novos pontos elétricos em qualquer cômodo, com fiação embutida ou aparente conforme a necessidade.",
          "Fazemos instalação de tomadas padrão brasileiro, tomadas USB, interruptores simples e paralelos (three-way), dimmers e sensores de presença. Tudo seguindo a norma NBR 5410.",
          "Tomada queimada ou solta na parede? Resolvemos na hora. Cada instalação é feita com material certificado. Solicite orçamento pelo WhatsApp!"
        ],
        keywords: ["instalação tomada bh", "instalar interruptor belo horizonte", "ponto elétrico bh"]
      },
      {
        slug: "instalacao-chuveiro",
        title: "Instalação de Chuveiro Elétrico",
        h1: "Instalação de Chuveiro Elétrico em Belo Horizonte",
        metaTitle: "Instalação de Chuveiro Elétrico em BH | Seguro e Rápido",
        metaDescription: "Instalação de chuveiro elétrico em BH com segurança. Troca, reparo e fiação adequada. Chame no WhatsApp!",
        content: [
          "Instalar chuveiro elétrico exige cuidado com fiação, disjuntor e aterramento. Em Belo Horizonte, nosso eletricista faz a instalação completa com total segurança.",
          "Instalamos chuveiros de todas as marcas — Lorenzetti, Fame, Hydra, Tramontina e outras. Verificamos se a fiação suporta a potência do aparelho e fazemos adequação quando necessário.",
          "Chuveiro dando choque ou esquentando pouco? Podemos identificar e corrigir o problema. Fale conosco pelo WhatsApp e agende o serviço!"
        ],
        keywords: ["instalação chuveiro bh", "instalar chuveiro elétrico belo horizonte", "chuveiro dando choque"]
      },
      {
        slug: "manutencao-eletrica",
        title: "Manutenção Elétrica Residencial",
        h1: "Manutenção Elétrica Residencial em Belo Horizonte",
        metaTitle: "Manutenção Elétrica em BH | Revisão e Reparo Residencial",
        metaDescription: "Manutenção elétrica residencial em BH. Revisão de fiação, quadro elétrico e instalações. Prevenção de acidentes!",
        content: [
          "A manutenção elétrica preventiva evita acidentes, incêndios e desperdício de energia. Em Belo Horizonte, fazemos a revisão completa da instalação elétrica do seu imóvel.",
          "Verificamos estado da fiação, conexões, disjuntores, aterramentos, tomadas e interruptores. Identificamos pontos de risco e fazemos os reparos necessários para deixar tudo em conformidade.",
          "Imóveis antigos merecem atenção especial — a fiação deteriora com o tempo. Agende uma revisão preventiva pelo WhatsApp e proteja sua família!"
        ],
        keywords: ["manutenção elétrica bh", "revisão elétrica belo horizonte", "fiação antiga bh"]
      }
    ]
  },
  {
    slug: "desentupimento",
    title: "Desentupimento",
    h1: "Desentupimento em Belo Horizonte – Ralos, Pias e Vasos",
    metaTitle: "Desentupimento em BH | Sem Quebradeira – Atendimento Urgente",
    metaDescription: "Desentupimento em BH: ralos, pias e vasos sanitários. Equipamento profissional, sem quebradeira. Atendimento urgente pelo WhatsApp!",
    intro: "Pia entupida, ralo parado ou vaso sanitário transbordando? A S.O.S Manutenções Residenciais resolve desentupimentos em Belo Horizonte com rapidez e equipamento profissional.",
    content: [
      "Atendemos emergências de entupimento em toda BH. Nossa equipe chega preparada com equipamento especializado — molas, furadeiras de desentupimento e máquinas rotativas para casos mais graves.",
      "Desentupimos pias de cozinha e banheiro, ralos de box e área de serviço, vasos sanitários, caixas de gordura e tubulações de esgoto. Identificamos a causa do entupimento para evitar que o problema volte.",
      "Entupimento é urgência! Cada minuto pode significar transbordamento e danos maiores. Chame agora no WhatsApp e resolva imediatamente!"
    ],
    keywords: ["desentupimento bh", "desentupidora belo horizonte", "desentupir pia bh", "desentupir vaso bh"],
    icon: "ShowerHead",
    imageUrl: "https://i.ibb.co/Z6BVJCJ5/Desentupimento-de-vaso-sanit-rio-em-Belo-Horizonte-com-a-S-O-S-Manuten-es-Residenciais-Marido-de.jpg",
    imageAlt: "Serviços de desentupimento em Belo Horizonte - S.O.S Manutenções Residenciais",
    faq: [
      { question: "Quanto custa um desentupimento em BH?", answer: "Desentupimento de ralo ou pia a partir de R$ 80. Vaso sanitário a partir de R$ 100. Tubulação de esgoto sob orçamento. Valores variam conforme a complexidade." },
      { question: "O desentupimento quebra o piso ou parede?", answer: "Na grande maioria dos casos, não. Usamos molas e máquinas rotativas que desobstruem pela própria tubulação, sem necessidade de quebrar nada." },
      { question: "Posso usar soda cáustica para desentupir?", answer: "Não recomendamos. Soda cáustica pode danificar tubulações de PVC e causar queimaduras graves. Chame um profissional para resolver com segurança." },
      { question: "Vocês atendem emergências de entupimento?", answer: "Sim! Entupimento é tratado como urgência. Atendemos no mesmo dia, inclusive finais de semana." },
      { question: "Como evitar entupimentos recorrentes?", answer: "Use ralo protetor em pias e ralos de box, não descarte gordura na pia, e faça limpeza preventiva das tubulações a cada 6 meses." }
    ],
    children: [
      {
        slug: "pampulha",
        title: "Desentupimento na Pampulha",
        h1: "Desentupimento na Pampulha – Atendimento Imediato",
        metaTitle: "Desentupimento na Pampulha | Atendimento Imediato em BH",
        metaDescription: "Desentupimento na Pampulha com chegada rápida. Pias, ralos, vasos e tubulações. Chame no WhatsApp agora!",
        content: [
          "Na Pampulha, nosso serviço de desentupimento chega em minutos. Estamos na região e priorizamos atendimentos de emergência nos bairros Ouro Preto, Castelo, Jaraguá, São Luiz e adjacentes.",
          "Desentupimos ralos de box, pias de cozinha, vasos sanitários, caixas de gordura e tubulações enterradas. Usamos equipamento profissional que resolve sem quebrar pisos ou paredes.",
          "Entupimento na Pampulha? Não espere piorar — chame a S.O.S Manutenções pelo WhatsApp e resolva agora!"
        ],
        keywords: ["desentupimento pampulha", "desentupidora pampulha", "desentupir pampulha bh"]
      },
      {
        slug: "ralo",
        title: "Desentupimento de Ralo",
        h1: "Desentupimento de Ralo em Belo Horizonte",
        metaTitle: "Desentupimento de Ralo em BH | Serviço Rápido",
        metaDescription: "Desentupimento de ralo em BH. Box, banheiro, cozinha e área de serviço. Equipamento profissional. Ligue agora!",
        content: [
          "Ralo entupido causa mau cheiro, acúmulo de água e desconforto no dia a dia. Em Belo Horizonte, resolvemos o desentupimento do seu ralo com rapidez e equipamento adequado.",
          "Os ralos de box são os que mais entopem por acúmulo de cabelo e sabonete. Também desentupimos ralos de cozinha, área de serviço, garagem e ralos sifonados. Limpamos e desobstruímos completamente.",
          "Manutenção preventiva dos ralos evita entupimentos recorrentes. Solicite uma visita pelo WhatsApp e mantenha seus ralos funcionando perfeitamente!"
        ],
        keywords: ["desentupimento ralo bh", "ralo entupido belo horizonte", "desentupir ralo box"]
      },
      {
        slug: "pia",
        title: "Desentupimento de Pia",
        h1: "Desentupimento de Pia em Belo Horizonte",
        metaTitle: "Desentupimento de Pia em BH | Cozinha e Banheiro",
        metaDescription: "Desentupimento de pia em BH. Cozinha e banheiro com equipamento profissional. Resolve na hora! WhatsApp.",
        content: [
          "Pia entupida na cozinha é um dos problemas mais comuns em residências de Belo Horizonte. Gordura, restos de comida e sabão acumulam no sifão e na tubulação, impedindo o escoamento.",
          "Nossa equipe desentope pias de cozinha e banheiro usando molas e equipamentos profissionais. Desmontamos o sifão quando necessário, limpamos toda a tubulação e verificamos se há obstruções mais profundas.",
          "Evite usar produtos químicos que podem danificar seus canos. Chame um profissional — entre em contato pelo WhatsApp e resolva na hora!"
        ],
        keywords: ["desentupimento pia bh", "pia entupida belo horizonte", "desentupir pia cozinha"]
      },
      {
        slug: "vaso-sanitario",
        title: "Desentupimento de Vaso Sanitário",
        h1: "Desentupimento de Vaso Sanitário em BH",
        metaTitle: "Desentupimento de Vaso Sanitário em BH | Urgente",
        metaDescription: "Desentupimento de vaso em BH. Serviço urgente, sem quebradeira, equipamento profissional. Chame no WhatsApp!",
        content: [
          "Vaso sanitário entupido é emergência. Pode transbordar e causar danos no piso e nos apartamentos vizinhos. Em Belo Horizonte, atendemos com urgência e equipamento especializado.",
          "Usamos bomba de sucção e molas profissionais para desobstruir o vaso sem danificar a louça. Identificamos se o entupimento é no vaso, na coluna de esgoto ou na caixa de inspeção.",
          "Não tente forçar com arames ou produtos corrosivos — isso pode piorar. Chame um profissional pelo WhatsApp e resolva com segurança!"
        ],
        keywords: ["desentupir vaso bh", "vaso entupido belo horizonte", "desentupimento vaso sanitário"]
      },
      {
        slug: "limpeza-tubulacao",
        title: "Limpeza de Tubulação Residencial",
        h1: "Limpeza de Tubulação Residencial em Belo Horizonte",
        metaTitle: "Limpeza de Tubulação em BH | Manutenção Preventiva",
        metaDescription: "Limpeza de tubulação em BH. Prevenção de entupimentos e mau cheiro. Equipamento profissional. Agende agora!",
        content: [
          "A limpeza periódica das tubulações previne entupimentos, mau cheiro e proliferação de insetos. Em Belo Horizonte, fazemos a limpeza completa do sistema de esgoto residencial.",
          "Utilizamos máquina rotativa e hidrojateamento para remover gordura acumulada, resíduos sólidos e incrustações das paredes dos canos. Limpamos caixas de gordura, caixas de inspeção e ralos.",
          "Recomendamos a limpeza a cada 6 meses para manter o sistema funcionando perfeitamente. Agende pelo WhatsApp e previna problemas futuros!"
        ],
        keywords: ["limpeza tubulação bh", "limpeza caixa gordura belo horizonte", "manutenção esgoto residencial"]
      }
    ]
  }
];

export const localPages: LocalData[] = [
  {
    slug: "pampulha",
    name: "Pampulha",
    h1: "Encanador, Eletricista e Marido de Aluguel na Pampulha, BH",
    metaTitle: "Encanador e Eletricista na Pampulha BH | Atendimento Rápido",
    metaDescription: "Encanador, eletricista, marido de aluguel e desentupimento na Pampulha BH. Atendimento prioritário, chegada rápida. WhatsApp!",
    content: [
      "A Pampulha é nossa área de atuação principal. Localizados no bairro Etelvina Carneiro, chegamos em poucos minutos a qualquer ponto da região — Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Itapoã, Santa Amélia e Dona Clara.",
      "A região da Pampulha é conhecida pelo patrimônio arquitetônico de Oscar Niemeyer e pela famosa Lagoa. Mas muitas casas ao redor da orla já têm décadas de construção, com tubulações de ferro galvanizado e fiação antiga que precisam de atenção. Imóveis dos anos 70 e 80 nos bairros Ouro Preto e São Luiz frequentemente apresentam vazamentos ocultos e sobrecarga elétrica.",
      "Os condomínios mais novos do Castelo e Jaraguá também demandam serviços: montagem de móveis planejados, instalação de suportes de TV, troca de chuveiros elétricos potentes e adequação do quadro de disjuntores para comportar ar-condicionado split."
    ],
    highlights: ["Atendimento prioritário — chegada em minutos", "Base na região da Pampulha", "Conhecemos cada bairro da região"],
    keywords: ["encanador pampulha", "eletricista pampulha", "marido de aluguel pampulha", "desentupimento pampulha", "serviços residenciais pampulha bh"],
    nearbyLocals: ["castelo", "buritis", "savassi"],
    serviceDetails: [
      { service: "Encanador na Pampulha", text: "As casas antigas da Pampulha frequentemente possuem tubulação de ferro galvanizado que corrói com o tempo, causando vazamentos ocultos em paredes e pisos. Nosso encanador identifica e repara esses problemas com agilidade, usando técnicas que minimizam a quebra." },
      { service: "Eletricista na Pampulha", text: "Muitos imóveis da região foram construídos antes da norma NBR 5410 e possuem fiação subdimensionada. Fazemos revisão completa, troca de fiação antiga por cabos de cobre adequados e adequação do quadro de disjuntores." },
      { service: "Marido de Aluguel na Pampulha", text: "Instalação de prateleiras, montagem de móveis, troca de fechaduras e pequenos reparos diversos. Por estarmos na Pampulha, chegamos rápido e atendemos no mesmo dia na maioria dos casos." },
      { service: "Desentupimento na Pampulha", text: "Ralos, pias, vasos sanitários e caixas de gordura. Atendemos emergências de entupimento na Pampulha com prioridade, usando equipamento profissional que resolve sem quebrar piso ou parede." }
    ],
    faq: [
      { question: "Vocês atendem toda a região da Pampulha?", answer: "Sim! Atendemos Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Itapoã, Santa Amélia, Dona Clara, Engenho Nogueira e toda a orla da Lagoa da Pampulha." },
      { question: "Qual o tempo de chegada na Pampulha?", answer: "Por estarmos localizados na região, chegamos em 15 a 30 minutos na maioria dos bairros da Pampulha." },
      { question: "Atendem aos finais de semana na Pampulha?", answer: "Sim, atendemos sábados, domingos e feriados para emergências como vazamentos e entupimentos." },
      { question: "Fazem orçamento gratuito na Pampulha?", answer: "Sim! Envie fotos ou descrição do problema pelo WhatsApp e respondemos com orçamento em poucos minutos." },
      { question: "Vocês atendem condomínios na Pampulha?", answer: "Sim, atendemos casas e apartamentos em condomínios. Respeitamos as regras de acesso e horário de cada edifício." }
    ]
  },
  {
    slug: "savassi",
    name: "Savassi",
    h1: "Encanador, Eletricista e Marido de Aluguel na Savassi, BH",
    metaTitle: "Encanador e Eletricista na Savassi BH | Profissionais Qualificados",
    metaDescription: "Encanador, eletricista e marido de aluguel na Savassi BH. Experiência com prédios antigos e modernos. Orçamento grátis!",
    content: [
      "A Savassi é um dos bairros mais tradicionais e movimentados de Belo Horizonte, com uma mistura única de edifícios residenciais históricos e construções modernas de alto padrão. Atendemos moradores e comerciantes com serviços de manutenção completos.",
      "Os prédios antigos da Savassi — muitos construídos nas décadas de 50 e 60 — possuem instalações elétricas e hidráulicas que demandam cuidado especial. Fiação de alumínio, tubulação de ferro e quadros elétricos desatualizados são problemas comuns que nossa equipe resolve com experiência e segurança.",
      "Já os apartamentos modernos da região exigem serviços como instalação de ar-condicionado split, automação de iluminação, adequação elétrica para cooktop de indução e montagem de móveis planejados sob medida."
    ],
    highlights: ["Experiência com prédios antigos e modernos", "Atendimento residencial e comercial", "Equipe qualificada para alto padrão"],
    keywords: ["encanador savassi", "eletricista savassi", "marido de aluguel savassi", "serviços residenciais savassi bh"],
    nearbyLocals: ["sion", "santa-efigenia", "buritis"],
    serviceDetails: [
      { service: "Encanador na Savassi", text: "Os prédios antigos da Savassi frequentemente têm tubulações de ferro que causam água avermelhada e vazamentos. Fazemos substituição por tubulação de PVC/CPVC e consertamos vazamentos em apartamentos sem causar transtorno aos vizinhos." },
      { service: "Eletricista na Savassi", text: "Apartamentos da Savassi com fiação antiga de alumínio precisam de revisão urgente. Fazemos a troca para cobre, adequação do quadro de disjuntores e instalação de pontos para ar-condicionado e equipamentos de alta potência." },
      { service: "Marido de Aluguel na Savassi", text: "Montagem de móveis planejados, instalação de cortinas e persianas, fixação de quadros e espelhos, e pequenos reparos em apartamentos. Trabalhamos com discrição e respeito às regras do condomínio." },
      { service: "Desentupimento na Savassi", text: "Desentupimento de ralos, pias e vasos em apartamentos da Savassi. Usamos equipamento que resolve pela tubulação existente, sem necessidade de quebrar pisos ou azulejos." }
    ],
    faq: [
      { question: "Vocês atendem apartamentos comerciais na Savassi?", answer: "Sim! Atendemos tanto imóveis residenciais quanto comerciais na Savassi e região da Zona Sul de BH." },
      { question: "Têm experiência com prédios antigos?", answer: "Sim, temos ampla experiência com as instalações típicas dos edifícios das décadas de 50 a 70 da Savassi, incluindo tubulação de ferro e fiação de alumínio." },
      { question: "Conseguem atender no mesmo dia na Savassi?", answer: "Na maioria dos casos sim, especialmente para emergências como vazamentos e problemas elétricos." },
      { question: "Respeitam as regras do condomínio?", answer: "Sempre. Seguimos horários de obra, usamos proteção em áreas comuns e limpamos tudo após o serviço." }
    ]
  },
  {
    slug: "buritis",
    name: "Buritis",
    h1: "Encanador, Eletricista e Marido de Aluguel no Buritis, BH",
    metaTitle: "Encanador e Eletricista no Buritis BH | Orçamento Grátis",
    metaDescription: "Encanador, eletricista e marido de aluguel no Buritis BH. Experiência com condomínios novos. Atendimento com horário marcado!",
    content: [
      "O Buritis é um dos bairros que mais crescem em Belo Horizonte, com dezenas de condomínios novos e empreendimentos residenciais de médio e alto padrão. Atendemos moradores da região com todos os nossos serviços de manutenção.",
      "Os apartamentos novos do Buritis, apesar de modernos, frequentemente precisam de serviços como montagem de móveis planejados, instalação de pontos elétricos adicionais para home office, adequação hidráulica para máquina lava e seca e instalação de suportes de TV em parede de drywall.",
      "O bairro possui infraestrutura completa com shoppings, escolas e comércio diversificado. Para manutenção residencial rápida e de qualidade no Buritis, conte com a S.O.S Manutenções."
    ],
    highlights: ["Especialistas em condomínios novos", "Atendimento com horário marcado", "Experiência com drywall e infraestrutura moderna"],
    keywords: ["encanador buritis", "eletricista buritis", "marido de aluguel buritis", "serviços residenciais buritis bh"],
    nearbyLocals: ["castelo", "savassi", "sion"],
    serviceDetails: [
      { service: "Encanador no Buritis", text: "Instalação de pontos de água para máquina lava e seca, conserto de vazamentos em apartamentos novos, troca de torneiras e registros. Trabalhamos com tubulação PPR e PEX usadas nas construções recentes." },
      { service: "Eletricista no Buritis", text: "Instalação de pontos elétricos para home office, adequação do quadro para ar-condicionado split, instalação de tomadas USB e iluminação em sanca de gesso. Seguimos a norma NBR 5410." },
      { service: "Marido de Aluguel no Buritis", text: "Montagem de guarda-roupas e móveis planejados, instalação de suportes de TV em drywall (com reforço interno), prateleiras, cortinas e reparos diversos em apartamentos novos." },
      { service: "Desentupimento no Buritis", text: "Desentupimento de ralos sifonados, pias e vasos sanitários em apartamentos. Limpeza preventiva de caixas de gordura em condomínios." }
    ],
    faq: [
      { question: "Vocês instalam em parede de drywall?", answer: "Sim! Temos experiência com drywall e usamos buchas especiais e reforços internos para fixações seguras de TV, prateleiras e armários." },
      { question: "Atendem condomínios novos no Buritis?", answer: "Sim, atendemos todos os condomínios do Buritis. Respeitamos as regras de acesso e horário de obra de cada edifício." },
      { question: "Fazem instalação de ar-condicionado split?", answer: "Fazemos a parte elétrica: ponto dedicado com fiação adequada, disjuntor e tomada. A instalação do aparelho em si recomendamos com técnico certificado em refrigeração." },
      { question: "Qual o prazo para atendimento no Buritis?", answer: "Geralmente atendemos no mesmo dia ou no dia seguinte. Para emergências, priorizamos o atendimento imediato." }
    ]
  },
  {
    slug: "castelo",
    name: "Castelo",
    h1: "Encanador, Eletricista e Marido de Aluguel no Castelo, BH",
    metaTitle: "Encanador e Eletricista no Castelo BH | Vizinhos de Bairro",
    metaDescription: "Encanador, eletricista e marido de aluguel no Castelo BH. Atendimento em minutos — somos da região! WhatsApp.",
    content: [
      "O bairro Castelo, na região da Pampulha, é um dos que mais atendemos. Por estarmos localizados na vizinhança, conseguimos chegar em poucos minutos para resolver qualquer problema residencial — de um vazamento urgente a uma montagem de móveis.",
      "O Castelo possui uma mistura de casas mais antigas e condomínios de apartamentos recentes. As casas dos anos 80 e 90 frequentemente precisam de revisão hidráulica e elétrica, com substituição de tubulação de ferro e troca de fiação subdimensionada. Já os apartamentos novos demandam instalações modernas e acabamento fino.",
      "Bairro predominantemente residencial e familiar, o Castelo valoriza profissionais de confiança que chegam rápido e resolvem sem complicação. É exatamente isso que oferecemos."
    ],
    highlights: ["Vizinhos de bairro — chegamos em minutos", "Atendimento para casas e apartamentos", "Preço justo e transparente"],
    keywords: ["encanador castelo bh", "eletricista castelo bh", "marido de aluguel castelo", "serviços residenciais castelo bh"],
    nearbyLocals: ["pampulha", "buritis", "savassi"],
    serviceDetails: [
      { service: "Encanador no Castelo", text: "Conserto de vazamentos em casas antigas com tubulação de ferro, troca de registros e torneiras, reparo de descargas e instalação hidráulica para reformas de banheiro e cozinha." },
      { service: "Eletricista no Castelo", text: "Revisão elétrica em casas antigas, troca de disjuntores, instalação de tomadas novas e adequação de fiação para chuveiros potentes e ar-condicionado." },
      { service: "Marido de Aluguel no Castelo", text: "Montagem de móveis, instalação de prateleiras e suportes, troca de fechaduras e ajuste de portas e janelas. Serviço rápido com chegada em minutos." },
      { service: "Desentupimento no Castelo", text: "Desentupimento de ralos, pias e vasos com equipamento profissional. Atendemos emergências no Castelo com prioridade por estarmos na região." }
    ],
    faq: [
      { question: "Qual o tempo de chegada no Castelo?", answer: "Por sermos vizinhos de bairro, chegamos em 10 a 20 minutos no Castelo na maioria dos casos." },
      { question: "Atendem casas e apartamentos no Castelo?", answer: "Sim! Temos experiência tanto com as casas mais antigas quanto com os apartamentos dos condomínios recentes do Castelo." },
      { question: "Fazem reforma de banheiro no Castelo?", answer: "Fazemos a parte hidráulica e elétrica da reforma: reposição de pontos de água, esgoto, tomadas e iluminação. Para revestimento, indicamos parceiros de confiança." },
      { question: "O orçamento é gratuito?", answer: "Sim, fazemos orçamento gratuito. Envie fotos e descrição do problema pelo WhatsApp e respondemos rapidamente." }
    ]
  },
  {
    slug: "santa-efigenia",
    name: "Santa Efigênia",
    h1: "Encanador, Eletricista e Marido de Aluguel em Santa Efigênia, BH",
    metaTitle: "Encanador e Eletricista em Santa Efigênia BH | Imóveis Antigos",
    metaDescription: "Encanador, eletricista e marido de aluguel em Santa Efigênia BH. Especialistas em imóveis antigos. Orçamento grátis!",
    content: [
      "Santa Efigênia é um dos bairros mais tradicionais de Belo Horizonte, com edifícios residenciais que vão desde construções históricas dos anos 40 até prédios mais recentes. A S.O.S Manutenções atende a região com serviços adaptados às particularidades dos imóveis locais.",
      "Os edifícios antigos de Santa Efigênia apresentam desafios específicos: tubulações de ferro corroídas que causam vazamentos e água com ferrugem, fiação de alumínio subdimensionada que não suporta os eletrodomésticos atuais, e quadros elétricos desatualizados sem disjuntores modernos.",
      "Próximo ao centro comercial de BH e ao Hospital Semper, Santa Efigênia possui localização privilegiada e alta demanda por serviços de manutenção. Nossa equipe tem experiência com as adequações necessárias em construções antigas sem comprometer a estrutura original."
    ],
    highlights: ["Especialistas em imóveis antigos", "Reformas e adequações elétricas/hidráulicas", "Atendimento personalizado"],
    keywords: ["encanador santa efigênia", "eletricista santa efigênia", "marido de aluguel santa efigênia", "serviços residenciais santa efigênia bh"],
    nearbyLocals: ["savassi", "sion", "pampulha"],
    serviceDetails: [
      { service: "Encanador em Santa Efigênia", text: "Especialistas em substituição de tubulação antiga de ferro por PVC em edifícios históricos. Consertamos vazamentos sem comprometer a estrutura do imóvel e fazemos adequação hidráulica para reformas." },
      { service: "Eletricista em Santa Efigênia", text: "Troca de fiação de alumínio por cobre, adequação de quadros elétricos antigos para norma atual, e instalação de aterramento. Fundamental para segurança em prédios das décadas de 40 a 70." },
      { service: "Marido de Aluguel em Santa Efigênia", text: "Reparos em portas e janelas antigas, troca de fechaduras, instalação de prateleiras e acessórios. Trabalhamos com cuidado para preservar os acabamentos originais dos imóveis." },
      { service: "Desentupimento em Santa Efigênia", text: "Desentupimento em tubulações antigas que exigem cuidado especial para não danificar canos frágeis. Usamos técnicas adequadas para cada tipo de material." }
    ],
    faq: [
      { question: "Vocês trabalham com prédios muito antigos?", answer: "Sim, temos experiência com edifícios de todas as épocas em Santa Efigênia. Conhecemos as particularidades de tubulações de ferro e fiações antigas." },
      { question: "A troca de fiação antiga é perigosa?", answer: "Não, desde que feita por profissional qualificado. Desenergizamos o circuito, substituímos a fiação com segurança e testamos tudo antes de religar." },
      { question: "Conseguem trocar tubulação de ferro por PVC?", answer: "Sim! Fazemos a substituição parcial ou total, conforme a necessidade e viabilidade técnica do imóvel." },
      { question: "Atendem imóveis comerciais em Santa Efigênia?", answer: "Sim, atendemos residências e estabelecimentos comerciais com serviços de manutenção completos." }
    ]
  },
  {
    slug: "sion",
    name: "Sion",
    h1: "Encanador, Eletricista e Marido de Aluguel no Sion, BH",
    metaTitle: "Encanador e Eletricista no Sion BH | Alto Padrão",
    metaDescription: "Encanador, eletricista e marido de aluguel no Sion BH. Atendimento discreto para imóveis de alto padrão. WhatsApp!",
    content: [
      "O Sion é um bairro nobre da zona centro-sul de Belo Horizonte, com edifícios residenciais de alto padrão e casas amplas. Atendemos moradores da região com serviços de manutenção que combinam qualidade técnica com o nível de exigência dos imóveis locais.",
      "Os apartamentos de alto padrão do Sion possuem sistemas hidráulicos e elétricos mais complexos: pressurizadores de água, aquecedores a gás, quadros elétricos trifásicos, automação residencial e acabamentos premium que exigem cuidado na hora de qualquer reparo.",
      "Trabalhamos com discrição e respeito às normas rígidas dos condomínios do Sion. Nossa equipe chega uniformizada, usa proteção em áreas comuns e deixa o ambiente limpo após cada serviço."
    ],
    highlights: ["Atendimento para imóveis de alto padrão", "Discrição e respeito ao condomínio", "Profissionais com experiência premium"],
    keywords: ["encanador sion bh", "eletricista sion bh", "marido de aluguel sion", "serviços residenciais sion bh"],
    nearbyLocals: ["savassi", "santa-efigenia", "buritis"],
    serviceDetails: [
      { service: "Encanador no Sion", text: "Manutenção de sistemas hidráulicos de alto padrão: pressurizadores, aquecedores a gás, misturadores importados e tubulação de cobre. Consertamos com peças originais e acabamento impecável." },
      { service: "Eletricista no Sion", text: "Instalação e manutenção de sistemas trifásicos, automação residencial, iluminação de design e adequação elétrica para equipamentos de alta potência. Trabalhamos com normas técnicas rigorosas." },
      { service: "Marido de Aluguel no Sion", text: "Montagem de móveis de alto padrão, instalação de cortinas e persianas motorizadas, fixação de espelhos e quadros de grande porte. Acabamento perfeito em cada detalhe." },
      { service: "Desentupimento no Sion", text: "Desentupimento com equipamento de alta tecnologia que não danifica pisos de porcelanato e acabamentos premium. Atendemos com discrição e limpeza total." }
    ],
    faq: [
      { question: "Vocês atendem apartamentos de alto padrão?", answer: "Sim, temos experiência com imóveis de alto padrão no Sion. Trabalhamos com cuidado nos acabamentos e usamos materiais compatíveis com o nível do imóvel." },
      { question: "Trabalham com aquecedores a gás?", answer: "Fazemos a parte hidráulica do aquecedor: conexões de água quente e fria. Para a parte de gás, indicamos profissional certificado." },
      { question: "Os profissionais vão uniformizados?", answer: "Sim, nossa equipe trabalha uniformizada, usa crachá de identificação e proteção em áreas comuns do condomínio." },
      { question: "Atendem no Mangabeiras e Serra também?", answer: "Sim! Além do Sion, atendemos Mangabeiras, Serra, Funcionários e toda a região centro-sul de BH." }
    ]
  }
];

export function getSiloBySlug(slug: string): SiloData | undefined {
  return silos.find(s => s.slug === slug);
}

export function getChildBySlug(siloSlug: string, childSlug: string): SiloChild | undefined {
  const silo = getSiloBySlug(siloSlug);
  return silo?.children.find(c => c.slug === childSlug);
}

export function getLocalBySlug(slug: string): LocalData | undefined {
  return localPages.find(l => l.slug === slug);
}
