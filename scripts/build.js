const zl = require('zip-lib');

const info = require('../package.json');

const name = info.name.split('/').pop();

<<<<<<< HEAD
const filepath = `./dist/ows-npc-data.lcp`;
=======
const filepath = `./dist/ows-data.lcp`;
>>>>>>> origin/v3

zl.archiveFolder('./lib', filepath).then(
  function () {
    console.log('done');
  },
  function (err) {
    console.log(err);
  },
);
