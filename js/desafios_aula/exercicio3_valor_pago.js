/* Elabore um algoritmo que calcule o valor a ser pago por um produto, considerando o preço normal e a condição de pagamento:

- 1. À vista debito: 10% de desconto
- 2. À vista dinheiro ou pix: 15% de desconto
- 3. Em até 2x no cartão: preço normal
- 4. 3x ou mais no cartão: 10% de juros    
*/

const preco_normal = 100.00;
const condicao_pagamento = 1;

let valor_pago;

if(condicao_pagamento === 1){
valor_pago = preco_normal * 0.9;
} else if(condicao_pagamento === 2){
valor_pago = preco_normal * 0.85;
} else if(condicao_pagamento === 3){
valor_pago = preco_normal;
} else if(condicao_pagamento === 4){
valor_pago = preco_normal * 1.1;
}

console.log("O valor a ser pago é R$ " + valor_pago.toFixed(2));
