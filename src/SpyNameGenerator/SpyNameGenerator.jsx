import { useState } from "react";

function SpyNameGenerator(props) {
  let [currentInput, setCurrentInput] = useState("");
  let [displayedName, setDisplayedName] = useState("");
  let [savedName, setSavedName] = useState("");

  function handleChange(e) {
    setCurrentInput(e.target.value);
    setDisplayedName(e.target.value.split("").reverse().join("").toLocaleLowerCase());
  }

  function saveName() {
    setSavedName(displayedName);
  }

  return (
    <>
      <h1>Spy Name Generator</h1>
      <h2>Previous Spy Name: </h2>
      <p>{savedName /* Something goes here! */}</p>
      <h2>Current Spy Name: </h2>
      <p>{displayedName /* Something goes here! */}</p>
      <div>
        <input type='text' onChange={handleChange} value={currentInput} />
        {/* Something goes here! */}
        <button className='button1' onClick={saveName}>Save</button>
      </div>
    </>
  );
}

export default SpyNameGenerator;
