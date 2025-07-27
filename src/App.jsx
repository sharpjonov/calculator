import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="container">
        <div className="calc">
          <form action="">
            <div>
              <input type="text" value={value} placeholder="0" />
            </div>
            <div>
              <input
                className="calc__input"
                type="button"
                value="AC"
                onClick={(el) => setValue("")}
              />
              <input
                className="calc__input"
                type="button"
                value="DE"
                onClick={(el) => setValue(value.slice(0, -1))}
              />
              <input
                className="calc__input"
                type="button"
                value="."
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="/"
                onClick={(el) => setValue(value + el.target.value)}
              />
            </div>
            <div>
              <input
                className="calc__input"
                type="button"
                value="7"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="8"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="9"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="*"
                onClick={(el) => setValue(value + el.target.value)}
              />
            </div>
            <div>
              <input
                className="calc__input"
                type="button"
                value="4"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="5"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="6"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="+"
                onClick={(el) => setValue(value + el.target.value)}
              />
            </div>
            <div>
              <input
                className="calc__input"
                type="button"
                value="1"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="2"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="3"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="-"
                onClick={(el) => setValue(value + el.target.value)}
              />
            </div>
            <div>
              <input
                className="calc__input"
                type="button"
                value="00"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="0"
                onClick={(el) => setValue(value + el.target.value)}
              />
              <input
                className="calc__input"
                type="button"
                value="="
                onClick={(el) => setValue(eval(value))}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
