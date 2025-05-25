import { Cocodrilo } from "./class/cocodrilo.class";
import { Gato } from "./class/gato.class";
import { Perro } from "./class/perro.class";
import { userClass } from "./class/user.clas";

const perro = new Perro(
    "Alexander",
    "bicolor",
    2
)

console.log(perro.printAnimal())

const gato = new Gato(
    "Gilber",
    "Bicolor",
    3
)

console.log(gato.printAnimal())

const cocodrilo = new Cocodrilo(
    "Gilber",
    "Bicolor",
    22
)

console.log(cocodrilo.printAnimal())

//falta instanciar las clases de de userclass
