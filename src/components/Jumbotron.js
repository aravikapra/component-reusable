import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../components/Jumbotron.js' // Import file CSS tambahan

function CustomJumbotron() {
  return (
    <div className="custom-jumbotron jumbotron jumbotron-fluid bg-light">
      <Container>
        <h1 className="display-4">Welcome to Your Website</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content out
          within the larger container.
        </p>
        <p className="lead">
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </div>
  );
}

export default CustomJumbotron;
