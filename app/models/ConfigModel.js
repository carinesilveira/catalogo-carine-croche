// MODEL: configurações gerais do site (WhatsApp e redes sociais).
App.models.Config = {
  nome: 'Carine Crochê',
  whatsapp: '5535997437411', 
  redes: {
    instagram: 'https://www.instagram.com/carine.croche',
    tiktok: 'https://www.tiktok.com/@carine.croche'
  },
  linkWhatsapp: function (mensagem) {
    return 'https://wa.me/' + this.whatsapp + (mensagem ? '?text=' + encodeURIComponent(mensagem) : '');
  }
};
