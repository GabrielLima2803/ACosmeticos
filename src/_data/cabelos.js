const cabelo = [
    {
      tipo: 'Shampoo',
      produtos: [
        {
          id: 1,
          nome: 'Shampoo Match',
          descricao: 'Respeito aos Cachos 250ml',
          preco: 'R$ 27,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B47912/shampoo-match-respeito-aos-cachos-250ml.JPG'
        },
        {
          id: 2,
          nome: 'Shampoo Cuide-se Bem Feira',
          descricao: 'Vinagre de Maçã 230ml',
          preco: 'R$ 19,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B84313/SHAMPOO-CBEM-FEIRA-VINAG-DE-MACA_B84313_FECHADO_.jpg'
        },
        {
          id: 3,
          nome: 'Shampoo Sophie',
          descricao: 'Cachos 200ml',
          preco: 'R$ 36,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B75149/Slide2.JPG'
        },
        {
          id: 4,
          nome: 'Shampoo Malbec',
          descricao: 'Club Antiqueda 250ml',
          preco: 'R$ 45,70',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82969/82969-01.jpg'
        },
        {
          id: 5,
          nome: 'Shampoo Boti Baby',
          descricao: '200ml',
          preco: 'R$ 37,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B70685/62893e2b-41f2-489a-a288-069e96a49eff-shampoo-boti-baby-200ml.png'
        }
      ]
    },
    {
      tipo: 'Condicionador',
      produtos: [
        {
          id: 6,
          nome: 'Condicionador Cuide-se Bem',
          descricao: 'Pasta de Abacate Feira 170ml',
          preco: 'R$ 19,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82795/COND-CBEM-FEIRA-PASTA-ABACATE_B82795_FECHADO_.jpg'
        },
        {
          id: 7,
          nome: 'Condicionador Nativa SPA',
          descricao: 'Quinoa 300ml',
          preco: 'R$ 29,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B83074/2000x2000px_83074_NSPA-Quinoa.png'
        },
        {
          id: 8,
          nome: 'Condicionador Malbec Club',
          descricao: 'Antiqueda 250ml',
          preco: 'R$ 49,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B84247/84247-01.jpg'
        },
        {
          id: 9,
          nome: 'Condicionador Boti Baby',
          descricao: '200ml',
          preco: 'R$ 39,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B70695/c46d6ca4-e22a-44e7-8eed-c9a72b945849-condicionador-boti-baby-200ml.png'
        },
        {
          id: 10,
          nome: 'Condicionador Dr.Botica',
          descricao: 'Poção do Brilho 200ml',
          preco: 'R$ 34,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48744/condicionador-dr-botica-pocao-do-brilho-200ml.jpg'
        }
      ]
    },
  
    {
      tipo: 'Creme de Pentear',
      produtos: [
        {
          id: 11,
          nome: 'Creme de Pentear Match',
          descricao: 'Esquadrão do Brilho 150ml',
          preco: 'R$ 49,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B77533/a8e491ea-76e7-4b7f-9dd8-cd755fee09a3-match-creme-pentear-brilho-50-ml-match.png'
        },
        {
          id: 12,
          nome: 'Creme de Pentear MEN',
          descricao: '150ml',
          preco: 'R$ 37,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77271/77271.jpg'
        },
        {
          id: 13,
          nome: 'Creme de Pentear Dr.Botica',
          descricao: 'Poção Tira Nó 150g',
          preco: 'R$ 35,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48745/DR-BOTICA-CREM-PENT-POC-TIRA-NO150g-V2_B48745.jpg'
        },
        {
          id: 14,
          nome: 'Creme sem Enxágue Nativa',
          descricao: 'Ameixa 150ml',
          preco: 'R$ 41,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48993/NativaSPA_Ameixa_Capilar_B48993.jpg'
        },
        {
            id: 16,
            nome: 'Sérum Leave-in Acetinado',
            descricao: 'Capilar Lily 100ml',
            preco: 'R$ 59,90',
            img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B50017/af2bd78f-c4cb-4100-81bf-a20f742a0e9d-bot-50017-lily-serum-leavin-capilar-acetinado-frontal-01.jpg'
          },
      ]
    },
    {
      tipo: 'Finalizador',
      produtos: [
        {
          id: 17,
          nome: 'Sérum Protetor Match',
          descricao: 'Cream Liga dos Coloridos 50ml',
          preco: 'R$ 44,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B75110/fc9a9988-a1d2-41fe-b354-d45ea9928d2c-fluido-protetor-cc-cream-match-liga-dos-coloridos-50ml.png'
        },
        {
          id: 18,
          nome: 'Gel Fixador Capilar D.r Botica',
          descricao: 'Poção de Modelar 80g',
          preco: 'R$ 35,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B80361/80361.jpg'
        },
        {
          id: 19,
          nome: 'Pomada Modeladora MEN',
          descricao: 'Alta Fixação 100g',
          preco: 'R$ 53,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B73745/73745.jpg'
        },
        {
          id: 20,
          nome: 'Sérum Capilar Pós-Química',
          descricao: 'SOS Cauterização 50ml',
          preco: 'R$ 59,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B01078/01078-01.png'
        },
        {
          id: 21,
          nome: 'Pomada Modeladora Malbec',
          descricao: 'Malbec Club 85g',
          preco: 'R$ 55,90',
          img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B49389/Malbec-Club_pomada_anticaspa_85g_B49389.jpg'
        }
      ]
    },
    {
      tipo: 'Finalizador',
      produtos: [
        {
          id: 22,
          nome: 'Combo Match Nutrição Regeneradora',
          preco: 'R$ 95,90',
          descricao: 'Malbec Club 85g',
          img: 'https://i.ibb.co/tKYFr66/p-1-kits-completos.png'
        },
        {
          id: 23,
          nome: 'Combo Match Crescer Cabelo',
          preco: 'R$ 181,70',
          descricao: 'Malbec Club 85g',
          img: 'https://i.ibb.co/NYyBDB0/p-2-kits-completos.png'
        },
        {
          id: 24,
          nome: 'Combo Banho Boti Baby',
          descricao: 'Shampoo + Condicionador',
          preco: 'R$ 45,90',
          img: 'https://i.ibb.co/0DRtHgp/p-3-kits-completos.png'
        },
        {
          id: 25,
          nome: 'Combo Match SOS Cauterização Pós-Química',
          preco: 'R$ 259,50',
          descricao: 'Malbec Club 85g',
          img: 'https://i.ibb.co/vm9VVGk/p-2-kits-completos-1.png'
        },
        {
          id: 26,
          nome: 'Combo Cuide-se Bem Feira Pasta de Abacate',
          preco: 'R$ 38,80',
          descricao: 'Malbec Club 85g',
          img: 'https://i.ibb.co/2nj8CN2/p-5-brilho.png'
        }
      ]
    }
  ]
  
  export { cabelo }
  