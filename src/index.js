const express = require('express');
const { createPdfWithChart, createPdfWithImage } = require('./createPdf');

const app = express();

app.get('/', async (req, res) => {
  try {
    const pdf = await createPdfWithChart();
    res.contentType('application/pdf');
    res.send(pdf);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

app.get('/test', async (req, res) => {
  const { year } = req.query;
  try {
    const pdf = await createPdfWithImage(year);
    res.contentType('application/pdf');
    res.send(pdf);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
