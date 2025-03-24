#!/usr/bin/env node

import runGame from '../src/index.js';

export const isGCDGame = (a, b) => (b === 0 ? a : isGCDGame(b, a % b));

export const generateRound = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = isGCDGame(num1, num2).toString();
    return [question, correctAnswer];
};

const rules = "Find the greatest common divisor of given numbers.";

runGame(rules, generateRound);