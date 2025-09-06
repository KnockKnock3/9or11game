const questions = [

    // Geo-politial questions
    { question: "How many countries share a border with Germany?", answer: 9 },
    { question: "How many stripes are on the Greek flag?", answer: 9 },
    { question: "What is the population of Paris's urban area?", answer: 11 },
    { question: "How many provinces in North Korea?", answer: 9 },
    { question: "How many inhabited islands does Cape Verde have?", answer: 9 },
    { question: "How many time zones is the US and its dependencies divided into?", answer: 9 },
    { question: "How long is the Turkey-Azerbaijan border (miles)?", answer: 11 },

    // Navy questions
    { question: "How many submarines does the Royal Navy operate?", answer: 9 },
    { question: "What was the caliber of the Scharnhorst-class battleships main armament (inches)?", answer: 11},
    { question: "How many battlecruisers did the Royal Navy have during the Battle of Jutland?", answer: 9 },
    { question: "How many ships did the USA lose during the Battle of Leyte Gulf?", answer: 11 },
    { question: "How many aircraft carriers does the US Navy operate?", answer: 11 },

    // Viaduct questions
    { question: "The Welland Valley Viaduct is _66m long", answer: 11 },
    { question: "How many millon bricks were use to construct the Ouse Valley Viaduct?", answer: 11 },
    { question: "In what year was the Welland Valley Viaducts passange service resumed? (2000s)", answer: 9 },

    // History questions
    { question: "In what century was gunpowder discovered?", answer: 9 },
    { question: "Which apollo mission did Michael Collins fly?", answer: 11 },
    { question: "How many major crusades were there?", answer: 9 },
    { question: "Which article of Monaco's constitution sets the state religion?", answer: 9 },
    { question: "How many children did Oliver Cromwell have?", answer: 9 },
    { question: "How many states made up the Confederate States of America?", answer: 11 },
    { question: "How many months did the Berlin Blockade last?", answer: 11 },
    { question: "In what century did Duncan I rule Scotland?", answer: 11 },

    // Bible questions?
    { question: "According to Mark, on what hour of the morning was Christ crucified?", answer: 9 },
    { question: "How many disciples were present at The Great Commission?", answer: 11 },
    { question: "How many circles is hell depicted as in Dante's inferno?", answer: 9 },

    // Random
    { question: "Which iOS versions added the Files app?", answer: 11 },
    { question: "What is the Chancellor of the Exchequer's house number?", answer: 11 },
    { question: "Which caliber does the Glock 19 use (mm)?", answer: 9 },
    { question: "What is the number of the motorway that links Cambridge to London?", answer: 11 },

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