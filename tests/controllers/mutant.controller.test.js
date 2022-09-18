const mutantController = require('./../../src/controllers/mutant.controller');

test('dnaShouldNotBeIncorrectSecuence', async () => {

  expect.assertions(1);
  return  mutantController.validateDnaMutant(['x', 'y']).catch(err => {
    expect(err).toEqual("DNA_INCORRECT_SECUENCE");
  });

});

test('dnaShouldNotBeIncorrectBase', async () => {

  expect.assertions(1);
  return mutantController.validateDnaMutant(['xxxxxx', 'yyyyyy','xxxxxx', 'yyyyyy','xxxxxx', 'yyyyyy' ]).catch(err => {
    expect(err).toEqual("DNA_INCORRECT_BASE");
  });
});

test('dnaShouldDetectHorizontalMutant', async () => {
 
  return mutantController.validateDnaMutant(["ATGCGA", "CAGTGC", "TTATGT","AGAAGG","CCCCTA", "TCACTT"]).then(res => {
   
    expect(res).toBe(true);
  })
});

test('dnaShouldDetectVerticalMutant', async () => {
 
  return mutantController.validateDnaMutant(["GGGGGA", "CAGTGC", "TTTTGT","AAAAGG","CCCCTA", "TCACTT"]).then(res => {
   
    expect(res).toBe(true);
  })
});

test('dnaShouldDetectDiagonalMutant', async () => {
 
  return mutantController.validateDnaMutant(["ATGCAA", "CAGTGC", "TTATGT","AGAAGG","ACCCTA", "TCACTT"]).then(res => {
   
    expect(res).toBe(true);
  })
});

test('dnaShouldNotBeMutant', async () => {
  
  // ["ATGCGA", "CAGTGC", "TTATTT","AGACGG","GCGTCA", "TCACTG"]
  return mutantController.validateDnaMutant(["ATGCGA","CAGTAC","TTATGT","CGAGGG","CCTCTA","TCACTG"]).then(res => {
   
    expect(res).toBe(false);
  })
});