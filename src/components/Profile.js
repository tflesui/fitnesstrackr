import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const { user: { username } } = currentUser;

  return (
    <Container fluid>
      <Jumbotron fluid>
        <h1>
           Profile
        </h1>
        <h3>Welcome {username.toUpperCase()}</h3>
      </Jumbotron>
    </Container>
  );
};

export default Profile;