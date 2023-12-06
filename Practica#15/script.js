function esVocal(caracter){
    return /^[aeiouAEIOU]$/.test(caracter);
}

function checkVowel(){
    const characterInput = document.getElementById('character');

    const character = characterInput.value;

    const resultElement = document.getElementById('result');

    if (esVocal(character)) {
        resultElement.textContent = `El caracter '${character}' es  una vocal`;
    } else {
        resultElement.textContent = `El caracter '${character}' no es una vocal`;
    }
}