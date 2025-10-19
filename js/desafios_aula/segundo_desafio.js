/* Faça um programa para calcular o custo de uma viagem. 

Você terá 5 variáveis. São elas:
1 - Preço do etanol por litro
2 - Preço da gasolina por litro
3 - Tipo de combustível que está no carro (etanol ou gasolina)
4 - Gasto médio de combustível do carro por km
5 - Distância em km da viagem

No final mostre no console o valor que será gasto para realizar esta viagem.
*/

const valor_etanol = 4.90;
const valor_gasolina = 6.66;
const combustivel_no_carro = "gasolina";
const km_por_litro = 12;
const distancia_km = 150;

const gasolina_etanol = combustivel_no_carro === "gasolina";

if(gasolina_etanol){
    const litros_necessarios = distancia_km / km_por_litro;
    const custo_total = litros_necessarios * valor_gasolina;
    console.log("O custo total da viagem é R$ " + custo_total.toFixed(2));
}else{
    const litros_necessarios = distancia_km / km_por_litro;
    const custo_total = litros_necessarios * valor_etanol;
    console.log("O custo total da viagem é R$ " + custo_total.toFixed(2));
}
