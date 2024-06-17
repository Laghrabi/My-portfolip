const questions = [
    {
        question: "What is Git?",
        answers: [
            { text: "A remote repository platform", correct: false},
            { text: "A nickname for GitHub", correct: false},
            { text: "A programming language", correct: false},
            { text: "A version control system", correct: true},
        ]
    },
    {
        question: "What is the command to get the installed version of Git?",
        answers: [
            { text: "getGitVersion", correct: false},
            { text: "git help version", correct: false},
            { text: "git --version", correct: true},
            { text: "gitVersion", correct: false},
        ]
    },
    {
        question: "Which option should you use to set the default user name for every repository on your computer?",
        answers: [
            { text: "--all", correct: false},
            { text: "--A", correct: false},
            { text: "--global", correct: true},
            { text: "No need to specify, that is the default", correct: false},
        ]
    },
    {
        question: "What is the command to set the user email for the current repository?",
        answers: [
            { text: "git config user.email", correct: true},
            { text: "git email.user", correct: false},
            { text: "git config email", correct: false},
            { text: "git config --email", correct: false},
        ]
    },
    {
        question: "What is the command to get the current status of the Git repository?",
        answers: [
            { text: "--status", correct: true},
            { text: "git status", correct: false},
            { text: "git config --status", correct: false},
            { text: "gitStatus", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

// Get the "Home" link by its ID
const homeLink = document.getElementById('home-link');

// Add click event listener to the "Home" link
homeLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link (i.e., following the href)
    event.preventDefault();

    // Navigate to the home page by setting the window location
    window.location.href = 'quizzes.html';
});


// Get the "Home" link by its ID
const aboutLink = document.getElementById('about-link');

// Add click event listener to the "Home" link
aboutLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link (i.e., following the href)
    event.preventDefault();

    // Navigate to the home page by setting the window location
    window.location.href = 'about.html';
});




  