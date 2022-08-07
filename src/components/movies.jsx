import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate"

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies });
  };
  render() {
    const {length: count} = this.state.movies;
    const { movies : allMovies, currentPage, pageSize } = this.state;
    const headerClass = "p-3 mb-2 bg-secondary text-white rounded m-2";

    if (count == 0)
      return (
        <h2 className={headerClass}>There are no movies in the database.</h2>
      );

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        {
          <h2 className={headerClass}>
            There are {count} movies in the database.
          </h2>
        }
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td scope="row">{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLike={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
