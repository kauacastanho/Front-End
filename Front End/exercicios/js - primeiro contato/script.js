

//////// EXERCICIO 1


/*
const anoNascimento = new Date(1942, 11, 27);
const anoFalecimento = new Date(1970, 7, 18);



alert("Ano de Nascimento: " + anoNascimento.toLocaleDateString())
console.log("Ano de Falecimento: " + anoFalecimento.toLocaleDateString())
*/


//////// EXERCICIO 2


/*
let nomeUsuario = prompt("Qual o seu nome? ")


console.log("Nome usuario: " + nomeUsuario
*/


//////// EXERCICIO 3


/*
const fruta = prompt("Digite um fruta: ")


if (["laranja", "maça", "banana"].includes(fruta)) {
    if (fruta === "laranja") {
        alert("Não esqueça de descascar!");
    } else if (fruta === "maça") {
        alert("Se você tirar a casca perderá as vitaminas!");
    } else {
        alert("Já vem naturalmente embalada e pronta para o consumo!")
    }
} else {
    alert("Não tenho nada a dizer sobre isso!")
}
*/



//////// EXERCICIO 4



/*
let dinheiroQueRecebi = prompt("Digite a quantidade que vai pagar: ")

let valorDoProduto = prompt("Digite o valor do produto: ")

let troco = dinheiroQueRecebi - valorDoProduto

if (dinheiroQueRecebi > valorDoProduto){
    alert("O seu troco é de " + troco + " reais");
} else {
    alert("Give my money!!!");
}
*/




//////// EXERCICIO 5




/*
function charPeloIndice(str, indice) {
    return str[indice]
}

const A = charPeloIndice("abelha", 3)
console.log(A);

const B = charPeloIndice("cabeça", 0)
console.log(B)
*/




//////// EXERCICIO 6




/*
function horasParaSegundos(nHoras) {
    return nHoras * 60 * 60
}

const A = horasParaSegundos(1);
const B = horasParaSegundos(24)

console.log(A)
console.log(B)
*/





//////// EXERCICIO 7




/*
function reaisParaCentavos(valor) {
    return valor * 100
}

const A = reaisParaCentavos(2.5);
const B = reaisParaCentavos(3);

console.log(A)
console.log(B)
*/





//////// EXERCICIO 8




/*
function doubleNumbers(numeros) {

    let dobroNumeros = [];

    for (let num of numeros){
        dobroNumeros.push(num * 2);
    }
    return dobroNumeros
}

const numeros = [2, 4, 1, 8];
const numeros1 = [4, 8, 2, 16];
const numeros2 = [8, 16, 4, 32];
const numeros3 = [10, 32, 8, 64];
const numeros4 = [20, 64, 10, 128];

const dobros = doubleNumbers(numeros);
const dobros1 = doubleNumbers(numeros1);
const dobros2 = doubleNumbers(numeros2);
const dobros3 = doubleNumbers(numeros3);
const dobros4 = doubleNumbers(numeros4);

console.log(dobros); 
console.log(dobros1); 
console.log(dobros2); 
console.log(dobros3); 
console.log(dobros4); 
*/





//////// EXERCICIO 9





/*
function parOuImpar(n) {
    if (n % 2 === 0) {
        return "Número Par"
    } else {
        return "Número Ímpar"
    }
}

const A = parOuImpar(2);
const B = parOuImpar(7);

console.log(A);
console.log(B);
*/






//////// EXERCICIO 10




/*
function inverteString(str) {
   return str.split('').reverse().join('');
}


const A = inverteString("abelha");
const B = inverteString("cabeça");

console.log(A);
console.log(B);
*/





//////// EXERCICIO 11




/*
function nUltimosChars(str, nUltimos) {
    num = - nUltimos;
    return str.slice(num);
}

const A = nUltimosChars("abelha", 3);
const B = nUltimosChars("cachaça", 4);


console.log(A);
console.log(B);
*/





//////// EXERCICIO 12





/*
function nUltimosChars(str, nUltimos) {  
    return str.substr(0, nUltimos);
}
  
const A = nUltimosChars("abelha", 2);
const B = nUltimosChars("cachaça", 3);

console.log(A);
console.log(B);
*/




//////// EXERCICIO 13




/*
function isPalindromo(str) {    
    inverseStr = str.split('').reverse().join('')
    if (str === inverseStr) {
        return true;
    } else {
        return false;
    }
}

const A = isPalindromo("abelha");
const B = isPalindromo("asa");
const C = isPalindromo("osso");

console.log(A);
console.log(B);
console.log(C);
*/




//////// EXERCICIO 14





function wordsToNumber(numeros) {
    listaNums = [];

    if (["um", "dois", "tres", "quatro", "cinco", "seis"].includes(numeros)) {
        if (["um"].includes(numeros)) {
            listaNums.push(1);
        }
        if (["dois"].includes(numeros)){
            listaNums.push(2);
        }
        if (["tres"].includes(numeros)) {
            listaNums.push(3);
        }
        if (["quatro"].includes(numeros)) {
            listaNums.push(4);
        }
        if (["cinco"].includes(numeros)) {
            listaNums.push(5);
        }
        print(listaNums)
    }
    return listaNums
}

numeros = ["um", "dois", "tres", "quatro"]

const A = wordsToNumber(numeros);


console.log(A);

