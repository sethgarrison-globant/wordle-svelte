import { writable } from 'svelte/store';
import WORDS from "./words";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let emptyRow = [
    {letter: '', class: ''},
    {letter: '', class: ''},
    {letter: '', class: ''},
    {letter: '', class: ''},
    {letter: '', class: ''},
  ]
;

const initialLetterState = {
  A: '',
  B: '',
  C: '',
  D: '',
  E: '',
  F: '',
  G: '',
  H: '',
  I: '',
  J: '',
  K: '',
  L: '',
  M: '',
  N: '',
  O: '',
  P: '',
  Q: '',
  R: '',
  S: '',
  T: '',
  U: '',
  V: '',
  W: '',
  X: '',
  Y: '',
  Z: '',
};

export const emptyWordGrid = [
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
]

export const wordle = writable(WORDS[getRandomInt(WORDS.length)]);
export let currentRowIndex = writable(0);
export let currentTileIndex = writable(0);
export const letterStates = writable({...initialLetterState});
export const wordGrid = writable(JSON.parse(JSON.stringify(emptyWordGrid)));
// todo add message and set message functionality

const resetGrid = () => { wordGrid.set(JSON.parse(JSON.stringify(emptyWordGrid))) }

export const resetGame = () => {
  letterStates.set({...initialLetterState});
  currentTileIndex.set(0);
  currentRowIndex.set(0);
  wordle.set(getRandomInt(WORDS.length));
  resetGrid();
}

export const setAttemptedLetter = (newLetter, state) => {
  letterStates.update(states => ({...states, [newLetter]: state}));
}
