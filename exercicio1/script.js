let coxinha = prompt('Você aceita uma coxinha?').toUpperCase()
let conta = 0

while(coxinha === 'S'|| coxinha !== 'N'){
    if(coxinha === 'S'){
        conta = conta + 2.50
    }
    coxinha = prompt('Aceita outra coxinha?').toUpperCase()
}

alert(`Sua conta deu ${conta} reais`)
