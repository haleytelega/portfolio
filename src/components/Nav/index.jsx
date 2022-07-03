import React from 'react';

function Nav() {
    function handleClick() {
        console.log('click happened');
    } 
    return(
        <nav>
            <div className="container">
            <ul className="row">
                <ul className="mx-2 col-sm">
                    <a className="nav" href="#about" onClick={handleClick}>
                    About me
                    </a>
                </ul>
                <ul className="mx-2 col-sm">
                    <a className="nav" href="#portfolio" onClick={handleClick}>
                    Portfolio
                    </a>
                </ul>
                <ul className="mx-2 col-sm">
                    <a className="nav" href="#contact" onClick={handleClick}>
                    Contact
                    </a>
                </ul>
                <ul className="mx-2 col-sm">
                    <a className="nav" href="#resume" onClick={handleClick}>
                    Resume
                    </a>
                </ul>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;