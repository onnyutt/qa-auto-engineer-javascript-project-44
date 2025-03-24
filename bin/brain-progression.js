#!/usr/bin/env node

import runGame from '../src/index.js';

const rules = "What number is missing in the progression?";

export const isProgGame = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    };
    return progression;
};

const generateRound = () => {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = Math.floor(Math.random() * 6) + 5; // от 5 до 10 чисел

    const progression = isProgGame(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = String(progression[hiddenIndex]);

    progression[hiddenIndex] = "..";

    return [progression.join(" "), correctAnswer];
};

runGame(rules, generateRound);