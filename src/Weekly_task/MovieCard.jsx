function MovieCard({ title, description, rating, year, poster, onDelete }) {
  const imageUrl = poster && poster !== "N/A"
    ? poster
    : "https://via.placeholder.com/300x445?text=No+Image";

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Year:</strong> {year}</p>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default MovieCard;
