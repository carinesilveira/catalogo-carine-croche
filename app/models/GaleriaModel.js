// MODEL: fotos da galeria "Um pouquinho do que já fiz".
// Cada foto pertence a uma categoria (campo "categoria" = id em PecaModel.js).
// PREÇO: preencha o campo "preco" de cada peça, por exemplo preco: 'R$ 45,00' ou 'A partir de R$ 45,00'.
// Se deixar vazio (''), o site mostra "Consulte o valor".
App.models.Galeria = {
  itens: [
    // Americanos / Sousplat
    { categoria: 'sousplat', imagem: 'assets/img/americano-agatha.jpg',         alt: 'Americano Ágatha', preco: 'R$ 35,00' },
    { categoria: 'sousplat', imagem: 'assets/img/americano-tulipa.jpg',         alt: 'Americano Tulipa', preco: 'R$ 30,00' },
    { categoria: 'sousplat', imagem: 'assets/img/americano-rendado.jpg',        alt: 'Americano Rendado', preco: 'R$ 35,00' },
    { categoria: 'sousplat', imagem: 'assets/img/americano-tradicional.jpg',    alt: 'Americano Tradicional', preco: 'R$ 30,00' },
    { categoria: 'sousplat', imagem: 'assets/img/americano-tulipa-varias.jpg',  alt: 'Americano Tulipas', preco: 'R$ 30,00' },
    { categoria: 'sousplat', imagem: 'assets/img/buque.jpg',                    alt: 'Buquê/Americano', preco: 'R$ 40,00' },
    { categoria: 'sousplat', imagem: 'assets/img/americano-olho-grego.jpg',     alt: 'Americano Olho Grego', preco: 'R$ 30,00' },

    // Jogos de Cozinha / Passadeira
    { categoria: 'cozinha', imagem: 'assets/img/Jogo-cozinha-florescer.jpg',    alt: 'Jogo de cozinha florescer', preco: 'R$ 140,00' },

     // Jogos de Banheiro
    { categoria: 'banheiro', imagem: 'assets/img/jogo-banheiro-cris-rosa.jpg',   alt: 'Kit Lavabo', preco: '85,00' },
    { categoria: 'banheiro', imagem: 'assets/img/jogo-banheiro-cris-marrom.jpg',   alt: 'Jogo de Banheiro Cris', preco: 'R$ 130,00' },


    // Tapetes avulsos
    { categoria: 'tapetes', imagem: 'assets/img/tapete-sara-azul-marinho.jpg',  alt: 'Tapete Sara', preco: 'R$ 40,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-coracao.jpg',            alt: 'Tapete Coração', preco: 'R$ 45,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-angelical.jpg',          alt: 'Tapete Angelical', preco: 'R$ 45,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-florescer.jpg',          alt: 'Tapete Florescer', preco: 'R$ 50,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-cris.jpg',               alt: 'Tapete Cris', preco: 'R$ 45,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapetes-redondos.jpg',          alt: 'Tapete Maravilha', preco: 'R$ 250,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-sara-rosa.jpg',          alt: 'Tapete Sara', preco: 'R$ 40,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-sara-azul-royal.jpg',    alt: 'Tapete Sara', preco: 'R$ 40,00' },
    { categoria: 'tapetes', imagem: 'assets/img/tapete-janine.jpg',             alt: 'Tapete Janine', preco: 'R$ 45,00' },

    // Caminho de mesa
    { categoria: 'caminho', imagem: 'assets/img/caminhos-de-mesa.jpg',          alt: 'Caminho de mesa de quadrados em degradê', preco: 'R$ 75,00' },

    // Porta papel higiênico
    { categoria: 'papel', imagem: 'assets/img/porta-papel-higienico.jpg',       alt: 'Porta papel higiênico em crochê', preco: 'R$ 25,00' },

    // Bandana canina
    { categoria: 'bandana', imagem: 'assets/img/bandana-canina-lilas.jpg',      alt: 'Bandana canina em crochê com flor', preco: 'R$ 7,00' },
    { categoria: 'bandana', imagem: 'assets/img/bandana-canina-verde.jpg',      alt: 'Bandana canina em crochê', preco: 'R$ 7,00' },

    // Marca página
    { categoria: 'marcapagina', imagem: 'assets/img/marca-pagina.jpg',          alt: 'Marca páginas e chaveirinhos em crochê', preco: 'R$ 7,00' }
  ],
  todas: function () { return this.itens.slice(); },
  porCategoria: function (id) {
    return this.itens.filter(function (f) { return f.categoria === id; });
  }
};
