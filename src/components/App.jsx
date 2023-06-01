import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from "react-router-dom";
// import { Movies } from "./Movies";
// import { Home } from "./Home";
import s from './App.module.css'
// import { Cast } from "./Cast";
// import { Reviews } from "./Reviews";
// import { MovieDetails } from "./MovieDetails";
// import { Loader } from './Loader';

const Movies = lazy(() => import("./Movies"));
const Home = lazy(() => import("./Home"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const MovieDetails = lazy(() => import("./MovieDetails"));
const Loader = lazy(() => import("./Loader"));

export const App = () => {

  return (
    <div className={s.container}>
      <header className={s.header}>
        <nav>
          <Link to="/" end="true" className={s.navLink}>
            Home
          </Link>
          <Link to="/movies" className={s.navLink}>Movies</Link>
        </nav>
      </header>

        <Suspense fallback={<Loader />}>
              <Routes basename ="/#">
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

