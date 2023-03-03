// simulador de prestamo y cuotas

class Prestamos {
    constructor(nombre, id, cuota12, cuota18, cuota24, cuota36) {
        this.nombre = nombre
        this.id = id
        this.cuota12 = cuota12
        this.cuota18 = cuota18
        this.cuota24 = cuota24
        this.cuota36 = cuota36
    }
}

const prestamistaUno = new Prestamos("prestamistaUno", 1, 30, 40, 50, 60)
const prestamistaDos = new Prestamos("prestamistaDos", 2, 35, 45, 55, 65)
const prestamistaTres = new Prestamos("prestamistaTres", 3, 40, 50, 60, 70)
const prestamistaCuatro = new Prestamos("prestamistaCuatro", 4, 50, 60, 70, 80)

// console.log(prestamistaUno, prestamistaDos, prestamistaTres, prestamistaCuatro)

let prestamoCotizacion = parseInt(
    prompt("Elija banco que desea cotizar. 1.prestamistaUno - 2.prestamistaDos - 3.PrestamistaTres - 4.prestamistaCuatro")
)
// variable p condicion de prestamista 
let escojerPrestamista = false
// variable info de prestamista
let infoPrestamistaElegido
while (escojerPrestamista === false) {
    if (escojerPrestamista === 1) {
        escojerPrestamista = true
        infoPrestamistaElegido = prestamistaUno
    } else if (escojerPrestamista === 2) {
        escojerPrestamista = true
        infoPrestamistaElegido = prestamistaDos
    } else if (escojerPrestamista === 3) {
        escojerPrestamista = true
        infoPrestamistaElegido = prestamistaTres
    } else if (escojerPrestamista === 4) {
        escojerPrestamista = true
        infoPrestamistaElegido = prestamistaCuatro
    } else {
        prestamoCotizacion = parseInt(
            prompt(
                "Elija una opcion correcta. 1.prestamistaUno - 2.prestamistaDos - 3.PrestamistaTres - 4.prestamistaCuatro")
        )
    }
}

const montoSolicitado = parseInt(
    prompt("ingresa el monto que deseas solicitar")
)
const cuota12 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa12, 12)
const cuota18 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa18, 18)
const cuota24 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa24, 24)
const cuota36 = calcularCuota(montoSolicitado, infoPrestamistaElegido.tasa36, 36)
console.log(cuota12, cuota18, cuota24, cuota36)

// funcion calcular cuotas segun meses
function calcularCuota(monto, interes, meses) {
    const cuota = (monto + (monto * interes)) / 100 / meses
    return cuota
}


console.log("infoPrestamista", infoPrestamistaElegido, montoSolicitado)