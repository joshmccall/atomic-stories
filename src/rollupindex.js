const build = require('../build/asset-manifest.json');
// import FindYourContact from "./stories/FindYourContact";


export const FindYourContact = require('./stories/FindYourContact.tsx');

export function test() {
  // eslint-disable-next-line no-console
  console.log('test123');
  return build;
}
