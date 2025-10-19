/* Faca um programa para calcular o custo de uma viagem. Voce tera 3 variaveis. 

1 - Preco do combustivel por litro
2 - Gasto medio de combustivel do carro por km
3 - Distancia em km da viagem

*/

const preco_combustivel = 5.79;
const km_por_litro = 10;
const distancia_km = 100;

const litros_necessarios = distancia_km / km_por_litro;
const custo_total = litros_necessarios * preco_combustivel;
console.log("O custo total da viagem é R$ " + custo_total.toFixed(2));

