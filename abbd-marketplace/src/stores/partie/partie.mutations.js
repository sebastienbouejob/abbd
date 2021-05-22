const mutations = {
    chargerNouvellePartie(state) {

        state.plateau = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]

        state.score = 0;
        state.tour = 1;
        state.nom = '';

        let plateau = state.plateau.slice()

        for (var i = 0; i < 2; i++) {
            let jeton = {
                ligne: Math.floor(Math.random() * plateau.length),
                colonne: Math.floor(Math.random() * plateau[0].length),
                valeur: Math.floor(Math.random() > 0.5 ? 4 : 2)
            }

            if (plateau[jeton.ligne][jeton.colonne] === 0) {
                plateau[jeton.ligne][jeton.colonne] = jeton.valeur;
            } else {
                i--;
            }
        }
        state.plateau = plateau;
        state.score = calculerScore(plateau);
        state.tour = 1;

    },
    chargerPartie(state, partie) {
        state.plateau = partie.plateau;
        state.score = partie.score;
        state.nom = partie.nom;
        state.tour = partie.tour;
    },
    deplacerLesJetons(state, direction) {
        switch (direction) {
            case 'droite':
                deplacerLesJetonsADroite(state);
                state.tour = state.tour + 1;
                state.score = calculerScore(state.plateau);
        }
    },

}


export default mutations;

const deplacerLesJetonsADroite = (state) => {

    let plateau = [...state.plateau];

    plateau.forEach((colonnes, indexLigne) => {
        for (var indexColonne = plateau[0].length - 1; indexColonne >= 0; indexColonne--) {
            if (plateau[indexLigne][indexColonne] !== 0) {
                let nouvelleColonne = rechercherLaCaseVideLaPlusADroite(plateau, indexLigne, indexColonne, state.plateau[0].length);
                plateau[indexLigne][nouvelleColonne] = plateau[indexLigne][indexColonne];

                if (nouvelleColonne !== plateau[indexLigne].length - 1 &&
                    plateau[indexLigne][nouvelleColonne] === plateau[indexLigne][nouvelleColonne + 1]) {
                    plateau[indexLigne][nouvelleColonne + 1] = plateau[indexLigne][nouvelleColonne + 1] + plateau[indexLigne][nouvelleColonne];
                    plateau[indexLigne][nouvelleColonne] = 0;
                } else if (nouvelleColonne !== indexColonne) {
                    plateau[indexLigne][indexColonne] = 0;
                }
            }
        }
    })

    if(!verifierSiPartieTerminee(state)){
        ajouterUnJeton(plateau);
        state.plateau = plateau;
    }else{
        console.log("PARTIE TERMINEE !!")
    }


}
const verifierSiPartieTerminee = (state)=>{

    let nombreDeCaseRemplies = 0;
    state.plateau.forEach((colonnes)=>{
        colonnes.forEach((valeur)=>{
             valeur!==0 ? nombreDeCaseRemplies ++ : '';
        })
    })

    return nombreDeCaseRemplies===state.plateau.length * state.plateau[0].length;
}

const rechercherLaCaseVideLaPlusADroite = (plateau, indexLigne, indexColonne, nombreDeCasesParLigneDuTableau) => {
    let indexColonneAOccuper = indexColonne;
    if (indexColonne === nombreDeCasesParLigneDuTableau - 1) {
        indexColonneAOccuper = indexColonne;
    } else {
        for (var i = nombreDeCasesParLigneDuTableau; i > indexColonne; i--) {
            if (plateau[indexLigne][i] === 0) {
                indexColonneAOccuper = i;
                break;
            }
        }
    }
    return indexColonneAOccuper;
}

const ajouterUnJeton = (plateau) => {
    let jetonInitialise = false;

    while (!jetonInitialise) {
        let jeton = {
            ligne: Math.floor(Math.random() * plateau.length),
            colonne: Math.floor(Math.random() * plateau[0].length),
            valeur: Math.floor(Math.random() > 0.5 ? 4 : 2)
        }
        if (plateau[jeton.ligne][jeton.colonne] === 0) {
            plateau[jeton.ligne][jeton.colonne] = jeton.valeur;
            jetonInitialise = true;
        }
    }


}

const calculerScore = (plateau) => {
    let score = 0;

    plateau.forEach((colonnes) => {
        colonnes.forEach((valeur) => {
            score += valeur;
        })
    })

    return score;

}