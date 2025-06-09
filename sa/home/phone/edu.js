import prompt from 'prompt-sync';
import * as vt from './vt.js';
import * as gust from './gust.js';
let ler = prompt();

export function escolherCelular() {
    let celulares = vt.Celulares();

    console.log('Qual celular deseja comprar:');
    for (let i = 1; i <= 3; i++) {
        console.log(`${i}) ${celulares[`celular${i}`].nome} - R$${celulares[`celular${i}`].preco} Pontos Antutu: ${celulares[`celular${i}`].antutu}`);
    }

    let escolha = Number(ler('Digite o número do celular desejado: '));
    if (escolha < 1 || escolha > 3) {
        console.log('Opção inválida');
        return;
    }

    let quantidade = Number(ler('Quantos deseja comprar? '));
    if (quantidade < 1) {
        console.log('Quantidade inválida');
        return;
    }

    let preco = celulares[`celular${escolha}`].preco * quantidade;

    // Aplica desconto da primeira compra
    let precoFinal = gust.calculardescontofinal(preco);

    console.log(`Preço final com desconto (se houver): R$${precoFinal.toFixed(2)}`);
}
