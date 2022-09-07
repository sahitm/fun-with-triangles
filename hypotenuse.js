const input = document.querySelectorAll('.input')
const hypotenuse = document.querySelector('#hypotenuse')
const message = document.querySelector('.message')

function handleHypo(a,b){
    return Math.sqrt(a*a + b*b)
}

function calcHypotenuse(){
    if(input[0].value && input[1].value >= 0){
        const Hypo = handleHypo(input[0].value, input[1].value)
        message.innerHTML = `The length of hypotenuse is ${Hypo}`
    }else{
        message.innerHTML = `Invalid Data or values must be greater than zero`
    }

}

hypotenuse.addEventListener('click',calcHypotenuse)