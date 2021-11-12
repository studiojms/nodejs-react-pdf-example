const React = require('react');
const path = require('path');
const fs = require('fs');

const { renderToFile } = require('@react-pdf/renderer');
const { TestDocument } = require('./components/Document');
const { getMovieDocument } = require('./components/MovieList');

async function createPdfWithChart() {
  try {
    const pdfPath = path.join(__dirname, '..', 'tmp', `my-doc-with-chart-${new Date().getTime()}.pdf`);
    console.log(`rendering chart to pdf...`);
    await renderToFile(<TestDocument />, pdfPath);

    console.log(`created pdf at ${pdfPath}`);
    return fs.readFileSync(pdfPath);
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function createPdfWithImage(year = 2012) {
  try {
    const pdfPath = path.join(__dirname, '..', 'tmp', `my-doc-with-image-${new Date().getTime()}.pdf`);
    console.log(`rendering image to pdf...`);

    const doc = await getMovieDocument(year);

    await renderToFile(doc, pdfPath);

    console.log(`created pdf at ${pdfPath}`);
    return fs.readFileSync(pdfPath);
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { createPdfWithChart, createPdfWithImage };
