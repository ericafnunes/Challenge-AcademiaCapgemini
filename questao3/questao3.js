const entrada = require("fs").readFileSync("stdin", "utf8");

let contador = 0
let substring = ''
let isAnagram = false

for (let aux = 0; aux < entrada.length; aux++) {
    for (let i = 0; i < entrada.length; i++) {
        substring = entrada.substr(i, aux + 1).trim();
        let substring2 = ''
        for(let j = i+1; j <= entrada.length; j++){
            substring2 = entrada.substr(j, aux + 1).trim()
            let array1 = substring.split('')
            let array2 = substring2.split('')
            array1 = array1.sort()
            array2 = array2.sort()
            substring = array1.join('')
            substring2 = array2.join('')
            
            if (substring === substring2) {
                isAnagram = true
                contador++
            } else {
                isAnagram = false
            }
    
        }
    }
}

console.log(contador)