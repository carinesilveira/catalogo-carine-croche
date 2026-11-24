// VIEW: aplica os links de WhatsApp e redes sociais nos botões da página.
App.views.Contato = {
  aplicar: function (config) {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.href = config.linkWhatsapp(a.getAttribute('data-wa'));
    });
    document.querySelectorAll('[data-rede]').forEach(function (a) {
      var url = config.redes[a.getAttribute('data-rede')];
      if (url) a.href = url;
    });
  }
};
