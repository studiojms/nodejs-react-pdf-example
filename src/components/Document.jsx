const React = require('react');
const { Document, Page, Text, View, Line } = require('@react-pdf/renderer');
const { SampleChart, MyRechartsChart, BarChart } = require('./SampleChart');
const { ChartSvg } = require('./Chart');

function TestDocument() {
  return (
    <Document>
      <Page>
        <Text>React-pdf</Text>
        <View>
          <Text>Chart</Text>
          <ChartSvg width={800} height={600}>
            <SampleChart />
          </ChartSvg>
          <ChartSvg width={800} height={600}>
            <MyRechartsChart width={400} height={200} />
          </ChartSvg>
        </View>
      </Page>
    </Document>
  );
}

module.exports = { TestDocument };
