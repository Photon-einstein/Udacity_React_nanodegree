import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

/* Edit the code to make the printed text mirror what we type
into the input field. When we erase all of the text, nothing
should be printed to the screen. */

const App = () => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={input}
          onChange={handleChange}
        />
        <p className="echo">Echo:</p>
        <p>{input}</p>
      </div>
    </div>
  );
};

export default App;
