import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export default class CarrinhoApi {
  async listarItensCarrinho() {
    const { data } = await axios.get('/itemcarrinhos/'); // Endpoint para listar itens do carrinho
    return data;
  }

  async adicionarItemCarrinho(produto) {
    const { data } = await axios.post('/itemcarrinhos/', produto); // Endpoint para adicionar um item ao carrinho
    return data;
}

  async removerItemCarrinho(id) {
    const { data } = await axios.delete(`/itemcarrinhos/${id}/`); // Endpoint para remover um item do carrinho
    return data;
  }
}