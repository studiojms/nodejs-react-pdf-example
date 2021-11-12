const React = require('react');

const axios = require('axios');
const { MovieDocument } = require('./MovieDocument');

const API_KEY = 'c0ae854ba8255b07b83c94d52ed26ea4';

async function getMovieDocument(year) {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=vote_average.desc`
    );

    const data = response.data.results;

    return <MovieDocument data={data} />;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getMovieDocument };
