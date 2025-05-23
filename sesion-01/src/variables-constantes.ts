// const nombre: String = "Denis Vasquez"

// const edad: number = 20;

// const estaActivo: boolean = true;

// console.log(nombre);
// console.log(edad)
// console.log(estaActivo)

// const personaChat: string[] = ["Denis", "Alexander", "Chelsea"];

// personaChat.forEach(persona => {
//     console.log(persona);

// })

// const edadPersonasChat: number[] = [23, 15, 23];

// //para acceder a un elemento del arreglo
// console.log(edadPersonasChat[2])

// //acceder a todos los elemento y recorrerlos
// edadPersonasChat.forEach(edad => {
//     console.log(edad);

// })

// const activosDelChat: boolean[] = [true, true, false];

// //acceder a un solo elemento del arreglo
// console.log(activosDelChat[0])

// //recorrer todos los elementos del arreglo
// activosDelChat.forEach(status => {
//     console.log(status);

// })

// const arrayTextoNumero: string[] | number[] = ["Alexander"]; //tienees que seguir la lista con el string o con number que comezaste si no te dara error si mezclas string con number;

// //objetos
// const blockes = {
//     grosor: 20,
//     alto: 25,
//     ancho: 19
// }

// //aceder a propiedades de los objetos
// console.log("bloque obj", blockes);
// console.log("ancho bloque", blockes.ancho)


// const monitor = {
//     size: 25,
//     tecnologia: "amoled",
//     marca: "Samsung"
// }

// console.log(monitor)

// const computadora = {
//     marca: "Lenovo",
//     ram: "12GB",
//     pantalla: "15 pulgadas"
// }

// console.log(computadora)

// //interfaces

// interface humano {
//     nombre: String,
//     edad: number,
//     apellido: string
// }

// const persona: humano = {
//     nombre: "Denis",
//     edad: 20,
//     apellido: "Vasquez"
// }

// console.log(persona)

// interface computadora {
//     marca: string,
//     ram: string,
//     storage: number,
//     tipoTeclado: string,
//     touchpad: boolean,
//     pantalla: string
// }

// const computadoraLenovo: computadora = {
//     marca: "Lenovo",
//     ram: "12GB",
//     storage: 160,
//     tipoTeclado: "LatinoAmericano",
//     touchpad: true,
//     pantalla: "Oled"
// }

// console.log(computadoraLenovo)

// para comentar el codigo ctrl + k + c
// para descomentar codigo ctrl + k + u

//FUNCIONES

interface personInterface {
    name: string,
    age: number,
    lastName: string
}

const makePerson = (person: personInterface): personInterface => {
    return person
}

const printPerson = makePerson({
    name: "Denis",
    age: 20,
    lastName: "Vasquez"
})

console.log(printPerson);

//otra funcion para crear objetos

interface carInterface {
    marca: string,
    modelo: string,
    año: number,
    color?: string            //para hacer que un campo sea opcional y no obligatorio es con ? este signo
}

const makeCar = (car : carInterface) : carInterface => {
    return car
}

const printCar = makeCar({
    marca : "Toyota",
    modelo : "Kztre",
    año : 2013,
    color : "rojo"
})

console.log(printCar);
console.log("color del carro:", printCar.color);

// Arrays de objetos
//usanod la interface de carros que se creo arriba

const listeDeCarros: carInterface[] = [
    {marca: "Honda", modelo: "Civic", año: 2017, color: "negro"},
    {marca: "Toyota", modelo: "Corolla", año: 2017, color: "rojo"},
    {marca: "Mitsubitshi", modelo: "L200", año: 2019, color: "rojo"}
]

listeDeCarros.forEach(carro => {
    console.log(carro.marca);
    console.log(carro.modelo);
    console.log(carro.año);
    
})






