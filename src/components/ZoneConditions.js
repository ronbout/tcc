import { useState } from "react";
import { MERGE, SHIFT, FLAGGING, TTC_TYPES } from "../assets/constants";

const ZoneConditions = ({ calcRequirements }) => {
  const [speed, setSpeed] = useState(40);
  const [laneWidth, setLaneWidth] = useState(10);
  const [ttcType, setTtcType] = useState(MERGE);
  const [roadType, setRoadType] = useState("rural");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    calcRequirements({
      speed,
      laneWidth,
      ttcType,
      roadType,
    });
  };

  const handleSpeedChange = (ev) => {
    const newSpeed = parseInt(ev.target.value);
    setSpeed(newSpeed);
    // alert(`speed: ${newSpeed}`)
  };
  const handleLaneWidthChange = (ev) => {
    const newLaneWidth = parseInt(ev.target.value);
    setLaneWidth(newLaneWidth);
    // alert(`lane width: ${newLaneWidth}`)
  };

  const handleTtcTypeChange = (ev) => {
    const newTtcType = parseInt(ev.target.value);
    setTtcType(newTtcType);
    // alert(`ttc type: ${TTC_TYPES[newTtcType]}`);
  };

  const handleRoadTypeChange = (ev) => {
    setRoadType(ev.target.value);
    // alert(`road type: ${ev.target.value}`);
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

          <input
            type="radio"
            name="ttcType"
            value={FLAGGING}
            id={TTC_TYPES[FLAGGING]}
            checked={ttcType === FLAGGING}
            onChange={handleTtcTypeChange}
          />
          <label htmlFor={SHIFT}>{TTC_TYPES[FLAGGING]}</label>
        </div>
        <div style={{ margin: 20 }}>
          <h3>Select Road Type </h3>

          <input
            type="radio"
            name="roadType"
            value="rural"
            id="road-type-rural"
            checked={roadType === "rural"}
            onChange={handleRoadTypeChange}
          />
          <label htmlFor="road-type-rural">Rural</label>

          <input
            type="radio"
            name="roadType"
            value="urban"
            id="road-type-urban"
            checked={roadType === "urban"}
            onChange={handleRoadTypeChange}
          />
          <label htmlFor="road-type-rural">Urban</label>
        </div>
        <button>Calculate</button>
      </form>
    </section>
  );
};

export default ZoneConditions;
