recuperarTexto=function(idComponente){
    let cmpTexto=document.getElementById(idComponente);
    if (!cmpTexto) return '';
    if ('value' in cmpTexto) return cmpTexto.value;
    return cmpTexto.innerText || '';
}
recuperarEntero=function(idComponente){
    let valor=recuperarTexto(idComponente);
    return parseInt(valor);
}
recuperarFlotante=function(idComponente){
    let valor=recuperarTexto(idComponente);
    return parseFloat(valor);
}
cambiarTexto=function(idComponente,mensaje){
    let componente = document.getElementById(idComponente);
    if (!componente) return;
    if ('value' in componente) {
        componente.value = mensaje;
    } else {
        componente.innerText = mensaje;
    }
}
appendTexto=function(idComponente,mensaje){
    let componente = document.getElementById(idComponente);
    if (!componente) return;
    if ('value' in componente) {
        componente.value = (componente.value? componente.value + "\n" : "") + mensaje;
    } else {
        componente.innerText = (componente.innerText? componente.innerText + "\n" : "") + mensaje;
    }
}
cambiarImagen=function(idComponente,imagen){
    let componente;
    componente=document.getElementById(idComponente);
    if (!componente) return;
    componente.src=imagen;
}