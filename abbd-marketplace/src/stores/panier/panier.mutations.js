const mutations = {

    MAJ_ARTICLE_PANIER(state, produit,index) {
        state.produitsPanier[index] = produit;
    },

    AJOUTER_ARTICLE_PANIER(state, produit) {
        state.produitsPanier = [...state.produitsPanier, produit]
    },

    SUPPRIMER_ARTICLE_PANIER(state, index) {
        state.produitsPanier.splice(index,1);
    },

    METTRE_A_JOUR_PRIX_TOTAL(state, prix) {
        state.prixTotal = state.prixTotal - prix;

    },

    METTRE_A_JOUR_NOMBRE_PRODUITS(state, nombre) {
        state.nombreTotalDeProduit = state.nombreTotalDeProduit - nombre;
    },




}

export default mutations;

