/* eslint-disable no-unused-vars */
import logo from "./logo192.png";
import "./App.css";

const App = () => {
  const name = "React";

  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

  return (
    <div className="container">
      <img src={logo} alt="React logo" />
      <h1>{name}</h1>
      <p>Release date: {facts.releaseDate}</p>
      <p>Language: {facts.language}</p>
      <p>License: {facts.license}</p>
    </div>
  );
};

export default App;
