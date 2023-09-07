import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Apple', value: 1200 },
  { name: 'IBM', value: 300 },
  { name: 'Microsoft', value: 300 },
  { name: 'Google', value: 200 },
  { name: 'Alphabet', value: 278 },
  { name: 'Nvidia', value: 189 },
];
export default function Example(){
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={130}
            fill="#3e8e4e"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
