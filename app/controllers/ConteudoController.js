// CONTROLLER: desenha a lista de dores e os passos da encomenda.
App.controllers.Conteudo = {
  iniciar: function () {
    var dores = document.getElementById('dores');
    var passos = document.getElementById('passos');
    if (dores) App.views.Conteudo.renderDores(dores, App.models.Conteudo.dores);
    if (passos) App.views.Conteudo.renderPassos(passos, App.models.Conteudo.passos);
  }
};
