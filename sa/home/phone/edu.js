import prompt from 'prompt-sync';
let ler = prompt();

console.log('BEM-VINDO ao setor de CELULARES e TABLETS');
console.log('Qual você gostaria de escolher:\n1. Celulares\n2. Tablets');
let escolha = Number(ler());

if (escolha === 1) {
    console.log("Você quer ver os celulares de orçamento:");
    console.log("1. Baixo\n2. Médio\n3. Alto");
let orc = Number(ler());

    if (orc === 1) {
        console.log("1. Realme Note 50\n2. Nokia C20\n3. Infinix Smart 6\n4. Positivo 5\n5. Nokia 1.4");
    } else if (orc === 2) {
        console.log("1. Motorola Moto G15\n2. Galaxy A15\n3. Poco X7\n4. Realme Note 60\n5. Motorola G22");
    } else if (orc === 3) {
        console.log("1. Galaxy Z Flip6\n2. iPhone 16 Pro Max\n3. Galaxy S25 Ultra\n4. Poco 6X\n5. Smartphone X7");
    }





/* esse código abaixo é o código pra comprar dos celulares */


    console.log("Qual dispositivo você quer?");
    let compra = Number(ler());

    if (orc === 3) {
        if (compra === 1) console.log('R$ 5000');
        else if (compra === 2) console.log('R$ 4000');
        else if (compra === 3) console.log('R$ 7500');
        else if (compra === 4) console.log('R$ 8050');
        else if (compra === 5) console.log('R$ 3050');
    } else if (orc === 2) {
        if (compra === 1) console.log('R$ 1000');
        else if (compra === 2) console.log('R$ 1200');
        else if (compra === 3) console.log('R$ 300');
        else if (compra === 4) console.log('R$ 950');
        else if (compra === 5) console.log('R$ 1050');
    } else if (orc === 1) {
        if (compra === 1) console.log('R$ 500');
        else if (compra === 2) console.log('R$ 400');
        else if (compra === 3) console.log('R$ 750');
        else if (compra === 4) console.log('R$ 805');
        else if (compra === 5) console.log('R$ 365');
    }

} else if (escolha === 2) {
    console.log("Nossos tablets são:");
    console.log("baixo\nmédio\n--alto");

  let cro = ler();

    if (cro === 'baixo') {
        console.log("1. Galaxy Tab\n2. Mirage 7\n3. Galaxy Tab A9\n4. Positivo Vision\n5. Multilaser M7");
    } else if (cro === 'médio') {
        console.log("1. Galaxy S10\n2. Vaio TL10\n3. Galaxy Tab A9+\n4. Pad SE 11\n5. Apple iPad");
    } else if (cro === 'alto') {
        console.log("1. Vaio TL10\n2. Galaxy TAB S10\n3. Lenovo SPLUS\n4. Apple 2025 iPad\n5. Lenovo TAB M11");
    }



    console.log("Qual dispositivo você quer?");
    let compra = Number(ler());

    if (cro === 'alto') {
        if (compra === 1) console.log('R$ 5500');
        else if (compra === 2) console.log('R$ 3050');
        else if (compra === 3) console.log('R$ 6500');
        else if (compra === 4) console.log('R$ 8950');
        else if (compra === 5) console.log('R$ 4050');
    } else if (cro === 'médio') {
        if (compra === 1) console.log('R$ 1000');
        else if (compra === 2) console.log('R$ 1230');
        else if (compra === 3) console.log('R$ 2000');
        else if (compra === 4) console.log('R$ 990');
        else if (compra === 5) console.log('R$ 1500');
    } else if (cro === 'baixo') {
        if (compra === 1) console.log('R$ 300');
        else if (compra === 2) console.log('R$ 200');
        else if (compra === 3) console.log('R$ 680');
        else if (compra === 4) console.log('R$ 505');
        else if (compra === 5) console.log('R$ 665');
    }
}  
