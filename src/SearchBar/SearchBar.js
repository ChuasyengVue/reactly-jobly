import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    
    const [search, setSearch] = useState("");

    const handleChange = (evt) => {
        setSearch(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSearch(search);
    }

    return(
        <div>

            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='search'
                placeholder='Enter search term..'
                value={search}
                onChange={handleChange}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;