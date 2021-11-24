const React = require('react');
const { Document, Page, Text, View, StyleSheet, Line } = require('@react-pdf/renderer');

const { SampleLineChart, SampleScatterChart, SampleBarChart } = require('./SampleChart');
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
  sideBySide: {
    display: 'flex',
    flexDirection: 'row',
  },
  paragraph: {
    fontSize: 10,
    maxWidth: '40%',
    marginTop: 20,
  },
});

function TestDocument() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>React PDF test</Text>
        <View style={styles.section}>
          <Text style={styles.chartTitle}>Line Chart</Text>
          <View style={styles.sideBySide}>
            <ChartSvg width={500} height={800}>
              <SampleLineChart />
            </ChartSvg>
            <Text style={styles.paragraph}>
              Pulvinar pellentesque habitant morbi tristique senectus et netus. Nunc eget lorem dolor sed viverra ipsum
              nunc aliquet bibendum. Enim ut tellus elementum sagittis vitae et leo duis ut. Adipiscing vitae proin
              sagittis nisl. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id nibh
              tortor id aliquet lectus proin nibh nisl condimentum. Platea dictumst vestibulum rhoncus est pellentesque.
            </Text>
          </View>
          <Line style={styles.line} />
          <Text style={styles.chartTitle}>Scatter Chart</Text>
          <ChartSvg width={800} height={600}>
            <SampleScatterChart width={400} height={200} />
          </ChartSvg>
          <Line style={styles.line} />
          <Text style={styles.chartTitle}>Bar Chart</Text>
          <ChartSvg width={800} height={600}>
            <SampleBarChart />
          </ChartSvg>
        </View>
      </Page>
    </Document>
  );
}

module.exports = { TestDocument };
