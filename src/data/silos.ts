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
}

export const silos: SiloData[] = [
  {
    slug: "marido-de-aluguel",
    title: "Marido de Aluguel",
    h1: "Marido de Aluguel em Belo Horizonte – Pequenos Reparos Residenciais",
    metaTitle: "Marido de Aluguel em BH | Reparos Residenciais Profissionais",
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
    metaTitle: "Encanador em BH | Serviços Hidráulicos Residenciais",
    metaDescription: "Encanador em Belo Horizonte: conserto de vazamentos, troca de torneiras e instalações hidráulicas. Atendimento no mesmo dia. Orçamento grátis!",
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
        metaDescription: "Conserto de vazamentos em BH. Localização e reparo de vazamentos em tubulações, paredes e pisos. Orçamento grátis!",
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
        metaDescription: "Conserto de descarga acoplada em BH. Reparo de caixa acoplada e válvula de descarga. Serviço rápido e garantido!",
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
        metaDescription: "Instalação hidráulica residencial em BH. Encanamento para banheiro, cozinha e área de serviço. Solicite orçamento!",
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
    metaTitle: "Eletricista em BH | Serviços Elétricos Residenciais",
    metaDescription: "Eletricista em Belo Horizonte: instalação de tomadas, troca de disjuntores e chuveiros. Serviço seguro e garantido. Chame no WhatsApp agora!",
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
    metaTitle: "Desentupimento em BH | Ralos, Pias e Vasos Sanitários",
    metaDescription: "Desentupimento em Belo Horizonte: ralos, pias e vasos sanitários. Equipamento profissional, sem quebradeira. Atendimento urgente pelo WhatsApp!",
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
        metaDescription: "Desentupimento de pia em BH. Pia de cozinha e banheiro com equipamento profissional. Resolve na hora! WhatsApp.",
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
        metaDescription: "Desentupimento de vaso sanitário em BH. Serviço urgente com equipamento profissional. Sem quebradeira. WhatsApp!",
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
        metaDescription: "Limpeza de tubulação residencial em BH. Prevenção de entupimentos e mau cheiro. Equipamento profissional!",
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
    h1: "Serviços Residenciais na Pampulha – Marido de Aluguel, Encanador e Eletricista",
    metaTitle: "Serviços Residenciais na Pampulha | Marido de Aluguel BH",
    metaDescription: "Serviços residenciais na Pampulha: marido de aluguel, encanador, eletricista e desentupimento. Atendimento rápido!",
    content: [
      "A Pampulha é nossa área de atuação principal. Localizados no bairro Etelvina Carneiro, chegamos rapidamente a qualquer ponto da região — Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Itapoã, Santa Amélia e Dona Clara.",
      "A região da Pampulha possui muitas casas e condomínios de apartamentos que precisam de manutenção constante. Oferecemos todos os nossos serviços com atendimento prioritário para moradores da região.",
      "Conheça o conjunto arquitetônico da Pampulha projetado por Oscar Niemeyer — patrimônio da UNESCO. E quando precisar de reparos na sua casa, conte com quem está pertinho de você!"
    ],
    highlights: ["Atendimento prioritário", "Chegada em minutos", "Conhecemos a região"],
    keywords: ["serviços residenciais pampulha", "marido de aluguel pampulha", "encanador pampulha", "eletricista pampulha"]
  },
  {
    slug: "savassi",
    name: "Savassi",
    h1: "Serviços Residenciais na Savassi – Marido de Aluguel, Encanador e Eletricista",
    metaTitle: "Serviços Residenciais na Savassi | Marido de Aluguel BH",
    metaDescription: "Serviços residenciais na Savassi: reparos, hidráulica, elétrica e desentupimento. Profissionais qualificados em BH!",
    content: [
      "A Savassi é um dos bairros mais movimentados de Belo Horizonte, com muitos edifícios residenciais e comerciais. Atendemos moradores e comerciantes com serviços de manutenção completos.",
      "Apartamentos na Savassi frequentemente precisam de reparos hidráulicos, elétricos e instalações diversas. Nossa equipe conhece as particularidades dos prédios antigos e modernos da região.",
      "Localizada na zona centro-sul de BH, a Savassi é conhecida pela vida cultural vibrante. E quando sua casa precisar de reparos, a S.O.S Manutenções está a uma ligação de distância!"
    ],
    highlights: ["Experiência com prédios antigos", "Atendimento comercial e residencial", "Equipe qualificada"],
    keywords: ["serviços residenciais savassi", "marido de aluguel savassi", "encanador savassi"]
  },
  {
    slug: "buritis",
    name: "Buritis",
    h1: "Serviços Residenciais no Buritis – Marido de Aluguel, Encanador e Eletricista",
    metaTitle: "Serviços Residenciais no Buritis | Marido de Aluguel BH",
    metaDescription: "Serviços residenciais no Buritis: marido de aluguel, encanador, eletricista e desentupimento. Orçamento grátis!",
    content: [
      "O Buritis é um dos bairros que mais crescem em Belo Horizonte, com muitos condomínios novos e empreendimentos residenciais. Atendemos a região com todos os nossos serviços de manutenção.",
      "Moradores do Buritis confiam na S.O.S Manutenções para instalações em apartamentos novos, reparos hidráulicos, serviços elétricos e montagem de móveis. Atendemos com horário marcado.",
      "O bairro possui excelente infraestrutura e comércio diversificado. Para manutenção da sua residência, conte com profissionais que conhecem as necessidades dos imóveis da região!"
    ],
    highlights: ["Experiência com imóveis novos", "Horário marcado", "Profissionais experientes"],
    keywords: ["serviços residenciais buritis", "marido de aluguel buritis", "encanador buritis"]
  },
  {
    slug: "castelo",
    name: "Castelo",
    h1: "Serviços Residenciais no Castelo – Marido de Aluguel, Encanador e Eletricista",
    metaTitle: "Serviços Residenciais no Castelo | Marido de Aluguel BH",
    metaDescription: "Serviços residenciais no Castelo BH: reparos, encanador, eletricista e desentupimento. Atendimento rápido!",
    content: [
      "O bairro Castelo, na região da Pampulha, é um dos que mais atendemos. Casas e apartamentos da região contam com nosso serviço ágil de manutenção residencial.",
      "Por estar próximo da nossa base, o Castelo recebe atendimento prioritário. Realizamos consertos hidráulicos, elétricos, instalações, montagens e desentupimentos com rapidez.",
      "O Castelo é um bairro predominantemente residencial com ruas tranquilas e boa infraestrutura. Para manter seu imóvel em perfeitas condições, chame a S.O.S Manutenções pelo WhatsApp!"
    ],
    highlights: ["Vizinhos de bairro", "Atendimento em minutos", "Preço justo"],
    keywords: ["serviços residenciais castelo", "marido de aluguel castelo", "encanador castelo bh"]
  },
  {
    slug: "santa-efigenia",
    name: "Santa Efigênia",
    h1: "Serviços Residenciais em Santa Efigênia – Marido de Aluguel, Encanador e Eletricista",
    metaTitle: "Serviços Residenciais em Santa Efigênia | Marido de Aluguel BH",
    metaDescription: "Serviços residenciais em Santa Efigênia BH: reparos, hidráulica, elétrica e desentupimento. Ligue agora!",
    content: [
      "Santa Efigênia é um bairro tradicional de Belo Horizonte, com muitos edifícios residenciais que necessitam de manutenção constante. A S.O.S Manutenções atende a região com serviços completos.",
      "Muitos imóveis em Santa Efigênia são antigos e precisam de atenção especial na parte hidráulica e elétrica. Nossa equipe tem experiência com reformas e adequações em construções antigas.",
      "Próximo ao centro de BH, Santa Efigênia possui localização privilegiada. Para manutenção residencial de qualidade, entre em contato pelo WhatsApp e agende sua visita!"
    ],
    highlights: ["Experiência com imóveis antigos", "Reformas e adequações", "Atendimento personalizado"],
    keywords: ["serviços residenciais santa efigênia", "marido de aluguel santa efigênia", "encanador santa efigênia"]
  },
  {
    slug: "sion",
    name: "Sion",
    h1: "Serviços Residenciais no Sion – Marido de Aluguel, Encanador e Eletricista",
    metaTitle: "Serviços Residenciais no Sion | Marido de Aluguel BH",
    metaDescription: "Serviços residenciais no Sion BH: marido de aluguel, encanador, eletricista e desentupimento. Orçamento grátis!",
    content: [
      "O Sion é um bairro nobre de Belo Horizonte com muitos apartamentos de alto padrão. Atendemos moradores da região com serviços de manutenção residencial de qualidade.",
      "Nossos profissionais conhecem as exigências dos condomínios do Sion — trabalhamos com discrição, limpeza e respeito às normas de cada edifício. Realizamos todos os tipos de reparos e instalações.",
      "O bairro Sion fica na região centro-sul de BH, próximo ao Mangabeiras. Para manutenção do seu apartamento ou casa, chame a S.O.S Manutenções pelo WhatsApp!"
    ],
    highlights: ["Atendimento em alto padrão", "Respeito às normas do condomínio", "Profissionais discretos"],
    keywords: ["serviços residenciais sion", "marido de aluguel sion", "encanador sion bh"]
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
