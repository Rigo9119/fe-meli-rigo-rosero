import React from 'react';
import PropTypes from 'prop-types';
// Components
import SearchBar from '../SearchBar/SearchBar';
// Styles
import './styles.css'

const Header = ({inputValue, inputChange, formSubmit}) => {
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
                placeholder="Nunca dejes de buscar"
                onChange={inputChange}
                onSubmit={formSubmit}
            />
        </header>
    );
};


Header.propTypes = {
    inputValue: PropTypes.string,
    inputChange: PropTypes.func,
};


export default Header;
