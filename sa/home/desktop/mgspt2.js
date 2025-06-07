import prompt from 'prompt-sync';
import * as vt from './vt.js';
import * as gust from './gust.js';
let ler = prompt();

// Pegando os dados de peças
let pecas = vt.PCpronto(); 

// Pegando a escolha do Pc
console.log('Qual destes Pc´s você escolhe:');
console.log(`1) ${pecas.computer1.nome} - R$${pecas.computer1.preco} Uso avançado`); 
console.log(`2) ${pecas.computer2.nome} - R$${pecas.computer2.preco} Uso intermediário`); 
console.log(`3) ${pecas.computer3.nome} - R$${pecas.computer3.preco} Uso básico`); 
let escolha = Number(ler('Digite o número da opção desejada: '));


if (escolha < 1 || escolha > 3) {
    console.log('Opção inválida. Por favor, escolha uma opção válida.');
}

else if( escolha === 1) {
    console.log(`Você escolheu o PC: ${pecas.computer1.nome}`); 
    console.log(`Preço: R$${pecas.computer1.preco}`); 

    gust.calculardescontofinal(pecas.computer1.preco, pecas.computer1.desconto); 
}

else if( escolha === 2) {
    console.log(`Você escolheu o PC: ${pecas.computer2.nome}`);
    console.log(`Preço: R$${pecas.computer2.preco}`);

    gust.calculardescontofinal(pecas.computer2.preco, pecas.computer2.desconto); 
}

else if( escolha === 3) {
    console.log(`Você escolheu o PC: ${pecas.computer3.nome}`);
    console.log(`Preço: R$${pecas.computer3.preco}`);

    gust.calculardescontofinal(pecas.computer3.preco, pecas.computer3.desconto); 
}