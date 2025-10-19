/* Faça um algoritmo que dado as 3 notas de um aluno em uma disciplina, calcule e imprima a média final deste aluno.

A média é calculada somando as 3 notas e dividindo o resultado por 3.

Classifique o aluno conforme a média obtida:

- Média menor que 5: Reprovado
- Média entre 5 e 7: Recuperação
- Média maior ou igual a 7: Aprovado

*/

const nota1 = 6;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log(`Média: ${media.toFixed(2)} - Reprovado`);
} else if(media >= 5 && media < 7){
    console.log(`Média: ${media.toFixed(2)} - Recuperação`);
} else {
    console.log(`Média: ${media.toFixed(2)} - Aprovado`);
}