const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('copy')
const numberEL = document.getElementById('number')
const lowercaseEL = document.getElementById('lower')
const uppercaseEL = document.getElementById('upper')
const symbolEL = document.getElementById('symbol')
const lenghtEL = document.getElementById('length')
const outputEL = document.getElementById('output')


let passwordlength = 10

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLower(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUpper(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function getPassword(){
    let password = ''

    if(lowercaseEL.checked){
        password += getLower()
    }
    if(uppercaseEL.checked){
        password += getUpper()
    }
    if(symbolEL.checked){
        password += getSymbol()
    }
    if(numberEL.checked){
        password += getNumber()
    }



    if(password === ''){
        return ''
    }

    return password[Math.floor(Math.random() * password.length)]
}




generateBtn.addEventListener('click', () =>{


    passwordlength = lenghtEL.value
    let password = ''
   
    for(let i = 0; i < passwordlength; i++){
        password += getPassword()
    }
    if(password != ''){
       outputEL.innerHTML = password
    }
})

copyBtn.addEventListener('click', async () => {

    await  navigator.clipboard.writeText(outputEL.innerHTML);
    alert('Copied to Clipboard:')

})