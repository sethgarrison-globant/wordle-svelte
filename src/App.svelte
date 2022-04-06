<script>
  import TileContainer from './components/TileContainer.svelte';
  import Keyboard from './components/Keyboard.svelte';

  const wordGrid = [
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

  const onKeySelected = ({detail}) => {
    console.log(detail)
  }

</script>

<div class="game-container">
    <div class="title-container">
        <h1>Wordle</h1>
    </div>
    <TileContainer wordGrid={wordGrid}/>
    <Keyboard on:selectKey={onKeySelected}/>
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