import PropTypes from 'prop-types';
import { useState } from 'react'
import s from './SearchForm.module.css'

export const SearchForm = ({onSubmit}) => {
    const [movieSearch, setMovieSearch] = useState("");
    
    const handleSubmit = (e) => {
          e.preventDefault();

        if (movieSearch.trim() === '') {
            return console.log("Field is empty")
        }
        
        onSubmit(movieSearch);
        setMovieSearch("");
        e.currentTarget.reset();
    }

    const handleInput = (e) => {
          setMovieSearch(e.currentTarget.value.toLowerCase())
    }

    return (
        <div className={s.d}>
        <h1> Find a movie by a title </h1>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
    <input
      className={s.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search movies"
    onChange={handleInput}
            />
            
            <button type="submit" className={s.SearchFormButton}>
                <span className={s.SearchFormButtonLabel}>
        Search
                </span> 
    </button>
        </form>
        </div>
    )
}


SearchForm.propTypes = {
    onSubmit: PropTypes.func
};