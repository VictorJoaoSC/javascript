//APP.JS PONTO DE ENTRADA DA APLICAÇÃO OU SEJA PREPARA TODOS OS OBJETOS NECESSÁRIOS PARA NOSSA APLICAÇÂO


console.log('app.js carregado!')

var neg1 = new Negociacao();

neg1.quantidade = 10;

var controlador = new NegociacaoController();

document.querySelector('.form').addEventListener('submit',function(event){


    console.log('submits')

    controlador.adiciona    .bind(controlador);

    console.log('passei!')

});
