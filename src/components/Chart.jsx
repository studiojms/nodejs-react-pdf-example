const React = require('react');
const { Global } = require('recharts');

const { htmlSvgToPdfSvg } = require('./imageFromSvg');

const ChartSvg = ({ debug, style, children, width, height }) => {
  return chartToPdfSvg(children, width, height, debug, style);
};

const chartToPdfSvg = (children, width, height, debug, style) => {
  Global.set('isSsr', true);
  const component = htmlSvgToPdfSvg(children);
  Global.set('isSsr', false);

  if (!component) {
    return null;
  }

  const result = React.cloneElement(component, { width, height, debug, style });
  return result;
};

module.exports = { ChartSvg };
