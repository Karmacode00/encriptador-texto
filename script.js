function encryptText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText === "") {
        document.getElementById('errorMessage').innerText = 'Debes ingresar algún texto.';
        return;
    }
    if (!isValidInput(inputText)) {
        document.getElementById('errorMessage').innerText = 'El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.';
        return;
    }
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('errorMessage').innerText = '';
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText === "") {
        document.getElementById('errorMessage').innerText = 'Debes ingresar algún texto.';
        return;
    }
    if (!isValidInput(inputText)) {
        document.getElementById('errorMessage').innerText = 'El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.';
        return;
    }
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    document.getElementById('errorMessage').innerText = '';
}

function isValidInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado correctamente');
    }, function(err) {
        alert('Error al copiar el texto: ' + err);
    });
}