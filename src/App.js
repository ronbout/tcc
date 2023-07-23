import ZoneConditions from "./components/ZoneConditions";
import ZoneRequirements from "./components/ZoneRequirements";
import "./App.css";

function App() {
  const calcRequirements = (conditions) => {
    console.log(conditions);
    alert("calc");
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
