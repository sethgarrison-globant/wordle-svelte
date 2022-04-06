import {writable} from "svelte/store";

const initialWordGrid = [
  [
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
  ],
  [
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
  ],
  [
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
  ],
  [
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
  ],
  [
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
  ],
  [
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
    {letter: ''},
  ],
];

export const wordGrid = writable(initialWordGrid);
