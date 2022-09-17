const mutantSchema = require("./../models/mutant.model");

const storeDnaValidation =  async (isMutant) => { 
    
    const mutant = mutantSchema({ validationDate: Date.now() , isMutant: isMutant });
    console.log('storeDnaValidation', mutant);
    await mutant.save(); 
}

const getAllDnaValidations =  async () => { 
    
    return await mutantSchema.find();
    
}

exports.storeDnaValidation = storeDnaValidation;
exports.getAllDnaValidations = getAllDnaValidations;