import { useState, useCallback, useMemo } from "react";
import Demo from "./Components/Demo";
import Button from "./Components/UI/Button";
import List from "./Components/List";

import "./App.css";

function App() {
  const [showLine, setShowLine] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [title, setTitle] = useState("title");

  const showLineHandler = useCallback(() => {
    if (allowToggle) {
      setShowLine((prevShowLine) => !prevShowLine);
      console.log("show line");
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
    console.log("Allow Toggle");
  };

  const titleHandler = useCallback((props) => {
    setTitle("newTitle");
  }, []);

  const listItems = useMemo(() => [3, 5, 2, 1, 8], []);

  return (
    <div className="App">
      <Demo show={showLine} />
      <Button onClick={allowToggleHandler}>Alow Toggle</Button>
      <Button onClick={showLineHandler}>Show Line</Button>

      <List title={title} items={listItems} />
      <Button onClick={titleHandler}>Show List</Button>
    </div>
  );
}

export default App;
