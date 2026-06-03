const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: "CSS"
    },
    {
        question: "Which language is used to make websites interactive?",
        options: ["Java", "JavaScript", "C++", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Google", "Netscape", "Apple"],
        answer: "Netscape"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
    const current = quizData[currentQuestion];

    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
    selectedAnswer = "";

    current.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");

        btn.addEventListener("click", () => {
            document.querySelectorAll(".option-btn")
                .forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");
            selectedAnswer = option;
        });

        optionsEl.appendChild(btn);
    });

    nextBtn.textContent =
        currentQuestion === quizData.length - 1
        ? "Submit"
        : "Next";
}

nextBtn.addEventListener("click", () => {
    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizEl.classList.add("hidden");
        resultEl.classList.remove("hidden");
        scoreEl.textContent = `${score} / ${quizData.length}`;
    }
});

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;

    resultEl.classList.add("hidden");
    quizEl.classList.remove("hidden");

    loadQuestion();
});

loadQuestion();
