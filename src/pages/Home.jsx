import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010
        },
        {
            id: 2,
            title: "The Matrix",
            director: "The Wachowskis",
            year: 1999
        },
        {
            id: 3,
            title: "Interstellar",
            director: "Christopher Nolan",
            year: 2014
        }
    ];

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <h1>Movie List</h1>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;