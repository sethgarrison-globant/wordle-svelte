<script>
    import KEYS from "../Shared/keyboard";
    import {createEventDispatcher} from 'svelte';
    import {letterStates} from "../Shared/gameEngine";

    const dispatch = createEventDispatcher();

    document.addEventListener('keydown', ({key}) => {
      const upperCase = key.toUpperCase();
      if (KEYS.includes(upperCase) || upperCase === 'ENTER') {
        dispatch('selectKey', upperCase);
      } else if (upperCase === 'BACKSPACE') {
        dispatch('selectKey', 'DELETE');
      }
    })
</script>

<div class="key-container">
    {#each KEYS as key, index}
        <button
                class="{$letterStates[key]}"
                on:click={() => dispatch('selectKey', key)}>
            {key}
        </button>
    {/each}
</div>

<style>
    /*	KEYS*/
    .key-container {
        width: 510px;
        display: flex;
        flex-wrap: wrap;
    }

    .key-container button {
        width: 43px;
        height: 58px;
        border-radius: 4px;
        border: none;
        background-color: #818384;
        margin: 4px;
    }

    .key-container button:nth-child(11) {
        margin-left: 30px;
    }

    .key-container button:nth-child(20),
    .key-container button:nth-child(28) {
        width: 68px;
    }

    .black-overlay {
        background-color: #4f4f54 !important;
        color: white;
        border:none !important;
    }
    .yellow-overlay {
        background-color: #b59f3a !important;
        border:none !important;
    }

    .green-overlay {
        background-color: #538d4e !important;
        border:none !important;
    }
</style>