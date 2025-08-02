import "./App.css";
import logo from "./logo.svg";

// Display a list of movies where each movie contains a list of users that favorited it.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

function returnListOfUsersByMovie(movie) {
  const usersWhoFavorited = profiles.filter(
    // Use strict equality and parseInt to compare string ID with number ID
    (profile) => parseInt(profile.favoriteMovieID) === movie.id
  );
  // Return the full user objects, not just their IDs
  return usersWhoFavorited.map((profile) => users[profile.userID]);
}

const App = () => {
  const moviesArray = Object.values(movies);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>How Popular is Your Favorite Movie?</h2>

      <ol>
        {moviesArray.map((movie) => {
          const listUsers = returnListOfUsersByMovie(movie);

          return (
            <li key={movie.id}>
              <h3>{movie.name}</h3>
              {listUsers.length > 0 ? (
                // This is the conditional rendering. If the list is not empty (length > 0),
                // render the list of users.
                <div>
                  <p>Liked by:</p>
                  <ul>
                    {listUsers.map((user) => (
                      <li key={user.id}>{user.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                // Otherwise, render a message that no one liked the movie.
                <p>None of the current users liked this movie.</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
