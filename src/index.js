import readlineSync from 'readline-sync';

const runGame = (rules, generateRound) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!\n${rules}`);

    let correctAnswers = 0;
    const roundsToWin = 3;

    while (correctAnswers < roundsToWin) {
        const [question, correctAnswer] = generateRound();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question("Your answer: ").trim();

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default runGame;