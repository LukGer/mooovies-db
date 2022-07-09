<script lang="ts">
	import type { IMovie } from '$lib/interfaces/MovieInterfaces';
	import VoteCount from '$lib/components/VoteCount.svelte';
	import { goto } from "$app/navigation";

	export let movie: IMovie;

	function posterClicked() {
		goto("/movies/" + movie.id);
	}

</script>

<svelte:head>
	<title>Mooooovies - DB</title>
</svelte:head>

<div class="card">
	<img class="movie-img" src={'https://image.tmdb.org./t/p/w500' + movie.poster_path} alt="movie" on:click={posterClicked} />
	<h2 class="movie-title">{movie.title}</h2>
	<div class="movie-subtitle-container">
		<p class="movie-release-date">{new Date(movie.release_date).toLocaleDateString()}</p>
		<VoteCount vote={movie.vote_average} />
	</div>
</div>

<style>
	.card {
		width: 20rem;
		display: flex;
		flex-direction: column;
	}

	.movie-img {
		cursor: pointer;
		width: 100%;
		height: 55vh;
		object-fit: cover;
		border-radius: 2rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		transition: transform 0.2s ease-in-out;
	}

	.movie-img:hover {
		transform: scale(1.05);
		z-index: 10;
	}

	.movie-title {
		margin-top: 0.8rem;
		font-size: 1.25rem;
	}

	.movie-subtitle-container {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.movie-release-date {
		font-size: 0.85rem;
		font-weight: bold;
	}
</style>
