import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export default class CarrinhoApi {
  async listarItensCarrinho() {
    const { data } = await axios.get('/carrinhos/'); // Endpoint para listar itens do carrinho
    return data;
  }

  async adicionarItemCarrinho(produto) {
    const { data } = await axios.post('/carrinhos/', produto); // Endpoint para adicionar um item ao carrinho
    return data;
}

  async removerItemCarrinho(id) {
    const { data } = await axios.delete(`/carrinhos/${id}/`); // Endpoint para remover um item do carrinho
    return data;
  }
}