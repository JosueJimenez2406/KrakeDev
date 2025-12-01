recuperarTexto = function(idComponente) {
    let cmpTexto = document.getElementById(idComponente);
    
    if (!cmpTexto) return '';
    
    if ('value' in cmpTexto) {
        return cmpTexto.value;
    }
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
    if (componente) {

        if ('value' in componente) {
            componente.value = mensaje;
        } else {
            componente.innerText = mensaje;
        }
    }
}

cambiarImagen = function(idComponente, imagen) {
    let componente = document.getElementById(idComponente);
    
   if (componente) {
        componente.src = imagen;
    }
}