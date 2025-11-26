calcularValorTotal = function () {
    // recuperar valores de la página (usar funciones de utilitarios.js)
    let nombreProducto = recuperarTexto("txtNombreProducto");
    let precioProducto = Number(recuperarTexto("txtPrecioProducto")) || 0; // si existe recuperarFloat, puede usarse en su lugar
    let cantidad = Number(recuperarTexto("txtCantidad")) || 0; // si existe recuperarInt, usarlo
    let porcentajeDescuento = Number(recuperarTexto("txtPorcentajeDescuento")) || 0;

    // calcular subtotales y montos usando servicios
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

    let valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

    // IVA sobre (subtotal - descuento)
    let baseParaIVA = valorSubtotal - valorDescuento;
    let valorIVA = calcularIVA(baseParaIVA);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(3));

    // total final
    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(3));

    // resumen
    let resumen = `Valor a pagar por ${cantidad} ${nombreProducto} con ${porcentajeDescuento}% de descuento: USD ${valorTotal.toFixed(2)}`;
    mostrarTexto("lblResumen", resumen);
}

limpiar = function () {
    // limpiar cajas de entrada
    mostrarTextoEnCaja("txtNombreProducto", "");
    mostrarTextoEnCaja("txtPrecioProducto", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "0");

    // resetear etiquetas de montos
    mostrarTexto("lblSubtotal", "0.00");
    mostrarTexto("lblDescuento", "0.00");
    mostrarTexto("lblValorIVA", "0.000");
    mostrarTexto("lblTotal", "0.000");
    mostrarTexto("lblResumen", "");
}