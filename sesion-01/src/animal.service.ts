
type razaOptions = "Gato" | "Perro" | "Tigre" | "Leon"

interface animalProps {
    
    nombre : string,
    edad : number,
    color : string,
    raza : razaOptions

}

export const createAnimal = (animalData : animalProps[]) : animalProps[] => {

    try {

        // if(animalData.nombre === "" || animalData.edad === 0 || animalData.color === "" || !animalData.raza) return "Todos los campos son requeridos";
        
        return animalData
        
    } catch (error) {

        throw new Error(`${error}`)
    }
}

const listAnimales = createAnimal([
    {
        nombre : "Rocky",
        edad : 34,
        color : "Blanco",
        raza : "Gato"
    },

    {
        nombre : "Oso",
        edad : 23,
        color : "Negro",
        raza : "Perro"
    },

    {
        nombre : "Scarface",
        edad : 15,
        color : "Blanco",
        raza : "Tigre"
    }
])

listAnimales.forEach(animal => {
    console.log("Nombre: ", animal.nombre)
    console.log("Raza: ", animal.raza)
});


//funcion que pide una lista de animales y que devuleve una lista de animales

