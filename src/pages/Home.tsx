import { useEffect, useState } from "react";
import axios from 'axios';

export function Home() {
    const [moviesSW, setMoviesSW] = useState<any[]>([]);
    const [starships, setStarships] = useState<any[]>([]);
    let movieStarships = [''];

    useEffect(function() {
        fetch('https://swapi.dev/api/films/')
        .then(filmsResponse => filmsResponse.json())
        .then(completeFilmsResponse => {
          setMoviesSW(completeFilmsResponse.results);
        }) 

        fetch('https://swapi.dev/api/starships/')
        .then(starshipsResponse => starshipsResponse.json())
        .then(completeStarshipsResponse => {
          setStarships(completeStarshipsResponse.results);
        }) 
    }, []);

    // useEffect(function() {
        
    // }, []);
    

    // for(const [film, filmValues] of Object.entries(moviesSW)) {
    //     console.log(filmValues.starships);
    //     filmValues.starships.map(ship => {
    //         console.log(ship);
    //     })
    //     for(const [starshipKey, starshipValues] of Object.entries(starships)) {
    //         console.log(starshipValues.url);
    //     }
    //     // if(filmsValues.starships == st)       
    // }
 
    return (
        <div>
            <h1>Lista de filmes Star Wars (swapi)</h1>
        
            <ul>
                {moviesSW.map(movie => (
                    <li key={movie.episode_id}>
                        <p> 
                            <h2>{movie.title}</h2> <br />
                            <strong>Diretor:</strong> {movie.director} <br />
                            <strong>Resumo:</strong> {movie.opening_crawl} <br />
                            <strong>Naves:</strong> {/* Criar lista de nome das naves a partir da url passada em movie.starships */} 
                         
                            {(() => {
                                let st = ['']; 

                                starships.map(star => {
                                    for(const naveUrl of movie.starships) {
                                        if(naveUrl === star.url) {
                                            st.push(star.name + ', ');
                                        }
                                    }
                                })      
                            
                                return st;
                            })()}

                        </p>
                    </li>
                ))}
            </ul>
        </div> 
    );
}