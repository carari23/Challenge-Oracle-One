const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//Función para trar el valor del textarea y encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

//Función para trar el valor del textarea y Desencriptar
function btnDesencriptar(){
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

// Función Encriptar
function encriptar(stringEcriptar){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    console.table(matrizCodigo);

    stringEcriptar = stringEcriptar.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEcriptar.includes(matrizCodigo[i][0])){
            stringEcriptar = stringEcriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        
    }
    return stringEcriptar;
}

// Función Desencriptar
function Desencriptar(stringDesecriptar) {
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    console.table(matrizCodigo);

    stringDesecriptar = stringDesecriptar.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesecriptar.includes(matrizCodigo[i][1])){
            stringDesecriptar = stringDesecriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        
    }
    return stringDesecriptar;
}

// Metodo para hacer el copy del encriptador
var copyTextareaBtn = document.querySelector('.copiar');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.mensaje');
  console.log(copyTextarea);
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
   
  } catch (err) {
  }
});