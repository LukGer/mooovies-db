<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let movies: any[];
</script>

<div class="page">
	<div class="list">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>

<style>
	.page {
		padding: 2rem 10rem;
	}

	.list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		column-gap: 3rem;
		row-gap: 2rem;
	}
</style>
