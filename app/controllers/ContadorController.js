// CONTROLLER: registra a visita (model) e mostra o número (view).
App.controllers.Contador = {
  iniciar: function () {
    App.models.Contador.registrar().then(function (n) {
      if (n !== null) App.views.Contador.mostrar(n);
    });
  }
};
