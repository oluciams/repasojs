/*
El BMI se calcula con la siguiente formula:
peso / altura^2


"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/
let peso = 70
let altura = 1.60
let bmi = 31


if (bmi<18.5){
    console.log ("Bajo peso")
    }else if (bmi>=18.5 && bmi<=24.9){
        console.log ("Normal")
    }else if (bmi>=25 && bmi<=29.9){
        console.log ("Sobrepeso")
    }else if (bmi>=30){
        console.log ("Obeso")
    }



