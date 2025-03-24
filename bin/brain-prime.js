#!/usr/bin/env node

import runGame from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrimeGame = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const generateRound = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrimeGame(number) ? 'yes' : 'no';
    return [number, correctAnswer];
};

runGame(rules, generateRound);