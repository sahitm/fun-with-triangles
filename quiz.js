const quizform = document.querySelector('.quizform')
const SubmitAnswers = document.querySelector('#SubmitAnswers')
const message = document.querySelector('#message')


const answers = ["90°","right angled",'one right angle','12, 16, 20','Equilateral triangle','100° ','10°','a + b + c','two','45°']

function checkScores(e){

    e.preventDefault()

    let score = 0
    let index = 0

    let formResult = new FormData(quizform)
    console.log(formResult)
    for(let value of formResult.values()){
        if(value == answers[index]){
            score += 1
        }
        index += 1
    }
    message.innerHTML = 'Your score is: ' + score
}

SubmitAnswers.addEventListener('click',checkScores)