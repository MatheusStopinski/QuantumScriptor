class Ser {
    nome;
    raça;    
    idade;

    descrever() {
        console.log(`Olá me chamo ${this.nome}, sou da raça ${this.raça} e ja existo a ${this.idade} anos terrestres!`)
    }
}

// Aqui eu vou instanciar novos seres.

const Matheus = new Ser()  
Matheus.nome = 'Matheus'
Matheus.raça = 'Humano'    
Matheus.idade = 32

const Katsute = new Ser()
Katsute.nome = 'Katsute'
Katsute.raça = 'Fenix Baumgartner'    
Katsute.idade = 15

const Kyla = new Ser()
Kyla.nome = 'Kyla'
Kyla.raça = 'Fenix Baumgartner'    
Kyla.idade = 14

Matheus.descrever()
Katsute.descrever()
Kyla.descrever()