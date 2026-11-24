// MODEL: contador de visitas (serviço CounterAPI).
// Cada navegador conta uma vez. Para recomeçar do zero, mude o "namespace".
App.models.Contador = {
  namespace: 'carinecroche-site',
  chave: 'visitas',
  registrar: function () {
    var self = this;
    return new Promise(function (resolve) {
      try {
        if (typeof Counter === 'undefined') return resolve(null);
        var c = new Counter({ version: 'v1', namespace: self.namespace });
        var jaContou = false;
        try { jaContou = localStorage.getItem('visitou') === '1'; } catch (e) {}
        (jaContou ? c.get(self.chave) : c.up(self.chave)).then(function (r) {
          try { localStorage.setItem('visitou', '1'); } catch (e) {}
          resolve(r && typeof r.value === 'number' ? r.value : null);
        }).catch(function () { resolve(null); });
      } catch (e) { resolve(null); }
    });
  }
};
