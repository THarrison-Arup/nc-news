import React from 'react';
import './css/Footer.css';
import { Link } from '@reach/router';

const Footer = () => {
  return (
    <div className="Footer">
      <h2 className="Footer-Copyright">© Copyright THarrison</h2>
      <Link className="Footer-ContactUs" to="/Contacts">Contact Us</Link>
      <Link className="Footer-ContactDetails" to="/Contacts">Our Details</Link>
      <Link className="Footer-SiteMap" to="">Site Map</Link>
    </div>
  );
};

export default Footer;