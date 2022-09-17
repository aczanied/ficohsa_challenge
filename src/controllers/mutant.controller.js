
const validateDnaMutant =  async (dna) => {
    if (await validateDnaSecuence(dna)) {
        return await isMutant(dna);
    } 
 }

 const validateDnaSecuence = async (dna) => { 
    
    const dnaSecuenceLenght = 6;
    const splittedDna = dna.toString().replace(' ', '').split(",");
   
    splittedDna.forEach(secuence => {
       
        if (secuence.length !== dnaSecuenceLenght && splittedDna.length !== dnaSecuenceLenght) {
            console.log(dna,   secuence.length, splittedDna.length , dnaSecuenceLenght );
            throw 'DNA_INCORRECT_SECUENCE';
        }
        const pattern = /[^ATCG]/g;
        if (secuence.match(pattern) !== null  && secuence.match(pattern).length > 0) {
            throw 'DNA_INCORRECT_BASE';
        }
    });

    return true;
 }

const isMutant = async (dna = []) => {

    const patternA = /[A]{4}/g;
    const patternT = /[T]{4}/g;
    const patternC = /[C]{4}/g;
    const patternG = /[G]{4}/g;
   
    const dnaSecuenceLenght = 6;
    const splittedDna = dna.toString().split(",");
    let isMutantState = false;
    let idx = 0;
    
    splittedDna.forEach(secuence => {
       
        let idj = 0;
        let verticalSecuence = "";
        let diagonalSecuence = "";

        for (let index = 0; index < dnaSecuenceLenght; index++) {
            const verticalElement = splittedDna[index].toString()[idx];
            verticalSecuence = verticalSecuence + verticalElement;

            const diagonalElement = splittedDna[index].toString()[idj];
            diagonalSecuence = diagonalSecuence + diagonalElement;
            idj++;
        }

         // Evaluate Horizontal Matrix
         if (secuence.match(patternA) || secuence.match(patternT) || secuence.match(patternC) || secuence.match(patternG)) {
            isMutantState = true;
        }
        // Evaluate Vertical Matrix
        if (verticalSecuence.match(patternA) || verticalSecuence.match(patternT) || verticalSecuence.match(patternC) || verticalSecuence.match(patternG)) {
            isMutantState = true;
        }

         // Evaluate Diagonal Matrix
        if (diagonalSecuence.match(patternA) || diagonalSecuence.match(patternT) || diagonalSecuence.match(patternC) || diagonalSecuence.match(patternG)) {
            isMutantState = true;
        }
       
        idx++;
     });

    return isMutantState;
};

exports.validateDnaMutant = validateDnaMutant;