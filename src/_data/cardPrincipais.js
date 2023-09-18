const cosmeticos = 
  [
    {
  tipo: 'Lançamentos!',
  produtos: [
    {
    id: 1,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 284.90,
    quantidade: 1,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B46898/zaad_expedition_B46898_segredinhos.jpg',
  },
  {
    id: 2,
    nome: 'Botica 214 Verano en Firenze',
    descicao: 'Eau de Parfum Floral Frutal 75 ml',
    preco: 189.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B47553/botica-214_verao_em_firenze_frutal_B47553_segredinhos.jpg',
    quantidade: 1,
  },
  {
    id: 3,
    nome: 'Uomini Black',
    descicao: 'Desodorante Colônia 100ml',
    preco: 164.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77484/UOMINI-DES-COL-BLACK-100ml-V4_B77484_segredinho.jpg',
    quantidade: 1,
  },
  {
    id: 4,
    nome: 'Dr. Botica Poção da Aventura',
    descicao: 'Colônia Infantil 120ml',
    preco: 84.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B70669/sophie_like_B70669_segredinhos.jpg',
    quantidade: 1,
  },
  ]
  },
  {
  tipo: 'Mais Vendidos!',
  produtos: [
    {
    id: 1,
    nome: 'Malbec Signature',
    descicao: 'Eau de Parfum 90ml',
    preco: 309.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48134/MALBEC-EDP-SIGNATURE_V2_B48134_Segredinho.jpg',
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Egeo Choc ',
    descicao: 'Desodorante Colônia 90ml ',
    preco: 129.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82689/egeo_choc_71133_segredinhos_B82689_.jpg',
    quantidade: 1,
  },
  {
    id: 3,
    nome: 'Capricho Tenho Super Poderes',
    descicao: 'Desodorante Colônia 50ml',
    preco: 89.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B72050/capricho_72050.jpg',
    quantidade: 1,
  },
  {
    id: 4,
    nome: 'Dr. Botica Poção da Aventura',
    descicao: 'Colônia Infantil 120ml',
    preco: 84.90,
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B83684/drbotica_pocao_aventura_B83684_segredinhos.jpg',
    quantidade: 1,
  },
  ]
  

} 
]

const getCosmeticosById = (id) => cosmeticos.value.find(c => c.id == id)

export {cosmeticos, getCosmeticosById}