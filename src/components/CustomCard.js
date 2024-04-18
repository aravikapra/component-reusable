import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

function CustomCard({ cardsData }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {cardsData.map((card, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CustomCard;
