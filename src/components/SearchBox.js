import React from "react";

const SearchBox = ({searchfield, onSearchChange}) => {
    return (
        <div className="pa2">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder='search robots' 
            style={{ width: '500px', textAlign: 'center' }} // Adjust width as needed
            onChange={onSearchChange}
        />
        </div>
    );
}

export default SearchBox;