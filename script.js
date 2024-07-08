function gerarTabuada(){
    var num = document.getElementById('txtnum')
    var selectElement = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert("[ERRO] Digite um número válido")
    }else{
        var numero = Number(num.value)
        var res = 0
        selectElement.innerHTML = ""
        for(var i=0;i<=10;i++){
            var optionElement = document.createElement("option")
            res = numero * i
            optionElement.textContent = `${numero} X ${i} = ${res}`
            
            selectElement.appendChild(optionElement)
        }
    }
}