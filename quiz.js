function calculateScore() {
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'd',
        q5: 'b'
    };
    let score = 0;
    const form = document.getElementById('quizForm');
    for (let question in answers) {
        const userAnswer = form[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }
    document.getElementById('score').innerText = score + '/5';
    document.getElementById('result').style.display = 'block';
}