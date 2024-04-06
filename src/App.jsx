import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Delete from "./Delete";
function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState("hotdog");
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Delete mops={test} clicked={setToggle} toggle={toggle} />
      <h1
        style={
          toggle ? { backgroundColor: "red" } : { backgroundColor: "blue" }
        }
      >
        {test}
      </h1>
      <h1>{toggle ? "Mazda" : "Minecraft"} </h1>
      <button
        onClick={() => {
          setTest("pie");
          setToggle(!toggle);
        }}
      >
        test
      </button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
