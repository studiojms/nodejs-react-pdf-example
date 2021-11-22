const React = require('react');
const { CustomBarChart } = require('./charts/CustomBarChart');
const { CustomLineChart } = require('./charts/CustomLineChart');
const { CustomScatterChart } = require('./charts/CustomScatterChart');

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

function getSampleData() {
  return [
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 150 },
    { x: 150, y: 200 },
    { x: 125, y: 150 },
  ];
}

function SampleLineChart() {
  return <CustomLineChart data={data} />;
}

function SampleScatterChart({ width, height }) {
  return <CustomScatterChart width={width} height={height} data={getSampleData()} />;
}

function SampleBarChart() {
  return <CustomBarChart data={data} />;
}

module.exports = { SampleLineChart, SampleScatterChart, SampleBarChart };
