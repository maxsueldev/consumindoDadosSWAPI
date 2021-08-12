import { useEffect, useState } from "react";

export function Filmes() {
    const [moviesSW, setMoviesSW] = useState<any[]>([]);
    // const [starships, setStarships] = useState([]);
    // let movieStarships = [];

    useEffect(function() {
        fetch('https://swapi.dev/api/films/')
        .then(filmsResponse => filmsResponse.json())
        .then(completeFilmsResponse => {
          setMoviesSW(completeFilmsResponse.results);
        }) 

        // fetch('https://swapi.dev/api/starships/')
        // .then(starshipsResponse => starshipsResponse.json())
        // .then(completeStarshipsResponse => {
        //   setStarships(completeStarshipsResponse.results);
        // //   console.log('-- ' + starships + '--');
        // }) 
    }, []);
 
    return (
        <div>
            <h1>Lista de filmes Star Wars (swapi)</h1>
            { console.log(moviesSW) }
            <ul>
                {moviesSW.map(movie => (
                    <li key={movie.episode_id}>
                        <p> 
                            <h2>{movie.title}</h2> <br />
                            <strong>Diretor:</strong> {movie.director} <br />
                            <strong>Resumo:</strong> {movie.opening_crawl} <br />
                            <strong>Naves:</strong> {/* Criar lista de nome das naves a partir da url passada em movie.starships */} 
                         
                            {/* {(() => {
                                let starshipsOfMovie: string[] = []; 
                                console.log(starships);
                                starships.map(starship => {
                                    for(const starshipUrl of movie.starships) {
                                        if(starshipUrl === starship.url) {
                                            starshipsOfMovie.push(starship.name);
                                        }
                                    }
                                })      
                                
                                console.log(movie.title, starshipsOfMovie);
                                return starshipsOfMovie;
                            })()} */}

                        </p>
                    </li>
                ))}
            </ul>
        </div> 
    );
}