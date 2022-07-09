const BASE_URL: string = 'https://api.themoviedb.org/3';
const apiKey = 'c5a358c0c88293d6bc66693a6bc1dd6e';

export async function get({ params }) {
	const id = params.id;

	const completeUrl = BASE_URL + `/movie/${id}?language=de&api_key=${apiKey}`;

	const res = await fetch(completeUrl);

	const movie = await res.json();

	if (!movie) {
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
			movie
		}
	};
}
