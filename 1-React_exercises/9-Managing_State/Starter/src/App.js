import corgi from "./corgi.jpg";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [likesCount, setLikesCount] = useState(0);
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likesCount}</p>
      <button onClick={() => setLikesCount(likesCount + 1)}>Like</button>
      <button onClick={() => setLikesCount(likesCount - 1)}>Dislike</button>
    </div>
  );
};

export default App;
