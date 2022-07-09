const BASE_URL: string = 'https://api.themoviedb.org/3';

export async function get() {
	const apiKey = 'c5a358c0c88293d6bc66693a6bc1dd6e';

	const completeUrl = BASE_URL + '/movie/popular?language=de&api_key=' + apiKey;

	const res = await fetch(completeUrl);

	const movies = await res.json();

	if (!movies) {
		return {
			status: 400
		};
	}

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			movies: movies.results
		}
	};
}
