document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
document.getElementById('copy-btn').addEventListener('click', copyText);

function encryptText() {
    // Função para criptografar o texto
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
    // Função para descriptografar o texto
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
    // Função para copiar o texto para a área de transferência
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    }
