import { useState } from "react";
import DisplayHistory from "./component/DisplayHistory";

export default function MyCalculator() {
  const [value, setValue] = useState(() => {
    return 0;
  });
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    let currentValue = parseInt(e.target.innerHTML);
    setValue(value + currentValue);
    setHistory([...history, value + e.target.innerHTML]);
  };

  return (
    <>
      <center>
        <button type="button" onClick={handleChange}>
          -100
        </button>
        <button type="button" onClick={handleChange}>
          -10
        </button>
        <button type="button" onClick={handleChange}>
          -1
        </button>
        <div>
          <br></br>
          <button value="undo" onClick={handleChange}>
            Undo
          </button>
          <span>
            <h4>{value}</h4>
          </span>
          <button type="button" value="redo" onClick={handleChange}>
            Redo
          </button>
        </div>
        <br></br>
        <button type="button" onClick={handleChange}>
          +1
        </button>
        <button type="button" onClick={handleChange}>
          +10
        </button>
        <button type="button" onClick={handleChange}>
          +100
        </button>
        <br></br>
        <br></br>

        <DisplayHistory history={history} />
      </center>
    </>
  );
}
