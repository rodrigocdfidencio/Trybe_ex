let n = 2;
numDivisores = 0;

for ( i = 2; i < n; i += 1) {
  if ( n % i == 0) {
    numDivisores += 1;
  }
}
if ( numDivisores == 0) {
  console.log("o número é primo");
} else {
  console.log("o número não é primo");
}
