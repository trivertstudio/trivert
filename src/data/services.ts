import { ServiceItem, AdditionalExtra, FAQItem } from '../types';
import { withAssetBuster } from '../utils/image';

export const MANDATORY_SERVICE_ID = 'videomaker';

export const SERVICES: ServiceItem[] = [
  {
    id: 'videomaker',
    title: 'Videomaker',
    subtitle: 'Serviço Principal Obrigatório',
    description: 'Captação de vídeo profissional em até 4K 60fps com estabilização avançada, iluminação, áudio cristalino e edição refinada para produções de alto nível.',
    price: 500,
    isMandatory: true,
    iconName: 'Video',
    badge: 'Serviço Base',
    features: [
      'Captação até 4K 60fps em Log/RAW',
      'Equipamento de iluminação e microfones',
      'Edição e color grading profissional',
      'Trilha sonora licenciada inclusa'
    ],
    image: withAssetBuster('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80')
  },
  {
    id: 'fotografia',
    title: 'Fotografia',
    subtitle: 'Adicional de Imagem Fixo',
    description: 'Registro fotográfico em altíssima resolução de momentos marcantes, detalhes, bastidores e retratos de alta estética com tratamento individual de cor.',
    price: 250,
    isMandatory: false,
    iconName: 'Camera',
    badge: '+ R$ 250',
    features: [
      'Galeria digital em alta resolução',
      'Tratamento de cor e pele individual',
      'Direção de poses e enquadramentos',
      'Entregas prontas para impressão e web'
    ],
    image: withAssetBuster('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80')
  },
  {
    id: 'drone',
    title: 'Drone',
    subtitle: 'Adicional Aéreo',
    description: 'Tomadas aéreas cinematográficas em 4K que elevam o valor de produção do seu projeto com perspectivas panorâmicas e movimentos de câmera dinâmicos.',
    price: 200,
    isMandatory: false,
    iconName: 'Plane',
    badge: '+ R$ 200',
    features: [
      'Tomadas em 4K HDR até 60fps',
      'Piloto certificado e voo seguro',
      'Perspectivas aéreas panorâmicas',
      'Integração perfeita com o vídeo principal'
    ],
    image: withAssetBuster('https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80')
  },
  {
    id: 'storymaker',
    title: 'Storymaker',
    subtitle: 'Adicional Tempo Real',
    description: 'Cobertura em tempo real diretamente para as redes sociais. Stories dinâmicos, bastidores e vídeos verticais para engajamento instantâneo do público.',
    price: 180,
    isMandatory: false,
    iconName: 'Smartphone',
    badge: '+ R$ 180',
    features: [
      'Cobertura ao vivo durante o evento',
      'Publicações otimizadas para Instagram/TikTok',
      'Bastidores e momentos espontâneos',
      'Geração de desejo e urgência instantânea'
    ],
    image: withAssetBuster('https://images.unsplash.com/photo-1575664463429-bf4d3c296604?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  },
  {
    id: 'videomaker-mobile',
    title: 'Videomaker Mobile',
    subtitle: 'Adicional Vídeo Vertical High-Agility',
    description: 'Captação ágil otimizada em formato vertical (9:16) com lentes móveis e estabilizadores portáteis para Reels, Shorts e TikTok de alta retenção.',
    price: 150,
    isMandatory: false,
    iconName: 'Film',
    badge: '+ R$ 150',
    features: [
      'Formatos 9:16 nativos em alta taxa de quadros',
      'Edição com cortes rápidos e trends',
      'Formatado para máxima retenção de retenção',
      'Pronto para tráfego pago ou orgânico'
    ],
    image: withAssetBuster('https://images.unsplash.com/photo-1618228123700-a1c948bb2bd1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&v=2')
  }
];

export const EXTRAS: AdditionalExtra[] = [
  {
    id: 'entrega-expressa',
    title: 'Entrega Expressa (24 horas)',
    price: 150,
    description: 'Prioridade máxima na ilha de edição com entrega final em até 24 horas após o término do projeto.',
    iconName: 'Zap'
  },
  {
    id: 'arquivos-brutos',
    title: 'Todos os Arquivos Brutos (RAW)',
    price: 100,
    description: 'Entrega de todo o material gravado na íntegra sem cortes via link de alta velocidade.',
    iconName: 'HardDrive'
  },
  {
    id: 'color-grading-cinema',
    title: 'Color Grading Avançado (Look Cinema)',
    price: 120,
    description: 'Tratamento de cores artesanal frame a frame com paletas cinemáticas exclusivas estilo Hollywood.',
    iconName: 'Sparkles'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a taxa base do Videomaker de R$ 500?',
    answer: 'O serviço de Videomaker (R$ 500) é a estrutura fundamental da Trivert. Ele garante a presença da equipe de gravação, equipamentos de câmera 4K, captação de áudio, iluminação e o processo completo de pós-produção e montagem.'
  },
  {
    question: 'Posso selecionar mais de um serviço adicional?',
    answer: 'Sim! Você pode combinar Fotografia (+ R$ 250), Drone (+ R$ 200), Storymaker (+ R$ 180) e Videomaker Mobile (+ R$ 150) como desejar. A calculadora atualiza o valor total em tempo real.'
  },
  {
    question: 'Como funciona o envio da solicitação por WhatsApp?',
    answer: 'Ao clicar no botão "Solicitar orçamento", o sistema gera uma mensagem formatada com todos os serviços escolhidos, valor total estimado, seus dados do projeto e abre diretamente seu WhatsApp para enviá-la para a equipe da Trivert.'
  },
  {
    question: 'E se o meu projeto exigir mais de 1 dia de gravação?',
    answer: 'Você pode ajustar o seletor de "Diárias" diretamente na calculadora. O valor é calculado multiplicando os serviços escolhidos pelo número de diárias com aplicação automática de condições especiais para projetos de múltiplos dias.'
  },
  {
    question: 'Qual o prazo normal de entrega dos vídeos finais?',
    answer: 'O prazo padrão é de 5 a 7 dias úteis após a captação. Se precisar de urgência, você pode selecionar o adicional de Entrega Expressa (24h) na calculadora.'
  },
  {
    question: 'Vocês atendem fora da cidade sede?',
    answer: 'Atendemos em toda a região Nordeste. Para locais fora do nosso raio padrão de atendimento, informaremos os custos de deslocamento de forma transparente após o envio da proposta pelo WhatsApp.'
  }
];
