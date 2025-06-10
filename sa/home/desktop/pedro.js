import prompt from 'prompt-sync';
import * as gust from './gust.js';

const ler = prompt();

export function tablets() {
    const catalogo = {
        baixo: [
            {
                nome: 'Galaxy Tab A9+ Wifi',
                preco: 1169.00,
                info: '11", 4GB RAM, 64 GB, Câmera 8MP/5MP'
            },
            {
                nome: 'Mirage7',
                preco: 388.99,
                info: '7", Wifi, 64GB, 4GB RAM, Quad Core'
            },
            {
                nome: 'Galaxy Tab A9+ 5G',
                preco: 1200.90,
                info: '11", 64GB, 4GB RAM, Câmeras 8MP/5MP'
            }
        ],
        medio: [
            {
                nome: 'Galaxy Tab S10',
                preco: 3173.00,
                info: '10.9", 128GB, 8GB RAM, Câmeras 13MP/12MP, IP68'
            },
            {
                nome: 'Lenovo SPLUS',
                preco: 2199.00,
                info: '10.4” 2K, 4G, 128GB, 8GB RAM, bateria 7000mAh'
            },
            {
                nome: 'Galaxy Tab A9+ 5G (variação)',
                preco: 1304.00,
                info: '11", 64GB, 4GB RAM, 5G, Grafite'
            }
        ],
        alto: [
            {
                nome: 'VAIO TL10',
                preco: 1420.00,
                info: '10.4” 2K, 128GB, 8GB RAM, Android 13, teclado inteligente'
            },
            {
                nome: 'Galaxy Tab S10 FE (Azul)',
                preco: 3059.00,
                info: '10.9", Wifi, 128GB, 8GB RAM, IP68'
            },
            {
                nome: 'Redmagi Nova',
                preco: 5198.00,
                info: 'Notebook disfarçado como tablet, 15.6", i5, 256GB SSD'
            }
        ]
    };

    let total = 0, qtdBaixo = 0, qtdMedio = 0, qtdAlto = 0;

    // Baixo custo
    console.log("Escolha um tablet de *baixo custo*:");
    catalogo.baixo.forEach((tab, i) => {
        console.log(`${i + 1}) ${tab.nome} - R$${tab.preco} - ${tab.info}`);
    });
    let escolha1 = Number(ler()) - 1;
    if (escolha1 >= 0 && escolha1 < 3) {
        console.log("Quantas unidades?");
        qtdBaixo = Number(ler());
        total += catalogo.baixo[escolha1].preco * qtdBaixo;
    }

    // Médio custo
    console.log("Escolha um tablet de *médio custo*:");
    catalogo.medio.forEach((tab, i) => {
        console.log(`${i + 1}) ${tab.nome} - R$${tab.preco} - ${tab.info}`);
    });
    let escolha2 = Number(ler()) - 1;
    if (escolha2 >= 0 && escolha2 < 3) {
        console.log("Quantas unidades?");
        qtdMedio = Number(ler());
        total += catalogo.medio[escolha2].preco * qtdMedio;
    }

    // Alto custo
    console.log("Escolha um tablet *top de linha*:");
    catalogo.alto.forEach((tab, i) => {
        console.log(`${i + 1}) ${tab.nome} - R$${tab.preco} - ${tab.info}`);
    });
    let escolha3 = Number(ler()) - 1;
    if (escolha3 >= 0 && escolha3 < 3) {
        console.log("Quantas unidades?");
        qtdAlto = Number(ler());
        total += catalogo.alto[escolha3].preco * qtdAlto;
    }

    if (total > 0) {
        let comDescontoQtd = gust.descontqtd(qtdBaixo, qtdMedio, qtdAlto, 0, 0, 0, 0, total);
        let precoFinal = gust.calculardescontofinal(comDescontoQtd);
        console.log(`Total final com descontos aplicados: R$${precoFinal.toFixed(2)}`);
    } else {
        console.log("Nenhum tablet foi selecionado.");
    }
}
