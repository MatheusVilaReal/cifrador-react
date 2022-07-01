export {strCipher, strDecipher}

function strCipher(str, shift){
    
    str = sanitizeStr(str)          // Tira acentos e caracteres 
                                    // suplementares unicode
    let cipheredStr = ''            // String cifrada de retorno

    for(let i = 0; i < str.length; i++){
        // Percorre string em busca de caracteres alfabéticos
        let char = str.charCodeAt(i)
        
        if(str[i].match(/[A-Za-z]/g)){
            
            char = (char <= 90)?    // char é letra minúscula?
            (char - 65 + shift) % 26 + 65 :
            (char - 97 + shift) % 26 + 97
        }

        cipheredStr += String.fromCharCode(char)
    }

    return cipheredStr
}

function strDecipher(str, shift){
 
    return strCipher(str, 26 - shift)
}

/* Código feio abaixo */
function sanitizeStr(str){
    
    str = str.replace(/[\u00C0-\u00C6]/g, 'A')      // À-Ä
    str = str.replace(/[\u00E0-\u00E6]/g, 'a')      // à-ä
    str = str.replace(/[\u00C7]/g, 'C')             // Ç
    str = str.replace(/[\u00E7]/g, 'c')             // ç
    str = str.replace(/[\u00C8-\u00CB]/g, 'E')      // È-Ë
    str = str.replace(/[\u00E8-\u00EB]/g, 'e')      // è-ë
    str = str.replace(/[\u00CC-\u00CF]/g, 'I')      // Ì-Ï
    str = str.replace(/[\u00EC-\u00EF]/g, 'i')      // ì-ï
    str = str.replace(/[\u00D0]/g, 'D')             // Ð
    str = str.replace(/[\u00F0]/g, 'd')             // ð
    str = str.replace(/[\u00D1]/g, 'N')             // Ñ
    str = str.replace(/[\u00F1]/g, 'n')             // ñ
    str = str.replace(/[\u00D2-\u00D8]/g, 'O')      // Ò-Ø
    str = str.replace(/[\u00F2-\u00F8]/g, 'o')      // ò-ø
    str = str.replace(/[\u00D9-\u00DC]/g, 'U')      // Ù-Ü
    str = str.replace(/[\u00F9-\u00FC]/g, 'u')      // ù-ü
    str = str.replace(/[\u00DD]/g, 'Y')             // Ý
    str = str.replace(/[\u00FD]/g, 'y')             // ý

    return str
}