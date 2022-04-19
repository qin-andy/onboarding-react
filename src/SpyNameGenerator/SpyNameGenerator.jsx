import { useState } from "react";

function SpyNameGenerator(props) {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value.split("").reverse().join(""));
  }

  const handleSave = () => {
    setNames([...names, name]);
  }

  return (
    <>
      <h1>Spy Name Generator</h1>
      <h2>Previous Spy Name: </h2>
      
      {names.map(name => {
        return <h3>{name}</h3>;
      })}

      <h2>Current Spy Name: </h2>
      <h3>{name}</h3>

      <div>
        <input type="text" onChange={handleChange} />
        <button className="button1" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
}

export default SpyNameGenerator;
