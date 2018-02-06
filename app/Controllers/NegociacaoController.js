class NegociacaoController{

    //     //O ACESSO A DOM DEVE SER O MENOR POSSÍVEL POR QUESTÕES DE PERFORMANCE

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(){

        console.log('awdawdawdawdawdawd')
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