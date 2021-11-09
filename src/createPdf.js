const React = require('react');
const path = require('path');
const fs = require('fs');

const { renderToFile } = require('@react-pdf/renderer');
const { TestDocument } = require('./Document');

async function createPdf() {
  try {
    const pdfPath = path.join(
      __dirname,
      '..',
      'tmp',
      `my-doc${parseInt(Math.random() * 10000)
        .toString()
        .padStart(5, '0')}.pdf`
    );
    await renderToFile(<TestDocument />, pdfPath);
    return fs.readFileSync(pdfPath);
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { createPdf };
