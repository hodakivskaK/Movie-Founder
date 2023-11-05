import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import s from './App.module.css'


const Movies = lazy(() => import("./page/Movies"));
const Home = lazy(() => import("./page/Home"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"));
const Loader = lazy(() => import("./components/Loader/Loader"));

export const App = () => {

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
    </div>
  );
};

