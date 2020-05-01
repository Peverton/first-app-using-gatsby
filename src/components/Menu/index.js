import React from 'react';
import { Link } from "gatsby";

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand><Link to="/">
          <Img fixed={logo.childImageSharp.fixed} alt="Logo" />
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/" style={{ color: '#542c85' }} activeStyle={{ color: "#c9abdb" }}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/about" style={{ color: '#542c85' }} activeStyle={{ color: "#c9abdb" }}>About</Link></Nav.Link>
            <Nav.Link><Link to="/gallery" style={{ color: '#542c85' }} activeStyle={{ color: "#c9abdb" }}>Gallery</Link></Nav.Link>
            <Nav.Link><Link to="/contact" style={{ color: '#542c85' }} activeStyle={{ color: "#c9abdb" }}>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;