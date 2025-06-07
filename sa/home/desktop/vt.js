export function explicacaopecas() {
    console.log("1. A memória RAM (Random Access Memory), ou memória de acesso aleatório, é o espaço de armazenamento temporário no computador que o processador utiliza para guardar dados e instruções.");
    console.log("2. A placa-mãe, ou -motherboard-, é o componente central de um computador, responsável por conectar e permitir a comunicação entre todos os outros componentes.");
    console.log("3. Um disco rígido (HD), também conhecido como -Hard Disk Drive- (HDD), é um dispositivo de armazenamento de dados.");
    console.log("4. Um processador, também conhecido como CPU (Central Processing Unit), é o cérebro de um computador ou dispositivo eletrônico. Ele é responsável por executar as instruções de software e realizar cálculos.");
    console.log("5. A fonte de alimentação de um PC (PSU Power Supply Unit) é um componente crucial que converte a energia elétrica da tomada em corrente contínua de baixa tensão.");
    console.log("6. Um cooler, em eletrônica, é um sistema de arrefecimento que impede o superaquecimento de componentes eletrônicos.");
    console.log("7. Uma placa de vídeo, também chamada de GPU (Graphics Processing Unit), é um componente crucial de um computador que se encarrega de gerar e renderizar as imagens que você vê na tela.");
    console.log("8. Um gabinete de computador (também conhecido como caixa do computador) é essencialmente o recipiente físico que abriga todos os componentes internos do seu computador.");
}

export function PecasdePC() {
    let Pecas = {
        PlacaM: {
            placam1: {
                nome: 'AMD X570',
                preco: 799.99,
                info: 'Conectores NVMe PCIe 4.0*/3.0 x4 e PCIe 3.0 x2 M.2 integrados, Smart Fan 5, os usuários podem garantir que seu PC possa manter seu desempenho enquanto permanece frio.'
            },
            placam2: {
                nome: 'TUF Gaming X670E-Plus AMD X670',
                preco: 2094.99,
                info: 'TUF GAMING X670E-PLUS é a base perfeita para o seu próximo equipamento de batalha AMD de alta contagem de núcleos. A linha TUF GAMING oferece fácil configuração para todos os montadores. O ecossistema TUF GAMING Alliance garante compatibilidade, enquanto o Armoury Crate possui Fan Xpert 4, informações de hardware, Two-Way AI Noise Cancelation.'
            },
            placam3: {
                nome: 'Gigabyte Z790',
                preco: 2499.99,
                info: 'Suporte para DDR5 7600(OC), Soquete LGA1700: Suporte para processadores Intel.'
            }
        },
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
                nome: 'AMD Ryzen 3 3200G',
                preco: 899.99,
                info: 'Processador com gráficos integrados, ideal para tarefas básicas e multimídia.'
            }
        },
        cool: {
            cool1: {
                nome: 'Cooler Master Hyper H410R (Air)',
                preco: 199.99,
                info: 'Equipado com dois fans de 90x90x25mm e uma velocidade de rotação entre 800-2100 RPM, também oferece um fluxo de ar eficaz de até 55 CFM, com um ruído de apenas 18dB.'
            },
            cool2: {
                nome: 'Water Cooler Corsair iCUE LINK H100i LCD',
                preco: 1099.98,
                info: 'Uma tela de LCD IPS de 2,1” personalizada, com resolução de 480x480 e luz de fundo ultrabrilhante de 600cd/m², GIF animado favorito, o meme mais engraçado ou a logo do seu time em 30 FPS em mais de 16,7 milhões de cores. As ventoinhas QX120 RGB atingem até 2.400 RPM, Dimensões do radiador: 277 mm x 120 mm x 27 mm.'
            },
            cool3: {
                nome: 'NZXT Kraken Z73 (AIO 360mm)',
                preco: 2499.99,
                info: 'LCD Diâmetro: 2,72 pol (69 mm) Cores: 16,7 milhões Resolução: 640 x 640 px Brilho: 690 cd/m² Tipo de painel: IPS Taxa de atualização: 60 Hz, Bomba de turbina NZXT Velocidade do motor: 1.200 - 2.800 ± 300 RPM, Potência: 12 V DC, 0,3.'
            }
        },
        Ram: {
            ram1: {
                nome: 'Corsair Vengeance LPX 16GB DDR4 3200MHz',
                preco: 499.99,
                info: 'Memória RAM de alto desempenho, perfeita para jogos e multitarefa.'
            },
            ram2: {
                nome: 'G.Skill Ripjaws V 16GB DDR4 2666MHz',
                preco: 399.99,
                info: 'Memória RAM confiável e de bom desempenho para uso geral e jogos leves.'
            },
            ram3: {
                nome: 'Crucial Ballistix 8GB DDR4 2400MHz',
                preco: 299.99,
                info: 'Memória RAM básica, adequada para navegação na web e tarefas cotidianas.'
            }
        },
        PlacaVI: {
            placavi1: {
                nome: 'NVIDIA GeForce GTX 1650',
                preco: 899.90,
                info: 'Experiência ágil a potência dedicada acelera aplicativos de criação, equipada com 896 núcleos, GPU: TU116, Core Clock: 1410 MHz, Impulso: 1590 MHz.'
            },
            placavi2: {
                nome: 'GeForce RTX 3070',
                preco: 2649.99,
                info: 'Incrível avanço do DLSS 4, traz o novo Multi Frame Generation, Ray Tracing.'
            },
            placavi3: {
                nome: 'GeForce RTX 4090',
                preco: 3090,
                info: 'Processo do chip 5NM, Categoria do produto RX7900XTX 24G, Conector de alimentação 6pin.'
            }
        },
        fonte: {
            fonte1: {
                nome: 'Fonte Mancer Thunder 600W 80 Plus Bronze, MCR-THR600-BL01',
                preco: 249.99,
                info: 'Tamanho da ventoinha 120mm, Voltagem 100-240V, Conectores: 1 x Conector ATX 24 Pinos, 2 x Conector EPS 8 Pinos, 2 x Conectores PCIe 6 + 2 Pinos, 2 x Conectores Molex 4 Pinos, 7 x Conectores SATA, Potência 600W.'
            },
            fonte2: {
                nome: 'Fonte Corsair CX Series CX750, 750W',
                preco: 509.99,
                info: 'As fontes de alimentação CORSAIR CX têm a certificação 80 PLUS Bronze, fornecendo até 88% de eficiência operacional, Estrutura compacta: O comprimento de 125mm.'
            },
            fonte3: {
                nome: 'Fonte ASUS ROG Thor 1200P2',
                preco: 2479.99,
                info: 'A mais silenciosa Fonte de Alimentação de 1200W, A certificação Lambda A++ confirma que a Thor mais recente exerce um poder ameaçador em sigilo absoluto. Construída com capacitores 100% japoneses e outros componentes premium para alcançar a certificação 80 Plus Platinum. O Display OLED monitora o consumo de energia em tempo real.'
            }
        },
        gabiNEt: {
            gabinet1: {
                nome: 'Corsair 4000D Airflow',
                preco: 649,
                info: 'Marca: Corsair, Modelo: CC-9011290-WW.'
            },
            gabinet2: {
                nome: 'Cougar MX330',
                preco: 429.99,
                info: 'Dimensões (Largura x Altura x Profundidade): 195 x 473 x 427 (mm), Slots de expansão: 7.'
            },
            gabinet3: {
                nome: 'Fractal Design Torrent RGB',
                preco: 1599.90,
                info: 'Modelo: Design North Chalk Black FD-C-NOR1C-01.'
            }
        }
    };

    return Pecas;
}

export function PCpronto() {
    return {
        computer1: {
            processador: "AMD Ryzen 9 7950X",
            memoriaRam: "DDR5 6000MHz",
            placaMae: "TUF Gaming X670E-Plus AMD X670", // modelo compatível
            placaVideo: "NVIDIA GeForce RTX 3070",
            Fonte: "Fonte Corsair RM750",
            armazenamento: "SSD Samsung NVMe 1TB 970 EVO",
            Cooler: "Cooler Master Hyper 212",
            gabinete: "NZXT H510",
            preco: 12.590
        },
        computer2: {
            processador: 'Intel Core i5-12400F',
            memoriaRam: 'DDR4 3200MHz',
            placaMae: 'Gigabyte Z790', // modelo compatível
            placaVideo: 'NVIDIA GeForce GTX 1650',
            Fonte: 'Fonte Corsair CV550',
            armazenamento: 'SSD Samsung NVMe 1TB 970 EVO',
            Cooler: 'Cooler Box Intel',
            gabinete: 'Cougar MX330',
            preco: 5.429
        },
        computer3: {
            processador: 'AMD Ryzen 5 5600G',
            memoriaRam: 'DDR4 2400MHz',
            placaMae: 'AMD X570', // modelo compatível
            placaVideo: 'Gráficos Integrados Radeon',
            Fonte: 'Fonte EVGA 500W',
            armazenamento: 'SSD Kingston A2000 500GB',
            Cooler: 'Cooler Box AMD',
            gabinete: 'Fractal Design Torrent RGB',
            preco: 2.999
        }
    };
}
