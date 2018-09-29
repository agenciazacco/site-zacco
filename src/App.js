import './App.css';
import 'cirrus-ui/dist/cirrus.min.css';
import React, { Component } from 'react';

import Header from './components/template/header/Header';
import Main from './components/main/Main';
import Footer from './components/template/footer/Footer';
import Form from './components/form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
