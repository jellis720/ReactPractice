import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js';
import MainBody from './components/mainbody.js'
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <MainBody />
        <Footer />
      </section>
    );
  }
}

export default App;
