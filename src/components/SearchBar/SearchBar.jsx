import React from 'react';
import PropTypes from 'prop-types';
// styles
import './styles.css'


const SearchBar = ({ placeholder, value, onChange, onClick, onSubmit}) => {
    return (
        <form 
            onSubmit={onSubmit}
            className="search-bar"
        >
            <input 
                className="search-bar__input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button 
                className="search-bar__btn"
                onClick={onClick}>
                <img 
                    className="search-bar__btn__icon"
                    src={'./ic_Search.png'} 
                    alt="Icono buscar" 
                />
            </button>
        </form>
    );
};


SearchBar.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
};


export default SearchBar;
