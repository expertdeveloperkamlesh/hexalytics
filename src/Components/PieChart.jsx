import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["value", "percentage"],
    ["150", 15],
    ["200", 20],
    ["150", 15],
    ["200", 20],
    ["150", 15], // CSS-style declaration
    ["150", 15], // CSS-style declaration
  ];

export const options = {
  title: "Business Unit Wise Ageing",
  subtitle : 'Values in Millions'
};

export default function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"70%"}
      height={"400px"}
    />
  );
}
