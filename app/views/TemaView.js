// VIEW: aplica o tema na página e atualiza o botão (🌙 no claro, ☀️ no escuro).
App.views.Tema = {
  aplicar: function (tema) {
    document.documentElement.setAttribute('data-theme', tema);
    var b = document.getElementById('tema');
    if (!b) return;
    b.textContent = tema === 'dark' ? '☀️' : '🌙';
    b.title = tema === 'dark' ? 'Mudar para o modo claro' : 'Mudar para o modo escuro';
    b.setAttribute('aria-pressed', tema === 'dark');
  }
};
