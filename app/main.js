// Ponto de entrada: quando a página carrega, liga todos os controllers.
document.addEventListener('DOMContentLoaded', function () {
  App.controllers.Tema.iniciar();
  App.controllers.Catalogo.iniciar();
  App.controllers.Galeria.iniciar();
  App.controllers.Conteudo.iniciar();
  App.controllers.Contato.iniciar();
  App.controllers.Contador.iniciar();
});
