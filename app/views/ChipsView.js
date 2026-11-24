// VIEW: botões para trocar de categoria dentro da galeria (#chips).
App.views.Chips = {
  render: function (container, categorias, aoEscolher) {
    container.innerHTML = '';
    categorias.forEach(function (c) {
      var b = App.el('button', 'chip', c.nome);
      b.type = 'button';
      b.setAttribute('data-id', c.id);
      b.addEventListener('click', function () { aoEscolher(c.id); });
      container.appendChild(b);
    });
  },
  marcar: function (container, id) {
    Array.prototype.forEach.call(container.children, function (b) {
      var ativo = b.getAttribute('data-id') === id;
      b.classList.toggle('on', ativo);
      b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
      // mantém o botão ativo visível quando a lista de botões rola de lado
      if (ativo && b.scrollIntoView) {
        container.scrollTo({ left: b.offsetLeft - 20, behavior: 'smooth' });
      }
    });
  }
};
