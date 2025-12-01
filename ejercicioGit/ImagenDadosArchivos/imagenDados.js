let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    if (lanzamientos <= 0){
        cambiarTexto("lblresultado", "GAME OVER. Presiona LIMPIAR para reiniciar.");
        return;
    }

    let resultado=lanzarDado();
    console.log("Resultado del dado: " + resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

modificarPuntos=function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblpuntos", puntos);
    //si el jugador obtiene mas de 20 puntos
    if (puntos > 20){
        //mostrar en pantalla un mensaje GANASTE
        cambiarTexto("lblmensaje", "GANASTE!!! Puntos: " +puntos);
        //invocar a limpiar
        limpiar();
    }
}
//no recibe parametros
//resta 1 a la variable lanamientos, guarda el resultado en la misma variable
//y muestra en pantalla
modificarLanzamientos=function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);
    //si lanzamientos llega a 0
    if (lanzamientos == 0 ){
        //mostrar en pantalla el mensaje GAME OVER
        cambiarTexto("lblresultado", "GAME OVER!!! Puntos: " +puntos);
    }
    //invoca a limpiar
    //limpiar();
}

limpiar=function(){
    //Colocar puntaje en 0 y lanzamientos en 5
    puntos = 0;
    lantamientos = 5;
    //en las variables y en pantalla
    cambiarTexto("lblpuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("lblresultado", "Nuevo juego. Lanza el dado..");
    //quitar la imagen ""
    cambiarImagen("imgDado", "");
}

//funcion mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
//no retorna nada
mostrarCara=function(numero){
    if(numero == 1){ //con == se compara, mientras con que == se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio = Math.random();
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado = parseInt(aleatorio * 6) + 1;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}