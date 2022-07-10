import { useState } from "react";
import DisplayHistory from "./component/DisplayHistory";

export default function MyCalculator() {
  const [value, setValue] = useState(() => {
    return 0;
  });

  const [undoValue, setUndoValue] = useState(0);
  const [RedoValue, setRedoValue] = useState(0);
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setUndoValue(value);
    let currentValue = parseInt(e.target.innerHTML);
    setValue(value + currentValue);
    setHistory([...history, value + e.target.innerHTML]);
    setRedoValue(RedoValue + currentValue);
  };

  const handleUndo = () => {
    setValue(undoValue);
  };

  const handleRedo = () => {
    setValue(RedoValue);
  };

  const handleAC = () => {
    setHistory([]);
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
          <button type="button" onClick={handleUndo}>
            Undo
          </button>
          <span>
            <h2>{value}</h2>
          </span>
          <span>
            <h3>
              <button onClick={handleAC}>AC</button>
            </h3>
          </span>

          <button type="button" onClick={handleRedo}>
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
