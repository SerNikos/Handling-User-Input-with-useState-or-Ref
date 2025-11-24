import { useState, useRef } from "react";

function App() {
  // USE STATE
  const [nameUseState, setNameUseState] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleUseStateSubmit = () => {
    setSubmittedName(nameUseState);
    setNameUseState("");
  };

  //REFS
  const refName = useRef("");
  const [refRenderName, setRefRenderName] = useState("");

  const handleRefSubmit = () => {
    setRefRenderName(refName.current.value);
    refName.current.value = "";
  };

  return (
    <>
      <div className="use-state-example">
        <h1>Handling UserInput</h1>
        <h2>Using useState</h2>
        <label htmlFor="">Name </label>
        <input
          type="text"
          value={nameUseState}
          onChange={(e) => setNameUseState(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === "Enter") handleUseStateSubmit();
          }}
        />
        <button onClick={handleUseStateSubmit}> Submit </button>
        <p>{submittedName}</p>
      </div>

      <hr />

      <h2>Using Refs</h2>
      <label htmlFor="">Name </label>
      <input type="text" ref={refName} />
      <button onClick={handleRefSubmit}> Submit </button>
      <p>{refRenderName}</p>
    </>
  );
}

export default App;
