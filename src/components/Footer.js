import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    footer area
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/thread">Thead</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
