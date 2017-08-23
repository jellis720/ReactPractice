import React, { Component } from 'react';

import Books from './books.js';
import Movies from './movies.js'


export default class MainBody extends Component {
  render() {
    return (
      <section>
        <Books />
        <Movies />
      </section>
    );
  }
}
