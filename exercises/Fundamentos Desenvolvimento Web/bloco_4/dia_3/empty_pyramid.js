let n = 7;
let string = "";
stringMid = parseInt(n/2)

for ( i = 0; i < stringMid; i+= 1){
  
  for ( j = 0; j < n; j += 1 ) {
    if ( j == stringMid - i || j == stringMid + i){
      string += "*";
    } else {
      string += " ";
    }
  }
  console.log(string);
  string = "";
}
for ( k = 0; k < n; k += 1){
  string += "*";
}
console.log(string);
