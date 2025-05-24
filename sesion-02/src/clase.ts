// interface personInterface {
//     name : string,
//     age : number,
//     isMarried : boolean
// }

// const createPeroson =  (personObj : personInterface) : personInterface => {

//     try {
        
//         if(personObj.age >= 18 ) console.log(`${personObj.name} es mayor de edad`);

//         return personObj;

//     } catch (error) {
        
//         throw new Error(`${error}`)
//     }
// }

// const makePerson : personInterface = ({

//     name : "Denis",
//     age : 19,
//     isMarried : true
// })

// createPeroson(makePerson)
// console.log(makePerson)



//funcion numero 2

// type powerTypes = "fly" | "Super speed" | "super strong"

// type planetType = "heart" | "march" | "saturno"

// interface hero {

//     name : string,
//     age : number,
//     powers : powerTypes[],
//     planet : planetType[]
// }

// const createHero = (dataHero : hero) : hero => {

//     try {
        
//         return dataHero

//     } catch (error) {
        
//         throw new Error (`${error}`)
//     }
// }

// const iroMan = createHero({
//     name : "Iroman",
//     age : 30,
//     powers : ["fly"],
//     planet : ["heart"]
// })

// console.log(iroMan)


//funcion numero 3

// type gunsType = "arch" | "sword" | "shield" | "botas templo de agua" | "botas templo de fuego" | "ocarine of time"

// interface warriorProp {
//     name : string,
//     guns : gunsType[],
//     temple : string,
//     age : number,
//     medallones : boolean

// }

// const createWarrior = (dataWarrior : warriorProp) : warriorProp => {

//     try {
        
//         return dataWarrior

//     } catch (error) {
        
//         throw new Error (`${error}`)
//     }
// }

// const linkWarrior = createWarrior ({
//     name : "link",
//     guns : ["arch", "shield"],
//     temple : "fire temple",
//     age : 17,
//     medallones : true
// })



//funcion numero 4

// interface computerProps {
//     brand : string,
//     model : string,
//     year : number,
//     ram : number,
//     storage : number,
//     cpuName : string,
//     gpuName : string
// }

// const createComputer = (dataComputer : computerProps) : computerProps => {

//     try {
        
//         return dataComputer

//     } catch (error) {
        
//         throw new Error (`${error}`)

//     }
// }

// const framework = createComputer({
//     brand : "framework",
//     model : "laptop15",
//     year : 2024,
//     ram : 16,
//     storage : 1,
//     cpuName : "Razen 7 8435",
//     gpuName : "Radeon Rx 7834x"
// })

// console.log(`
//     marca: ${framework.brand}
//     año: ${framework.year}
//     ram: ${framework.ram}
//     almacenamiento: ${framework.storage}
//     procesador: ${framework.gpuName}`);


interface systemProps {
    newPackage :  string,
    version : number
}

const updateSystem = (data : systemProps, id: string) : systemProps => {

    try {
        
        const idVersion = "9432"

        if(id === idVersion) console.log("systema actualizado correctamente")
        if(id != idVersion) console.log("system problem version")
        return data

    } catch (error) {
        
        throw new Error (`${error}`)
    }
}

const systemRealise = updateSystem(
    {
        newPackage : "realise 2.34",
        version : 3.3
    },
    "9432"
)

console.log(updateSystem);


