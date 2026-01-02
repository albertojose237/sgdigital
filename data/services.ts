export interface ServiceDetail {
  id: string
  title: string
  description: string
  image: string
  icon: string
  longDescription: string
  features: string[]
  stats: {
    projects: string
    satisfaction: string
    clients: string
    experience: string
  }
  timeline: {
    phase: string
    duration: string
    description: string
  }[]
  pricing: {
    plan: string
    price: string
    features: string[]
  }[]
  process: string[]
  portfolio: string[]
}

export const services: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Desenvolvimento de Sites",
    description:
      "Criação de sites profissionais, responsivos e otimizados para SEO, focados em resultados e experiência do usuário.",
    image: "/web-developer-coding-professional.jpg",
    icon: "code",
    longDescription:
      "Desenvolvemos sites modernos, responsivos e otimizados para mecanismos de busca. Cada projeto é personalizado conforme as necessidades do seu negócio, garantindo uma presença online profissional que converte visitantes em clientes.",
    stats: {
      projects: "50+",
      satisfaction: "98%",
      clients: "50+",
      experience: "4+"
    },
    features: [
      "Design responsivo para todos os dispositivos",
      "Otimização SEO integrada",
      "Velocidade e performance otimizadas",
      "Integração com sistemas de análise",
      "Certificado SSL incluído",
      "Suporte técnico completo",
      "Atualizações e manutenção",
      "Backup automático"
    ],
    timeline: [
      {
        phase: "Pesquisa & Planejamento",
        duration: "3-5 dias",
        description: "Análise de requisitos, concorrência e estratégia digital"
      },
      {
        phase: "Design & Wireframes",
        duration: "7-14 dias",
        description: "Criação de protótipos e aprovação visual com o cliente"
      },
      {
        phase: "Desenvolvimento",
        duration: "14-21 dias",
        description: "Codificação, integração e testes de funcionalidade"
      },
      {
        phase: "Testes & Deploy",
        duration: "3-7 dias",
        description: "Testes completos e publicação em produção"
      }
    ],
    pricing: [
      {
        plan: "Site Institucional",
        price: "500 000 - 1 000 000 Kz",
        features: [
          "5-10 páginas",
          "Design profissional",
          "Responsivo",
          "SEO básico",
          "Contato e formulários"
        ]
      },
      {
        plan: "Site Avançado",
        price: "1 000 000 - 2 500 000 Kz",
        features: [
          "10-20 páginas",
          "Design personalizado",
          "Blog/CMS",
          "SEO avançado",
          "Integração com sistemas",
          "Analytics"
        ]
      },
      {
        plan: "Web App",
        price: "Acima de 2 500 000 Kz",
        features: [
          "Ilimitado de funcionalidades",
          "Dashboard personalizado",
          "API REST",
          "Autenticação avançada",
          "Banco de dados",
          "Suporte prioritário"
        ]
      }
    ],
    process: [
      "Reunião inicial para entender seu negócio",
      "Pesquisa de mercado e análise de concorrência",
      "Criação de wireframes e protótipos",
      "Aprovação do design com o cliente",
      "Desenvolvimento e implementação",
      "Testes de qualidade e compatibilidade",
      "Deploy em servidor de produção",
      "Treinamento e documentação"
    ],
    portfolio: ["Banco Nacional de Angola", "SONANGOL", "Empresa Premiada"]
  },
  {
    id: "web-systems",
    title: "Sistemas Web",
    description:
      "Desenvolvimento de sistemas personalizados e integrados para automatizar processos e melhorar a gestão empresarial.",
    image: "/woman-analyzing-data-dashboard-analytics.jpg",
    icon: "chart",
    longDescription:
      "Criamos sistemas web robustos e escaláveis para otimizar seus processos empresariais. Do gerenciamento de estoque até CRM completo, nossas soluções são personalizadas e integradas com suas operações existentes.",
    stats: {
      projects: "30+",
      satisfaction: "96%",
      clients: "25+",
      experience: "6+"
    },
    features: [
      "Desenvolvimento sob medida",
      "Integração com sistemas existentes",
      "Dashboard executivo",
      "Relatórios e análises",
      "Controle de acesso e segurança",
      "Backup e recuperação de dados",
      "Escalabilidade",
      "Suporte 24/7"
    ],
    timeline: [
      {
        phase: "Levantamento de Requisitos",
        duration: "7-10 dias",
        description: "Detalhamento de todas as necessidades e processos"
      },
      {
        phase: "Arquitetura & Design",
        duration: "10-14 dias",
        description: "Planejamento técnico e design da base de dados"
      },
      {
        phase: "Desenvolvimento",
        duration: "21-30 dias",
        description: "Criação de módulos e integração de funcionalidades"
      },
      {
        phase: "Implantação",
        duration: "7-14 dias",
        description: "Migração de dados e treinamento de usuários"
      }
    ],
    pricing: [
      {
        plan: "Sistema Pequeno",
        price: "1 000 000 - 2 500 000 Kz",
        features: [
          "Até 5 módulos",
          "10-50 usuários",
          "Banco de dados básico",
          "Relatórios simples"
        ]
      },
      {
        plan: "Sistema Médio",
        price: "2 500 000 - 5 000 000 Kz",
        features: [
          "Até 10 módulos",
          "50-500 usuários",
          "Banco de dados avançado",
          "Relatórios customizados",
          "API"
        ]
      },
      {
        plan: "Sistema Enterprise",
        price: "Acima de 5 000 000 Kz",
        features: [
          "Ilimitado de módulos",
          "Ilimitado de usuários",
          "Cloud infrastructure",
          "BI avançado",
          "Suporte dedicado"
        ]
      }
    ],
    process: [
      "Análise profunda de seu negócio",
      "Mapeamento de processos e fluxos",
      "Design de arquitetura técnica",
      "Desenvolvimento iterativo com feedback",
      "Integração com sistemas legados",
      "Testes extensivos",
      "Implantação gradual",
      "Treinamento completo dos usuários"
    ],
    portfolio: ["SONANGOL", "Ministério da Educação", "Banco Privado"]
  },
  {
    id: "ecommerce",
    title: "Lojas Virtuais",
    description: "Plataformas de e-commerce seguras e intuitivas para expandir suas vendas online com facilidade.",
    image: "/team-shopping-ecommerce-online-store.jpg",
    icon: "cart",
    longDescription:
      "Transforme seu negócio com uma loja virtual profissional. Oferecemos soluções completas de e-commerce com pagamento seguro, gestão de produtos e integração com seus sistemas.",
    stats: {
      projects: "45+",
      satisfaction: "97%",
      clients: "40+",
      experience: "5+"
    },
    features: [
      "Catálogo de produtos ilimitado",
      "Carrinho de compras inteligente",
      "Múltiplos gateways de pagamento",
      "Controle de estoque automático",
      "Cupons e promoções",
      "Integração com redes sociais",
      "Análise de vendas",
      "Certificado SSL"
    ],
    timeline: [
      {
        phase: "Estratégia e Planejamento",
        duration: "1-2 semanas",
        description: "Definição de público, produtos e estratégia de venda"
      },
      {
        phase: "Design & UX",
        duration: "2-3 semanas",
        description: "Design da loja otimizado para conversão"
      },
      {
        phase: "Desenvolvimento",
        duration: "3-4 semanas",
        description: "Integração de produtos, pagamento e funcionalidades"
      },
      {
        phase: "Testes & Lançamento",
        duration: "1-2 semanas",
        description: "Testes de pagamento e publicação da loja"
      }
    ],
    pricing: [
      {
        plan: "Loja Básica",
        price: "750 000 - 1 500 000 Kz",
        features: [
          "Até 100 produtos",
          "1 gateway de pagamento",
          "Admin simples",
          "Email de notificações"
        ]
      },
      {
        plan: "Loja Profissional",
        price: "1 500 000 - 3 000 000 Kz",
        features: [
          "Até 500 produtos",
          "Múltiplos gateways",
          "Admin avançado",
          "Marketing integrado",
          "Cupons e promoções"
        ]
      },
      {
        plan: "Loja Enterprise",
        price: "Acima de 3 000 000 Kz",
        features: [
          "Ilimitado de produtos",
          "Múltiplos idiomas",
          "API customizada",
          "Suporte dedicado",
          "Cloud hosting incluído"
        ]
      }
    ],
    process: [
      "Análise do modelo de negócio",
      "Estruturação do catálogo",
      "Design intuitivo da interface",
      "Integração de pagamentos",
      "Teste de transações",
      "Otimização para conversão",
      "Integração com marketing",
      "Treinamento e suporte"
    ],
    portfolio: ["Loja Premium Angola", "E-commerce Fashion", "Mercado Digital"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Páginas de alta conversão projetadas para capturar leads e maximizar suas campanhas de marketing.",
    image: "/design-team-creative-meeting-multicolor.jpg",
    icon: "rocket",
    longDescription:
      "Landing pages otimizadas para conversão. Cada página é estrategicamente projetada para capturar leads, gerar vendas e maximizar o retorno das suas campanhas de marketing digital.",
    stats: {
      projects: "100+",
      satisfaction: "99%",
      clients: "80+",
      experience: "3+"
    },
    features: [
      "Design focado em conversão",
      "Formulários otimizados",
      "A/B testing",
      "Integração com email marketing",
      "Analytics detalhado",
      "Mobile first",
      "Velocidade otimizada",
      "Chat e live support"
    ],
    timeline: [
      {
        phase: "Pesquisa de Público",
        duration: "12-24 horas",
        description: "Análise do público-alvo e concorrentes"
      },
      {
        phase: "Copywriting & Design",
        duration: "24-36 horas",
        description: "Criação de conteúdo persuasivo e design visual"
      },
      {
        phase: "Desenvolvimento",
        duration: "24-36 horas",
        description: "Codificação e otimizações técnicas"
      },
      {
        phase: "Testes & Otimização",
        duration: "12-24 horas",
        description: "Testes A/B e ajustes finais"
      }
    ],
    pricing: [
      {
        plan: "Landing Page Simples",
        price: "250 000 - 500 000 Kz",
        features: [
          "1 página",
          "Design básico",
          "Formulário simples",
          "Email marketing"
        ]
      },
      {
        plan: "Landing Page Profissional",
        price: "500 000 - 1 000 000 Kz",
        features: [
          "1-3 páginas",
          "Design customizado",
          "Múltiplas seções",
          "A/B testing",
          "Analytics avançado"
        ]
      },
      {
        plan: "Campanha Completa",
        price: "1 000 000 - 2 000 000 Kz",
        features: [
          "Múltiplas landing pages",
          "Integração de ads",
          "Otimização contínua",
          "Consultoria de marketing",
          "Relatórios mensais"
        ]
      }
    ],
    process: [
      "Definição de objetivo da campanha",
      "Pesquisa e análise de público",
      "Criação de copy persuasivo",
      "Design visual impactante",
      "Desenvolvimento responsivo",
      "Otimização para SEO",
      "Testes de funcionalidade",
      "Lançamento e monitoramento"
    ],
    portfolio: ["Campanha Tech 2024", "Lançamento de Produto", "Webinar Success"]
  },
  {
    id: "design-multimedia",
    title: "Design & Multimídia",
    description: "Criação de identidade visual, flyers, logotipos, edição de vídeo e motion design impactantes.",
    image: "/designer-working-on-color-palette-tablet.jpg",
    icon: "palette",
    longDescription:
      "Design criativo e impactante que comunica sua marca. De logos a vídeos profissionais, criamos identidade visual coerente que deixa marca no seu público.",
    stats: {
      projects: "85+",
      satisfaction: "98%",
      clients: "60+",
      experience: "5+"
    },
    features: [
      "Design de logotipo",
      "Identidade visual completa",
      "Branding guidelines",
      "Materiais impressos",
      "Edição de vídeo profissional",
      "Motion graphics",
      "Ilustrações customizadas",
      "Animações"
    ],
    timeline: [
      {
        phase: "Brief & Pesquisa",
        duration: "1 semana",
        description: "Entendimento da marca e briefing detalhado"
      },
      {
        phase: "Conceituação",
        duration: "1-2 semanas",
        description: "Desenvolvimento de conceitos criativos"
      },
      {
        phase: "Design",
        duration: "2-3 semanas",
        description: "Criação e refinamento dos designs"
      },
      {
        phase: "Finalização",
        duration: "1 semana",
        description: "Ajustes finais e entrega de arquivos"
      }
    ],
    pricing: [
      {
        plan: "Design Básico",
        price: "300 000 - 600 000 Kz",
        features: [
          "Logo",
          "3 conceitos",
          "2 revisões",
          "Arquivos finais"
        ]
      },
      {
        plan: "Identidade Completa",
        price: "600 000 - 1 500 000 Kz",
        features: [
          "Logo",
          "Brand guidelines",
          "Materiais impressos",
          "5 revisões",
          "Arquivos em múltiplos formatos"
        ]
      },
      {
        plan: "Pacote Premium",
        price: "1 500 000 - 3 000 000 Kz",
        features: [
          "Identidade completa",
          "Vídeo promocional",
          "Motion graphics",
          "Ilustrações custom",
          "Suporte pós-projeto"
        ]
      }
    ],
    process: [
      "Reunião de briefing criativo",
      "Pesquisa de mercado e tendências",
      "Brainstorm de conceitos",
      "Desenvolvimento de ideias",
      "Apresentação de propostas",
      "Refinamento e iterações",
      "Aprovação final",
      "Entrega de arquivos"
    ],
    portfolio: ["Brand Angola Tech", "Identidade Ministério", "Campanha Social"]
  },
  {
    id: "branding-social",
    title: "Branding & Social Media",
    description:
      "Gestão estratégica da sua marca e presença online para engajar e construir relacionamentos com seu público.",
    image: "/team-brainstorming-creative-office-discussion.jpg",
    icon: "globe",
    longDescription:
      "Construa uma presença online forte e consistente. Gerenciamos sua marca nas redes sociais, criando conteúdo engajador que conecta você com seu público.",
    stats: {
      projects: "120+",
      satisfaction: "97%",
      clients: "70+",
      experience: "6+"
    },
    features: [
      "Estratégia de redes sociais",
      "Criação de conteúdo",
      "Gestão de comunidade",
      "Análise de métricas",
      "Campanhas de influenciadores",
      "Publicidade em redes sociais",
      "Relatórios mensais",
      "Atendimento ao cliente"
    ],
    timeline: [
      {
        phase: "Auditoria & Estratégia",
        duration: "2 semanas",
        description: "Análise da presença atual e definição de estratégia"
      },
      {
        phase: "Setup & Configuração",
        duration: "1 semana",
        description: "Criação de perfis e otimização"
      },
      {
        phase: "Criação de Conteúdo",
        duration: "Contínuo",
        description: "Produção diária de conteúdo relevante"
      },
      {
        phase: "Análise & Otimização",
        duration: "Contínuo",
        description: "Monitoramento e ajuste de estratégia"
      }
    ],
    pricing: [],
    process: [
      "Auditoria de presença digital",
      "Definição de personas e público",
      "Criação de calendário editorial",
      "Produção de conteúdo visual",
      "Gestão de interações",
      "Análise de performance",
      "Otimização contínua",
      "Relatórios e insights"
    ],
    portfolio: ["Banco Nacional Angola", "Unitel Angola", "Tech Companies"]
  }
]

export function getServiceById(id: string): ServiceDetail | undefined {
  return services.find(service => service.id === id)
}
