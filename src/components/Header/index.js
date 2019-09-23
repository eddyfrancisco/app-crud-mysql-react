import React from 'react';

const Header = ({ title }) => (
    <header>
        <h1 className="font-weight-bold"> {title?title:'Escolha um título'}</h1>
    </header>
);

export default Header;