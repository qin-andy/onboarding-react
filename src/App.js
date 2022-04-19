import "./App.css";
import SpyNameGenerator from "./SpyNameGenerator/SpyNameGenerator";
import ClickableDonut from "./DonutClicker/ClickableDonut";

// Image attribution: https://pixabay.com/illustrations/cartoon-donuts-donut-chocolate-4764725/

function App() {
  

  return (
    <div id="main">
      <div className="column">
        {/* <h1>Delete me to see what happens!</h1> */}
        {/* Here's where all the magic happens! */}
        <SpyNameGenerator />
        {/* <ClickableDonut /> */}
      </div>
    </div>
  );
}

export default App;
