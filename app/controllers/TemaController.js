// CONTROLLER: liga o botão do tema ao model e à view.
App.controllers.Tema = {
  iniciar: function () {
    App.views.Tema.aplicar(App.models.Tema.atual());
    var b = document.getElementById('tema');
    if (b) b.addEventListener('click', function () {
      App.views.Tema.aplicar(App.models.Tema.alternar());
    });
  }
};
