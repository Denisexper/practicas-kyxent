import { log } from "console"

type operation = "suma" | "resta" | "division" | "multiplicacion"

export const calculate = (num: number, num2: number, op: operation): number => {

    try {


        switch (op) {
            case "suma":
                return num + num2

            case "resta":
                return num - num2

            case "division":
                // if (num === 0 || num2 === 0) {

                //     console.log("No se puede dividir entre 0")
                //     return 0
                // }else {
                //     return num / num2
                // }

                //operador ternario validacion
                return (num === 0 || num2 === 0)
                    ? (console.log("No se puede dividir entre 0"), 0)
                    : num / num2;


            case "multiplicacion":
                return num * num2

            default:

                return 0
        }

    } catch (error) {

        throw new Error(`${error}`)
    }
}