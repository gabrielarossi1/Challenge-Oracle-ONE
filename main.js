// a - ai
//e - enter
//i - imes
//o - ober
//u -ufat

// en orden primero la e, o, i, a y u

// function encriptar(){
//     var texto = document.getElementById("text-input").value.toLowerCase();
//     var txtCifrado = texto.replace(/e/igm,"enter");
//     var txtCifrado = txtCifrado.replace(/o/igm,"ober");
//     var txtCifrado = txtCifrado.replace(/i/igm,"imes");
//     var txtCifrado = txtCifrado.replace(/a/igm,"ai");
//     var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

//     document.getElementById("imgDer").style.display = "none";
//     document.getElementById("texto").style.display = "none";
//     document.getElementById("texto2").innerHTML = txtCifrado;
//     document.getElementById("copiar").style.display = "show";
//     document.getElementById("copiar").style.display = "inherit";
// }
function encriptar() {
    const textoInput = document.getElementById("text-input");
    const texto = textoInput.value.toLowerCase();
    
    const reemplazos = {
        "e": "enter",
        "o": "ober",
        "i": "imes",
        "a": "ai",
        "u": "ufat"
    };
    
    const txtCifrado = texto.replace(/[eoiau]/igm, function(match) {
        return reemplazos[match];
    });
    
    const imgDer = document.getElementById("imgDer");
    const textoElem = document.getElementById("texto");
    const texto2Elem = document.getElementById("texto2");
    const copiarElem = document.getElementById("copiar");
    
    imgDer.style.display = "none";
    textoElem.style.display = "none";
    texto2Elem.innerHTML = txtCifrado;
    copiarElem.style.display = "inherit";
}

// function desencriptar(){
//     var texto = document.getElementById("text-input").value.toLowerCase();
//     var txtCifrado = texto.replace(/enter/igm,"e");
//     var txtCifrado2 = txtCifrado.replace(/ober/igm,"o");
//     var txtCifrado3 = txtCifrado2.replace(/imes/igm,"i");
//     var txtCifrado4 = txtCifrado3.replace(/ai/igm,"a");
//     var txtCifrado5 = txtCifrado4.replace(/ufat/igm,"u");

//     document.getElementById("imgDer").style.display = "none";
//     document.getElementById("texto").style.display = "none";
//     document.getElementById("texto2").innerHTML = txtCifrado;
//     document.getElementById("copiar").style.display = "show";
//     document.getElementById("copiar").style.display = "inherit";
// }
function desencriptar() {
    const textoInput = document.getElementById("text-input");
    const texto = textoInput.value.toLowerCase();
    
    const reemplazos = {
        "enter": "e",
        "ober": "o",
        "imes": "i",
        "ai": "a",
        "ufat": "u"
    };
    
    const txtCifrado = texto.replace(/enter|ober|imes|ai|ufat/igm, function(match) {
        return reemplazos[match];
    });
    
    const imgDer = document.getElementById("imgDer");
    const textoElem = document.getElementById("texto");
    const texto2Elem = document.getElementById("texto2");
    const copiarElem = document.getElementById("copiar");
    
    imgDer.style.display = "none";
    textoElem.style.display = "none";
    texto2Elem.innerHTML = txtCifrado;
    copiarElem.style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    swal({
        text: "¡Se copió!",
        icon: "success",
      });
}