const React = require('react');
const { Document, Page, Text } = require('@react-pdf/renderer');

function TestDocument() {
  return (
    <Document>
      <Page>
        <Text>React-pdf</Text>
      </Page>
    </Document>
  );
}

module.exports = { TestDocument };
