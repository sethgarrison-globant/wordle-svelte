<script>
  import TileContainer from './components/TileContainer.svelte';
  import Keyboard from './components/Keyboard.svelte';
  import Message from "./Components/Message.svelte";

  import {
    currentRowIndex,
    wordGrid,
    currentTileIndex,
    wordle,
    setMessage,
    resetGame,
    setAttemptedLetter,
  } from "./Shared/gameEngine";

  let isGameOver = false;

  $: wordMap = $wordle.split('').reduce((map, letter) => {
    if (map[letter]) {
      map[letter]++;
    } else (map[letter] = 1)
    return map;
  }, {});

  const submitWord = () => {
    const guess = $wordGrid[$currentRowIndex].map(g => g.letter).join('');
    if (guess.length !== 5) {
      setMessage('Word not long enough!');
    } else {
      setLetterStates();
      if ($wordle.toUpperCase() === guess) {
        setMessage('Magnificent!');
        isGameOver = true;
      } else {
        if ($currentRowIndex >= 5) {
          setMessage('Game Over');
          isGameOver = true;
        }
        if ($currentRowIndex < 5) {
          $currentRowIndex++;
          $currentTileIndex = 0;
        }
      }
    }
  }

  const setLetterStates = () => {
    const guess = $wordGrid[$currentRowIndex].map((tile, index) => {
      let classString;
      if (tile.letter === $wordle[index].toUpperCase()) {
        classString = 'green-overlay';
        setAttemptedLetter(tile.letter, classString);
      } else if (wordMap[tile.letter.toLowerCase()]) {
        classString = 'yellow-overlay'
        setAttemptedLetter(tile.letter, classString)
      } else {
        setAttemptedLetter(tile.letter, 'black-overlay')
      }
      return {letter: tile.letter, class: classString}
    })
    $wordGrid[$currentRowIndex] = [...guess];
  }

  function deleteLetter() {
    if ($currentTileIndex > 0) {
      $currentTileIndex--;
      $wordGrid[$currentRowIndex][$currentTileIndex].letter = '';
    }
  }

  function selectKey({detail}) {
    if (detail === 'DELETE') {
      deleteLetter()
    } else if (detail === 'ENTER') {
      submitWord();
    } else {
      addLetter(detail);
    }
  }

  function restartGame() {
    isGameOver = false;
    resetGame();
  }

  export const addLetter = (letter) => {
    if ($currentTileIndex < 5 && $currentRowIndex < 6) {
      $wordGrid[$currentRowIndex][$currentTileIndex].letter = letter;
    }
    $currentTileIndex++;
  }

</script>

<div class="game-container">
    <div class="title-container">
        <h1>Wordle</h1>
    </div>
    {#if (isGameOver)}
        <button on:click={restartGame}>Restart Game!!</button>
    {/if}
    <TileContainer wordGrid={$wordGrid}/>
    <Keyboard on:selectKey={selectKey}/>
    <Message />
</div>

<style>
    :global(*) {
        color: #ffffff;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }

    :global(body) {
        background-color: #121213;
    }

    .game-container {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .title-container {
        text-align: center;
        width: 510px;
        border-bottom: solid 1px #3a3a3c;
    }
</style>