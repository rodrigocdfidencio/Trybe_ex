let n = 15;
let string = "";

for (rowIndex = 0; rowIndex < n ; rowIndex +=1) {
    for (collumIndex = n - 1; collumIndex >= 0; collumIndex -=1) {
        if (collumIndex > rowIndex) {
            string += " ";
        } else {
            string += "*";
        }
    }
    console.log(string);
    string = "";
}