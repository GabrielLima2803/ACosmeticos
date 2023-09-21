import { ref } from 'vue'

const perfumaria1 = ref([
  {
    tipo: 'Malbec',
    link: 'malbec',
    img: 'https://i.ibb.co/qmRY4KH/malbec.png',
    hover: 'Com fragrâncias marcantes como um bom vinho, as fragrâncias Malbec são as primeiras do mundo a serem feitas com álcool vínico.',
    texto_card:'Malbec',
    produtos: ref([
      {
        id: 1,
        nome:'Malbec Black',
        descricao:'Desodorante Colônia 100ml',
        preco:209.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B74723/1af375cb-0fb1-462e-916a-da119ae9e243-malbec-black-desodorante-colonia-100ml.png',
        hover:'https://i.ibb.co/0rZTN4s/p-1-malbec.png',
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B74723/1af375cb-0fb1-462e-916a-da119ae9e243-malbec-black-desodorante-colonia-100ml.png',
        quantidade: 1
      },
      {
        id: 2,
        nome:'Malbec Flame',
        descricao:'Desodorante Colônia 100ml',
        preco:209.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B80761/B80761_Malbec-Flame-Desodorante-Colonia-100ml_.jpg',
        hover:'https://i.ibb.co/VqFjJph/p-2-malbec.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B80761/B80761_Malbec-Flame-Desodorante-Colonia-100ml_.jpg',
        quantidade: 1
      },
      {
        id: 3,
        nome:'Malbec Club Intenso',
        descricao:'Desodorante Colônia 100ml',
        preco:209.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B49031/e162f566-ac87-447d-b805-23782a3f0f8a-malbec-colonia-club-100ml-v3-b49031.jpg',
        hover:'https://i.ibb.co/2j0KhVS/p-3-malbec.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B49031/e162f566-ac87-447d-b805-23782a3f0f8a-malbec-colonia-club-100ml-v3-b49031.jpg',
        quantidade: 1
      },
      {
        id: 4,
        nome:'Malbec' ,
        descricao:'Desodorante Colônia 100ml',
        preco:209.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_1.jpg',
        hover:'https://i.ibb.co/7CB5Wxc/p-4-malbec.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_1.jpg',
        quantidade: 1
      },
      {
        id: 5,
        nome:'Malbec X',
        descricao:'Desodorante Colônia 100ml',
        preco:209.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B30192/MALBEC-DES-COL-X-100ml-B30192.jpg',
        hover:'https://i.ibb.co/bm8JhNN/p-5-malbec-1.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B30192/MALBEC-DES-COL-X-100ml-B30192.jpg',
        quantidade: 1
      },
    ]
    )
  },
  {
    tipo: 'Coffe',
    link: 'coffe',
    img: 'https://i.ibb.co/wpT2nhL/coffee.png',
    hover: 'Inspirada nos mais nobres grãos de café, a marca de perfumaria Coffee do Boticário traz fragrâncias masculinas e femininas que encantam com sua riqueza olfativa! Confira os produtos e sinta o aroma do café no ar!',
    texto_card:'Coffe',
    produtos: ref([
      {
        id: 1,
        nome:'Coffee Woman Seduction',
        descricao:'Desodorante Colônia 100ml',
        preco:179.90,
        img: 'https://i.ibb.co/r2tZ7X0/p-1-coffee.png',
        hover:'https://i.ibb.co/R45MLGm/p-1-coffee-1.png',
        original: 'https://i.ibb.co/r2tZ7X0/p-1-coffee.png',
        quantidade: 1
      },
      {
        id: 2,
        nome:'Coffee Woman Duo',
        descricao:'Desodorante Colônia 100ml',
        preco:179.90,
        img: 'https://i.ibb.co/XbGHq9d/p-2-coffee.png',
        hover:'https://i.ibb.co/jv9drtg/p-2-coffee-1.png', 
        original: 'https://i.ibb.co/XbGHq9d/p-2-coffee.png',
        quantidade: 1
      },
      {
        id: 3,
        nome:'Coffee Man Duo',
        descricao:'Desodorante Colônia 100ml',
        preco:179.90,
        img: 'https://i.ibb.co/Pm6CxzP/coffee1webp.png',
        hover:'https://i.ibb.co/Ycq2vrn/p-3-coffee.png', 
        original: 'https://i.ibb.co/Pm6CxzP/coffee1webp.png',
        quantidade: 1
      },
      {
        id: 4,
        nome:'Coffee Man',
        descricao:'Desodorante Colônia 100ml',
        preco:179.90,
        img: 'https://i.ibb.co/qs9g0tY/p-4-coffee.png',
        hover:'https://i.ibb.co/6mKCJN9/p-4-coffee-1.png', 
        original: 'https://i.ibb.co/qs9g0tY/p-4-coffee.png',
        quantidade: 1
      },
      {
        id: 5,
        nome:'Coffee Woman Lucky',
        descricao:'Desodorante Colônia 100ml',
        preco:179.90,
        img: 'https://i.ibb.co/bzFxXqz/p-5-coffee.png',
        hover:'https://i.ibb.co/5x3VwdY/p-5-coffee-1.png', 
        original: 'https://i.ibb.co/bzFxXqz/p-5-coffee.png',
        quantidade: 1
      },
    ]
    )
  },

  {
    tipo: 'Dr Botica',
    link: 'dr botica',
    img: 'https://i.ibb.co/wpT2nhL/coffee.png',
    hover: 'Inspirada nos mais nobres grãos de café, a marca de perfumaria Coffee do Boticário traz fragrâncias masculinas e femininas que encantam com sua riqueza olfativa! Confira os produtos e sinta o aroma do café no ar!',
    texto_card:'Dr Botica',
    produtos: ref([
      {
        id: 1,
        nome:'Dr.Botica Poção da Aventura',
        descricao:'Colônia infantil 120ml',
        preco:84.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B83684/83684-01.jpg',
        hover:'https://i.ibb.co/rMrpSvZ/p-1-dr-botica.png',
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B83684/83684-01.jpg',
        quantidade: 1
      },
      {
        id: 2,
        nome:'Dr.Botica Poção da Coragem',
        descricao:'Colônia infantil 120ml',
        preco:84.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B51521/DR-BOTICA-COL-POCAO-CORAG_V2_B51521.jpg',
        hover:'https://i.ibb.co/B2sqZY3/p-2-dr-botica-1.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B51521/DR-BOTICA-COL-POCAO-CORAG_V2_B51521.jpg',
        quantidade: 1
      },
      {
        id: 3,
        nome:'Dr.Botica Poção do Coração',
        descricao:'Colônia infantil 120ml',
        preco:84.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B70672/bcb98f89-ce72-4451-a806-eb6c1305857e-dr-botica-pocao-do-coracao-colonia-infantil-120ml.png',
        hover:'https://i.ibb.co/g62ZJ8p/p-3-dr-botica.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B70672/bcb98f89-ce72-4451-a806-eb6c1305857e-dr-botica-pocao-do-coracao-colonia-infantil-120ml.png',
        quantidade: 1
      },
      {
        id: 4,
        nome:'Dr.Botica Poção da Amizade',
        descricao:'Colônia infantil 120ml',
        preco:84.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B70674/32a192cb-70a7-45e5-9850-4bf1723ec5a1-dr-botica-pocao-da-amizade-colonia-120ml.png',
        hover:'https://i.ibb.co/Z1Pfmks/p-4-dr-botica-1.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B70674/32a192cb-70a7-45e5-9850-4bf1723ec5a1-dr-botica-pocao-da-amizade-colonia-120ml.png',
        quantidade: 1
      },
      {
        id: 5,
        nome:'Dr.Botica Poção da Força',
        descricao:'Colônia infantil 120ml',
        preco:84.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77980/Slide1.JPG',
        hover:'https://i.ibb.co/wJTByz2/p-5-dr-botica-1.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77980/Slide1.JPG',
        quantidade: 1
      },
    ]
    )
  },
  {
    tipo: 'Egeo',
    link: 'egeo',
    img: 'https://i.ibb.co/s2fqRjY/egeo.png',
    hover: 'Egeo é assim, aquela vibe boa que você sente de longe. Conheça todas as versões do Egeo Feminino e Egeo Masculino e encontre a fragrância que mais tem a ver com você.',
    texto_card:'Egeo',
    produtos: ref([
      {
        id: 1,
        nome:'Egeo Choc',
        descricao:'Desodorante Colônia 90ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82689/Egeo-Des-Col-Choc-C-Car-90Ml-B82689_.jpg',
        hover:'https://i.ibb.co/cczkbHw/p-1-egeo.png',
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82689/Egeo-Des-Col-Choc-C-Car-90Ml-B82689_.jpg',
        quantidade: 1
      },
      {
        id: 2,
        nome:'Egeo Bomb Black',
        descricao:'Desodorante Colônia 90ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82685/Egeo-Des-Col-Bomb-Black-C-Car-90Ml-B82685_.jpg',
        hover:'https://i.ibb.co/P1nPY7s/p-2-egeo.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82685/Egeo-Des-Col-Bomb-Black-C-Car-90Ml-B82685_.jpg',
        quantidade: 1
      },
      {
        id: 3,
        nome:'Egeo Original',
        descricao:'Desodorante Colônia 90ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B49812/EGEO-DES-COL-ORIGNL-90ml-V2_B49812.jpg',
        hover:'https://i.ibb.co/qrxDYkj/p-3-egeo.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B49812/EGEO-DES-COL-ORIGNL-90ml-V2_B49812.jpg',
        quantidade: 1
      },
      {
        id: 4,
        nome:'Egeo Red',
        descricao:'Desodorante Colônia 90ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82690/Egeo-Des-Col-Red-C-Cart-90Ml-B82690_.jpg',
        hover:'https://i.ibb.co/2ZZVfky/p-4-egeo.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82690/Egeo-Des-Col-Red-C-Cart-90Ml-B82690_.jpg',
        quantidade: 1
      },
      {
        id: 5,
        nome:'Love Spacy Vibe',
        descricao:'Desodorante Colônia 90ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B84214/Egeo-Des-Col-Spcy-Vibe-C-Car-90Ml-B84214_.jpg',
        hover:'https://i.ibb.co/p3BgmvP/p-5-egeo.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B84214/Egeo-Des-Col-Spcy-Vibe-C-Car-90Ml-B84214_.jpg',
        quantidade: 1
      },
    ]
    )
  },
  {
    tipo: 'Lily',
    link: 'lily',
    img: 'https://i.ibb.co/jMsVyHd/lily.png',
    hover: 'Através do raro processo artesanal de enfleurage, os eaux de parfum de Lily possuem em sua essência as melhores notas dos lírios, criando fragrâncias únicas, delicadas e marcantes.',
    texto_card:'Egeo',
    produtos: ref([
      {
        id: 1,
        nome:'Lily Lumière',
        descricao:'Eau de Parfum 75ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77989/LILY_EDP_LUMIERE_75ml_B77989.jpg',
        hover:'https://i.ibb.co/54Z837y/p-1-lily.png',
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77989/LILY_EDP_LUMIERE_75ml_B77989.jpg',
        quantidade: 1
      },
      {
        id: 2,
        nome:'Lily Absolute',
        descricao:'Eau de Parfum 75ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77988/LILY_EDP-ABSOLU-75ml-V2-B77988_.jpg',
        hover:'https://i.ibb.co/Qj8CWBs/lily-absolute.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77988/LILY_EDP-ABSOLU-75ml-V2-B77988_.jpg',
        quantidade: 1
      },
      {
        id: 3,
        nome:'Lily',
        descricao:'Eau de Parfum 75ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77524/Lily-Eau-de-Parfum-75ml-B77524_.jpg',
        hover:'https://i.ibb.co/sbc3XPS/p-3-lily.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77524/Lily-Eau-de-Parfum-75ml-B77524_.jpg',
        quantidade: 1
      },
      {
        id: 4,
        nome:'Lily Le',
        descricao:'Eau de Parfum 75ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48734/LILY-PARFUM-LE-30ml_B48734_.jpg',
        hover:'https://i.ibb.co/8b1KtFW/p-4-lily.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48734/LILY-PARFUM-LE-30ml_B48734_.jpg',
        quantidade: 1
      },
      {
        id: 5,
        nome:'Love Lily',
        descricao:'Eau de Parfum 75ml',
        preco:279.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B74721/316cf4a4-5f96-445d-b57c-c65ba713a93c-love-lily-eau-de-parfum-75ml.png',
        hover:'https://i.ibb.co/fYht1Jg/love-lily.png', 
        original: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B74721/316cf4a4-5f96-445d-b57c-c65ba713a93c-love-lily-eau-de-parfum-75ml.png',
        quantidade: 1
      },
    ]
    )
  }
]
)
export { perfumaria1 }
