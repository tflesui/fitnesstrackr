import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ActivitiesCard = (props) => {
  // const { id, name, description } = props;


  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle tag="h5" className="text-muted">{`Activity ${props.activity.id}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.activity.name}</CardSubtitle>
          <CardText className="text-muted">{props.activity.description}</CardText>
          <Button outline className="btn-primary">Add to Routine</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ActivitiesCard; 