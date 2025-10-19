let preco_combustivel = 5.79;
let km_por_litro = 10;
let distancia_km = 100;

let litros_necessarios = distancia_km / km_por_litro;
let custo_total = litros_necessarios * preco_combustivel;
console.log("O custo total da viagem é R$ " + custo_total.toFixed(2));


