const React = require('react');
const { BarChart, Bar, CartesianGrid, XAxis, YAxis } = require('recharts');

const { CustomAxisTick } = require('../CustomAxisTick');

function CustomBarChart({ data }) {
  return (
    <BarChart
      width={500}
      height={200}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20,
      }}
      data={data}
    >
      <CartesianGrid />
      <XAxis dataKey="name" tick={<CustomAxisTick />} tickMargin={10} />
      <YAxis fontSize={12} tickMargin={10} />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}

module.exports = { CustomBarChart };
