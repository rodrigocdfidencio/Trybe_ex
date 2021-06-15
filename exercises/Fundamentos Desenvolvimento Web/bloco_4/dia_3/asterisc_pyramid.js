let n = 5;
let string = "";
stringMid = parseInt(n/2)

for ( index = 0; index <= stringMid; index += 1){
  for ( j = 0; j < n; j += 1 ) {
    if ( j >= stringMid - index && j <= stringMid + index ){
      string += "*";
    } else {
      string += " ";
    }
  }
  console.log(string);
  string = "";
}