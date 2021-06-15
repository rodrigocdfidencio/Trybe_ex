let salarioBruto = 3000

if (salarioBruto <= 1556.94) {
    salarioINSS = salarioBruto - (salarioBruto * 0.08)
} else if (salarioBruto >= 1556.95 & salarioBruto <= 2594.92) {
    salarioINSS = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto >= 2594.93 & salarioBruto <= 5189.82) {
    salarioINSS = salarioBruto - (salarioBruto * 0.11)
} else if (salarioBruto >= 5189.93) {
    salarioINSS = salarioBruto - 570.88
} 


if (salarioINSS <= 1903.98) {
    salarioFinal = salarioINSS
} else if (salarioINSS >= 1903.99 & salarioINSS <= 2826.65) {
    salarioFinal = salarioINSS - ((salarioINSS * 0.075) - 142.80)
} else if (salarioINSS >= 2826.66 & salarioINSS <= 3751.05) {
    salarioFinal = salarioINSS - ((salarioINSS * 0.15) - 354.80 )
} else if (salarioINSS >= 3751.06 & salarioINSS <= 4664.68) {
    salarioFinal = salarioINSS - ((salarioINSS * 0.225) - 636.13 )
} else if (salarioINSS >= 4664.68) {
    salarioFinal = salarioINSS - ((salarioINSS * 0.275) - 869.36)
} 

console.log(salarioFinal)