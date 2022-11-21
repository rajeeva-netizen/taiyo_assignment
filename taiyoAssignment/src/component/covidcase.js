import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie } from 'recharts';

const data = [
  {
    name: 'active',
    uv: 4000,
    pv: 14216321,
    amt: 2400,
  },
  {
    name: 'cases',
    uv: 3000,
    pv: 642995017,
    amt: 2210,
  },
  {
    name: 'deaths',
    uv: 2000,
    pv: 6625800,
    amt: 2290,
  },
  {
    name: 'Population',
    uv: 2780,
    pv: 7944933753,
    amt: 2000,
  },
  {
    name: 'recovered',
    uv: 1890,
    pv: 622152896,
    amt: 2181,
  },
];
export default function CovidCase() {
    return (

        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
 
    
    );
  }



//export default CovidCase