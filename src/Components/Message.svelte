<script>
    import {message} from "../Shared/gameEngine";

    $: console.log('message in message container', message);
</script>

{#if $message}
    <div class="message-container">
        <p>{$message}</p>
    </div>
{/if}

<style>
    .message-container {
        height: 30px;
        position: absolute;
        top: 30vh;
    }

    .message-container p {
        background-color: white;
        border-radius: 1px;
        padding: 10px;
        margin: 0;
        color: black;
    }
</style>