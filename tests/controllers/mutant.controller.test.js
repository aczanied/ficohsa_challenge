const mutantController = require('./../../src/controllers/mutant.controller');

test('dnaShouldNotBeMutant', async () => {
  expect(await mutantController.validateDnaMutant(["x", "y"])).toBe(false);
});