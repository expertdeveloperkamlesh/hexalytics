import React, { PureComponent } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
  {name:'Apple',size:459090},
  {name:'Microsoft',size:412900},
  {name:'Aramco',size:329000},
  {name:'Nvidia',size:324512},
  {name:'AMD',size:321567},
  {name:'MSI',size:238754},
  {name:'ASUS',size:165980},
  {name:'Google',size:253765},
  {name:'Intel',size:159000},
  {name:'TSMC',size:129000},
];

const COLORS = [
    "#547540",
    "#10462B",
    "#657560",
    "#736960",
    "#786A25",
    "#5B5941"
  ];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
            stroke: '#1e2a3b',
            strokeWidth: 1 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
            {name}
          </text>
        ) : null}
        {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
            
          </text>
        ) : null}
      </g>
    );
  }
}

export default function Example(){
  // static demoUrl = 'https://codesandbox.io/s/treemap-with-customized-content-7qxfp';

    return (
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          width={900}
          height={600}
          data={data}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        />
      </ResponsiveContainer>
    );
  }
