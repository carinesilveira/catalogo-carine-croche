// VIEW: desenha as fotos da galeria dentro de #galeria (foto + nome + preço + botão de encomenda).
App.views.Galeria = {
  render: function (container, itens) {
    container.innerHTML = '';
    if (!itens.length) {
      container.appendChild(App.el('p', 'vazio', 'Em breve mais fotos desta categoria 💕'));
      return;
    }
    itens.forEach(function (f) {
      var item = App.el('div', 'item');

      var ph = App.el('div', 'ph');
      App.foto(ph, f.imagem, f.alt);
      item.appendChild(ph);

      item.appendChild(App.el('h4', 'nome', f.alt));

      var temPreco = !!(f.preco && f.preco.trim());
      item.appendChild(App.el('p', temPreco ? 'preco' : 'preco consulte', temPreco ? f.preco : 'Consulte o valor'));

      var msg = 'Olá! Tenho interesse em: ' + f.alt + (temPreco ? ' (' + f.preco + ')' : '') + '. Pode me passar mais informações?';
      var btn = App.el('a', 'encomendar', 'Encomendar');
      btn.href = App.models.Config.linkWhatsapp(msg);
      btn.target = '_blank';
      btn.rel = 'noopener';
      item.appendChild(btn);

      container.appendChild(item);
    });
  }
};
