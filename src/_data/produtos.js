import { cabelo } from "./cabelos"
import { perfumaria1 } from './perfumaria'
import { corpoBanho } from './corpobanho'
import { maquiagem } from './maquiagem'

const produtos = [...cabelo, ...corpoBanho, ...maquiagem, ...perfumaria1.value]

function getProduto(tipo, id) {
    const produtos_por_tipo = produtos.find(prod => prod.tipo == tipo).produtos
    const produto = produtos_por_tipo.find(prod => prod.id == id)
    return produto
}

export { getProduto }