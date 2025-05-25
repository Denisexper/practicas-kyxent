import { warriorInterface } from "../interfaces/warrior.interface"
import { ModelWarrior } from "../schemas/modelWarrior"


export const warriorRepostory = () => ({

    create: async(warriorData: Partial<warriorInterface>) : Promise<Partial<warriorInterface>> => {

        try {
            
            const  createWarrior = await ModelWarrior.create(warriorData)
            
            return createWarrior

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    },

    getAll: async (): Promise<warriorInterface[]> => {
        try {
            
            const getAll = await ModelWarrior.find();

            return getAll

        } catch (error) {
            
            throw new Error (`${error}`)

        }
    },

    updateWarrior: async (id: string, warriorData: warriorInterface): Promise<warriorInterface> => {
        try {
            
            const updateWarriorMethod = await ModelWarrior.findByIdAndUpdate(id, warriorData)

            return updateWarriorMethod!

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    } ,

    deleteById: async (id: string) : Promise<warriorInterface> => {
        try {
            
            const warriorDelete = await ModelWarrior.findByIdAndDelete(id)

            return warriorDelete!

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }
})