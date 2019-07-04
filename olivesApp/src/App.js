import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyOlives from './components/myOlives'
import EditJar from './components/edit'
import CreateJar from './components/create'
import Navbar from './components/navBar'


class App extends Component {

  render() {
    return (
      <div className='container'>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path='/' exact component={MyOlives} />
              <Route path='/create' exact component={CreateJar} />
              <Route path='/edit/:id' exact component={EditJar} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
