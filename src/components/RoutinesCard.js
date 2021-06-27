import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RoutinesCard = (props) => {
//   const { routine } = props;
//   const { activities } = routine;

  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle tag="h5" className="text-muted">{props.routine.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Created by: {props.routine.creatorName}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{`"${props.routine.goal}"`}</CardSubtitle>
          <CardText className="text-muted">{props.routine.activities.map(activity => {
              return (
                  <div>
                    <div>
                        <strong>Description:</strong> {activity.description}
                    </div>
                    <div>
                    <strong>Count:</strong> {activity.count}
                    </div>
                    <div>
                    <strong>Duration:</strong> {activity.duration}
                    </div>
                  </div>
              )
          })}</CardText>
          <Button className="btn-primary">Add to My Routines</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RoutinesCard; 