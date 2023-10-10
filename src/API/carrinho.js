import axios from 'axios';

export default class CarrinhoApi {
  async listarItensCarrinho() {
    const { data } = await axios.get('/itemcarrinhos/'); // Endpoint para listar itens do carrinho
    return data;
  }

  async adicionarItemCarrinho(item) {
    const { data } = await axios.post('/itemcarrinhos/', item); // Endpoint para adicionar um item ao carrinho
    return data;
  }

  async removerItemCarrinho(id) {
    const { data } = await axios.delete(`/itemcarrinhos/${id}/`); // Endpoint para remover um item do carrinho
    return data;
  }
}