class NegociacaoController{

    //     //O ACESSO A DOM DEVE SER O MENOR POSSÍVEL POR QUESTÕES DE PERFORMANCE

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data').value;
        this._inputQuantidade = parseInt($('#quantidade').value);
        this._inputValor = parseFloat($('#valor').value);
    }

    adiciona(event){

        console.log(this._inputData)
        
        console.log(new Negociacao(this._inputData,this._inputQuantidade,this._inputValor))
    }





    // static adiciona(event){
        
        
    //     // event.preventDefault();
 
    //     // //FUNÇÕES PODEM SER ATRIBUÍDAS A VARIAVEIS

    //     // //bind pois $ = document.querSelector tem como contexto de aplicação this( e neste caso ele passa
    //     // // a ser executado fora do contexto document) para context document = bind
        
    //     // let $ = document.querySelector.bind(document);

    //     // let inputData = $('#data');
    //     // let inputQuantidade = $('#quantidade');
    //     // let inputValor = $('#valor')

    //     // alert('invocando a ação do controlador NegociacaoController(Action:"adiciona(event)")')
    // }
}