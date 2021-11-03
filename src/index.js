const express = require('express');
const { createPdf } = require('./createPdf');

const app = express();

app.get('/', async (req, res) => {
  try {
    const pdf = await createPdf();
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
