import React from 'react';
import SEO from "../components/seo";

import Layout from '../components/Layout';
import CardV2 from '../components/CardV2';

const About = () => {
  const text = 'Meu texto';

  return (
    <Layout>
      <SEO 
        title="About"
        lang="uk"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <CardV2
              nameImage="foto01" 
              titleCard="Card 1"
              textCard="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quod!"
              colorButton="gatsby"
              backgroudCard="#e3a617"
              styleDefault={true}
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardV2
              nameImage="foto02" 
              titleCard="Card 2"
              textCard="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quod!"
              colorButton="warning"
              backgroudCard=""
              styleDefault={false}
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardV2
              nameImage="foto03" 
              titleCard="Card 3"
              textCard="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quod!"
              colorButton="gatsby"
              backgroudCard="#e3a617"
              styleDefault={true}
            />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default About;