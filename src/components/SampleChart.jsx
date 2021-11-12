const React = require('react');
const { CartesianGrid, Line, LineChart, XAxis, YAxis, ScatterChart, Scatter } = require('recharts');

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function CustomAxisTick({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fontSize={13} fill="#666" transform="rotate(-45)">
        {payload.value}
      </text>
    </g>
  );
}
function SampleChart() {
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

const MyRechartsChart = ({ width, height, data = getSampleData() }) => {
  return (
    <ScatterChart
      width={width}
      height={height}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid />
      <XAxis name="x" dataKey="x" fontSize={12} tickMargin={10} />
      <YAxis name="y" dataKey="y" fontSize={12} />
      <Scatter name="My Scatter" data={data} fill="#008800" />
    </ScatterChart>
  );
};

function getSampleData() {
  return [
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 150 },
    { x: 150, y: 200 },
    { x: 125, y: 150 },
  ];
}

module.exports = { SampleChart, MyRechartsChart };
