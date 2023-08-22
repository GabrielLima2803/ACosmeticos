import { createRouter, createWebHistory } from 'vue-router'
import OboticarioView from '@/views/OboticarioView.vue'
import HomeView from '@/views/HomeView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'
import PerfilView from '@/views/PerfilView.vue'
import SobreNosView from '@/views/SobreNosView.vue'
import EudoraView from '@/views/EudoraView.vue'
import CriarLoginView from '@/views/CriarLoginView.vue'
import FavoritoView from '@/views/FavoritoView.vue'
import EsqueciSenhaView from '@/views/EsqueciSenhaView.vue'
import DuvidasView from '@/views/DuvidasView.vue'
import PerfumariaOView from '@/views/PerfumariaOView.vue'
import IndentificaçãoView from '@/views/IndentificaçãoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/oboticario',
      name: 'oboticario',
      component: OboticarioView
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView
    },
    {
      path: '/sobreNos',
      name: 'sobreNos',
      component: SobreNosView
    },
    {
      path: '/eudora',
      name: 'eudora ',
      component: EudoraView
    },
    {
      path: '/criarLogin',
      name: 'criarLogin',
      component: CriarLoginView
    },
    {
      path: '/favorito',
      name: 'favorito',
      component: FavoritoView
    },
    {
      path: '/esqueciSenha',
      name: 'esqueciSenha',
      component: EsqueciSenhaView
    },
    {
      path: '/duvidas',
      name: 'duvidas',
      component: DuvidasView
    },
    {
      path: '/perfumariaO',
      name: 'perfumariaO',
      component: PerfumariaOView
    },
    {
      path: '/indentificacao',
      name: 'indentificacao',
      component: IndentificaçãoView
    }

  ]
})

export default router