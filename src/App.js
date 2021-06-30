import Header from './components/Navbar'
import Main from './components/Main';
import Activities from './components/Activities';
import Routines from './components/Routines';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/activities' component={Activities} />
            <Route path='/routines' component={Routines} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
