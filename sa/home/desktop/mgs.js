import prompt from 'prompt-sync';
import * as vt from './vt.js';
import * as gust from './gust.js';

export function montarPC() {
    let ler = prompt();

    let pecas = vt.PecasdePC();

    // Processador
    console.log('Qual destes processadores você escolhe:');
    console.log(`1) ${pecas.process.process1.nome} - R$${pecas.process.process1.preco}`);
    console.log(`2) ${pecas.process.process2.nome} - R$${pecas.process.process2.preco}`);
    console.log(`3) ${pecas.process.process3.nome} - R$${pecas.process.process3.preco}`);
    let process = Number(ler()) - 1;
    console.log('Quantas quantidades de processadores você escolhe?');
    let qtdProcessador = Number(ler());

    // RAM
    console.log('Qual destas memórias RAM você escolhe:');
    console.log(`1) ${pecas.Ram.ram1.nome} - R$${pecas.Ram.ram1.preco}`);
    console.log(`2) ${pecas.Ram.ram2.nome} - R$${pecas.Ram.ram2.preco}`);
    console.log(`3) ${pecas.Ram.ram3.nome} - R$${pecas.Ram.ram3.preco}`);
    let ram = Number(ler()) - 1;
    console.log('Quantas quantidades de RAM você escolhe?');
    let qtdRam = Number(ler());

    // Placa-mãe
    console.log('Qual destas placas-mãe você escolhe:');
    console.log(`1) ${pecas.PlacaM.placam1.nome} - R$${pecas.PlacaM.placam1.preco}`);
    console.log(`2) ${pecas.PlacaM.placam2.nome} - R$${pecas.PlacaM.placam2.preco}`);
    console.log(`3) ${pecas.PlacaM.placam3.nome} - R$${pecas.PlacaM.placam3.preco}`);
    let placaMae = Number(ler()) - 1;
    console.log('Quantas quantidades de placas-mãe você escolhe?');
    let qtdPlacaMae = Number(ler());

    // Cooler
    console.log('Qual destes coolers você escolhe:');
    console.log(`1) ${pecas.cool.cool1.nome} - R$${pecas.cool.cool1.preco}`);
    console.log(`2) ${pecas.cool.cool2.nome} - R$${pecas.cool.cool2.preco}`);
    console.log(`3) ${pecas.cool.cool3.nome} - R$${pecas.cool.cool3.preco}`);
    let cooler = Number(ler()) - 1;
    console.log('Quantas quantidades de coolers você escolhe?');
    let qtdCooler = Number(ler());

    // Placa de vídeo
    console.log('Qual destas placas de vídeo você escolhe:');
    console.log(`1) ${pecas.PlacaVI.placavi1.nome} - R$${pecas.PlacaVI.placavi1.preco}`);
    console.log(`2) ${pecas.PlacaVI.placavi2.nome} - R$${pecas.PlacaVI.placavi2.preco}`);
    console.log(`3) ${pecas.PlacaVI.placavi3.nome} - R$${pecas.PlacaVI.placavi3.preco}`);
    let placaVideo = Number(ler()) - 1;
    console.log('Quantas quantidades de placas de vídeo você escolhe?');
    let qtdPlacaVideo = Number(ler());

    // Fonte
    console.log('Qual destas fontes você escolhe:');
    console.log(`1) ${pecas.fonte.fonte1.nome} - R$${pecas.fonte.fonte1.preco}`);
    console.log(`2) ${pecas.fonte.fonte2.nome} - R$${pecas.fonte.fonte2.preco}`);
    console.log(`3) ${pecas.fonte.fonte3.nome} - R$${pecas.fonte.fonte3.preco}`);
    let fonte = Number(ler()) - 1;
    console.log('Quantas quantidades de fontes você escolhe?');
    let qtdFonte = Number(ler());

    // Gabinete
    console.log('Qual destes gabinetes você escolhe:');
    console.log(`1) ${pecas.gabiNEt.gabinet1.nome} - R$${pecas.gabiNEt.gabinet1.preco}`);
    console.log(`2) ${pecas.gabiNEt.gabinet2.nome} - R$${pecas.gabiNEt.gabinet2.preco}`);
    console.log(`3) ${pecas.gabiNEt.gabinet3.nome} - R$${pecas.gabiNEt.gabinet3.preco}`);
    let gabinete = Number(ler()) - 1;
    console.log('Quantas quantidades de gabinetes você escolhe?');
    let qtdGabinete = Number(ler());

    let total = 0;

    function calcularTotal(precoTotal, quantidade, preco) {
        return precoTotal + (preco * quantidade);
    }

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

    if (total > 0) {
        let totalComDescontoQtd = gust.descontqtd(qtdProcessador, qtdRam, qtdPlacaMae, qtdCooler, qtdPlacaVideo, qtdFonte, qtdGabinete, total);

        let totalFinal = gust.calculardescontofinal(totalComDescontoQtd);

        console.log(`O total da compra com desconto é: R$${totalFinal.toFixed(2)}`);
    } else {
        console.log('Nenhuma peça selecionada.');
    }
}
