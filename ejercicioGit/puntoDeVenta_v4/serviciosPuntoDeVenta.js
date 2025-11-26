/**
 * Calcula el subtotal: precio unitario * cantidad
 * @param {number|string} precio
 * @param {number|string} cantidad
 * @returns {number}
 */
function calcularSubtotal(precio, cantidad) {
    const p = Number(precio) || 0;
    const q = Number(cantidad) || 0;
    return p * q;
}

/**
 * Calcula el valor del descuento a aplicar (porcentaje dado en %).
 * Ej: monto=800, porcentajeDescuento=50 -> retorna 400
 * @param {number|string} monto
 * @param {number|string} porcentajeDescuento
 * @returns {number}
 */
function calcularValorDescuento(monto, porcentajeDescuento) {
    const m = Number(monto) || 0;
    const pct = Number(porcentajeDescuento) || 0;
    return (m * pct) / 100;
}

/**
 * Retorna el valor del IVA (12% fijo)
 * Ej: monto=200 -> retorna 24
 * @param {number|string} monto
 * @returns {number}
 */
function calcularIVA(monto) {
    const m = Number(monto) || 0;
    const IVA_RATE = 0.12;
    return m * IVA_RATE;
}

/**
 * Calcula el total a pagar: subtotal - descuento + IVA
 * @param {number|string} subtotal
 * @param {number|string} descuento
 * @param {number|string} iva
 * @returns {number}
 */
function calcularTotal(subtotal, descuento, iva) {
    const s = Number(subtotal) || 0;
    const d = Number(descuento) || 0;
    const i = Number(iva) || 0;
    return s - d + i;
}