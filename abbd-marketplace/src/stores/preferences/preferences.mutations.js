const mutations = {
    sauvegarderPartie(state, partie) {
        let partieASauvegarder = {
            nom: partie.nom,
            score: partie.score,
            tour: partie.tour,
            plateau: copierValeursPlateau(partie.plateau),
        }
        state.parties = [...state.parties, partieASauvegarder]
    },


}

export default mutations;

const copierValeursPlateau = (plateau) => {
    let nouveauPlateau = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    plateau.forEach((colonnes, indexLigne) => {
        colonnes.forEach((valeur, indexColonne) => {
            nouveauPlateau[indexLigne][indexColonne] = valeur;
        })
    });
    return nouveauPlateau;

}

