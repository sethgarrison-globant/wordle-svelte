<script>
    import KEYS from "../Shared/keyboard";
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<div class="key-container">
    {#each KEYS as key, index}
        <button on:click={() => dispatch('selectKey', key)}>{key}</button>
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
</style>