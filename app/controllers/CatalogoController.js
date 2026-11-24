// CONTROLLER: mostra as capas e, ao clicar em uma, abre a galeria daquela categoria.
App.controllers.Catalogo = {
  iniciar: function () {
    var box = document.getElementById('catalogo');
    if (!box) return;
    App.views.Cards.render(box, App.models.Peca.todas(), function (id) {
      App.controllers.Galeria.mostrar(id, true);
    });
  }
};
