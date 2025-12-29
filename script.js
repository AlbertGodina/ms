// Inicialitzar l'aplicació
window.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicació de física carregada! 🚀');
    
    // Elements del DOM
    const startScreen = document.getElementById('start-screen');
    const practiceScreen = document.getElementById('practice-screen');
    const examScreen = document.getElementById('exam-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    const practiceBtnStart = document.getElementById('practice-btn');
    const examBtnStart = document.getElementById('exam-btn');
    const practiceBackBtn = document.getElementById('practice-back');
    const practiceNextBtn = document.getElementById('practice-next');
    const examPrevBtn = document.getElementById('exam-prev');
    const examNextBtn = document.getElementById('exam-next');
    const restartBtn = document.getElementById('restart-btn');
    
    // Variables per als modes
    let currentMode = null;
    let currentQuestion = null;
    let currentQuestionIndex = 0;
    let examQuestions = [];
    let userAnswers = [];

    // Funcions principals
    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    function goToStart() {
        showScreen(startScreen);
        currentMode = null;
        currentQuestion = null;
        currentQuestionIndex = 0;
        examQuestions = [];
        userAnswers = [];
    }

    function startPracticeMode() {
        console.log('Iniciant mode pràctica...');
        currentMode = 'practice';
        showScreen(practiceScreen);
        loadNextPracticeQuestion();
    }

    function startExamMode() {
        console.log('Iniciant mode examen...');
        currentMode = 'exam';
        examQuestions = getRandomQuestions(5);
        userAnswers = new Array(5).fill(null);
        currentQuestionIndex = 0;
        showScreen(examScreen);
        loadExamQuestion();
    }

    function loadNextPracticeQuestion() {
        // Obtenir una pregunta aleatòria
        currentQuestion = getRandomQuestions(1)[0];
        
        // Actualitzar la pregunta
        document.getElementById('practice-question').textContent = currentQuestion.question;
        
        // Crear les opcions
        const optionsContainer = document.getElementById('practice-options');
        optionsContainer.innerHTML = '';
        
        currentQuestion.options.forEach((option, index) => {
            const optionElement = createOptionElement(option, index, 'practice');
            optionsContainer.appendChild(optionElement);
        });
        
        // Amagar feedback i botó següent
        document.getElementById('practice-feedback').classList.remove('show');
        practiceNextBtn.style.display = 'none';
        
        // Actualitzar barra de progrés
        document.querySelector('#practice-screen .progress-fill').style.width = '0%';
    }

    function loadExamQuestion() {
        const question = examQuestions[currentQuestionIndex];
        
        // Actualitzar número de pregunta
        document.getElementById('exam-question-number').textContent = 
            `Pregunta ${currentQuestionIndex + 1} de 5`;
        
        // Actualitzar pregunta
        document.getElementById('exam-question').textContent = question.question;
        
        // Crear opcions
        const optionsContainer = document.getElementById('exam-options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = createOptionElement(option, index, 'exam');
            
            // Si ja hi ha una resposta guardada, marcar-la
            if (userAnswers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Actualitzar botons de navegació
        examPrevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
        examNextBtn.textContent = currentQuestionIndex === 4 ? 'Finalitzar' : 'Següent';
        
        // Actualitzar barra de progrés
        const progress = ((currentQuestionIndex + 1) / 5) * 100;
        document.getElementById('exam-progress').style.width = `${progress}%`;
    }

    function createOptionElement(text, index, mode) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        
        optionDiv.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span class="option-text">${text}</span>
        `;
        
        optionDiv.addEventListener('click', () => handleOptionClick(index, mode));
        
        return optionDiv;
    }

    function handleOptionClick(selectedIndex, mode) {
        if (mode === 'practice') {
            handlePracticeAnswer(selectedIndex);
        } else if (mode === 'exam') {
            handleExamAnswer(selectedIndex);
        }
    }

    function handlePracticeAnswer(selectedIndex) {
        const optionsContainer = document.getElementById('practice-options');
        const options = optionsContainer.querySelectorAll('.option');
        
        // Deshabilitar totes les opcions
        options.forEach(opt => opt.classList.add('disabled'));
        
        // Marcar la resposta seleccionada
        options[selectedIndex].classList.add('selected');
        
        // Marcar la resposta correcta
        options[currentQuestion.correct].classList.add('correct');
        
        // Si la resposta és incorrecta, marcar-la
        if (selectedIndex !== currentQuestion.correct) {
            options[selectedIndex].classList.add('incorrect');
        }
        
        // Mostrar feedback
        const feedbackDiv = document.getElementById('practice-feedback');
        const isCorrect = selectedIndex === currentQuestion.correct;
        
        feedbackDiv.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');
        feedbackDiv.innerHTML = `
            <div class="feedback-title">${isCorrect ? '✓ Correcte!' : '✗ Incorrecte'}</div>
            <div class="feedback-text">${currentQuestion.explanation}</div>
        `;
        
        // Mostrar botó següent
        practiceNextBtn.style.display = 'block';
        
        // Actualitzar barra de progrés
        document.querySelector('#practice-screen .progress-fill').style.width = '100%';
    }

    function handleExamAnswer(selectedIndex) {
        const optionsContainer = document.getElementById('exam-options');
        const options = optionsContainer.querySelectorAll('.option');
        
        // Treure la selecció anterior
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Marcar la nova selecció
        options[selectedIndex].classList.add('selected');
        
        // Guardar la resposta
        userAnswers[currentQuestionIndex] = selectedIndex;
    }

    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadExamQuestion();
        }
    }

    function goToNextQuestion() {
        if (currentQuestionIndex < 4) {
            currentQuestionIndex++;
            loadExamQuestion();
        } else {
            // Finalitzar l'examen
            showResults();
        }
    }

    function showResults() {
        showScreen(resultsScreen);
        
        // Calcular resultats
        let correctCount = 0;
        examQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correct) {
                correctCount++;
            }
        });
        
        // Mostrar puntuació
        document.getElementById('score-display').textContent = `${correctCount} / 5`;
        
        // Mostrar llista de resultats
        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = '';
        
        examQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            const userAnswerText = userAnswer !== null 
                ? question.options[userAnswer] 
                : 'No s\'ha respost';
            
            resultItem.innerHTML = `
                <div class="result-question">
                    ${index + 1}. ${question.question}
                </div>
                <div class="result-answer">
                    <strong>La teva resposta:</strong> ${userAnswerText}
                </div>
                ${!isCorrect ? `
                    <div class="result-answer">
                        <strong>Resposta correcta:</strong> ${question.options[question.correct]}
                    </div>
                ` : ''}
                <div class="result-explanation">
                    ${question.explanation}
                </div>
            `;
            
            resultsList.appendChild(resultItem);
        });
    }
    
    // Event Listeners - afegir després de definir les funcions
    practiceBtnStart.addEventListener('click', startPracticeMode);
    examBtnStart.addEventListener('click', startExamMode);
    practiceBackBtn.addEventListener('click', goToStart);
    practiceNextBtn.addEventListener('click', loadNextPracticeQuestion);
    examPrevBtn.addEventListener('click', goToPreviousQuestion);
    examNextBtn.addEventListener('click', goToNextQuestion);
    restartBtn.addEventListener('click', goToStart);
    
    console.log('Event listeners configurats correctament! ✓');
});
