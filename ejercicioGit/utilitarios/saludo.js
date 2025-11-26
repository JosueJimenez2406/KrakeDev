saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto txtEdad
    let edad=recuperarInt("txtEdad");
    //recuperar el valor de la caja de texto txtEstatura
    let estatura=recuperarInt("txtEstatura");

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado", mensajeBienvenida);

    mostrarImagen("imgSaludo","./imagenes/saludo.gif");

    mostrarTextoEnCaja("txtNombre","");

}