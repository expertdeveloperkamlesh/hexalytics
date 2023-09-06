// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   [
//     "Receivable",
//     "Value in US$",
//   ],
//   ["CAABU", 40000,],
//   ["Digi Glass", 45000,],
//   ["ESBU", 30000,],
//   ["IBU", 40000,],
//   ["NBU", 12000,],
//   ["OBU", 65000,],
// ];

// export const options = {
//   chart: {
//     title: "Accounts Receivables - In US $",
//     subtitle: "Grand Total $232K",
//   },
  
// };

// export default function App() {
//   return (
//     <div>
//         <div>
//         <Chart
//       chartType="Line"
//       width="100%"
//       height="600px"
//       data={data}
//       options={options}
//     />
//         </div>
//     </div>
//   );
// }

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


const pData = [40000,45000,30000,40000,12000,65000];
const xLabels = [
  "CAABU","Digi Glass","ESBU", "Apple","IBM","Microsoft"
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={900}
      height={600}
      series={[
        { data: pData, label: 'pv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}