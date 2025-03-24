#!/usr/bin/env node
import runGame from '../src/index.js';
import readlineSync from "readline-sync";


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getRandomNum = () => Math.floor((Math.random() * 10) + 6);

const efforts = 3;

export const isEvenGame = (userName) => {
    console.log(description);

    let counter = 0;

    while(counter < efforts) {
        let num = getRandomNum();

        const correctAnswer=  isEven(num) ? 'yes' : 'no';

        console.log(`Question: ${num}`);

        const reply = readlineSync.question('Your answer: ');

        if (reply === correctAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
            return console.log(`${reply} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`)
        }

    }
    console.log(`Congratulations, ${userName}!`)
}

runGame(rules, generateRound);