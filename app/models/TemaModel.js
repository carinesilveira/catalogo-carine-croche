// MODEL: guarda qual tema está ativo ("light" = claro, "dark" = escuro).
// Na primeira visita usa o tema do aparelho; depois lembra a escolha.
App.models.Tema = {
  chave: 'tema',
  atual: function () {
    var t = null;
    try { t = localStorage.getItem(this.chave); } catch (e) {}
    if (t === 'light' || t === 'dark') return t;
    var escuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return escuro ? 'dark' : 'light';
  },
  salvar: function (t) {
    try { localStorage.setItem(this.chave, t); } catch (e) {}
  },
  alternar: function () {
    var novo = this.atual() === 'dark' ? 'light' : 'dark';
    this.salvar(novo);
    return novo;
  }
};
