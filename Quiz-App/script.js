const quiz = [
    {
        question: 'Which one is the smallest ocean in the World?',
        a:'Indian',
        b:'Pacific',
        c:'Atlantic',
        d:'Arctic',
        answer:'d'
    },
    {
        question:'Which country gifted the ‘Statue of Liberty’ to USA in 1886?',
        a:'France',
        b:'Canada',
        c:'Brazil',
        d:'England',
        answer:'a'
    },
    {
        question:'Dead Sea is located between which two countries?',
        a:'Jordan and Sudan',
        b:'Jordan and Israel',
        c:'Turkey and UAE',
        d:'UAE and Egypt',
        answer:'b'
    },
    {
        question:'In which ocean Bermuda Triangle region is located?',
        a:'Atlantic',
        b:'Indian',
        c:'Pacific',
        d:'Arctic',
        answer:'a'
    },
    {
        question:'Which continent has the highest number of countries?',
        a:'Asia',
        b:'Europe',
        c:'North America',
        d:'Africa',
        answer:'d'
    }
]

const question = document.getElementById('question')
const ans_a = document.getElementById('ans_a')
const ans_b = document.getElementById('ans_b')
const ans_c = document.getElementById('ans_c')
const ans_d = document.getElementById('ans_d')
const submit = document.getElementById('submit')
const quizBox = document.getElementById('quiz-box')

score = 0
currentQ = 0
currentQuestion();

function currentQuestion(){
    question.innerHTML = quiz[currentQ].question
    ans_a.innerHTML = quiz[currentQ].a
    ans_b.innerHTML = quiz[currentQ].b
    ans_c.innerHTML = quiz[currentQ].c
    ans_d.innerHTML = quiz[currentQ].d
}

submit.addEventListener('click', () => {
    
    if(currentQ < quiz.length){
        let choices = document.getElementsByName('ans')
        choices.forEach(choice => {
            if(choice.checked){
                if (choice.value === quiz[currentQ].answer){
                    score++
                }
            }
        });
    }

    currentQ++
    if(currentQ < quiz.length){
        currentQuestion()
    }
    if(currentQ === quiz.length){
        quizBox.innerHTML = `
        <h5>You scored ${score}/${quiz.length}.</h5>
        <button id="reload"> RELOAD </button>`
        reload.addEventListener('click', () => {
            const reload = document.getElementById('reload')
            location.reload()
        })
    }
})







