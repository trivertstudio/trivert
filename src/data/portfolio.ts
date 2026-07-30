import { PortfolioItem } from '../types';
import { withAssetBuster } from '../utils/image';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'institucional para redes sociais',
    category: 'institucional',
    categoryLabel: 'Vídeo Institucional para lojas e Marcas',
    posterUrl: 'https://www.youtube.com/watch?v=mDZ8eQmmepU',
    videoUrl: 'https://www.youtube.com/watch?v=mDZ8eQmmepU',
    client: 'lovely beauty',
    year: '2026',
    description: 'Filme arquitetônico de alto padrão combinando captação interna em 4K 60fps com tomadas aéreas de drone ao pôr do sol.'
  },
  {
    id: '2',
    title: 'Casamento Rubens e Sabrina',
    category: 'eventos',
    categoryLabel: 'Cobertura de Evento',
    posterUrl: 'https://www.youtube.com/watch?v=GDTeLF5CiQM',
    videoUrl: 'https://www.youtube.com/watch?v=GDTeLF5CiQM',
    client: 'Cliente Particular',
    year: '2026',
    description: 'Aftermovie energético com edição ritmada e cobertura de storymaker em tempo real para redes sociais.'
  },
  {
    id: '3',
    title: 'Vogue Urban Fashion Campaign',
    category: 'reels',
    categoryLabel: 'Reels & Mobile Content',
    posterUrl: withAssetBuster('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'),
    videoUrl: withAssetBuster('https://assets.mixkit.co/videos/preview/mixkit-young-woman-posing-in-a-trendy-outfit-41315-large.mp4'),
    client: 'Vogue Studio',
    year: '2026',
    description: 'Vídeos verticais 9:16 com transições dinâmicas e iluminação estética focados em retenção de engajamento no Instagram.'
  },
  {
    id: '4',
    title: 'Filmagem de casamento com drone',
    category: 'drone',
    categoryLabel: 'Drone Aéreo Cinematográfico',
    posterUrl: 'https://www.youtube.com/watch?v=Ae1GDEj34Ys',
    videoUrl: 'https://www.youtube.com/watch?v=Ae1GDEj34Ys',
    client: 'Cliente Particular',
    year: '2025',
    description: 'Imagens aéreas em 4K HDR com movimentos ultra-suaves de gimbal destacando o evento.'
  },
  {
    id: '5',
    title: 'Comercial de Produto: Lovely Beauty',
    category: 'comercial',
    categoryLabel: 'Comercial de Produto',
    posterUrl: 'https://www.youtube.com/watch?v=nFG-FAsWWd8',
    videoUrl: 'https://www.youtube.com/watch?v=nFG-FAsWWd8',
    client: 'Lovely Beauty',
    year: '2026',
    description: 'Vídeo comercial focado em design de produto, jogo de luzes em estúdio escuro e animações de texto modernas.'
  },
  {
    id: '6',
    title: 'Essência da Marca',
    category: 'fotos',
    categoryLabel: 'Sessão Fotográfica',
    posterUrl: withAssetBuster('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'),
    videoUrl: '',
    client: 'Studio Belleza',
    year: '2025',
    description: 'Campanha editorial com estética elegante, luz natural e direção de arte para identidade visual forte.'
  }
];
