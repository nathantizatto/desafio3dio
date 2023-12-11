class heroiGenerico {
    constructor(nome, idade, tipo) {
        this.nomeDoHeroi = nome
        this.idadeDoHeroi = idade
        this.tipoDoHeroi = tipo
    }

    atacar() {
        let ataque
       
        if (this.tipoDoHeroi === "mago") {
            ataque = "magia"
        }
        else if (this.tipoDoHeroi === "guerreiro") {
            ataque = "espada"
        }
        else if (this.tipoDoHeroi === "monge") {
            ataque = "artes marciais"
        }
        else {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipoDoHeroi} atacou usando ${ataque}`)
    }
}

if (this.tipoDoHeroi === "mago") {
    ataque = "magia"
}
else if (this.tipoDoHeroi === "guerreiro") {
    ataque = "espada"
}
else if (this.tipoDoHeroi === "monge") {
    ataque = "artes marciais"
}
else {
    ataque = "shuriken"
}

const heroi1 = new heroiGenerico("Gandalf", 200, "mago");
const heroi2 = new heroiGenerico("Aragorn", 35, "guerreiro");
const heroi3 = new heroiGenerico("Bruce Lee", 32, "monge");
const heroi4 = new heroiGenerico("Hanzo", 28, "ninja");

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
