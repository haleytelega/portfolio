import React from 'react';

function Footer () {
    return (
    <footer>
    <div>
        <div className="footer">
        <a href="https://github.com/haleytelega?page=1&tab=repositories" target="_blank" rel="noreferrer">
            <img style={{ width: "5%" }}
            src={require(`../../assets/footer/0.jpg`).default}
            alt={'GitHub logo'}
            className="footer-img"
            key={'GitHub logo'}
            />
            </a>
        </div>
    </div>
    </footer>
    );
}

export default Footer;