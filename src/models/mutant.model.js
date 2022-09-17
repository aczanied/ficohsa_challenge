const mongoose = require("mongoose");

const mutantSchema = mongoose.Schema({
  validationDate: {
    type: Date,
    required: true,
  },
  isMutant: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Mutant', mutantSchema);