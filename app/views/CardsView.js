// VIEW: desenha as capas das categorias dentro de #catalogo.
// Ao clicar numa capa, chama "aoEscolher(id)" (quem decide o que fazer é o controller).
App.views.Cards = {
  render: function (container, categorias, aoEscolher) {
    container.innerHTML = '';
    categorias.forEach(function (c) {
      var card = App.el('a', 'card');
      card.href = '#galeria-sec';
      card.setAttribute('data-id', c.id);
      card.addEventListener('click', function (e) {
        e.preventDefault();
        if (aoEscolher) aoEscolher(c.id);
      });

      var ph = App.el('div', 'ph');
      App.foto(ph, c.imagem, c.nome, c.posicao || '50% 50%');
      card.appendChild(ph);
      card.appendChild(App.el('h3', '', c.nome));
      card.appendChild(App.el('p', '', c.descricao));
      card.appendChild(App.el('span', 'ver', 'Ver fotos →'));
      container.appendChild(card);
    });
  }
};
