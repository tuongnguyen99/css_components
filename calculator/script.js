function onKeyPressed(key){
    const input = document.getElementById('calc-input');
    input.innerHTML += key.value;
}

function clearInput(){
    const input = document.getElementById('calc-input');
    const result = document.getElementById('calc-result');
    input.innerHTML = '';
    result.innerHTML = '0';
}

function calculate(){
    const input = document.getElementById('calc-input');
    const result = document.getElementById('calc-result');
    let inputString = input.innerHTML;
    try {
        let output = eval(inputString);
        result.innerHTML = output;
    } catch (error) {
        result.innerHTML = 'Syntax error';
    }

}