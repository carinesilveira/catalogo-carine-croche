// Núcleo: cria o "espaço" onde ficam models, views e controllers.
window.App = { models: {}, views: {}, controllers: {} };

// Ajuda para criar elementos HTML
App.el = function (tag, classe, texto) {
  var e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto) e.textContent = texto;
  return e;
};

// Coloca uma foto dentro de uma caixa .ph.
// Se o arquivo ainda não existe na pasta, mostra o nome dele no lugar (assim você sabe como nomear a foto).
App.foto = function (caixa, src, alt, posicao) {
  var img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  img.loading = 'lazy';
  if (posicao) img.style.objectPosition = posicao;
  img.addEventListener('error', function () {
    img.remove();
    caixa.appendChild(App.el('b', '', src.split('/').pop()));
  });
  caixa.appendChild(img);
};
