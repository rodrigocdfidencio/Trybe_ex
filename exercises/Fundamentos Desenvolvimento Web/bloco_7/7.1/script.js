const clicks = document.getElementById('clickBtn');

let contador = 0;

const clickCounter = event => {
    contador += 1;
    document.getElementById("clicks").innerHTML = contador;
}

clicks.addEventListener('click', clickCounter);


exemplo = "Tryber x aqui!";
let param = 'Bebeto'
resultado = exemplo.replace("x", param);
console.log(resultado)