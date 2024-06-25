alert('Bem-vindos ao jogo do Número Secreto');

let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativa = 1;

while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
} else{
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
} else {
        alert(`O número secreto é maior que ${chute}`);
}
tentativa++;
}
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);

