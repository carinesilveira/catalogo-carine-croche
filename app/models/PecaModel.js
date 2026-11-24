// MODEL: categorias do catálogo (cada uma vira uma "capa" em "Peças").
// Para trocar a capa de uma categoria, mude o nome do arquivo em "imagem" (fica em assets/img).
// O "id" liga a categoria às fotos da galeria (veja GaleriaModel.js). Não mude o id sem mudar lá também.
App.models.Peca = {
  itens: [
    { id: 'sousplat',    nome: 'Americanos / Sousplat',         descricao: 'Redondos e ovais para uma mesa posta com carinho.',       imagem: 'assets/img/americano-agatha.jpg',         posicao: '50% 50%' },
    { id: 'cozinha',     nome: 'Jogos de Cozinha / Passadeira', descricao: 'Conjuntos que vestem a cozinha com cor e aconchego.',     imagem: 'assets/img/Jogo-cozinha-florescer.jpg',   posicao: '50% 60%' },
    { id: 'tapetes',     nome: 'Tapetes avulsos',               descricao: 'Ovais e redondos, nas cores e no tamanho do seu espaço.', imagem: 'assets/img/tapetes-redondos.jpg',         posicao: '50% 60%' },
    { id: 'banheiro',    nome: 'Jogo de Banheiro',              descricao: 'Conjuntos que vestem o baneheiro com cor e aconchego.',   imagem: 'assets/img/jogo-banheiro-cris-rosa.jpg',  posicao: '50% 50%' },
    { id: 'caminho',     nome: 'Caminho de mesa',               descricao: 'Para vestir a mesa com charme e textura.',                imagem: 'assets/img/caminhos-de-mesa.jpg',         posicao: '50% 60%' },
    { id: 'papel',       nome: 'Porta papel higiênico',         descricao: 'Para pendurar e deixar o banheiro mais bonito.',          imagem: 'assets/img/porta-papel-higienico.jpg',    posicao: '50% 38%' },
    { id: 'bandana',     nome: 'Bandana canina',                descricao: 'Um mimo de crochê para o seu pet.',                       imagem: 'assets/img/bandana-canina-lilas.jpg',     posicao: '50% 50%' },
    { id: 'marcapagina', nome: 'Marca página',                  descricao: 'Pequenos mimos para presentear e guardar a leitura.',     imagem: 'assets/img/marca-pagina.jpg',             posicao: '50% 50%' }
  ],
  todas: function () { return this.itens.slice(); },
  buscar: function (id) {
    return this.itens.filter(function (c) { return c.id === id; })[0] || null;
  }
};
