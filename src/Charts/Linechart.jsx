import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Samsung',
    uv: 40000,
  },
  {
    name: 'Apple',
    uv: 45000,
  },
  {
    name: 'IBM',
    uv: 30000,
  },
  {
    name: 'Microsoft',
    uv: 40000,
  },
  {
    name: 'Oracle',
    uv: 12000,
  },
  {
    name: 'Google',
    uv: 65000,
  },
];

export default function Example(){
  // static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
