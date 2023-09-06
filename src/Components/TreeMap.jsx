import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Location",
    "Parent",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],
  ["Softwares", null, 0, 0],
  //   ["America", "Global", 0, 0],
  //   ["Europe", "Global", 0, 0],
  //   ["Asia", "Global", 0, 0],
  //   ["Australia", "Global", 0, 0],
  //   ["Africa", "Global", 0, 0],
  //   ["Brazil", "America", 11, 10],
  //   ["USA", "America", 52, 31],
  //   ["Mexico", "America", 24, 12],
  //   ["Canada", "America", 16, -23],
  //   ["France", "Europe", 42, -11],
  //   ["Germany", "Europe", 31, -2],
  //   ["Sweden", "Europe", 22, -13],
  //   ["Italy", "Europe", 17, 4],
  //   ["UK", "Europe", 21, -5],
  //   ["China", "Asia", 36, 4],
  //   ["Japan", "Asia", 20, -12],
  //   ["India", "Asia", 40, 63],
  //   ["Laos", "Asia", 4, 34],
  //   ["Mongolia", "Asia", 1, -5],
  //   ["Israel", "Asia", 12, 24],
  //   ["Iran", "Asia", 18, 13],
  //   ["Pakistan", "Asia", 11, -52],
  //   ["Egypt", "Africa", 21, 0],
  //   ["S. Africa", "Africa", 30, 43],
  //   ["Sudan", "Africa", 12, 2],
  //   ["Congo", "Africa", 10, 12],
  //   ["Zaire", "Africa", 8, 10],
  ["AL Khalil Technology", "Softwares", 35, 50],
  ["SIBCA Electronic Equipment", "Softwares", 32, 50],
  ["Teklogix DMCC", "Softwares", 28, 50],
  ["Intertech LLC", "Softwares", 25, 50],
  ["ARAMCO LLC", "Softwares", 32, 50],
  ["United Technology Group", "Softwares", 23, 50],
  // ["Mustafa Technology Group" , 10 , 70],
  // ["Emerson FZE" , 30 , 50],
  // ["Apple LLC", "Softwares" , 20 , 50],
  // ["Infocomm", "Softwares" , 18 , 50],
];

export const options = {
  minColor: "#f00",
  midColor: "#ddd",
  maxColor: "#0d0",
  headerHeight: 15,
  fontColor: "black",
  showScale: true,
  animation: {
    startup: true,
    easing: "linear",
    duration: 1500,
  },
};

export default function TreeMap() {
  return (
    <Chart
      chartType="TreeMap"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
