var assert      = require('assert');
var standardID  = require('./../index');

describe('Use built in definitions', () => {

  it('Check the id is the correct length', () => {
    let blueprint = "AAAA00000"
    let idGenerator = new standardID(blueprint);
    let id = idGenerator.generate();
    assert.equal(blueprint.length, id.length, 'The id is not the length of the blueprint');
  })

  it('Give a blueprint of just numbers', () => {
    let idGenerator = new standardID("0000");
    let id = idGenerator.generate();
    assert(/^\d{4}/.test(id), 'The id did not fit the blueprint')
  });


  it('Give a blueprint of just uppercase letters', () => {
    let idGenerator = new standardID("AAAA");
    let id = idGenerator.generate();
    assert(/^[A-Z]{4}/.test(id), 'The id did not fit the blueprint')
  });

  it('Give a blueprint of just lowercase letters', () => {
    let idGenerator = new standardID("aaaa");
    let id = idGenerator.generate();
    assert(/^[a-z]{4}/.test(id), 'The id did not fit the blueprint')
  })

  it('Use all blueprints in one generation', () => {
    let idGenerator = new standardID("a0A");
    let id = idGenerator.generate();
    assert(/^[a-z]\d[A-Z]/.test(id), 'The id did not fit the blueprint')
  })

  it('Give a blueprint with unknown values and keep them', () => {
    let idGenerator = new standardID("000AAA-AAA");
    let id = idGenerator.generate();
    assert(/^\d{3}[A-Z]{3}-[A-Z]{3}/.test(id), 'The id did not fit the blueprint')
  });

  it('Give an empty blueprint', () => {
    let idGenerator = new standardID("");
    assert.throws(idGenerator.generate, Error);
  });

});
