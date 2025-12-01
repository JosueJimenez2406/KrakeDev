recuperarTexto = function(idComponente) {
    let cmpTexto = document.getElementById(idComponente);
    if (!cmpTexto) return '';
    if ('value' in cmpTexto) return cmpTexto.value;
    return cmpTexto.innerText || '';
}

recuperarEntero = function(idComponente) {
    let valor = recuperarTexto(idComponente);
    return parseInt(valor);
}

recuperarFlotante = function(idComponente) {
    let valor = recuperarTexto(idComponente);
    return parseFloat(valor);
}

cambiarTexto = function(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    if (!componente) return;
    if ('value' in componente) {
        componente.value = mensaje;
    } else {
        componente.innerText = mensaje;
    }
}

cambiarImagen = function(idComponente, imagen) {
    let componente = document.getElementById(idComponente);
    if (!componente) return;
    componente.src = imagen;
    // Hace visible la imagen si estaba oculta
    componente.style.display = 'block'; 
}
function calcularPromedioNotas() {
    // a. Recupera los valores de cada caja de texto COMO FLOAT (Usando utilitarias)
    const nota1 = recuperarFlotante('nota1');
    const nota2 = recuperarFlotante('nota2');
    const nota3 = recuperarFlotante('nota3');
    
    // Validación de números
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        cambiarTexto('resultadoPromedio', 'ERROR: Ingrese valores numéricos.');
        cambiarImagen('resultadoImagen', ''); // Limpia la imagen
        return; 
    }

    // b. Invoca a la función calcularPromedio (de serviciosPromedioNotas.js)
    const promedio = calcularPromedio(nota1, nota2, nota3);

    // c. Muestra en pantalla el valor del promedio, con 2 decimales (Usando utilitarias)
    const promedioFormateado = promedio.toFixed(2);
    cambiarTexto('resultadoPromedio', promedioFormateado);
    
    // Lógica para mostrar el GIF (Punto 6)
    let gifURL;
    
    // Si el promedio es mayor a 7 mostrar un gif de éxito
    if (promedio > 7) {
        // Remplaza con la ruta a tu GIF de éxito
        gifURL = 'imagenes/exito.gif'; 
    } 
    // Caso contrario mostrar un gif de fracaso
    else {
        // Remplaza con la ruta a tu GIF de fracaso
        gifURL = 'imagenes/fracaso.gif';
    }

    // Llama a la utilitaria para cambiar la imagen
    cambiarImagen('resultadoImagen', gifURL);
}

document.addEventListener('DOMContentLoaded', () => {
    // Conecta el botón 'btnCalcular' con la función 'calcularPromedioNotas'
    const btn = document.getElementById('btnCalcular');
    if (btn) {
        btn.addEventListener('click', calcularPromedioNotas);
    }
});