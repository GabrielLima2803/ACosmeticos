import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CarrinhoView from '@/views/Carrinho/CarrinhoView.vue'
import IndentificaçãoView from '@/views/Carrinho/IndentificaçãoView.vue'
import PerfilView from '@/views/Login/PerfilView.vue'
import CriarLoginView from '@/views/Login/CriarLoginView.vue'
import SobreNosView from '@/views/SobreNos/SobreNosView.vue'
import DuvidasView from '@/views/SobreNos/DuvidasView.vue'
import FavoritoView from '@/views/Favorito/FavoritoView.vue'
import EsqueciSenhaView from '@/views/Login/EsqueciSenhaView.vue'
import OboticarioView from '@/views/Marcas/Oboticario/OboticarioView.vue'
import PerfumariaOView from '@/views/Marcas/Oboticario/Oboticario-Cards/PerfumariaOView.vue'
import CorpoEBanhoView from '@/views/Marcas/Oboticario/Oboticario-Cards/CorpoEBanhoView.vue'
import MaquiagemView from '@/views/Marcas/Oboticario/Oboticario-Cards/MaquiagemView.vue'
import CabelosView from '@/views/Marcas/Oboticario/Oboticario-Cards/CabelosView.vue'
import ProdutoView from '@/views/ProdutoView.vue'

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
    },
    {
      path: '/corpoBanho',
      name: 'corpoBanho',
      component: CorpoEBanhoView
    },
    {
      path: '/maquiagem',
      name: 'maquiagem',
      component: MaquiagemView
    },
    {
      path: '/cabelos',
      name: 'cabelos',
      component: CabelosView
    },
    {
      path: '/produto/:tipo/:id',
      name: 'produto',
      component: ProdutoView,
      props: true
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log('oioioio')
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router