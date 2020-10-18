import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Beaches from './components/pages/Beaches';
import SignUp from './components/pages/SignUp';
import Mountaint from './components/pages/Moutaint';
import Streetfood from './components/pages/Streetfood';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/beaches' component={Beaches} />
        <Route path='/mountaint' component={Mountaint} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/streetfood' component={Streetfood} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
