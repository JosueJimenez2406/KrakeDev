function saludar(){
    const nombre = document.getElementById('txtnombre').value;
    const apellido = document.getElementById('txtApellido').value;

    const saludoProcesado = generarSaludo(nombre, apellido);

    console.log(saludoProcesado);
}