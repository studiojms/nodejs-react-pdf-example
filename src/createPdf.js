const React = require('react');
const path = require('path');

const { renderToFile } = require('@react-pdf/renderer');
const { TestDocument } = require('./Document');

async function createPdf() {
  try {
    await renderToFile(<TestDocument />, path.join(__dirname, '..', 'tmp', 'my-doc.pdf'));
    return 'pdf created';
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { createPdf };
