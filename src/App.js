import ZoneConditions from "./components/ZoneConditions";
import ZoneRequirements from "./components/ZoneRequirements";
import zoneCalcs from "./assets/zoneCalcs";
import "./App.css";

function App() {
  const calcRequirements = (conditions) => {
    let calcs = zoneCalcs(conditions);
    console.log(conditions);
    console.log(calcs);
  };
  return (
    <div className="App">
      <header>
        <h1>TCC Zone Setup</h1>
      </header>
      <main>
        <ZoneConditions calcRequirements={calcRequirements} />
        <ZoneRequirements />
      </main>
    </div>
  );
}

export default App;
