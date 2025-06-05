import prompt from 'prompt-sync';
let ler = prompt();

export function mensagem(msg) {
    console.log(msg);
    let resposta = ler();
    return resposta;
}

export function PecasdePC() {
    let Pecas = {
        process: {
            process1: {
                nome: 'AMD Ryzen 9 9950X',
                preco: 3749.99,
                info: 'arquitetura zen 5 para máximo desempenho com 16 núcleos...'
            },
            process2: {
                nome: 'Intel Core i9-14900K',
                preco: 2999.99,
                info: 'Potência de processamento impressionante...'
            },
            process3: {
                nome:'AMD Ryzen Threadripper PRO 7995WX',
                preco: 36746.26,
                info: 'Com 64 núcleos e 128 threads...'
            }
        },
        Ram: {
            ram1: {
                nome: 'DDR5 9000MHz+',
                preco: 5819.99,
                info: '48GB DDR5 com iluminação RGB...'
            },
            ram2: {
                nome: 'DDR4 3000MHz',
                preco: 299.99,
                info: 'Dissipador de alumínio e 3200MHz...'
            },
            ram3: {
                nome: 'DDR5 8000MHz+',
                preco: 887.18,
                info: 'Tensão da memória 1.5V...'
            }
        }
        // As outras peças ainda estão vazias
    };

    return Pecas;
}

export function PCpronto() {
    return {
        computer1: {
            processador: 'AMD Ryzen 9 9950X',
            memoriaRam: 'DDR5 9000MHz+ ',
            placaMãe: 'AMD X570',
            placaVideo: 'NVIDIA GeForce GTX 1650',
            Fonte: 'Fonte Mancer Thunder 600W',
            armazenamento: 'Toshiba 4TB',
            Cooler: 'Cooler Master Hyper H410R',
            gabinete: 'Corsair 4000D Airflow'
        },
        computer2: {
            processador: 'Intel Core i9-14900K',
            memoriaRam: 'DDR4 3000MHz',
            placaMãe: 'TUF Gaming X670E',
            placaVideo: 'GeForce RTX 3070',
            Fonte: 'Fonte Corsair CX750',
            armazenamento: 'WD My Passport 1TB',
            Cooler: 'Water Cooler Corsair iCUE',
            gabinete: 'Cougar MX330'
        },
        computer3: {
            processador: 'AMD Ryzen Threadripper PRO 7995WX',
            memoriaRam: 'DDR5 8000MHz+',
            placaMãe: 'Gigabyte Z790',
            placaVideo: 'GeForce RTX 4090',
            Fonte: 'ASUS ROG Thor 1200W',
            armazenamento: 'SSD Samsung NVMe 1TB 990 Pro',
            Cooler: 'NZXT Kraken Z73',
            gabinete: 'Fractal Design Torrent RGB'
        }
    };
}
