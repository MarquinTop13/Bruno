import prompt from 'prompt-sync';
let ler = prompt();

export function calculardescontofinal(V) {
    console.log('É a primeira vez que compra nesta loja? (sim/nao)');
    let SN = ler();

    if (SN.toLowerCase() === 'sim') {
        if (V >= 4000) {
            let desconto = (V * 10) / 100;
            return V - desconto;
        } else if (V >= 3000) {
            let desconto = (V * 7.5) / 100;
            return V - desconto;
        } else if (V >= 2500) {
            let desconto = (V * 5) / 100;
            return V - desconto;
        }
    }
    return V;
}

export function descontqtd(ob1, ob2, ob3, ob4, ob5, ob6, ob7, V) {
    console.log('É a primeira vez que compra nesta loja? (sim/nao)');
    let SN = ler();

    if (SN.toLowerCase() === 'sim') {
        if (ob1 > 0 && ob2 > 0 && ob3 > 0 && ob4 > 0 && ob5 > 0 && ob6 > 0 && ob7 > 0 &&
            ob1 < 3 && ob2 < 3 && ob3 < 3 && ob4 < 3 && ob5 < 3 && ob6 < 3 && ob7 < 3) {
            let desconto = (V * 7) / 100;
            return V - desconto;
        } else if (ob3 >= 3) {
            let desconto = (V * 10) / 100;
            return V - desconto;
        } else if (ob1 >= 3 || ob2 >= 3 || ob4 >= 3 || ob5 >= 3) {
            let desconto = (V * 12) / 100;
            return V - desconto;
        }
    } else if (SN.toLowerCase() === 'nao') {
        if (ob1 > 0 && ob2 > 0 && ob3 > 0 && ob4 > 0 && ob5 > 0 && ob6 > 0 && ob7 > 0 &&
            ob1 < 3 && ob2 < 3 && ob3 < 3 && ob4 < 3 && ob5 < 3 && ob6 < 3 && ob7 < 3) {
            let desconto = (V * 5) / 100;
            return V - desconto;
        } else if (ob3 >= 3) {
            let desconto = (V * 7) / 100;
            return V - desconto;
        } else if (ob1 >= 3 || ob2 >= 3 || ob4 >= 3 || ob5 >= 3) {
            let desconto = (V * 7) / 100;
            return V - desconto;
        }
    }
    return V;
}
