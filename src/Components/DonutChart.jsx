// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["value", "percentage"],
//   ["150", 15],
//   ["200", 20],
//   ["150", 15],
//   ["200", 20],
//   ["150", 15], // CSS-style declaration
//   ["150", 15], // CSS-style declaration
// ];

// export const options = {
//   title: "Professional Services vs Software - Quarterl 2023",
//   pieHole: 0.5,
//   is3D: false,
// };

// export default function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       width="70%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data2 = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 9800 },
  { label: 'Group E', value: 3908 },
  { label: 'Group F', value: 4800 },
];

export default function TwoSimplePieChart() {
  return (
    <PieChart
      series={[
        {
          data: data2,
          cx: 500,
          cy: 200,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      width={900}
      height={600}
      legend={{ hidden: true }}
    />
  );
}