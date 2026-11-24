// CONTROLLER: mostra a fileira de fotos da categoria escolhida.
App.controllers.Galeria = {
  iniciar: function () {
    var self = this;
    var chips = document.getElementById('chips');
    var categorias = App.models.Peca.todas();
    if (chips) {
      App.views.Chips.render(chips, categorias, function (id) { self.mostrar(id, false); });
    }
    // abre já com a primeira categoria, sem rolar a página
    if (categorias.length) this.mostrar(categorias[0].id, false);
  },

  // rolar = true quando veio do clique numa capa (leva a pessoa até a galeria)
  mostrar: function (id, rolar) {
    var box = document.getElementById('galeria');
    var cat = App.models.Peca.buscar(id);
    if (!box || !cat) return;

    App.views.Galeria.render(box, App.models.Galeria.porCategoria(id));

    var nome = document.getElementById('galCategoria');
    if (nome) nome.textContent = cat.nome;

    var chips = document.getElementById('chips');
    if (chips) App.views.Chips.marcar(chips, id);

    if (rolar) {
      var sec = document.getElementById('galeria-sec');
      if (sec) sec.scrollIntoView({ block: 'start' });
    }
  }
};
