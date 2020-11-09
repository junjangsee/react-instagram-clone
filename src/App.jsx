import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import SignPage from './pages/SignPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import profile from './shared/__mocks__/profile';

function App() {
  return (
    <>
      <Router>
        <Route
          path='/main'
          render={(routeProp) => <Header {...routeProp} profile={profile} />}
        />
        <Switch>
          <Route path='/sign' component={SignPage} />
          <Route path='/main/profile' component={ProfilePage} />
          <Route path='/main' component={MainPage} />
          <Redirect from='/' to='/main' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
