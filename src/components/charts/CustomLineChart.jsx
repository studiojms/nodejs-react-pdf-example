const React = require('react');
const { LineChart, CartesianGrid, XAxis, YAxis, Line } = require('recharts');

const { CustomAxisTick } = require('../CustomAxisTick');

function CustomLineChart({ data }) {
  return (
    <LineChart
      width={300}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 40,
      }}
      isAnimationActive={false}
    >
      <CartesianGrid />
      <XAxis dataKey="name" tick={<CustomAxisTick />} tickMargin={10} />
      <YAxis fontSize={12} />
      <Line type="monotone" dataKey="pv" stroke="#f00" />
      <Line type="monotone" dataKey="uv" stroke="#00f" />
    </LineChart>
  );
}

module.exports = { CustomLineChart };
