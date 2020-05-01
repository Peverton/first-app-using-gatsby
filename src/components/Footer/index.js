import React from 'react';
import * as Styled from './styles';
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          description
          socialMedia {
            codepen
            facebook
            github
          }
        }
      }
    }
  `);

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-md-6 mb-3">
            {data.site.siteMetadata.description}
          </div>
          <div className="justify-content-center justify-content-md-end align-items-center col-md-6 d-flex">
            <a href={data.site.siteMetadata.socialMedia.github} target="_blank" rel="noopener noreferrer">
              <Styled.GitHubIcon />
            </a>
            <a href={data.site.siteMetadata.socialMedia.codepen} target="_blank" rel="noopener noreferrer">
              <Styled.CodepenIcon />
            </a>
            <a href={data.site.siteMetadata.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
              <Styled.FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-gray-dark text-white py-3">
          <div className="col-12 d-flex justify-content-center">
            {data.site.siteMetadata.copyright}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;