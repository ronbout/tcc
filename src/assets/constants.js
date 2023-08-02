const MERGE = 0;
const SHIFT = 1;
const FLAGGING = 2;

const TTC_TYPES = {
  [MERGE]: "Merge",
  [SHIFT]: "Shift",
  [FLAGGING]: "Flagging",
};

const BUFFER_SPACES = {
  20: [73.5, 38.4, 115],
  25: [91.9, 60.0, 155],
  30: [110.3, 86.4, 200],
  35: [128.6, 117.6, 250],
  40: [147.0, 153.6, 305],
  45: [165.4, 194.4, 360],
  50: [183.8, 240.0, 425],
  55: [202.1, 290.3, 495],
  60: [220.5, 345.5, 570],
  65: [238.9, 405.5, 645],
  70: [257.3, 470.3, 730],
  75: [275.6, 539.9, 820],
  80: [294.0, 614.3, 910],
};

export { MERGE, SHIFT, FLAGGING, TTC_TYPES, BUFFER_SPACES };
