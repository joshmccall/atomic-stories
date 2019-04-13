// const build = require('../build/asset-manifest.json');
// import FindYourContact from "./stories/FindYourContact";

export function test() {
  // eslint-disable-next-line no-console
  console.log('test123');
  return ({
    FindYourContact: require('./stories/FindYourContact.tsx')
    // build
  });
}
