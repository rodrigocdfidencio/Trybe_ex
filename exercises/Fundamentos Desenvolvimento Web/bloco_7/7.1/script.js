const clicks = document.getElementById('clickBtn');

let contador = 0;

const clickCounter = event => {
    contador += 1;
    document.getElementById("clicks").innerHTML = contador;
}

clicks.addEventListener('click', clickCounter);

/* Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!" */

exemplo = "Tryber x aqui!";
let param = 'Bebeto'
resultado = exemplo.replace("x", param);
console.log(resultado)