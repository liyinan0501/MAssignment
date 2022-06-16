type TLongLat = number | null;

export default interface IMeasurement {
  location?: [TLongLat, TLongLat],
  properties: {
    scoreA: number; // min: 0, max: 100000
    scoreB: number; // min: 0, max: 100000
    scoreC: number; // min: 0, max: 100000
    scoreD: number; // min: 0, max: 100000
    scoreE: number; // min: 0, max: 100000
    scoreF: number; // min: 0, max: 100000
    scoreG: number; // min: 0, max: 100000
    scoreH: number; // min: 0, max: 100000
    scoreI: number; // min: 0, max: 100000
    scoreJ: number; // min: 0, max: 100000
    scoreK: number; // min: 0, max: 100000
    scoreL: number; // min: 0, max: 100000
    scoreM: number; // min: 0, max: 100000
    scoreN: number; // min: 0, max: 100000
    scoreO: number; // min: 0, max: 100000
    scoreP: number; // min: 0, max: 100000
    scoreQ: number; // min: 0, max: 100000
    scoreR: number; // min: 0, max: 100000
    scoreS: number; // min: 0, max: 100000
    scoreT: number; // min: 0, max: 100000
    scoreU: number; // min: 0, max: 100000
    scoreV: number; // min: 0, max: 100000
    scoreW: number; // min: 0, max: 100000
    scoreX: number; // min: 0, max: 100000
    scoreY: number; // min: 0, max: 100000
    scoreZ: number; // min: 0, max: 100000
  },
  timestamp: string , // ISO Date string
  deviceProps: {
    name: string, // Generated Name Surname;
    type: "Ios" | "Android"
  },
}