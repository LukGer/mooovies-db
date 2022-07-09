<script lang="ts">
    export let vote: number;
</script>

<div class="vote-container">
    <p class="vote">{vote}</p>
</div>

<style>
    .vote-container {
        padding: 0.3rem 0.5rem;
        background: #8B0000;
        border-radius: 0.5rem;
    }

    .vote {
        color: white;
        font-size: 0.8rem;
    }
</style>