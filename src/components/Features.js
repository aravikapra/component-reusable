import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

function Features() {
  return (
    <Container>
      <h2 className="text-center my-5">Our Features</h2>
      <Row>
        <Col>
          <CardItem
            title="Feature 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna in massa scelerisque efficitur."
            buttonText="Learn More"
          />
        </Col>
        <Col>
          <CardItem
            title="Feature 2"
            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            buttonText="Discover More"
          />
        </Col>
        <Col>
          <CardItem
            title="Feature 3"
            text="Nullam pretium velit sit amet purus commodo, nec cursus urna commodo. Vestibulum maximus augue quis arcu bibendum."
            buttonText="Explore More"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
