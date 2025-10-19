/* O indice de massa corporal (IMC) é um valor calculado a partir do peso e altura de uma pessoa.

Faça um algoritmo que dado o peso (em kg) e a altura (em metros) de uma pessoa, calcule e imprima o IMC desta pessoa.

A fórmula para calcular o IMC é: IMC = peso / (altura * altura)

Elabore a classificação do IMC conforme a tabela abaixo:

- IMC menor que 18.5: Abaixo do peso
- IMC entre 18.5 e 24.9: Peso normal
- IMC entre 25 e 29.9: Sobrepeso
- IMC entre 30 e 34.9: Obesidade grau 1
- IMC entre 35 e 39.9: Obesidade grau 2
- IMC maior ou igual a 40: Obesidade grau 3

*/

const peso = 70;
const altura = 1.75;

const imc = peso / (altura * altura);

if(imc < 18.5){
    console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
} else if(imc >= 18.5 && imc < 25){
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
} else if(imc >= 25 && imc < 30){
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
} else if(imc >= 30 && imc < 35){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 1`);
} else if(imc >= 35 && imc < 40){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 2`);
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 3`);
}