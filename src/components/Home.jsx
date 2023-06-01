import { useEffect, useState } from "react"
import { getFetchTrending } from "FetchAPI";
import { Link } from 'react-router-dom';
import s from './Home.module.css'

export default function Home () {
    const [popularList, setPopularList] = useState([]);
    const [error, setError] = useState(null);

 
    useEffect(() => {
    const fetchTrendingMovies = () => {
      getFetchTrending()
        .then(results => {
          setPopularList(results);
        })
        .catch(error => {
          setError('Something wrong...');
          console.log(error);
        })
        };
        
        fetchTrendingMovies();
        
  }, []);
    

  return <>
        {error && <div>ERROR : {error} </div>}
    
        <h1>Trending today</h1>
        <ul className={s.movieTrendList }>
        {popularList.map(item => {
            return <li key={item.id} className={s.movieTrendItem } >
                <Link to={`/movies/${item.id}`} className={s.movieTrendLink }>
                {item.title}</Link>
         
           </li>
})
}
        </ul>
       
    </>
}