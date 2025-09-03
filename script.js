const questions = [
    { question: "What is 3 × 3?", answer: 9 },
    { question: "What is the square root of 121?", answer: 11 },
    { question: "How many players are on a football (soccer) team?", answer: 11 },
    { question: "What is 81 ÷ 9?", answer: 9 },
    { question: "What is 5 + 4?", answer: 9 },
    { question: "What is 15 - 4?", answer: 11 },
    { question: "How many sides does a nonagon have?", answer: 9 },
    { question: "What is 99 ÷ 9?", answer: 11 }
];

question_count = 0
questions_correct = 0
questions_total = questions.length

document.getElementById("question_text").innerHTML = questions[question_count].question

function process_answer(answer) {

    if (questions[question_count].answer == answer) {
        questions_correct += 1
    }

    question_count += 1

    if (question_count >= questions_total) {
        document.getElementById("question_text").innerHTML = "End"
        document.getElementById("percentage").innerHTML = Math.round(100 * questions_correct/questions_total) + "%"
        document.getElementById("9_button").style.display = "none"
        document.getElementById("11_button").style.display = "none"
        return
    }

    document.getElementById("question_text").innerHTML = questions[question_count].question
    document.getElementById("question_number").innerHTML = "Question " + (question_count + 1)
    document.getElementById("percentage").innerHTML = Math.round(100 * questions_correct/question_count) + "%"
}

function nine_button_clicked() {
    process_answer(9)
}

function eleven_button_clicked() {
    process_answer(11)
}