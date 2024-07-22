document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.encrypt-btn').addEventListener('click', encryptText);
    document.querySelector('.decrypt-btn').addEventListener('click', decryptText);
    document.querySelector('.copy-btn').addEventListener('click', copyText);
});

function encryptText() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('output-text').value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('output-text').value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
