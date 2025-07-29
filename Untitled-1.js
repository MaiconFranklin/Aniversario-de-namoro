/*  O objetivo é fazer um fichário
    Primeiro preciso de uma variavel de nome
    Segundo uma variavel constante de data de nascimento
    Terceiro uma ficha, calculando minha idade e mostrando no console
                                                                       */


    // Definindo variaveis
let nome = "Maicon" ;
const ano_de_nascimento = 2007  ;

    // função da idade
function mostrarficha(){
       let idade = 2025 - ano_de_nascimento;
       console.log("Meu nome é " + nome + "e nasci no ano de " + ano_de_nascimento + ", tendo atualmente " + idade + "anos.");
}

mostrarficha()
