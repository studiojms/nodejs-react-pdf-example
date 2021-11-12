const React = require('react');
const ReactDom = require('react-dom/server');
const reactHtmlParser = require('react-html-parser');

const htmlSvgToPdfSvg = (children) => {
  const svgString = ReactDom.renderToStaticMarkup(children).replaceAll('px', 'pt');

  const [component] = reactHtmlParser.default(svgString, { transform: convertToPdfSvg });
  return component;
};

function convertToPdfSvg(node, index) {
  if (node.type == 'text') {
    return node.data;
  }

  node.props = { key: index };

  Object.entries(node.attribs).forEach(([key, value]) => {
    const [first, ...rest] = key.split('-');

    const newKey = [first, ...rest.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)].join('');
    node.props[newKey] = value;
  });

  node.name = node.name?.toUpperCase();
  if (node.name == 'CLIPPATH') node.name = 'CLIP_PATH';

  // we're removing nested <defs> because they don't work
  if (node.name == 'DEFS' && node.parent.name != 'SVG') return null;

  if (node.children) node.children = node.children.map(convertToPdfSvg);
  return React.createElement(node.name, node.props, node.children);
}

module.exports = {
  htmlSvgToPdfSvg,
};
