import { BUFFER_SPACES } from "./constants";
import { FLAGGING } from "../assets/constants";

const zoneCalcs = ({
  speed = 40,
  roadType = "rural",
  laneWidth = 10,
  ttcType = 0,
}) => {
  let signDistances, bufferSpace, taperLength;

  signDistances = calcSignDistances(speed, roadType, ttcType);
  bufferSpace = calcBufferSpace(speed);
  taperLength = calcTaperLength(speed, laneWidth, ttcType);
  return {
    signDistances,
    bufferSpace,
    taperLength,
  };
};

const calcSignDistances = (speed, roadType, ttcType) => {
  let signDistances;
  switch (roadType) {
    case "urban":
      if (speed < 45) {
        signDistances = [100, 100, 100];
      } else {
        signDistances = [350, 350, 350];
      }
      break;
    case "freeway":
      signDistances = [1000, 1500, 2640];
      break;
    case "rural":
    default:
      signDistances = [500, 500, 500];
  }

  if (FLAGGING === ttcType) {
    signDistances.splice(0, 1, speed <= 40 ? 50 : 100);
  }
  return signDistances;
};

const calcBufferSpace = (speed) => {
  return BUFFER_SPACES[speed];
};

const calcTaperLength = (speed, laneWidth, ttcType) => {
  if (FLAGGING === ttcType) {
    if (speed <= 40) {
      return 50;
    } else {
      return 100;
    }
  }
  if (speed <= 40) {
    return 1;
  } else {
    return 2;
  }
};

export default zoneCalcs;
