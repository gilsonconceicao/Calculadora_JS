// calculadora JS

function selectedNumber(num) {
    let numero = document.getElementById('areaRes').innerHTML; 
    document.getElementById('areaRes').innerHTML = numero + num
}

function back() {
    let numero = document.getElementById('areaRes').innerHTML; 
    document.getElementById('areaRes').innerHTML = numero.substring(0, numero.length -1)
}

function clearAll() {
    let number = document.getElementById('areaRes').innerHTML
    if (number == '') {
        alert('Não tem número para apagar!')
    } else {
        document.getElementById('areaRes').innerHTML = ""
    }

}

function calcular() {
    let numero = document.getElementById('areaRes').innerHTML; 
    document.getElementById('areaRes').innerHTML = eval(numero)
}