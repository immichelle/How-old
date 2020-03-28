import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");
  const [style, setStyle] = useState({ color: "#00f" });

  const handleChange = e => {
    setAge(e.target.value);
  };

  const handleBlur = () => {};
  const handleKeyUp = () => {
    age === "31"
      ? setStyle({ ...style, color: "#008000" })
      : setStyle({ ...style, color: "#f00" });
    age === "31" ? setResult("right!") : setResult("wrong");
  };

  return (
    <div className="App">
      <form>
        <label>How old is Huong? </label>
        <input
          style={style}
          value={age}
          onChange={e => handleChange(e)}
          onKeyUp={handleKeyUp}
          // onChange={e => setAge(e.target.value)}
          onBlur={handleBlur}
        />
      </form>
      <div>Result: {result}</div>
    </div>
  );
}
