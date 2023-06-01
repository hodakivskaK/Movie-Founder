import PropTypes from 'prop-types';
import { useState } from 'react'
import c from './SearchForm.module'

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
        <form className={c.SearchForm} onSubmit={handleSubmit}>
    <input
      className={c.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search movies"
    onChange={handleInput}
            />
            
            <button type="submit" className={c.SearchFormButton}>
                <span className="button-label">
                
        Search
                </span> 
    </button>
        </form>
    )
}


SearchForm.propTypes = {
    onSubmit: PropTypes.func
};