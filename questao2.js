
let frase = prompt("Digite um frase qualquer:");
document.write("Frase com vogais: " + pintaVogais(frase));

function pintaVogais(frase) {
    let array = frase.split('');

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
            array[i] = '<b>' + array[i] + '</b>';
        }
    }

    return array.join('');
}