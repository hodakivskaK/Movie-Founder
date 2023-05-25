
import { Route, Routes, Link } from "react-router-dom";
import { Movies } from "./Movies";
import { Home } from "./Home";

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>

         <Routes basename ="/#">
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      </header>
    </div>
  );
};
