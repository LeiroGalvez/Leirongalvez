function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 187.63;
    let euro  = 205.48;
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de ARS a Dolares es: $" + resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de ARS a Euros es: €" + resultado.toFixed(2));
    }
    else {
        alert("Tienes que completar todos los requerimientos")
    }

}




