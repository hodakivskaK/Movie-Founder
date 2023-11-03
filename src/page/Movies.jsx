import { useState, useEffect } from "react"
import { useSearchParams, useLocation  } from 'react-router-dom';
import { SearchForm } from "../components/Search Form/SearchForm"
import {getFetchByQuery} from "FetchAPI";
import { MovieList } from "../components/MovieSearchList/MovieSearchList";

export default function Movies () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieSearch, setMovieSearch] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const searchRequest = searchParams.get('query');

      useEffect(() => {
    if (!searchRequest) {
      return;
          }
          
    const fetchMovie = () => {
      setLoading(true);
      getFetchByQuery(searchRequest)
        .then(results => {
          if (!results.length) {
            alert('No movies found!');
          }

          setMovieSearch(results);
        })
        .catch(error => {
          setError('Sorry, nothing');
          console.log(error);
        })
        .finally(setLoading(false));
          };
          
    fetchMovie();
      }, [searchRequest]);
    
    const handleSubmit = (name) => {
        setSearchParams({ query: `${name}` });
        console.log(name)
    }


    return <div>
        {loading && <h1>Loading</h1> }
        {error && <div>{error}</div>}
        <SearchForm onSubmit={handleSubmit } />
        {movieSearch && <MovieList movies={movieSearch} prevLocation={location} />}
        
    </div>

}

