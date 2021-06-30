import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'reactstrap';

const Main = (props) => {
  return (
    <div className="mt-3">
      <Jumbotron>
        <Container>
          <h1 className="display-3">Welcome!</h1>
          <p className="lead">You have found the leading site for all your fitness tracking needs.  Your search for a better fitness tracker stops here!</p>
          <hr className="my-2" />
          <p>With Fitness Trackr you can take workouts and routines from others or create your own. The sky is the limit!</p>
          <p className="lead">
            <Button color="primary" tag={Link} to="/login">Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Main;
