
const validateDnaMutant =  async (dna = []) => {
    console.log('datos de prueba xd', dna);
    return await isMutant(dna);
 }

const isMutant = async (dna = []) => {
    let diagonal = [undefined, 0];
    let vertical = [undefined, 0];
    let horizontal = [undefined, 0];
    let total = 0;

    //Ciclo para recorrer ADN
    for (let dnaIndex = 0; dnaIndex < dna.length; dnaIndex++) {
        let gen = dna[dnaIndex];

        //Ciclo para recorrer letras del ADN
        for (let charIndex = 0; charIndex < dna.length; charIndex++) {
            let horizontalSecuence = gen[charIndex];

            if (horizontal[0] != horizontalSecuence) {
                horizontal[0] = horizontalSecuence;
                horizontal[1] = 1;
            }
            else {
                horizontal[0] = horizontalSecuence;
                horizontal[1] ++;
            }

            if (horizontal[1] == 4) {
                if(++total > 1){
                    return true;
                }
            }

            //vertical
            let verticalSecuence = dna[charIndex][dnaIndex];
            if (vertical[0] != verticalSecuence) {
                vertical[0] = verticalSecuence;
                vertical[1] = 1;
            }
            else {
                vertical[0] = verticalSecuence;
                vertical[1]++;
            }

            if (vertical[1] == 4) {
                if(++total > 1){
                    return true;
                }
            }
        }

        //diagonal
        let diagonalSecuence = dna[dnaIndex][dnaIndex];

        if (diagonal[0] != diagonalSecuence) {
            diagonal[0] = diagonalSecuence;
            diagonal[1] = 1;
        }
        else {
            diagonal[0] = diagonalSecuence;
            diagonal[1]++;
        }

        if (diagonal[1] == 4) {
            if(++total > 1){
                return true;
            }
        }

        horizontal = [undefined, 0];
        vertical = [undefined, 0];
    }

    return false;
};

exports.validateDnaMutant = validateDnaMutant;