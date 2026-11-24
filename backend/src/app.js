import {Produto} from './models/produto.js';


const p = new Produto(5,"guitarra");
const p2 = new Produto(6,"cordas 09");

console.log(p);
console.log(p2);
console.log(p.info())
p.ativo = false;
console.log(p.info())

import {genero, usuario} from './models/usuario.js'
id, nome, senha, dataNascimento, isAdmin
const u1 = new usuario (1.,"Cezar", "123", "2000-01-25T00:00:00",genero.M)

console.log();
console.log(ul.perfil());
console.log(ul);