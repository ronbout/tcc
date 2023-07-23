import { useState } from "react";
import { MERGE, SHIFT, TTC_TYPES } from "../assets/constants";

const ZoneConditions = ({ calcRequirements }) => {
  const [speed, setSpeed] = useState(40);
  const [laneWidth, setLaneWidth] = useState(10);
  const [ttcType, setTtcType] = useState(MERGE);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    calcRequirements({
      speed,
      laneWidth,
      ttcType,
    });
  };

  const handleSpeedChange = (ev) => {
    setSpeed(ev.target.value);
    // alert(`speed: ${ev.target.value}`)
  };
  const handleLaneWidthChange = (ev) => {
    setLaneWidth(ev.target.value);
    // alert(`lane width: ${ev.target.value}`)
  };

  const handleTtcTypeChange = (ev) => {
    setTtcType(ev.target.value);
    // alert(`ttc type: ${TTC_TYPES[ev.target.value]}`);
  };

  return (
    <section>
      <h2>Zone Conditions</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: 20 }}>
          <h3>Speed Limit </h3>
          <input
            type="number"
            min={10}
            max={100}
            step={5}
            value={speed}
            onChange={handleSpeedChange}
          />
        </div>
        <div style={{ margin: 20 }}>
          <h3>Lane Width </h3>
          <input
            type="number"
            min={8}
            max={15}
            step={1}
            value={laneWidth}
            onChange={handleLaneWidthChange}
          />
        </div>
        <div style={{ margin: 20 }}>
          <h3>Select TTC Type </h3>

          <input
            type="radio"
            name="ttcType"
            value={MERGE}
            id={TTC_TYPES[MERGE]}
            checked={ttcType === MERGE}
            onChange={handleTtcTypeChange}
          />
          <label htmlFor={MERGE}>{TTC_TYPES[MERGE]}</label>

          <input
            type="radio"
            name="ttcType"
            value={SHIFT}
            id={TTC_TYPES[SHIFT]}
            checked={ttcType === SHIFT}
            onChange={handleTtcTypeChange}
          />
          <label htmlFor={SHIFT}>{TTC_TYPES[SHIFT]}</label>
        </div>
        <button>Calculate</button>
      </form>
    </section>
  );
};

export default ZoneConditions;
