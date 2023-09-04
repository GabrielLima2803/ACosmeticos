const corpoBanho = [
  {
    tipo: 'Nativa Spa',
    link: 'nativa',
    img: 'https://i.ibb.co/cCNGR9X/spa.png',
    hover: 'Os produtos Nativa Spa são perfeitos para quem valoriza experiencias sensoriais com resultados eficazes. Suas linhas completas entregam tratamentos com ingredientes naturais. ',
    texto_card:'Nativa Spa',
    produtos: [
      {
        id: 1,
        nome: 'Creme Morango Ruby',
        descricao: 'Loção Desodorante Corporal 400ml',
        preco:  74.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B01428/NSPA-MORANGO-RUBY-LOC-ANTIOX-400ML_B01428_frontal_.jpg',
        quantidade: 1,
      },
      {
        id: 2,
        nome: 'Creme Acquagel Quinoa',
        descricao: 'Loção Desodorante Corporal 250g',
        preco:  69.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B83454/2000x2000_CARD_PDP_83454_1.jpg',
        quantidade: 1,
      },
      {
        id: 3,
        nome: 'Creme Limão e Patchouli',
        descricao: 'Loção Desodorante Corporal 400ml',
        preco:  74.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B48772/Lo%C3%A7%C3%A3o-Hidratante-Desodorante-Corporal-Nativa-SPA-Lim%C3%A3o-e-Patchouli-400ml.jpg',
        quantidade: 1,
      },
      {
        id: 4,
        nome: 'Creme Pitaya',
        descricao: 'Loção Desodorante Corporal 250g',
        preco:  59.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B52634/a41e3a89-bf54-439f-ad7b-7b2a14d7dfb1-bot-52634-nativa-spa-pitaya-creme-hidratante-frontal-01.jpg',
        quantidade: 1,
      },
      {
        id: 5,
        nome: 'Creme Caviar',
        descricao: 'Loção Desodorante Corporal 400ml',
        preco:  74.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B48256/NSPA-LOC-HID-DES-CPO-CVR-400ml-V3_B48256.jpg',
        quantidade: 1,
      }
    ]
  },
  {
    tipo: 'Cuide Se Bem',
    link: 'cuide',
    img: 'https://i.ibb.co/r5LyhfT/cuide-se-bem.png',
    hover: 'Com fragrâncias envolventes, os produtos da linha Cuide-se Bem promovem a hidratação que você precisa com ativos que cuidam da pele em diferentes ocasiões de uso.',
    texto_card: 'Cuide Se Bem',
    produtos: [
      {
        id: 6,
        nome: 'Body Splash Biscoito',
        descricao: 'Desodorante Colônia 100ml',
        preco:  69.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B53098/660d3bf8-26ae-49b4-a9ef-aeb9bc6ada11-bot-53098-cuide-se-bem-biscoito-bolacha-body-splash-frontal-01.jpg',
        quantidade: 1,
      },
      {
        id: 7,
        nome: 'Body Splash Boa noite',
        descricao: 'Desodorante Colônia 100ml',
        preco:  69.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B82037/82037.jpg',
        quantidade: 1,
      },
      {
        id: 8,
        nome: 'Body Splash Nuvem',
        descricao: 'Desodorante Colônia 100ml',
        preco:  69.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B48739/Cuide-Se-Bem-Body-Splash-Nuvem-200ml-B48739_.jpg',
        quantidade: 1,
      },
      {
        id: 9,
        nome: 'Body Splash Pessegura',
        descricao: 'Desodorante Colônia 100ml',
        preco:  69.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B84205/Cbem-Des-Bdy-Splsh-Pessegura-200Ml-B84205_.jpg',
        quantidade: 1,
      },
      {
        id: 10,
        nome: 'Body Splash Bendito Cacto',
        descricao: 'Desodorante Colônia 100ml',
        preco:  69.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B81170/81170-01.png',
        quantidade: 1,
      }
    ]
  },

  {
    tipo: 'Liz',
    link: 'liz',
    img: 'https://i.ibb.co/7V2FgGn/liz.png',
    hover: 'Liz traz a exclusiva Base de Laire Íris Nobre, uma fórmula que, para alcançar o seu melhor, leva anos para ser produzida. Conheça a linha completa da nova fragrância intensa e marcante do Boticário!',
    texto_card: 'Liz',
    produtos: [
      {
        id: 11,
        nome: 'Creme Liz Inteso',
        descricao: 'Hidratante Desodorante Corpora 250g',
        preco:  59.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B53416/8cad139f-74a4-43e0-b867-b0842e2ec518-bot-53416-liz-intenso-creme-hidratante-frontal-01.jpg',
        quantidade: 1,
      },
      {
        id: 12,
        nome: 'Creme liz',
        descricao: 'Hidratante Desodorante Corpora 250g',
        preco:  59.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B77183/Slide21.JPG',
        quantidade: 1,
      },
      {
        id: 13,
        nome: 'Loção iluminadora Liz',
        descricao: 'Hidratante Desodorante Corporal 200ml',
        preco:  33.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B52562/BOT_52562_LIZ_CREME-HIDRATANTE_FRONTAL_1.jpg',
        quantidade: 1,
      },
      {
        id: 14,
        nome: 'Desodorante Liz',
        descricao: 'Hidratante Desodorante Corporal 200ml',
        preco:  33.80,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B83065/DES-ANTIT-AER-LIZ-SUBLIME_B83065_fechado.jpg',
        quantidade: 1,
      },
      {
        id: 15,
        nome: 'Liz Sublime',
        descricao: 'Desodorante Colônia 10ml',
        preco:  39.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B47342/LIZ-SUBLIME-FLANKER_B47342_.jpg',
        quantidade: 1,
        // img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B47342/LIZ-SUBLIME-FLANKER_B47342_.jpg',
      }
    ]
  },
  {
    tipo: 'Malbec',
    link: 'malbec',
    img: 'https://i.ibb.co/GW8K50P/malbec-1.png',
    hover: 'Com fragrâncias marcantes como um bom vinho, as fragrâncias Malbec são as primeiras do mundo a serem feitas com álcool vínico. Um verdadeiro presente para o homem que sabe apreciar o que há de bom na vida.',
    texto_card: 'Malbec',
    produtos: [
      {
        id: 16,
        nome: 'Creme Malbec Vert',
        descricao: 'Loção Hidratante Desodorante 200ml',
        preco:  54.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B48683/bee1d455-d09c-4e56-82fb-7ffb86d83b6b-malbec-loc-hid-cpo-vert-v3-b48683-frontal.jpg',
        quantidade: 1,
      },
      {
        id: 17,
        nome: 'Body Spray Malbec Vert',
        descricao: 'Desodorante Colônia 100ml',
        preco:  39.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48785/MALBEC-DES-SPR-100ml-V5-PCK_B48785.jpg',
        quantidade: 1,
      },
      {
        id: 18,
        nome: 'Desodorante Malbec X',
        descricao: 'Antitranspirante Aerossol 125ml',
        preco:  33.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B53074/malbec_x_aerosol_antitranspirante_75g_125ml_B53074.jpg',
        quantidade: 1,
      },
      {
        id: 19,
        nome: 'Body Spray Malbec',
        descricao: 'Desodorante Colônia 100ml',
        preco:  39.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48785/MALBEC-DES-SPR-100ml-V5-PCK_B48785.jpg',
        quantidade: 1,
      },
      {
        id: 20,
        nome: 'Coleção Malbec ',
        descricao: 'Experimentação (7 itens)',
        preco:  44.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B54121/KIT-DEMONSTRADOR-MALBEC_COLONIA_V2_7x4ml_B54121_PRINCIPAL_1.jpg',
        quantidade: 1,
      }
    ]
  },
  {
    tipo: 'Zaad',
    link: 'zaad',
    img: 'https://i.ibb.co/qgMZDgW/zaad.png',
    hover: 'Zaad é ideal para homens sofisticados e sonhadores, que levam a vida com intensidade, sempre seguindo a intuição e se mantendo aberto a grandes paixões.',
    texto_card: 'Zaad',
    produtos: [
      {
        id: 21,
        nome: 'Desodorante Zaad Arctic',
        descricao: 'Antitranspirante Aerossol 75g',
        preco:  33.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B51873/BOT_51873_ZAAD-ARCTIC_DESODORANTE-ANTITRANSPIRANTE-SPRAY_FRONTAL_1.jpg',
        quantidade: 1,
      },
      {
        id: 22,
        nome: 'Body Splash Zaad',
        descricao: 'Desodorante clônia 200ml',
        preco:  87.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B74401/6ff4b445-e0e8-40a4-970b-d5ebc8c04522-body-splash-desodorante-colonia-zaad-200ml.png',
        quantidade: 1,
      },
      {
        id: 23,
        nome: 'Espuma de Barbear Zaad',
        descricao: 'Espuma Hidratante 200ml',
        preco:  61.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B74450/d77bfeae-84d9-40e4-b121-76f7e338a331-espuma-de-barbear-hidratante-zaad-200ml.png',
        quantidade: 1,
      },
      {
        id: 24,
        nome: 'Zaad Arctic',
        descricao: 'Eau De Parfum 10ml',
        preco:  49.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B52209/BOT_52209_ZAAD_PRM_FRONTAL_1.jpg',
        quantidade: 1,
      },
      {
        id: 25,
        nome: 'Kit Miniatura Perfumaria',
        descricao: 'Masculina (4 itens)',
        preco:  59.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B52482/bbf9c4e6-3a37-4b57-a18a-c4ccb47c9500-bot-52482-the-blend-zaad-kit-miniaturas-frontal-01.jpg',
        quantidade: 1,
      }
    ]
  }
]


export { corpoBanho }
