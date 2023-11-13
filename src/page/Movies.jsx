import { useState, useEffect } from "react"
import { useSearchParams, useLocation  } from 'react-router-dom';


import {getFetchByQuery} from "FetchAPI";
import { SearchForm } from "../components/Search Form/SearchForm"
import { MovieList } from "../components/MovieSearchList/MovieSearchList";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import s from './Movies.module.css'

export default function Movies () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieSearch, setMovieSearch] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showBtn, setShowBtn] = useState(0);

    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
      setShowBtn(window.scrollY);
  };

  const topFunction = (e) => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
 
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
        {showBtn > document.documentElement.clientHeight && <div className={s.upBtn__box}> <BsFillArrowUpCircleFill onClick={topFunction}  className={s.upBtn} /> </div> }
    </div>

}

