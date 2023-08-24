//OPERADORES ARITMÉTICOS 
var valorUm = 100
var valorDois = 1000
var valorTres = 50000
//EXEMPLO 01
var soma = valorUm + valorTres
var multiplicacao = valorUm + valorDois 
var subtracao = valorTres - valorDois
var divisao = valorTres / valorUm
//Existe também o var modulo, acompanhe o exemplo abaixo
var modulo = valorTres % valorUm

console.log("Soma: ", soma)
console.log("Multiplicação: ", multiplicacao)
console.log("Subtração: ", subtracao)
console.log("Divisão: ", divisao)
console.log("Modulo: ", modulo)
//EXEMPLO 02
console.log("Conta maior: ", 30 + 30 * 30 - 30) 
console.log("Conta maior: ", 20 + 20 * 20 - 20)
console.log("Conta maior: ", 10 + 10 * 10 - 10)
console.log("Conta maior: ", 5 + 5 * 5 - 5)

//Se você observar, a primeira conta maior deveria dar 1770, o segundo deveria dar 780, o terceiro deveria dar 190, o quarto deveria dar 45, valor bem diferente né? Para resolver esse problema, deve ser adicionado parenteses nos dois primeiros números, segue o exemplo abaixo


//Valores feitos com parenteses
console.log("Se você observar, a primeira conta maior deveria dar 1770, o segundo deveria dar 780, o terceiro deveria dar 190, o quarto deveria dar 45, valor bem diferente né? Para resolver esse problema, deve ser adicionado parenteses nos dois primeiros números, segue o exemplo abaixo.") 

console.log("Conta maior: ", (30 + 30) * 30 - 30)
console.log("Conta maior: ", (20 + 20) * 20 - 20)
console.log("Conta maior: ", (10 + 10) * 10 - 10)
console.log("Conta maior: ", (5 + 5) * 5 - 5)

//OPERADORES LÓGICOS
//Um sinal de igual (=) serve para atribuir um valor.
//Dois sinais de igual (==) servem para fazer comparações de valor.
//Um sinal de exclamação e um de igual (!=) se chama diferente e serve para mostrar se a diferença entre valors ou não. 
//O simbole de manor que (<) também ja diz tudo , serve para mostrae que o valor da direita é menor que o da esquerda.
//O simbole de  maior que (>) ja diz tudo, serve para mostrar que o valor da esquerda é maior que o da direita.

//EXEMPLO
console.log(10 == 10)
console.log(10 != 10)
console.log(10 > 5)
console.log(10 < 5)

//Existe outros exemplos, agora usando (<=) e (>=).
console.log(5 <= 6) //falso
console.log(5 >= 5) //verdaadeiro

//Outra forma de fazer
var teste = 5 == 8;
console.log(teste)

//ESTRUTURA CONDICIONAL IF ELSE, IF = SE E ELSE = SENÃO 

if(5 == 5) {
   console.log("Certa resposta")
} else {
   console.log("Errouuu") 
}