import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'USA',
    uv: 191000,
    pv: 136000,
    amt: 2400,
  },
  {
    name: 'China',
    uv: 173000,
    pv: 182000,
    amt: 2210,
  },
  {
    name: 'Japan',
    uv: 522000,
    pv: 50000,
    amt: 2290,
  },
  {
    name: 'Germany',
    uv: 230000,
    pv: 24000,
    amt: 2000,
  },
  {
    name: 'India',
    uv: 233000,
    pv: 24000,
    amt: 2181,
  },
  {
    name: 'UK',
    uv: 603000,
    pv: 127000,
    amt: 2500,
  },
  {
    name: 'Spain',
    uv: 811000,
    pv: 198000,
    amt: 2100,
  },
  {
    name: 'Indonesia',
    uv: 850000,
    pv: 131000,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" stackId="a" fill="#3e8e4e" />
          <Bar dataKey="pv" stackId="a"fill="#f5ef85" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
