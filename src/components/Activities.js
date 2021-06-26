import React, { useState, useEffect } from 'react';
import ActivitiesCard from './ActivitiesCard';
import axios from 'axios';
import { Container, Col, Row, Spinner } from 'reactstrap';


const Activities = () => {
  const [isLoading, setLoading] = useState(true);
  const [activities, setActivities] = useState();


  const getAllActivities = async () => {
    try {
      const  { data }  = await axios.get(
        `https://gentle-woodland-79828.herokuapp.com/api/activities`
      );
        
      // console.log(data)
      if(data){
        setActivities(data);
      }
      
      return data || [];
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllActivities();
  },[])

  if (isLoading) {
    return <div className="App"><Spinner type="grow" color="primary" /></div>;
  }

  const activityCards = activities.map((activity, idx) => {
    return (
      <Col sm='4'>
        <ActivitiesCard key={idx} activity={activity} />
      </Col>
    )
  })

  return (
    <Container fluid>
      <div id="activities" className="my-3 mb-3">
        <h1>Activities Page</h1>
        <Row>
          {activityCards}
        </Row>
      </div>
    </Container>

  );
}

export default Activities;