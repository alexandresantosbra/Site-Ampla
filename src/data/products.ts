export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  brand: string;
  description: string;
  specifications: Record<string, string>;
  image: string;
  rating: number;
  inStock: boolean;
  tags: string[];
  featured?: boolean;
}

export const products: Product[] = [
  // Cimentos
  {
    id: 1,
    name: 'Cimento CP-II-E-32 50kg',
    price: 28.90,
    category: 'Estrutural',
    subcategory: 'Cimento',
    brand: 'Votorantim',
    description: 'Cimento Portland composto com escória, ideal para obras em geral',
    specifications: {
      'Peso': '50kg',
      'Tipo': 'CP-II-E-32',
      'Resistência': '32 MPa',
      'Aplicação': 'Uso geral'
    },
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.9,
    inStock: true,
    tags: ['cimento', 'estrutural', 'votorantim', '50kg'],
    featured: true
  },
  {
    id: 2,
    name: 'Cimento CP-III-40 50kg',
    price: 32.90,
    category: 'Estrutural',
    subcategory: 'Cimento',
    brand: 'Lafarge',
    description: 'Cimento Portland de alto forno, maior durabilidade',
    specifications: {
      'Peso': '50kg',
      'Tipo': 'CP-III-40',
      'Resistência': '40 MPa',
      'Aplicação': 'Obras especiais'
    },
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.8,
    inStock: true,
    tags: ['cimento', 'estrutural', 'lafarge', '50kg', 'alto forno']
  },

  // Tintas
  {
    id: 3,
    name: 'Tinta Látex Branca 18L',
    price: 89.90,
    originalPrice: 119.90,
    category: 'Tintas',
    subcategory: 'Látex',
    brand: 'Suvinil',
    description: 'Tinta látex acrílica branca, acabamento fosco, alta cobertura',
    specifications: {
      'Volume': '18 litros',
      'Cor': 'Branco',
      'Acabamento': 'Fosco',
      'Rendimento': '200-250 m²',
      'Base': 'Água'
    },
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.7,
    inStock: true,
    tags: ['tinta', 'látex', 'branca', '18l', 'suvinil', 'fosco'],
    featured: true
  },
  {
    id: 4,
    name: 'Tinta Látex Branca 3.6L',
    price: 24.90,
    category: 'Tintas',
    subcategory: 'Látex',
    brand: 'Coral',
    description: 'Tinta látex acrílica branca, ideal para pequenos reparos',
    specifications: {
      'Volume': '3.6 litros',
      'Cor': 'Branco',
      'Acabamento': 'Fosco',
      'Rendimento': '40-50 m²',
      'Base': 'Água'
    },
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.5,
    inStock: true,
    tags: ['tinta', 'látex', 'branca', '3.6l', 'coral', 'fosco']
  },
  {
    id: 5,
    name: 'Tinta Esmalte Sintético Branco 3.6L',
    price: 45.90,
    category: 'Tintas',
    subcategory: 'Esmalte',
    brand: 'Sherwin Williams',
    description: 'Esmalte sintético brilhante, ideal para madeira e metal',
    specifications: {
      'Volume': '3.6 litros',
      'Cor': 'Branco',
      'Acabamento': 'Brilhante',
      'Rendimento': '35-45 m²',
      'Base': 'Solvente'
    },
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.6,
    inStock: true,
    tags: ['tinta', 'esmalte', 'sintético', 'branco', '3.6l', 'sherwin williams', 'brilhante']
  },

  // Ferramentas
  {
    id: 6,
    name: 'Furadeira Bosch GSB 13 RE',
    price: 189.90,
    originalPrice: 249.90,
    category: 'Ferramentas',
    subcategory: 'Furadeiras',
    brand: 'Bosch',
    description: 'Furadeira de impacto com reversão, 650W de potência',
    specifications: {
      'Potência': '650W',
      'Mandril': '13mm',
      'Velocidade': '0-2800 rpm',
      'Impacto': 'Sim',
      'Peso': '1.8kg'
    },
    image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.8,
    inStock: true,
    tags: ['furadeira', 'bosch', 'impacto', '650w', 'ferramentas'],
    featured: true
  },
  {
    id: 7,
    name: 'Kit Chaves de Fenda 6 peças',
    price: 45.90,
    category: 'Ferramentas',
    subcategory: 'Chaves',
    brand: 'Tramontina',
    description: 'Kit com 6 chaves de fenda com cabo emborrachado',
    specifications: {
      'Quantidade': '6 peças',
      'Material': 'Aço carbono',
      'Cabo': 'Emborrachado',
      'Tamanhos': '3, 4, 5, 6, 8, 10mm'
    },
    image: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.6,
    inStock: true,
    tags: ['chaves', 'fenda', 'tramontina', 'kit', '6 peças', 'ferramentas']
  },

  // Elétrica
  {
    id: 8,
    name: 'Fio Flexível 2.5mm 100m',
    price: 89.90,
    category: 'Elétrica',
    subcategory: 'Fios e Cabos',
    brand: 'Prysmian',
    description: 'Fio flexível de cobre, isolação em PVC, 750V',
    specifications: {
      'Seção': '2.5mm²',
      'Comprimento': '100 metros',
      'Material': 'Cobre',
      'Tensão': '750V',
      'Cor': 'Azul'
    },
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.7,
    inStock: true,
    tags: ['fio', 'flexível', '2.5mm', '100m', 'prysmian', 'elétrica', 'cobre']
  },
  {
    id: 9,
    name: 'Disjuntor Bipolar 25A',
    price: 34.90,
    category: 'Elétrica',
    subcategory: 'Proteção',
    brand: 'Schneider',
    description: 'Disjuntor termomagnético bipolar, curva C',
    specifications: {
      'Corrente': '25A',
      'Polos': '2',
      'Curva': 'C',
      'Tensão': '220/380V',
      'Capacidade': '3kA'
    },
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.9,
    inStock: true,
    tags: ['disjuntor', 'bipolar', '25a', 'schneider', 'proteção', 'elétrica']
  },

  // Hidráulica
  {
    id: 10,
    name: 'Tubo PVC 100mm 6m',
    price: 45.90,
    category: 'Hidráulica',
    subcategory: 'Tubos',
    brand: 'Tigre',
    description: 'Tubo PVC esgoto, 100mm de diâmetro, 6 metros',
    specifications: {
      'Diâmetro': '100mm',
      'Comprimento': '6 metros',
      'Material': 'PVC',
      'Aplicação': 'Esgoto',
      'Pressão': 'Sem pressão'
    },
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.8,
    inStock: true,
    tags: ['tubo', 'pvc', '100mm', '6m', 'tigre', 'esgoto', 'hidráulica']
  },

  // Segurança
  {
    id: 11,
    name: 'Capacete de Segurança Branco',
    price: 25.90,
    category: 'Segurança',
    subcategory: 'EPI',
    brand: 'MSA',
    description: 'Capacete de segurança classe B, cor branca',
    specifications: {
      'Classe': 'B',
      'Cor': 'Branco',
      'Material': 'Polietileno',
      'Certificação': 'CA 31469',
      'Ajuste': 'Catraca'
    },
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.7,
    inStock: true,
    tags: ['capacete', 'segurança', 'branco', 'msa', 'epi', 'classe b']
  }
];

export const categories = [
  'Todas',
  'Estrutural',
  'Tintas',
  'Ferramentas',
  'Elétrica',
  'Hidráulica',
  'Segurança'
];

export const brands = [
  'Todas',
  'Votorantim',
  'Lafarge',
  'Suvinil',
  'Coral',
  'Sherwin Williams',
  'Bosch',
  'Tramontina',
  'Prysmian',
  'Schneider',
  'Tigre',
  'MSA'
];