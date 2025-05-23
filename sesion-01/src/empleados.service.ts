

interface empleado {

    name : string,
    age : number,
    lastName : string,
    birthdate : string
}

export const createEmpleado = (empleadoData : empleado[]) : empleado[] => {
    
    try {
        
        return empleadoData

    } catch (error) {

        throw new Error (`${error}`)
    }
}

const listEmpleados = createEmpleado ([
    {
        name: "Chelsea",
        age : 20,
        lastName : "Rodriguez",
        birthdate : "2006-04-15"
    },

    {
        name: "Mariana",
        age : 20,
        lastName : "Martinez",
        birthdate : "2006-04-15"
    }
])

listEmpleados.forEach(empleado => {
    console.log(empleado.name)
    console.log(empleado.birthdate)
})

