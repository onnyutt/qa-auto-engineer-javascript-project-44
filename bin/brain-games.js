#!/usr/bin/env node
import { helloUser, name } from "../src/cli.js";
import {isEvenGame} from "./brain-even.js";
import {isCalcGame} from "./brain-calc.js";
import {isGCDGame} from "./brain-gcd.js";
import {isProgGame} from "./brain-progression.js";
import {isPrimeGame} from "./brain-prime.js";
import { run } from "../src/cli.js";


console.log('Welcome to the Brain Games!')
helloUser();
isEvenGame(name);
isCalcGame(name);
isGCDGame(name);
isProgGame(name);
isPrimeGame(name);

run();