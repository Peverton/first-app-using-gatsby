import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Images from '../components/Images';

import { Carousel } from 'react-bootstrap';

// import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="Wecome!"
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <Carousel>
            <Carousel.Item>
              <Images
                name="foto01"
              />
              <Carousel.Caption>
                <h3>Image 1</h3>
                <p>This is an amazing food.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Images
                name="foto02"
              />

              <Carousel.Caption>
                <h3>Image 2</h3>
                <p>This is an amazing food.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Images
                name="foto03"
              />

              <Carousel.Caption>
                <h3>Image 3</h3>
                <p>This is an amazing food.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Home</h1>
            <p>Welcome to your new Gatsby site.</p>
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
