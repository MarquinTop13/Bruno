import * as mgs from './mgs.js';
import * as mgspt2 from './mgspt2.js';
import * as edu from './edu.js';
import * as pedro from './pedro.js';
import * as vt from './vt.js'
import prompt from 'prompt-sync';
let ler = prompt();

while (true) {
    console.log('\nEscolha uma categoria para navegar:\n');
    console.log('1. Montar Computador.');
    console.log('2. Computadores Prontos.');
    console.log('3. Celulares disponíveis.');
    console.log('4. Tablets disponíveis.');
    console.log('5. Explicação Peças de Computador.')
    console.log('6. |->|Sair.');
    let escolha = Number(ler());

    if (escolha === 1) {
        mgs.montarPC();
    } else if (escolha === 2) {
        mgspt2.escolherPC();
    } else if (escolha === 3) {
        edu.escolherCelular();
    } else if (escolha === 4) {
    pedro.tablets()
    } else if(escolha === 5){
        vt.explicacaopecas();
    } else if(escolha === 6){
        console.log('Saindo...')
        break
    } else {
        console.log('Opção inválida. Por favor, escolha uma opção válida.');
    }
}
