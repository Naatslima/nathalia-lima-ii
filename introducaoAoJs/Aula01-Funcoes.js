let n1 = 5;
let n2 = 8;

console.log(n1*n2);
console.log(n1/n2);
console.log(n1-n2);
console.log(n1+n2);
console.log(n1**n2); //potencia
console.log(Math.sqrt(n1)); //raiz quadrada
console.warn("olá mundo das funções"); // outro opção de console, detalhe console não aparece na tela ele é um teste de mesa!!!

function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(4, 19))
console.log(soma(12, 19))

function subtrai(numero1, numero2) {
    return numero1 - numero2
}

console.log(subtrai(44, 19))
console.log(subtrai(82, 79))

function mult(numero1, numero2) {
    return numero1 * numero2
}

console.log(mult(9, 3))
console.log(mult(8, 4))

function div(numero1, numero2) {
    return numero1 / numero2
}

console.log(div(40, 5))
console.log(div(5, 1))
console.log("_______________")


const divisao = (v1, v2) => {
    let msg = ""
    if (v1 > v2) {
        let resultado = v1/v2
        msg = resultado
        return msg
    }
    msg = "insira um valor para v2 menor"
    return msg
}

console.log(divisao(10,2))
console.log(divisao(2,20))

const divisaoII = (v1, v2) => {
    if (v1 > v2) {
        let resultado = v1/v2
        return resultado
    }

    return "insira um valor menor para v2"
}

console.log(divisaoII(4,2))
console.log(divisaoII(4,20))