// Questions, answers, presented in array of objects
//Questions are taken from https://onlineexammaker.com/kb/30-beauty-quiz-questions-and-answers/

const possibleQuestions = [
    {
        question: 'What is beauty?',
        answer1: 'A physical appearance only',
        answer2: 'A combination of qualities that evoke a pleasing response',
        answer3: 'A concept that is objective and universal',
        answer4: 'A superficial characteristic with no deeper meaning',
        correctAnswer: 'A combination of qualities that evoke a pleasing response',
    },
    {
        question: 'What is the subjectivity of beauty?',
        answer1: 'The universality of beauty standards',
        answer2: 'The cultural perception of beauty',
        answer3: 'The objective nature of beauty',
        answer4: 'The personal and varied perception of beauty by individuals',
        correctAnswer: 'The personal and varied perception of beauty by individuals',
    },

    {
        question: 'Inner beauty refers to:',
        answer1: 'Physical attractiveness',
        answer2: 'Qualities that go beyond physical appearance',
        answer3: 'Artificial enhancements of appearance',
        answer4: 'Superficial charm and manners',
        correctAnswer: 'Qualities that go beyond physical appearance',
    },

    {
        question: 'Beauty in nature can be found in:',
        answer1: 'Human-made structures',
        answer2: 'Music and literature',
        answer3: 'Breathtaking landscapes and sunsets',
        answer4: 'Paintings and sculptures',
        correctAnswer: 'Breathtaking landscapes and sunsets',
    },

    {
        question: 'The appreciation of beauty in art is?',
        answer1: 'Objective and universal',
        answer2: 'Subjective and varies among individuals',
        answer3: 'Dictated by cultural norms',
        answer4: 'Limited to specific art forms',
        correctAnswer: 'Subjective and varies among individuals',
    },

    {
        question: 'Beauty as a source of inspiration can drive:',
        answer1: 'Negative emotions',
        answer2: 'Innovation and creativity',
        answer3: 'A desire to imitate others',
        answer4: 'Materialistic pursuits',
        correctAnswer: 'Innovation and creativity',
    },

    {
        question: 'What is the concept of beauty often influenced by?',
        answer1: 'Societal norms and cultural upbringing',
        answer2: 'Genetics and DNA',
        answer3: 'Astrological signs',
        answer4: 'Marital status',
        correctAnswer: 'Societal norms and cultural upbringing',
    },

    {
        question: 'The pursuit of beauty has contributed to advancements in:',
        answer1: 'Sports and athleticism',
        answer2: 'Art, design, and technology',
        answer3: 'Philosophy and politics',
        answer4: 'Religion and spirituality',
        correctAnswer: 'Art, design, and technology',
    },

    {
        question: 'What impact can societal emphasis on external beauty have?',
        answer1: 'It can lead to discrimination based on appearance',
        answer2: 'It promotes body positivity and self-acceptance',
        answer3: 'It enforces uniform beauty standards across cultures',
        answer4: 'It discourages artistic expression',
        correctAnswer: 'It can lead to discrimination based on appearance',
    },

    {
        question: 'What is the term for the qualities that go beyond physical appearance and are often associated with inner beauty?',
        answer1: 'Extrinsic qualities',
        answer2: 'Superficial traits',
        answer3: 'Intrinsic qualities',
        answer4: 'Aesthetic features',
        correctAnswer: 'Intrinsic qualities',
    },

    {
        question: 'Beauty is a concept that varies across cultures and time periods. This variability makes beauty:',
        answer1: 'Objective',
        answer2: 'Universal',
        answer3: 'Subjective',
        answer4: 'Intrinsic',
        correctAnswer: 'Subjective',
    },

    {
        question: 'What role does beauty play in inspiring creativity and innovation?',
        answer1: 'It encourages conformity and following existing norms',
        answer2: 'It can lead to complacency and lack of motivation',
        answer3: 'It motivates individuals to create something aesthetically pleasing',
        answer4: 'It has no impact on creativity and innovation',
        correctAnswer: 'It motivates individuals to create something aesthetically pleasing',
    },

    {
        question: 'Beauty can be found in which of the following?',
        answer1: 'Human behavior and actions',
        answer2: 'Artificial intelligence',
        answer3: 'Geometrical shapes only',
        answer4: 'Dark and gloomy places',
        correctAnswer: 'Human behavior and actions',
    },

    {
        question: 'What is the impact of beauty on emotional well-being?',
        answer1: 'It has no impact on emotions',
        answer2: 'It can evoke positive emotions such as joy and admiration',
        answer3: 'It can only evoke negative emotions such as jealousy',
        answer4: 'It leads to emotional detachment',
        correctAnswer: 'It can evoke positive emotions such as joy and admiration',
    },

    {
        question: 'What does the term “subjectivity of beauty” mean?',
        answer1: 'Beauty is the same for everyone',
        answer2: 'Beauty is different for each individual',
        answer3: 'Beauty is a fixed concept',
        answer4: 'Beauty has no value',
        correctAnswer: 'Beauty is different for each individual',
    },

    {
        question: 'What can contribute to the formation of beauty standards in society?',
        answer1: 'Individual preferences only',
        answer2: 'Cultural norms and media influences',
        answer3: 'Political ideologies',
        answer4: 'Economic factors',
        correctAnswer: 'Cultural norms and media influences',
    },

    {
        question: 'Which of the following is an example of physical beauty?',
        answer1: 'Kindness and compassion',
        answer2: 'Facial symmetry and clear skin',
        answer3: 'Intelligence and creativity',
        answer4: 'Artistic talents',
        correctAnswer: 'Facial symmetry and clear skin',
    },
];

// Accessing HTML elements
const questionTextElement = document.getElementById('questiontext');
const answersListElement = document.getElementById('answers');
const progressBarElement = document.getElementById('progressbar');
const questionNumberElement = document.getElementById('questionnumber');
const nextButton = document.getElementById('nextbutton');

// Variables
const totalQuestions = 7;
let displayedQuestions = [];
let userAnswers = [];
let correctAnswersCount = 0;
let currentQuestionIndex = 0;

// Function to shuffle array using Durstenfeld shuffle algorithm;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
// Function to shuffle array using Durstenfeld shuffle algorithm
/* Title: How to randomize (shuffle) a JavaScript array?
Author: Laurens Holst
Site owner/sponcor: stackoverflow.com
Date: March, 15 2010
Edited: September, 28 2012
Availability: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
Accessed: November, 25 2023
Modified: Yes. The variable type was changed from var to const
*************************************************************
function shuffleArray(array) {
//more code
//End of non-original code
*/
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// Function starting the quiz
function startQuiz() {
    shuffleArray(possibleQuestions);
    displayQuestion();
}

// Function to display a question
function displayQuestion() {
    const currentQuestion = possibleQuestions[currentQuestionIndex];
    questionTextElement.innerHTML = `<p>${currentQuestion.question}</p>`;
    displayedQuestions.push(currentQuestion);
    // Clearing previous answers
    answersListElement.innerHTML = '';

    // Display answers
    for (let i = 1; i <= 4; i++) {
        const answerKey = 'answer' + i;
        const answerText = currentQuestion[answerKey];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<p>${answerText}</p>`;
        answersListElement.appendChild(listItem);
    }

    // Update progress bar and question number
    progressBarElement.innerHTML = `<p>Question ${currentQuestionIndex + 1}/${totalQuestions}</p>`;
    questionNumberElement.innerHTML = `<p>${currentQuestionIndex + 1}</p>`;

    // Function for answer selection
    function selectAnswer(selectedIndex) {
        // Clearing previous selection and remove bold style
        const previousSelection = answersListElement.querySelector('.selected');
        if (previousSelection) {
            previousSelection.classList.remove('selected');
            previousSelection.classList.remove('boldtext');
            userAnswers.push(selectedIndex);
        }

        // Highlighting selected answer and make it bold with changing color
        const selectedAnswer = answersListElement.children[selectedIndex];
        selectedAnswer.classList.add('selected');
        selectedAnswer.classList.add('boldtext');

        // Saving the answer of the user
        userAnswers[currentQuestionIndex] = selectedIndex;
    }

    //Setting timer for 30 seconds
    let count = 30;
    let redirection = "beautyquiz.html";
    let timer;

    function startCountingdown() {
        var timerElement = document.getElementById("timer");
        function updateTimer() {
            if (count > 0) {
                count--;
                timerElement.innerHTML = "This page will redirect in " + count + " seconds.";
                timer = setTimeout(updateTimer, 1000);
            } else {
                window.location.href = redirection;
            }
        }
        updateTimer();
    }

    // Event listeners
    document.addEventListener("DOMContentLoaded", startCountingdown);
    window.addEventListener('DOMContentLoaded', startQuiz);