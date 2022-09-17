const express = require("express");
// const userSchema = require("../models/user");

const router = express.Router();

// Validate Mutant
/**
 * @swagger
 * components:
 *  schemas:
 *    Mutant:
 *      type: object
 *      properties:
 *        dna:
 *          type: string[]
 *          description: Recibe la cadena serializada de ADN, para evaluar el posible mutante
 *      required:
 *        - dna
 *      example:
 *        dna: [ 'ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']
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
  res.status(403).send("Oh uh, something went wrong");
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
router.get("/stats/", (req, res) => {
//   userSchema
//     .find()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
});

module.exports = router;