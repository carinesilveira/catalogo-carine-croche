// VIEW: desenha a lista "Talvez você esteja procurando" e os passos da encomenda.
App.views.Conteudo = {
  renderDores: function (ul, itens) {
    ul.innerHTML = '';
    itens.forEach(function (t) { ul.appendChild(App.el('li', '', t)); });
  },
  renderPassos: function (ol, passos) {
    ol.innerHTML = '';
    passos.forEach(function (p) {
      var li = App.el('li');
      li.appendChild(App.el('h3', '', p.titulo));
      li.appendChild(App.el('p', '', p.texto));
      ol.appendChild(li);
    });
  }
};
