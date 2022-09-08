const areaTexto = document.querySelector("#area-texto")
const textoResultado = document.querySelector("#texto-resultado")

//CRIPTOGRAFAR TEXTO

function desaparece () {
    document.querySelector(".area-mensagem").style.display = 'none';
}

desaparece ()

function btnEncriptar () {
    const textoEncriptado = encriptar(areaTexto.value)
    textoResultado.value = textoEncriptado
    aparece()
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "other"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

//DESCRIPTOGRAFAR TEXTO

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(areaTexto.value)
    textoResultado.value = textoDesencriptado
    aparece()
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "other"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

//COPIAR TEXTO

function copiar() {
    const msg = document.querySelector("#texto-resultado");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}

function aparece() {
    document.querySelector(".area-botao-copiar").style.display = 'block';
    document.querySelector(".msg-alerta").style.display = 'none';
    document.querySelector(".area-mensagem").style.display = 'block';
}