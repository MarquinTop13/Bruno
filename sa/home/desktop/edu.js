import prompt from 'prompt-sync';
import * as gust from './gust.js';

const ler = prompt();

export function escolherCelular() {
    const celulares = {
        baixo: [
            { nome: "Redmi Note 13 5G", preco: 999.00, antutu: 448000 },
            { nome: "Moto G34 5G", preco: 1199.00, antutu: 424000 },
            { nome: "Samsung Galaxy A33 5G", preco: 1399.00, antutu: 475000 }
        ],
        medio: [
            { nome: "Samsung Galaxy A52s 5G", preco: 1299.99, antutu: 572752 },
            { nome: "Moto G54 5G", preco: 1499.50, antutu: 455410 },
            { nome: "Poco X3 Pro 5G", preco: 1799.00, antutu: 627000 }
        ],
        alto: [
            { nome: "Poco X6 Pro 5G", preco: 2399.00, antutu: 1479279 },
            { nome: "Motorola Edge 50 Pro 5G", preco: 2999.00, antutu: 866000 },
            { nome: "Samsung Galaxy S23+ 5G", preco: 3399.00, antutu: 1500000 }
        ]
    };

    let total = 0, qtdBaixo = 0, qtdMedio = 0, qtdAlto = 0;

    // Baixo custo
    console.log("Qual destes celulares da categoria *baixo custo* você escolhe:");
    celulares.baixo.forEach((cell, i) => {
        console.log(`${i + 1}) ${cell.nome} - R$${cell.preco} - Antutu: ${cell.antutu}`);
    });
    let baixo = Number(ler()) - 1;
    if (baixo >= 0 && baixo < 3) {
        console.log("Quantas unidades você deseja?");
        qtdBaixo = Number(ler());
        total += celulares.baixo[baixo].preco * qtdBaixo;
    }

    // Intermediário
    console.log("Qual destes celulares de categoria *intermediária* você escolhe:");
    celulares.medio.forEach((cell, i) => {
        console.log(`${i + 1}) ${cell.nome} - R$${cell.preco} - Antutu: ${cell.antutu}`);
    });
    let medio = Number(ler()) - 1;
    if (medio >= 0 && medio < 3) {
        console.log("Quantas unidades você deseja?");
        qtdMedio = Number(ler());
        total += celulares.medio[medio].preco * qtdMedio;
    }

    // Top de linha
    console.log("Qual destes celulares de categoria *top de linha* você escolhe:");
    celulares.alto.forEach((cell, i) => {
        console.log(`${i + 1}) ${cell.nome} - R$${cell.preco} - Antutu: ${cell.antutu}`);
    });
    let alto = Number(ler()) - 1;
    if (alto >= 0 && alto < 3) {
        console.log("Quantas unidades você deseja?");
        qtdAlto = Number(ler());
        total += celulares.alto[alto].preco * qtdAlto;
    }

    if (total > 0) {
        let desc = gust.descontqtd(qtdBaixo, qtdMedio, qtdAlto, 0, 0, 0, 0, total);
        let totalFinal = gust.calculardescontofinal(desc);
        console.log(`O total da compra é: R$${totalFinal.toFixed(2)}`);
    } else {
        console.log('Nada foi selecionado!');
    }
}
