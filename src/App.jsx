import { lazy, Suspense } from 'react'
import { useState, useEffect } from "react"

import { Route, Routes, Link } from "react-router-dom";
import s from './App.module.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const Movies = lazy(() => import("./page/Movies"));
const Home = lazy(() => import("./page/Home"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"));
const Loader = lazy(() => import("./components/Loader/Loader"));

export const App = () => {
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

  return (
    <div className={s.container}>
      <header className={s.header}>
        <nav>
          <Link to="/" end="true" className={s.navLink}>
          Trending
          </Link>
          <Link to="/movies" className={s.navLink}>Movies</Link>
        </nav>
      </header>

        <Suspense fallback={<Loader />}>
              <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/movies" element={<Movies/>} />
                      <Route path="/movies/:movieId" element={<MovieDetails />} >
                        <Route path="/movies/:movieId/cast" element={<Cast />}/>
                        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
                      </Route>

                      <Route path="*" element={<Home />} />
              </Routes>
      </Suspense>

      {showBtn > document.documentElement.clientHeight && <div className={s.upBtn__box}> <BsFillArrowUpCircleFill onClick={topFunction}  className={s.upBtn} /> </div> }
    </div>
  );
};

