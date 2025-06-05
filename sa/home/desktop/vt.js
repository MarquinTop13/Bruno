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
                nome: 'AMD Ryzen 7 5800X',
                preco: 2499.99,
                info: 'Arquitetura Zen 3 com 8 núcleos e 16 threads, ideal para jogos de alto desempenho.'
            },
            process2: {
                nome: 'Intel Core i5-10400F',
                preco: 1399.99,
                info: 'Processador de 6 núcleos e 12 threads, ideal para jogos leves e tarefas do dia a dia.'
            },
            process3: {
                nome:'AMD Ryzen 3 3200G',
                preco: 899.99,
                info: 'Processador com gráficos integrados, ideal para tarefas básicas e multimídia'
            }
        },
        Ram: {
            ram1: {
                nome: 'Corsair Vengeance LPX 16GB DDR4 3200MHz',
                preco: 499.99,
                info: 'Memória RAM de alto desempenho, perfeita para jogos e multitarefa'
            },
            ram2: {
                nome: 'G.Skill Ripjaws V 16GB DDR4 2666MHz',
                preco: 399.99,
                info: 'DiMemória RAM confiável e de bom desempenho para uso geral e jogos leves'
            },
            ram3: {
                nome: 'Crucial Ballistix 8GB DDR4 2400MHz',
                preco: 299.99,
                info: 'Memória RAM básica, adequada para navegação na web e tarefas cotidianas.'
            }
        }
        // As outras peças ainda estão vazias
    };

    return Pecas;
}

export function PCpronto() {
    return {
        computer1: {
            processador: "AMD Ryzen 9 7950X",
            memoriaRam: "DDR5 6000MHz",
            placaMãe: "AMD X670",
            placaVideo: "NVIDIA GeForce RTX 3070",
            Fonte: "Fonte Corsair RM750",
            armazenamento: "SSD Samsung NVMe 1TB 970 EVO",
            Cooler : "Cooler Master Hyper 212",
            gabinete: "NZXT H510"
        },

        computer2: {
            processador: 'Intel Core i5-12400F',
            memoriaRam: 'DDR4 3200MHz',
            placaMãe: 'ASUS TUF Gaming B660M',
            placaVideo: 'NVIDIA GeForce GTX 1650',
            Fonte: 'Fonte Corsair CV550',
            armazenamento: 'SSD Samsung NVMe 1TB 970 EVO',
            Cooler: 'Cooler Box Intel',
            gabinete: 'Cougar MX330'
        },
        computer3: {
            processador: 'AMD Ryzen 5 5600G',
            memoriaRam: 'DDR4 2400MHz',
            placaMãe: 'ASRock A520M',
            placaVideo: 'Gráficos Integrados Radeon',
            Fonte: 'Fonte EVGA 500W',
            armazenamento: 'SSD Kingston A2000 500GB',
            Cooler: 'Cooler Box AMD',
            gabinete: 'Fractal Design Torrent RGB'
        }
    };
}
