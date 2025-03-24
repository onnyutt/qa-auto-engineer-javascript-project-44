#!/usr/bin/env node
import runGame from '../src/index.js';

export const isEvenGame = (num) => num % 2 === 0;

const generateRound = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEvenGame(number) ? "yes" : "no";
    return [number.toString(), correctAnswer];
};

const rules = "Answer \"yes\" if the number is even, otherwise answer \"no\".";
runGame(rules, generateRound);