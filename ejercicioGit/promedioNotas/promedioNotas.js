import { calcularPromedio } from './serviciosPromedioNotas.js';

function calcularPromedioNotas() {

    const el1 = document.getElementById('n1');
    const el2 = document.getElementById('n2');
    const el3 = document.getElementById('n3');
    const resultadoEl = document.getElementById('resultado');
    const img = document.getElementById('gifResultado');


    if (!el1 || !el2 || !el3 || !resultadoEl || !img) return;

    const n1 = parseFloat(el1.value);
    const n2 = parseFloat(el2.value);
    const n3 = parseFloat(el3.value);

    if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
        resultadoEl.textContent = 'Ingrese números válidos.';
        img.style.display = 'none';
        img.src = '';
        return;
    }

    const promedio = calcularPromedio(n1, n2, n3);

    resultadoEl.textContent = promedio.toFixed(2);

    img.src = promedio > 7 ? 'imagenes/exito.gif' : 'imagenes/fracaso.gif';
    
    img.style.display = 'inline-block';
}
document.addEventListener('DOMContentLoaded', () => {
    const inputs = [
        document.getElementById('n1'),
        document.getElementById('n2'),
        document.getElementById('n3')
    ].filter(Boolean);

    inputs.forEach(i => i.addEventListener('input', calcularPromedioNotas));
    
    calcularPromedioNotas();
});

window.calcularPromedioNotas = calcularPromedioNotas;