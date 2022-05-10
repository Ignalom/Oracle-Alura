//declaramos las constantes

const encriptado = document.querySelector(".parrafo")
const desencriptado = document.querySelector(".resultado")



function botonEncriptar (){

    const textoEncriptado = encriptar (encriptado.value);
    desencriptado.value = textoEncriptado;
}

function encriptar (StringParaEncriptar){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase ();
    for (let i=0; i <matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){StringParaEncriptar = StringParaEncriptar.replaceAll (matrizCodigo[i][0], matrizCodigo[i][1])}

    }
    return StringParaEncriptar;
}

//Desencriptar

function botonDesencriptar (){

    const textoDesencriptado = desencriptar (desencriptado.value);
    encriptado.value = textoDesencriptado;
}

function desencriptar (StringParaDesencriptar){
    let matrizCodigo = [["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase ();
    for (let i=0; i <matrizCodigo.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])){StringParaDesencriptar = StringParaDesencriptar.replaceAll (matrizCodigo[i][0], matrizCodigo[i][1])}

    }
    return StringParaDesencriptar;
}




//boton de copiado
function botonCopiado() {

    var content = document.getElementById('resultado');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
}
