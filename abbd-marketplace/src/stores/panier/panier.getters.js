const getters = {

    produitsPanier(state) {
        return  state.produitsPanier;
    },

    nombreTotalDeProduit(state){
        return state.nombreTotalDeProduit;
    },

    prixTotal(state){
        return state.prixTotal;
    }

}

export default getters;
