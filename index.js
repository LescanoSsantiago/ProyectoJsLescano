// simulador de prestamo y cuotas

class prestamos {
    constructor(nombre, id, cuota12, cuota18, cuota24, cuota36) {
        this.nombre = nombre
        this.id = id
        this.cuota12 = cuota12
        this.cuota18 = cuota18
        this.cuota24 = cuota24
        this.cuota36 = cuota36
    }
}


// const prestamos = [
//     new prestamos("prestamistaUno", 1, 30, 40, 50, 60) 
//     new prestamos("prestamistaDos", 2, 35, 45, 55, 65)
//     new prestamos("prestamistaTres", 3, 40, 50, 60, 70)
//     new prestamos("prestamistaCuatro", 4, 50, 60, 70, 80)
// ]

const prestamistaUno = new prestamos("prestamistaUno", 1, 30, 40, 50, 60)
const prestamistaDos = new prestamos("prestamistaDos", 2, 35, 45, 55, 65)
const prestamistaTres = new prestamos("prestamistaTres", 3, 40, 50, 60, 70)
const prestamistaCuatro = new prestamos("prestamistaCuatro", 4, 50, 60, 70, 80)

// console.log(prestamos)

let prestamoCotizacion = parseInt(
    prompt("Elija banco que desea cotizar. 1.prestamistaUno - 2.prestamistaDos - 3.PrestamistaTres - 4.prestamistaCuatro")
)
// variable p condicion de prestamista 
let escojerPrestamista = false
// variable info de prestamista
// let infoPrestamistaElegido MODIFICADO A LET PRESTAMO
let prestamo
while (escojerPrestamista === false) {
    prestamo = prestamos.find((prestamo => prestamo.id === prestamoCotizacion))
    if (!prestamo) {
        prestamoCotizacion = parseInt(
            prompt(
                "Elija una opcion correcta. 1.prestamistaUno - 2.prestamistaDos - 3.PrestamistaTres - 4.prestamistaCuatro")
        )
    } else {
        escojerPrestamista = true
    }
}
// console.log(prestamos)

// PRIMERA ENTREGA
//     if (escojerPrestamista === 1) {
//         escojerPrestamista = true
//         infoPrestamistaElegido = prestamistaUno
//     } else if (escojerPrestamista === 2) {
//         escojerPrestamista = true
//         infoPrestamistaElegido = prestamistaDos
//     } else if (escojerPrestamista === 3) {
//         escojerPrestamista = true
//         infoPrestamistaElegido = prestamistaTres
//     } else if (escojerPrestamista === 4) {
//         escojerPrestamista = true
//         infoPrestamistaElegido = prestamistaCuatro
//     } else {
//         prestamoCotizacion = parseInt(
//             prompt(
//                 "Elija una opcion correcta. 1.prestamistaUno - 2.prestamistaDos - 3.PrestamistaTres - 4.prestamistaCuatro")
//         )
//     }
// }

const montoSolicitado = parseInt(
    prompt("ingresa el monto que deseas solicitar")
)
const cuota12 = calcularCuota(montoSolicitado, prestamo.tasa12, 12)
const cuota18 = calcularCuota(montoSolicitado, prestamo.tasa18, 18)
const cuota24 = calcularCuota(montoSolicitado, prestamo.tasa24, 24)
const cuota36 = calcularCuota(montoSolicitado, prestamo.tasa36, 36)
// console.log(cuota12, cuota18, cuota24, cuota36)

// PRIMERA ENTREGA MODIFICADO A LET PRESTAMO
// const cuota12 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa12, 12)
// const cuota18 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa18, 18)
// const cuota24 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa24, 24)
// const cuota36 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa36, 36)
// // console.log(cuota12, cuota18, cuota24, cuota36)

// funcion calcular cuotas segun meses
function calcularCuota(monto, interes, meses) {
    const cuota = (monto + (monto * interes)) / 100 / meses
    return cuota
}

alert("Las opciones que te ofrece ${prestamo.nombre} son 1. ${cuota12} mensuales a 12 meses - .2 ${cuota18} mensuales en 18 meses - .3 ${cuota24} mensuales a 24 meses - .4 ${cuota36} mensuales en 36 meses")
// console.log("infoPrestamista", infoPrestamistaElegido, montoSolicitado)


