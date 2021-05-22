const getters = {
    nombreDeLignesDuTableau(state) {
        return state.plateau.length;
    },
    nombreDeCasesParLigneDuTableau(state) {
        return state.plateau[0].length;
    },

    partie(state) {

        let partie = {
            plateau: state.plateau,
            score: state.score,
            tour: state.tour,
            nom: state.nom
        }
        return partie
    },
}

export default getters;