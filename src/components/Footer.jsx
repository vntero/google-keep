import React from 'react';

function Footer() {
const currentYear = new Date().getFullYear();
  return <div>
      <footer>
      <p>developed by <a href="https://vntero.com" target="_blank" rel="noreferrer noopener">vntero</a> ⓒ {currentYear}</p>
    </footer>
  </div>;
}

export default Footer;
