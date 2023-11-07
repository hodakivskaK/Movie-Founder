import { useEffect, useState } from "react"
import { getFetchTrending } from "FetchAPI";
import { Link } from 'react-router-dom';
import s from './Home.module.css'
import movieImage from '../Image/POSTER_not_found.jpg'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


export default function Home () {
    const [popularList, setPopularList] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
 

    useEffect(() => {
      const fetchTrendingMovies = () => {
        getFetchTrending(1)
          .then(results => {
    
            setPopularList(results);
          })
          .catch(error => {
            setError('Something wrong...');
          })
          };
          
          fetchTrendingMovies();
  }, []);

    useEffect(() => {
    
        const fetchTrendingMovies = () => {
      getFetchTrending(page)
        .then(results => {
  
          setPopularList(prev => { return [...prev, ...results] });
        })
        .catch(error => {
          setError('Something wrong...');
        })
        };
      
        if( page!== 1){
          fetchTrendingMovies()
        }
  }, [page]);
    

  const topFunction = (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  return <>
        {error && <div>ERROR : {error} </div>}
    
        <h1>Trending today</h1>
        <ul className={s.movieTrendList }>
        {popularList.map(item => {
            return <li key={item.id} className={s.movieTrendItem } >
                <Link to={`/movies/${item.id}`} className={s.movieTrendLink }>
                      {item.poster_path === null? 
              <img
                src={movieImage}
                alt={`poster`}
               className={s.moviesSearch__poster}
              /> : 
              <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster" className={s.movieTrend__img } />
              }
              
               <h4>{item.title}</h4> </Link>
           </li>})}
        </ul>
       
       <button className={s.movieTrend__btn } onClick={() => setPage(prev => prev + 1)}>Load more</button>

       <BsFillArrowUpCircleFill  className={s.movieTrend__upBtn} />
    </>
}