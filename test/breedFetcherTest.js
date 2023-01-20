// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback',function (done) {
    this.timeout(5000);
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});
  it('returns an [] due to invalid breed , via callback', function (done) {
    this.timeout(5000);
    fetchBreedDescription('ERROR404', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      console.log(typeof(desc));
      const expectedDesc = [];

      // compare returned description
      assert.deepEqual(expectedDesc, desc);

      done();
    });
  });