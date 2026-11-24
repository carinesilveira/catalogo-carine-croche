// MODEL: textos em lista (dores e passos da encomenda).
App.models.Conteudo = {
  dores: [
    'Peças de crochê feitas à mão, com detalhes que tornam cada uma especial.',
    'Decoração em crochê que traz aconchego, textura e personalidade para sua casa.',
    'Um presente artesanal, feito com carinho e cheio de significado.',
    'Cores, tamanhos e detalhes personalizados para combinar com seu gosto e ambiente.'
  ],
  passos: [
    { titulo: 'Conversa inicial', texto: 'Você me conta o que deseja, onde pretende usar a peça e quais cores e detalhes prefere..' },
    { titulo: 'Orçamento', texto: 'Preparo um orçamento com o valor e o prazo de produção, de acordo com o modelo e o tamanho escolhidos.' },
    { titulo: 'Confirmação', texto: 'Combinamos os detalhes finais e a forma de pagamento.' },
    { titulo: 'Produção', texto: 'Cada detalhe é feito à mão, com cuidado e dedicação. Durante a produção, compartilho o andamento com você.' },
    { titulo: 'Entrega', texto: 'Com tudo pronto, sua peça é cuidadosamente embalada e enviada para chegar até você, pronta para decorar ou presentear..' }
  ]
};
