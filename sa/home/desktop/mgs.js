import prompt from 'prompt-sync';
import * as vt from './vt.js';
import * as gust from './gust.js';
let ler = prompt();

// Pegando os dados de peças
let pecas = vt.PecasdePC();

// Pegando a escolha do processador
console.log('Qual destes processadores você escolhe:');
console.log(`1) ${pecas.process.process1.nome} - R$${pecas.process.process1.preco}`);
console.log(`2) ${pecas.process.process2.nome} - R$${pecas.process.process2.preco}`);
console.log(`3) ${pecas.process.process3.nome} - R$${pecas.process.process3.preco}`);
let process = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de processadores
console.log('Quantas quantidades de processadores você escolhe?');
let qtdProcessador = Number(ler());

// Pegando a escolha da memória RAM
console.log('Qual destas memórias RAM você escolhe:');
console.log(`1) ${pecas.Ram.ram1.nome} - R$${pecas.Ram.ram1.preco}`);
console.log(`2) ${pecas.Ram.ram2.nome} - R$${pecas.Ram.ram2.preco}`);
console.log(`3) ${pecas.Ram.ram3.nome} - R$${pecas.Ram.ram3.preco}`);
let ram = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de RAM
console.log('Quantas quantidades de RAM você escolhe?');
let qtdRam = Number(ler());

// Pegando a escolha da placa-mãe
console.log('Qual destas placas-mãe você escolhe:');
console.log(`1) ${pecas.PlacaM.placam1.nome} - R$${pecas.PlacaM.placam1.preco}`);
console.log(`2) ${pecas.PlacaM.placam2.nome} - R$${pecas.PlacaM.placam2.preco}`);
console.log(`3) ${pecas.PlacaM.placam3.nome} - R$${pecas.PlacaM.placam3.preco}`);
let placaMae = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de placas-mãe
console.log('Quantas quantidades de placas-mãe você escolhe?');
let qtdPlacaMae = Number(ler());

// Pegando a escolha do cooler
console.log('Qual destes coolers você escolhe:');
console.log(`1) ${pecas.cool.cool1.nome} - R$${pecas.cool.cool1.preco}`);
console.log(`2) ${pecas.cool.cool2.nome} - R$${pecas.cool.cool2.preco}`);
console.log(`3) ${pecas.cool.cool3.nome} - R$${pecas.cool.cool3.preco}`);
let cooler = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de coolers
console.log('Quantas quantidades de coolers você escolhe?');
let qtdCooler = Number(ler());

// Pegando a escolha da placa de vídeo
console.log('Qual destas placas de vídeo você escolhe:');
console.log(`1) ${pecas.PlacaVI.placavi1.nome} - R$${pecas.PlacaVI.placavi1.preco}`);
console.log(`2) ${pecas.PlacaVI.placavi2.nome} - R$${pecas.PlacaVI.placavi2.preco}`);
console.log(`3) ${pecas.PlacaVI.placavi3.nome} - R$${pecas.PlacaVI.placavi3.preco}`);
let placaVideo = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de placas de vídeo
console.log('Quantas quantidades de placas de vídeo você escolhe?');
let qtdPlacaVideo = Number(ler());

// Pegando a escolha da fonte
console.log('Qual destas fontes você escolhe:');
console.log(`1) ${pecas.fonte.fonte1.nome} - R$${pecas.fonte.fonte1.preco}`);
console.log(`2) ${pecas.fonte.fonte2.nome} - R$${pecas.fonte.fonte2.preco}`);
console.log(`3) ${pecas.fonte.fonte3.nome} - R$${pecas.fonte.fonte3.preco}`);
let fonte = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de fontes
console.log('Quantas quantidades de fontes você escolhe?');
let qtdFonte = Number(ler());

// Pegando a escolha do gabinete
console.log('Qual destes gabinetes você escolhe:');
console.log(`1) ${pecas.gabiNEt.gabinet1.nome} - R$${pecas.gabiNEt.gabinet1.preco}`);
console.log(`2) ${pecas.gabiNEt.gabinet2.nome} - R$${pecas.gabiNEt.gabinet2.preco}`);
console.log(`3) ${pecas.gabiNEt.gabinet3.nome} - R$${pecas.gabiNEt.gabinet3.preco}`);
let gabinete = Number(ler()) - 1; // Ajustando para índice zero

// Pegando a quantidade de gabinetes
console.log('Quantas quantidades de gabinetes você escolhe?');
let qtdGabinete = Number(ler());

// Inicializando o total
let total = 0;

//calcular total
function calcularTotal(precoTotal, quantidade, preco) {
    return precoTotal + (preco * quantidade);
}

// Verificando se as escolhas são válidas e calculando o total
if (process >= 0 && process < 3) {
    total = calcularTotal(total, qtdProcessador, pecas.process[`process${process + 1}`].preco);
}

if (ram >= 0 && ram < 3) {
    total = calcularTotal(total, qtdRam, pecas.Ram[`ram${ram + 1}`].preco);
}

if (placaMae >= 0 && placaMae < 3) {
    total = calcularTotal(total, qtdPlacaMae, pecas.PlacaM[`placam${placaMae + 1}`].preco);
}

if (cooler >= 0 && cooler < 3) {
    total = calcularTotal(total, qtdCooler, pecas.cool[`cool${cooler + 1}`].preco);
}

if (placaVideo >= 0 && placaVideo < 3) {
    total = calcularTotal(total, qtdPlacaVideo, pecas.PlacaVI[`placavi${placaVideo + 1}`].preco);
}

if (fonte >= 0 && fonte < 3) {
    total = calcularTotal(total, qtdFonte, pecas.fonte[`fonte${fonte + 1}`].preco);
}

if (gabinete >= 0 && gabinete < 3) {
    total = calcularTotal(total, qtdGabinete, pecas.gabiNEt[`gabinet${gabinete + 1}`].preco);
}

// Exibindo o total ou mensagem de erro
if (total > 0) {
    let desc = gust.descontqtd(qtdProcessador, qtdRam, qtdPlacaMae, qtdCooler, qtdPlacaVideo, qtdFonte, qtdGabinete, total);
    total = gust.calculardescontofinal(desc);
    console.log(`O total da compra é: R$${total.toFixed(2)}`);
} else {
    console.log('Nada foi selecionado!');
}
