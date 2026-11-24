// CONTROLLER: aplica os links de WhatsApp e redes sociais.
App.controllers.Contato = {
  iniciar: function () {
    App.views.Contato.aplicar(App.models.Config);
  }
};
