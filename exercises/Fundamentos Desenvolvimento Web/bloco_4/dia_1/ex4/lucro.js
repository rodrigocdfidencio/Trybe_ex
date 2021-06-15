let custo = 10;
let venda = 20;

let lucro = venda - (custo + (custo* 0.2));

let lucroTotal = lucro * 1000

if (custo < 0 || venda < 0 ) {
    console.log("Confira os valores e tente novamente")
} else {
    console.log(lucroTotal)
}
