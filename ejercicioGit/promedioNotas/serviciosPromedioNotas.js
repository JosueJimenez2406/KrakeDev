/**
 * Función para calcular el promedio de 3 notas.
 * @param {number} n1 - Primera nota.
 * @param {number} n2 - Segunda nota.
 * @param {number} n3 - Tercera nota.
 * @returns {number} El promedio de las notas.
 */
function calcularPromedio(n1, n2, n3) {
    const sumaNotas = n1 + n2 + n3;
    const promedio = sumaNotas / 3;
    return promedio;
}