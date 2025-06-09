import prompt from 'prompt-sync';
import * as vt from './vt.js';
import * as gust from './gust.js';
let ler = prompt();

export function escolherPC() {
    let pecas = vt.PCpronto();

    console.log('Qual destes Pc´s você escolhe:');
    console.log(`1) ${pecas.computer1.nome} - R$${pecas.computer1.preco} Uso avançado`);
    console.log(`2) ${pecas.computer2.nome} - R$${pecas.computer2.preco} Uso intermediário`);
    console.log(`3) ${pecas.computer3.nome} - R$${pecas.computer3.preco} Uso básico`);
    let escolha = Number(ler('Digite o número da opção desejada: '));

    let preco = 0;
    if (escolha === 1) {
        preco = pecas.computer1.preco;
        console.log(`Você escolheu o PC: ${pecas.computer1.nome}`);
    } else if (escolha === 2) {
        preco = pecas.computer2.preco;
        console.log(`Você escolheu o PC: ${pecas.computer2.nome}`);
    } else if (escolha === 3) {
        preco = pecas.computer3.preco;
        console.log(`Você escolheu o PC: ${pecas.computer3.nome}`);
    } else {
        console.log('Opção inválida. Por favor, escolha uma opção válida.');
        return;
    }

    let precoFinal = gust.calculardescontofinal(preco);
    console.log(`Preço final com desconto (se houver): R$${precoFinal.toFixed(2)}`);
}
