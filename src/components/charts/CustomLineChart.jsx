const React = require('react');
const { LineChart, CartesianGrid, XAxis, YAxis, Line } = require('recharts');

function CustomAxisTick({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fontSize={13} fill="#666" transform="rotate(-45)">
        {payload.value}
      </text>
    </g>
  );
}

function CustomLineChart({ data }) {
  return (
    <LineChart
      width={500}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 100,
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
