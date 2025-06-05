import prompt from 'prompt-sync'
import * as vt from './vt.js';
let ler = prompt();

// Pegando os dados de peças
let pecas = vt.PecasdePC();

// Pegando só os processadores
let procesadorA = pecas.process.process1.nome;
let procesadorB = pecas.process.process2.nome;
let procesadorC = pecas.process.process3.nome;

//pegando as ram
let ram1 = pecas.Ram.ram1.nome;
let ram2 = pecas.Ram.ram2.nome;
let ram3 = pecas.Ram.ram3.nome;


console.log('Qual destes peças você escolhe:\nProcessadores')
console.log(`1)${procesadorA}\n2)${procesadorB}\n3)${procesadorC}`)
let process = Number(ler());


console.log('Memória ram')
console.log(`1)${ram1}\n2)${ram2}\n3)${ram3}`)
let ram = Number(ler());

