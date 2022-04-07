<script>
    export let wordGrid =  [];
</script>

<div class="tile-container">
    {#each wordGrid as rows}
        <div>
            {#each rows as slot, index}
                <div class="tile {slot.class}">{slot.letter || ''}</div>
            {/each}
        </div>
    {/each}
</div>

<style>
    /*TILES*/
    .tile-container {
        width: 330px;
        margin-bottom: 30px;
    }

    .tile-container div {
        display: flex;
    }

    .tile-container .tile {
        width: 62px;
        height: 62px;
        border: 2px solid#3a3a3c;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2px;
    }

    .grey-overlay {
        background-color: #3a3a3c !important;
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
