import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={ props =>(
          <Login/>
          )}/>
      </div>
      <Route exact path={"/signup"} component={SignUp}/>
    </Router>
  );
}

export default App;
