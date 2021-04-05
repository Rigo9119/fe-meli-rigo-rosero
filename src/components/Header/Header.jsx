import React from 'react';
import PropTypes from 'prop-types';
// Components
import SearchBar from '../SearchBar/SearchBar';
// Styles
import './styles.css'

const Header = ({inputValue, inputChange}) => {
    return (
        <header className="header">
            <div className="header__logo">
                <img 
                    className="header__logo__img"
                    src="./Logo_ML.png"
                    alt="Mercado Libre logo "
                />
            </div>
            <SearchBar 
                value={inputValue}
                onChange={inputChange}
                placeholder="Nunca dejes de buscar"
            />
        </header>
    );
};


Header.propTypes = {
    inputValue: PropTypes.string,
    inputChange: PropTypes.func,
};


export default Header;
