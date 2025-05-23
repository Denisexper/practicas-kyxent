import readline from "readline"    //para que funcione readline necesitas instalar esto: pnpm add -D @types/node
import { calculate } from "./funciones";


const consoleInterfa = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const initCalculate = () => consoleInterfa.question("Ingrese el numero 1: ", (num) => {
    
    consoleInterfa.question("Ingrese el numero 2: ", (num2) => {

        consoleInterfa.question("Ingrese la operacion\n1-suma\n2-resta\n3-division\n4-multiplicacion: ",
            (operation) => {

                const numero1 = parseFloat(num)
                const numero2 = parseFloat(num2)
                const ope = parseInt(operation)

                switch (ope) {
                    case 1:
                        console.log("La suma es: ", calculate(numero1, numero2, "suma"))
                        initCalculate()  //invocamos la funcion recursiva
                        
                        break;

                    case 2:
                        console.log("La resta es: ", calculate(numero1, numero2, "resta"))
                        initCalculate()

                        break;

                    case 3:
                        const resrt = calculate(numero1, numero2, "division")

                        if(resrt === 0){

                            console.log("No se puede dividir entre 0")
                        }else{
                            //imprimira 2 veces este mensaje porque ya lo tenog en funciones.ts
                            console.log("Tu division es: ", resrt);
                            
                        }
                        initCalculate()

                        break;

                    case 4:
                        console.log("La multiplicacion es: ", calculate(numero1, numero2, "multiplicacion"))
                        initCalculate()

                        break;

                    default:
                        break;
                }
            })
    })
})

initCalculate();

