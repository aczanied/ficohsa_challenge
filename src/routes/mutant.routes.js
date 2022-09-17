const express = require("express");
const router = express.Router();

const mutantController = require('./../controllers/mutant.controller');
const mutantService = require('./../services/mutant.service');

// Validate Mutant
/**
 * @swagger
 * components:
 *  schemas:
 *    Mutant:
 *      type: object
 *      properties:
 *        dna:
 *          type: array
 *          description: Recibe la cadena serializada de ADN, para evaluar el posible mutante
 *      required:
 *        - dna
 *      example:
 *        dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
 */
/**
 * @swagger
 * /api/mutant/:
 *  post:
 *    summary: Evalua si una persona es mutante o no.
 *    tags: [Mutant]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Mutant'
 *    responses:
 *      200:
 *        description: OK
 *      403:
 *        description: Forbidden
 */
router.post("/mutant/", (req, res) => {
  mutantController.validateDnaMutant(req.body.dna).then(async (isMutant) => {
    
    await mutantService.storeDnaValidation(isMutant).then(() => {
      res.status(200).send("OK");
    })
    // .catch(() => {
    //   res.status(403).send("Oh uh, something went wrong.");
    // })
  }).catch(error => {
    res.status(403).send(error);
  })
});

// get all DNA Validated
/**
 * @swagger
 * /api/stats/:
 *  get:
 *    summary: Obtiene las estadisticas de los ADNs evaluados
 *    tags: [Mutant]
 *    responses:
 *      200:
 *        description: OK
 *      403:
 *        description: Forbidden
 */
router.get("/stats/", async (req, res) => {
  await mutantService.getAllDnaValidations().then(response => {
    
    const total = response.length;
    const mutants = response.filter(c => c.isMutant).length;
    const result = {
      count_mutant_dna: mutants, 
      count_human_dna: total,
      ratio: mutants/total
    }
   
     res.status(200).send(result);
  })
  .catch((error) => {
    console.log(error);
    res.status(403).send(error);
  })
});

module.exports = router;