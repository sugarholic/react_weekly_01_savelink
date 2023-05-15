import React, {useState} from 'react';

function SearchBar ({onSearch}) {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        const searchQeury = event.target.value;
        setQuery(searchQuery);
        onSearch(searchQeury);
    };

    return(
        <>
            <input 
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search Links" />
        </>
    )
};

export default SearchBar;