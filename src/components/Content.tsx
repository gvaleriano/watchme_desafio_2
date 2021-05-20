import { MovieCard } from '../components/MovieCard';

import { Header } from '../components/Header';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieList {
  movieList: Movie[],
  genreSelected: string
}

export function Content(props: MovieList) {
  // Complete aqui
  return (
    <div className="container">
      <Header genreTitle={props.genreSelected} />
      <main>
        <div className="movies-list">
          {props.movieList.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}