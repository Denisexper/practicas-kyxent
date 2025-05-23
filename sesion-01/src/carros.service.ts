
type carroColor = "azul" | "verde" | "rojo" | "amarillo"

interface carrosProps {

    model : string,
   year : number,
   disponible : boolean,
  matricula : string,
   color : carroColor
}

export const createCarro = (carroData : carrosProps[]) : carrosProps[] => {

    try {
        
        return carroData

    } catch (error) {
        
        throw new Error (`${error}`)
    }
}

const listCarros = createCarro ([
    {
        model : "Corolla",
        year : 2013,
        disponible : true,
        matricula : "P0934",
        color : "azul"
    },

    {
        model : "Honda",
        year : 2013,
        disponible : true,
        matricula : "Y8790",
        color : "rojo"
    },

    {
        model : "Lanzer",
        year : 2015,
        disponible : true,
        matricula : "E934",
        color : "rojo"
    }
])

listCarros.forEach(carro => {
    console.log(carro.model)
    console.log(carro.color)
    console.log(carro.matricula)
})