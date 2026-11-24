// VIEW: mostra o número de visitas no rodapé.
App.views.Contador = {
  mostrar: function (n) {
    document.getElementById('visitas').textContent = n.toLocaleString('pt-BR');
    document.getElementById('visitasBox').hidden = false;
  }
};
