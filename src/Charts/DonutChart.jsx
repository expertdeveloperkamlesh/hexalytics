
// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';

// const data2 = [
//   { label: 'Group A', value: 2400 },
//   { label: 'Group B', value: 4567 },
//   { label: 'Group C', value: 1398 },
//   { label: 'Group D', value: 9800 },
//   { label: 'Group E', value: 3908 },
//   { label: 'Group F', value: 4800 },
// ];

// export default function TwoSimplePieChart() {
//   return (
//     <PieChart
//       series={[
//         {
//           data: data2,
//           cx: 500,
//           cy: 200,
//           innerRadius: 40,
//           outerRadius: 80,
//         },
//       ]}
//       width={900}
//       height={600}
//       legend={{ hidden: true }}
//     />
//   );
// }

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 9800 },
  { label: 'Group E', value: 3908 },
  { label: 'Group F', value: 4800 },
];

const COLORS = ['#A1E887', '#023618', '#548C2F', '#303A2B','#8BBD8B'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius = {30}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
