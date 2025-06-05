import prompt from 'prompt-sync';
import * as vt from './vt.js';
let ler = prompt();

// Pegando os dados de peças
let pecas = vt.PecasdePC();

// Criando arrays para processadores e RAM
let processadores = [pecas.process.process1, pecas.process.process2, pecas.process.process3];
let rams = [pecas.Ram.ram1, pecas.Ram.ram2, pecas.Ram.ram3];

// Função para calcular o total
function calcularTotal(processador, ram, qtdProcessador, qtdRam) {
    return (processador.preco * qtdProcessador) + (ram.preco * qtdRam);
}

// Pegando a escolha do processador
console.log('Qual destes peças você escolhe:\nProcessadores');
processadores.forEach((processador, index) => {
    console.log(`${index + 1}) ${processador.nome}`);
});
let process = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de processadores
console.log('Quantas quantidades de peças você escolhe?');
let qtdProcessador = Number(ler());

// Pegando a escolha da memória RAM
console.log('Memória RAM');
rams.forEach((ram, index) => {
    console.log(`${index + 1}) ${ram.nome}`);
});
let ram = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de RAM
console.log('Quantas quantidades de peças você escolhe?');
let qtdRam = Number(ler());

// Verificando se as escolhas são válidas
if (process >= 0 && process < processadores.length && ram >= 0 && ram < rams.length) {
    let total = calcularTotal(processadores[process], rams[ram], qtdProcessador, qtdRam);
    console.log(`O total da compra é: R$${total.toFixed(2)}`);
} else {
    console.log('Nada foi selecionado!');
}
