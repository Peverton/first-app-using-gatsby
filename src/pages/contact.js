import React from 'react';
import Layout from '../components/Layout';
import { ListGroup, Form, Button } from 'react-bootstrap';
import SEO from "../components/seo";

import * as Styled from '../styles/pages/contactStyles';

const Contact = () => {
  const text = 'Meu texto';

  return (
    <Layout>
      <SEO 
        title="Contact"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contact</h1>
            <p>{text}</p>
          </div>

          <div className="col-md-6 mb-3">
            <Form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group controlId="formBasicEmail">
                <Form.Control name="name" type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control name="email" type="email" placeholder="E-mail" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control name="message" as="textarea" rows="3" placeholder="Message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          <div className="col-md-6">
            <ListGroup>
              <ListGroup.Item>
                <Styled.EmailWrapper 
                  color="#9c69ac"
                  width="35px"
                />
                email@email.com
              </ListGroup.Item>
              <ListGroup.Item>
                <Styled.PhoneWrapper 
                  color="#9c69ac"
                  width="35px"
                />
                (11) 99999-9999
              </ListGroup.Item>
              <ListGroup.Item>
                <Styled.LocationWrapper 
                  color="#9c69ac"
                  width="35px"
                />
                BlaBla Street, 27 - 123
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;