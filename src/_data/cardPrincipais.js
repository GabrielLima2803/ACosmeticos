const cosmeticos = 
  [
    {
  tipo: 'Laçamento!',
  produtos: [
    {
    id: 1,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 'R$ 284,90',
    img: 'https://shoppingalso2021.vtexassets.com/arquivos/ids/254976/image-f03370532d32414c8b0e40c9820de357.jpg?v=638029428465700000',
  },
  {
    id: 2,
    nome: 'Botica 214 Verano en Firenze',
    descicao: 'Eau de Parfum Floral Frutal 75 ml',
    preco: 'R$ 189,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B47553/botica-214_verao_em_firenze_frutal_B47553_segredinhos.jpg',
  },
  {
    id: 3,
    nome: 'Uomini Black',
    descicao: 'Desodorante Colônia 100ml',
    preco: 'R$ 164,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77484/UOMINI-DES-COL-BLACK-100ml-V4_B77484_segredinho.jpg',
  },
  {
    id: 4,
    nome: 'Dr. Botica Poção da Aventura',
    descicao: 'Colônia Infantil 120ml',
    preco: 'R$ 84,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B70669/sophie_like_B70669_segredinhos.jpg',
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
    preco: 'R$ 309,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48134/MALBEC-EDP-SIGNATURE_V2_B48134_Segredinho.jpg',
  },
  {
    id: 2,
    nome: 'Egeo Choc ',
    descicao: 'Desodorante Colônia 90ml ',
    preco: 'R$ 129,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82689/egeo_choc_71133_segredinhos_B82689_.jpg',
  },
  {
    id: 3,
    nome: 'Capricho Tenho Super Poderes',
    descicao: 'Desodorante Colônia 50ml',
    preco: 'R$ 89,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B72050/capricho_72050.jpg',
  },
  {
    id: 4,
    nome: 'Dr. Botica Poção da Aventura',
    descicao: 'Colônia Infantil 120ml',
    preco: 'R$ 84,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B83684/drbotica_pocao_aventura_B83684_segredinhos.jpg',
  },
  ]
  

} 
]

const getCosmeticosById = (id) => cosmeticos.value.find(c => c.id == id)

export {cosmeticos, getCosmeticosById}