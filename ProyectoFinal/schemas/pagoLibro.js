var selectVisa = document.getElementById("selectVisa")
var selectMastercard = document.getElementById("selectMastercard")
var selectSinpe = document.getElementById("sinpe")
var selectTransferencia = document.getElementById("selectTransferencia")


var opcionSelectVisa = selectVisa.options[selectVisa.selectedIndex].text

var opcionSelectMastercard = selectMastercard.options[selectMastercard.selectedIndex].text

var opcionSelectSinpe = selectSinpe.options[selectSinpe.selectedIndex].text

var opcionSelectTransferencia = selectTransferencia.options[selectTransferencia.selectedIndex].text

function actualizacion (){

    opcionSelectVisa = selectVisa.options[selectVisa.selectedIndex].text
    var estadoVisa = document.getElementById("estadoVisa")
    
     opcionSelectMastercard = selectMastercard.options[selectMastercard.selectedIndex].text
    var estadoMastercard = document.getElementById("estadoMastercard")
    
    opcionSelectSinpe = selectSinpe.options[selectSinpe.selectedIndex].text
    var estadoSinpe = document.getElementById("estadoSinpe")

    opcionSelectTransferencia = selectTransferencia.options[selectTransferencia.selectedIndex].text
    var estadoTransferencia = document.getElementById("estadoTransferencia")


    if(opcionSelectVisa != "--cambiar estado actual--"){
        if(opcionSelectVisa == "Activado"){
            estadoVisa.classList.remove("spanDesactivado")
            estadoVisa.classList.add("spanActivado")
            estadoVisa.innerHTML = opcionSelectVisa
        }else{
            estadoVisa.classList.add("spanDesactivado")
            estadoVisa.innerHTML = opcionSelectVisa
        }
    }

    if(opcionSelectMastercard != "--cambiar estado actual--"){
        if(opcionSelectMastercard == "Activado"){
            estadoMastercard.classList.remove("spanDesactivado")
            estadoMastercard.classList.add("spanActivado")
            estadoMastercard.innerHTML = opcionSelectMastercard
        }else{
            estadoMastercard.classList.add("spanDesactivado")
            estadoMastercard.innerHTML = opcionSelectMastercard
        }
    }

    if(opcionSelectSinpe != "--cambiar estado actual--"){
        if(opcionSelectSinpe == "Activado"){
            estadoSinpe.classList.remove("spanDesactivado")
            estadoSinpe.classList.add("spanActivado")
            estadoSinpe.innerHTML = opcionSelectSinpe
        }else{
            estadoSinpe.classList.add("spanDesactivado")
            estadoSinpe.innerHTML = opcionSelectSinpe
        }
    }

    if(opcionSelectTransferencia != "--cambiar estado actual--"){
        if(opcionSelectTransferencia == "Activado"){
            estadoTransferencia.classList.remove("spanDesactivado")
            estadoTransferencia.classList.add("spanActivado")
            estadoTransferencia.innerHTML = opcionSelectTransferencia
        }else{
            estadoTransferencia.classList.add("spanDesactivado")
            estadoTransferencia.innerHTML = opcionSelectTransferencia
        }
    }

}

function validarSeleccion(){
    if (opcionSelectVisa == "--cambiar estado actual--" && opcionSelectMastercard == "--cambiar estado actual--" &&
    opcionSelectSinpe == "--cambiar estado actual--" && opcionSelectTransferencia == "--cambiar estado actual--"){

        alert("Error: Error: elija al menos un método de pago para modificar")

        return false
    }else{
        alert("Datos actualizados exitosamente")
    }
}