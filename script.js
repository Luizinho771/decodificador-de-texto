
const shift = 5;

function criptografar(){
    let text = document.getElementById("secretMessage").value;
    //console.log(text);
    document.getElementById("text-output").innerHTML = cipher(text);
}

function descriptografar(){
}

function cipher(text){
    //Caesar cipher
    let textCipher = "";
    for(let i = 0; i < text.length; i++){
        const char = text.charCodeAt(i);
        // Only shift alphabetic characters
        if (char >= 65 && char <= 90) { // Uppercase A-Z
            textCipher += String.fromCharCode((char - 65 + shift) % 26 + 65);
        } else if (char >= 97 && char <= 122) { // Lowercase a-z
            textCipher += String.fromCharCode((char - 97 + shift) % 26 + 97);
        } else {
            textCipher += text[i]; // Non-alphabetic characters remain unchanged
        }
    }
    //console.log(textCipher);
    return textCipher;
}