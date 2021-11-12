const React = require('react');
const { Page, Text, View, Document, StyleSheet, Image } = require('@react-pdf/renderer');
const path = require('path');

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  movieContainer: {
    backgroundColor: '#f6f6f5',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  movieDetails: {
    display: 'flex',
    marginLeft: 5,
  },
  movieTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  movieOverview: {
    fontSize: 10,
  },

  image: {
    height: 200,
    width: 150,
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    marginBottom: 12,
  },
  vote: {
    display: 'flex',
    flexDirection: 'row',
  },
  rating: {
    height: 10,
    width: 10,
  },
  vote_text: {
    fontSize: 10,
  },
  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: '#61C74F',
    color: '#fff',
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4,
  },
  overviewContainer: {
    minHeight: 110,
  },
  detailsFooter: {
    display: 'flex',
    flexDirection: 'row',
  },
  lang: {
    fontSize: 8,
    fontWeight: 700,
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: 'bold',
  },
});

function MovieDocument(props) {
  console.log('pdf props', props.data);
  return (
    <Document>
      <Page style={styles.page}>
        {props.data
          ? props.data.map((a, index) => {
              return (
                <View key={index} style={styles.movieContainer}>
                  <Image
                    style={styles.image}
                    source={
                      a.poster_path !== null
                        ? `${POSTER_PATH}${a.poster_path}`
                        : path.join(__dirname, '..', '..', 'img', '150.jpeg')
                    }
                  />
                  <View style={styles.movieDetails}>
                    <Text style={styles.movieTitle}>{a.title}</Text>
                    <View style={styles.subtitle}>
                      <View style={styles.vote}>
                        <Image source={path.join(__dirname, '..', '..', 'img', 'star.png')} style={styles.rating} />
                        <Text style={styles.vote_text}>{a.vote_count}</Text>
                      </View>
                      <View style={styles.vote}>
                        <Text style={styles.vote_pop}>{a.popularity}</Text>
                        <Text style={styles.vote_pop_text}>Popularity</Text>
                      </View>
                    </View>
                    <View style={styles.overviewContainer}>
                      <Text style={styles.movieOverview}>{a.overview}</Text>
                    </View>
                    <View style={styles.detailsFooter}>
                      <Text style={styles.lang}>Language: {a.original_language.toUpperCase()}</Text>
                      <Text style={styles.vote_average}>Average Votes: {a.vote_average}</Text>
                      <Text style={styles.vote_average}>Release Date: {a.release_date}</Text>
                    </View>
                  </View>
                </View>
              );
            })
          : ''}
      </Page>
    </Document>
  );
}

module.exports = { MovieDocument };
