import React, { Component } from 'react';

let movies = [
  {
    id: 1,
    title: "Harry Potter",
    author: "David Yates"
  },
  {
    id: 2,
    title: "Heavyweights",
    author: "Steven Brill"
  },
  {
    id: 3,
    title: "Avatar",
    author: "James Cameron"
  }

]

export default class Movies extends Component {
  render() {
    let myMovies = movies.map((movie)=>{
      return(
        <ul key={movie.id}>
          <li>{movie.title + ", by " + movie.author}</li>
        </ul>
      );
    })
    return (
      <section className="content">
        <p>Movies</p>
        {myMovies}
      </section>
    );
  }
}
