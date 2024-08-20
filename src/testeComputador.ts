import { Computador } from "./Computador";

//instanciar (criar objeto)
const Computador1: Computador = new Computador( 'ryzen' , 16 , 'windows');

Computador1.estudar('claudio');
Computador1.pesquisar('claudio');

const Processador = Computador1.getProcessador();
console.log(Processador)

const ram = Computador1.getRam();
console.log(ram);

const Sistema = Computador1.getSistema();
console.log(Sistema);