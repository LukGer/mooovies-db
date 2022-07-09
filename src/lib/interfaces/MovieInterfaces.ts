export interface IMovie {
    adult: boolean,
    backdrop_path: string;
    budget: number;
    genres: IMovieGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IMovieProductionCompany[];
    production_countries: IMovieProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: IMovieLanguage[];
    status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieGenre {
    id: number;
    name: string;
}

export interface IMovieProductionCompany {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface IMovieProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface IMovieLanguage {
    iso_639_1: string;
    name: string;
}