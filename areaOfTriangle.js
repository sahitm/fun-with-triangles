const input = document.querySelectorAll('.input')
const area = document.querySelector('#area')
const message = document.querySelector('.message')



function Area(a,b,c){
    const s = (a+b+c)/2
    console.log(s)
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

function calcArea(){
    console.log(input[0].value,input[1].value,input[2].value)
    if(input[0].value && input[1].value && input[2].value >= 0){
        const area = Area(Number(input[0].value) , Number(input[1].value)  , Number(input[2].value) )
        message.innerHTML = `The area of triangle is ${area}`
    }else{
        message.innerHTML = `Invalid Data or values must be greater than zero`
    }

}

area.addEventListener('click',calcArea)