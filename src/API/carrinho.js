import axios from 'axios';

export default class CarrinhosApi {
  async buscarTodasAsItemCarrinhos() {
    const { data } = await axios.get('/itemcarrinho/');
    return data;
  }

  async adicionarItemCarrinho(itemcarrinho) {
    const { data } = await axios.post('/itemcarrinhos/', itemcarrinho);
    return data;
  }

  async atualizarItemCarrinho(itemcarrinho) {
    const { data } = await axios.put(`/itemcarrinhos/${itemcarrinho.id}/`, itemcarrinho);
    return data;
  }

  async excluirItemCarrinho(id) {
    const { data } = await axios.delete(`/itemcarrinhos/${id}/`);
    return data;
  }
}