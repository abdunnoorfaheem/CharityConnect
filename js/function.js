function inputNumber(id) {

    let inputId = document.getElementById(id).value;

    let inputNumber = parseFloat(inputId);

    return inputNumber;

}


function textValue(id) {

    let textId = document.getElementById(id).innerText;

    let textNumber = parseFloat(textId);

    return textNumber;

}