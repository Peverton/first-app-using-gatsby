import React from 'react';
import SEO from "../components/seo";
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Gallery = () => {
  const { galley } = useStaticQuery(graphql`
    query {
      galley: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/images/"}}) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO 
        title="Gallery"
      />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Gallery</h1>
          </div>
        </div>
        <div className="row">
          {galley.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Img key={image.id} fluid={image.childImageSharp.fluid} alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;