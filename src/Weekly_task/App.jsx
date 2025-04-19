import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import API_KEY from "./config";

function App() {
  const [searchTerm, setSearchTerm] = useState("RRR...");
  const [apiMovies, setApiMovies] = useState([]);
  const [customMovies, setCustomMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    rating: "",
    year: "",
    poster: ""
  });

  useEffect(() => {
    if (searchTerm.trim() === "") return;

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          Promise.all(
            data.Search.map((movie) =>
              fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
                .then((res) => res.json())
            )
          ).then((moviesDetails) => setApiMovies(moviesDetails));
        } else {
          setApiMovies([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [searchTerm]);

  const handleAddMovie = (e) => {
    e.preventDefault();

    const newEntry = {
      title: newMovie.title,
      description: newMovie.description,
      rating: newMovie.rating,
      year: newMovie.year,
      poster: newMovie.poster || "https://via.placeholder.com/300x445?text=No+Image"
    };

    setCustomMovies([...customMovies, newEntry]);
    setNewMovie({
      title: "",
      description: "",
      rating: "",
      year: "",
      poster: ""
    });
  };

  const handleDelete = (index, isCustom) => {
    if (isCustom) {
      const updatedCustom = customMovies.filter((_, i) => i !== index);
      setCustomMovies(updatedCustom);
    } else {
      const updatedApi = apiMovies.filter((_, i) => i !== index);
      setApiMovies(updatedApi);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Manager</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <form onSubmit={handleAddMovie} className="add-movie-form">
        <h2>Add New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.poster}
          onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
        />
        <button type="submit">Add Movie</button>
      </form>

      {/* API MOVIES */}
      <div className="movie-section">
        <h2>Search Results</h2>
        <div className="movie-list">
          {apiMovies.map((movie, index) => (
            <MovieCard
              key={`api-${index}`}
              title={movie.Title}
              description={movie.Plot}
              year={movie.Year}
              rating={movie.imdbRating}
              poster={movie.Poster}
              onDelete={() => handleDelete(index, false)}
            />
          ))}
        </div>
      </div>

      {/* CUSTOM MOVIES */}
      <div className="movie-section">
        <h2>Your Added Movies</h2>
        <div className="movie-list">
          {customMovies.map((movie, index) => (
            <MovieCard
              key={`custom-${index}`}
              title={movie.title}
              description={movie.description}
              year={movie.year}
              rating={movie.rating}
              poster={movie.poster}
              onDelete={() => handleDelete(index, true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
