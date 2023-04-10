// a - ai
//e - enter
//i - imes
//o - ober
//u -ufat

// en orden primero la e, o, i, a y u

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