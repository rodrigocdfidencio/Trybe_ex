let peca = "Rei";
var res = peca.toLowerCase();

switch (res) {
    case "cavalo":
      console.log("Movimento em L");
      break;
    case "peao":
      console.log("Uma casa a frente, mata em diagonal");
      break;
    case "rainha":
      console.log("Livre nas casas e direções");
      break;
    case "rei":
      console.log("Livre nas direções, uma casa por vez");
      break;
    case "bispo":
      console.log("Movimento em diagonais");
      break;
    case "torre":
      console.log("Movimento em horizontal ou vertical");
      break;
    case "bispo":
      console.log("Movimento em diagonais");
      break;
    default:
      console.log("Desculpe, a peça" + expr + "não existe.");
  }