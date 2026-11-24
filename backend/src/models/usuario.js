const genero = Object.freeze( {
    M:"M",
    F:"F",
    OUTRO:"Outro"
})  
class usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;

    constructor(id, nome, senha, dataNascimento, genero, isAdmin){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero = genero;
        this.isAdmin = false;
    }
    perfil(){
        return "Nome: " + this.nome + " - Data de nascimento" + this.dataNascimento.toString();
    }
}

const user1 = new usuario(1,"Luis Miguel","123","2000-04-14T00:00:00",genero.M);
const user2 = new usuario(1,"Otavio raio","1233","2010-04-14T00:00:00",genero.M);
console.log(user1)
user1.nome = "Luis miguel";
console.log(user1.perfil())
console.log(user2.perfil())