import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainBook from './components/MainBook/MainBook';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={ props =>(
          <Login/>
          )}/>
      </div>
      <Route exact path={"/GuestMAssages"} component={MainBook}/>
      <Route exact path={"/signup"} component={SignUp}/>
    </Router>
  );
}

export default App;
