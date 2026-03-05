//Criar um programa que mostre um programa que mostre se o numero é positivo ou negativo

let numero= -5;
if (numero >= 0) {
    console.log('Positivo')
} else {
    console.log('Negativo')
}

//Criar  um programa que mostre se um ano é bisexto

let ano= 2000;
if (ano %4 === 0) {
    console.log('É um ano bisexto')
} else {
    console.log('Não é um ano bisexto')
}

//Criar um programa que mostre uma senha e a mensagem de acesso rapido

let senha= "ablubluble14";
if(senha === "ablubluble14") {
    console.log("Acesso pertitido")
} else {
    console.log("Acesso negado")
}

//Criar um programa que mostre um desconto de 5% para compras maiores que 100$
//Criar um programa que classifique uma pessoa como criança, adolecente ou adulto de acordo com a idade
//Criar um programa que mostre qual tipo de triangulo de acordo com seus lados (equilatero, isoceles, e escalneo)
//Criar um programa que mostre os conceitos A, B, C ou D de acordo com as notas: >9.5 A; entre 9.4 e 8.5 B; entre 8.4 e 7.0 C; <6.9 D
//Criar um programa para verificar se o numero 12 é divisível por 2 e por 3

let num = 12;
if (num % 2 === 0 && num % 3 === 0) {
    console.log('Divisivel por 2 e por 3')
} else {
    console.log('Não é divisivel por 2 e por 3')
}

//Criar um programa para mostrar um desconto de 12% paea produtos acima de R$80

let preco = 700;
let desconto = preco * 0.88
if (preco >= 800){
    console.log(`O valor do desconto é ${desconto}`)
} else {
    console.log('Não tem desconto')
}

//Criar um programa que mostre os numeros de 1 a 10 usando laço de repetição

for(let i=1;i<=10;i++){
    console.log(i)
}

//Criar um programa para mostrar apenas os numeros pares de 1 a 20
for(let i=10; i>=1; i--){
    console.log(i)
}
//Criar um programa para mostrar apenas os numeros impares de 1 a 20
//Criar um programa para mostrar a taboada do 5
//Criar um programa para mostrar os numeros de 1 a 7 usando while
//Criar um programa para mostrar a taboada do 3 usando while
//Criar um programa para mostrar o fatorial de 5
//Criar um programa para saber se o numero 7 é primo
//Criar um programa para calcular a potencia de 2 elevado a 3