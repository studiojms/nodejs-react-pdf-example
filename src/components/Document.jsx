const React = require('react');
const { Document, Page, Text, View, StyleSheet, Line } = require('@react-pdf/renderer');
const { SampleChart, MyRechartsChart } = require('./SampleChart');
const { ChartSvg } = require('./Chart');

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecoration: 'underline',
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  line: {
    borderBottom: 1,
    marginBottom: 40,
  },
  chartTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
});

function TestDocument() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>React PDF test</Text>
        <View style={styles.section}>
          <Text style={styles.chartTitle}>Chart</Text>
          <ChartSvg width={800} height={800}>
            <SampleChart />
          </ChartSvg>
          <Line style={styles.line} />
          <Text style={styles.chartTitle}>Chart 2</Text>
          <ChartSvg width={800} height={600}>
            <MyRechartsChart width={400} height={200} />
          </ChartSvg>
        </View>
      </Page>
    </Document>
  );
}

module.exports = { TestDocument };
