class Negociacao{

    // VAR POSSUI AUSÊNCIA DE ESCOPO DE BLOCO, EXCETO SE DECLARADA DENTRO DE UMA FUNÇÃO ELA NÃO É ACESSÍVEL FORA
    //ACESSO ANTES DA DECLARAÇÃO CUIDADO!!!!!!!!!!!!!!!!!!!!!>>>>>>>>>>>HOISTING


    //LET POSSUI ESCOPO DE BLOCO!TB OCORRE HOISTING PORÉM SE FOREM 
    //USADAS ANTES DE DECLARADAS OCORRE ERRO

    //TEMPORAL DEADZONE

    //Propriedade Objetos literais(Atalho de declaração de propriedades)
   constructor(_data,_quantidade,_valor){
       Object.assign(this,{_quantidade,_valor})

       Object.freeze(this);
   }
   
    
    // constructor(data, quantidade, valor){
    //     Object.assign(this,{_data:new Date(data.getTime()),_quantidade:quantidade,_valor:valor})
    //     Object.freeze(this);
    // }


    // constructor(){
    //     let $ = document.querySelector.bind(document)

    //     //underline aplica encapsulamento nas propriedades ou metodos
    //     this._quantidade = $('#quantidade').value;
    //     this._valor = $('#valor').value;
    //     this._data = new Date();

    //     //TORNANDO O OBJETO IMUTÁVEL
    //     Object.freeze(this);
    // }

    // //PROGRAMAÇÃO DEFENSIVA
    // get _data(){
    //     return new Date(this._data.getTime());
    // }

}