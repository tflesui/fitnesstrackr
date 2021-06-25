import Navbar from './components/Navbar'
import Main from './components/Main';
import Activities from './components/Activities';
import Routines from './components/Routines';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/activities' component={Activities} />
            <Route path='/routines' component={Routines} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
