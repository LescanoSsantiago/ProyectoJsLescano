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
const prestamos = [
    new Prestamos("prestamistaUno", 1, 30, 40, 50, 60), 
    new Prestamos("prestamistaDos", 2, 35, 45, 55, 65),
    new Prestamos("prestamistaTres", 3, 40, 50, 60, 70),
    new Prestamos("prestamistaCuatro", 4, 50, 60, 70, 80),
]

// console.log(prestamos)

let prestamoCotizacion = parseInt(
    prompt("Elija banco que desea cotizar. 1.prestamistaUno - 2.prestamistaDos - 3.PrestamistaTres - 4.prestamistaCuatro")
)
localStorage.setItem("prestamoCotizacion", prestamoCotizacion);
let prestamoCotizacion = localStorage.getItem("prestamoCotizacion");
// STRING
const prestamoCotizacionJSON = JSON.stringify (prestamoCotizacion);
localStorage.setItem("prestamoCotizacion", prestamoCotizacionJSON);
// VOLVER A OBJETO
const prestamoCotizacion = localStorage.getitem("prestamoCotizacion");
const prestamoObjeto = JSON.parse(prestamoCotizacion);

// variable p condicion de prestamista 
let escojerPrestamista = false
// variable info de prestamista
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

const montoSolicitado = parseInt(
    prompt("ingresa el monto que deseas solicitar")
)
const cuota12 = calcularCuota(montoSolicitado, prestamo.tasa12, 12)
const cuota18 = calcularCuota(montoSolicitado, prestamo.tasa18, 18)
const cuota24 = calcularCuota(montoSolicitado, prestamo.tasa24, 24)
const cuota36 = calcularCuota(montoSolicitado, prestamo.tasa36, 36)

localStorage.setItem("montoSolicitado", montoSolicitado);
let montoSolicitado = localStorage.getItem("montoSolicitado");
// STRING
const montosolicitadoJSON = JSON.stringify (montoSolicitado);
localStorage.setItem("montoSolicitado", montoSolicitadoJSON);
// VOLVER A OBJETO
const montoSolicitado = localStorage.getitem("montoSolicitado");
const montoObjeto = JSON.parse(prestamoCotizacion);
// console.log(cuota12, cuota18, cuota24, cuota36)

// funcion calcular cuotas segun meses
function calcularCuota(monto, interes, meses) {
    const cuota = (monto + (monto * interes)) / 100 / meses
    return cuota
}

alert(
    `Las opciones que te ofrece ${prestamo.nombre} son: 1. ${cuota12} mensuales a 12 meses - .2 ${cuota18} mensuales en 18 meses - .3 ${cuota24} mensuales a 24 meses - .4 ${cuota36} mensuales en 36 meses`
    )
// console.log("infoPrestamista", infoPrestamistaElegido, montoSolicitado)

