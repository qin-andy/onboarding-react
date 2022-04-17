import "./App.css";
import SpyNameGenerator from "./SpyNameGenerator/SpyNameGenerator";
import ClickableDonut from "./DonutClicker/ClickableDonut"

// Image attribution: https://pixabay.com/illustrations/cartoon-donuts-donut-chocolate-4764725/

function App() {
  return (
    <div id="main">
      <div className="column">
        <SpyNameGenerator />
      </div>
      <div className="column">
        <ClickableDonut />
      </div>
    </div>
  );
}

export default App;
