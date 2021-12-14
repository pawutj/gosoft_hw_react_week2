import logo from "./logo.svg";
import "./App.css";
import RandomBox from "./RandomBox";
import { getRandomColor, getRandomFontSize } from "./utils";
import { useState } from "react";
function App() {
  const [color, setColor] = useState(getRandomColor());
  const [fontSize, setFontSize] = useState(getRandomFontSize());
  console.log(color, fontSize);
  return (
    <div>
      <RandomBox color={color} fontSize={fontSize} />
    </div>
  );
}

export default App;
