const Angle = document.querySelectorAll('.Angle')
console.log(Angle)

const button = document.querySelector('#button')
const message = document.querySelector('#message')
console.log(button)
console.log(message)

function displayMessage(msg){
    console.log("displayMessage " + msg)
    message.innerHTML = msg
}

function addAngles(Angle1,Angle2,Angle3){
    const sumAngles = Angle1+Angle2+Angle3
    return sumAngles
}

function isTriangle(){
    const SumOfAngles = addAngles(Number(Angle[0].value),Number(Angle[1].value),Number(Angle[2].value))
    if(SumOfAngles === 180 && Number(Angle[0].value) !== 0 && Number(Angle[1].value) !== 0 && Number(Angle[2].value) !== 0){
        displayMessage('Wohoo,the angles form a triangle')
    }else{
        displayMessage("oh! no, the angles doesn't form a triangle")
    }
}

button.addEventListener('click',isTriangle)
