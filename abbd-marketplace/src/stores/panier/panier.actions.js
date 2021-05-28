const actions = {

    ajouterProduit(context, produit) {
        let produitSauvegarder = {
            id: produit.id,
            title: produit.title,
            price: produit.price,
            description: produit.description,
            category: produit.category,
            image: produit.image,
            nombre: incrementerNombre(context.state, produit),
            prix: calculerPrix(context.state, produit),
        }

        let index = context.state.produitsPanier.findIndex(p => p.id === produit.id)

        if (index > -1) {
            context.commit('MAJ_ARTICLE_PANIER',produitSauvegarder);
        } else {
            context.commit('AJOUTER_ARTICLE_PANIER',produitSauvegarder);
        }

        context.state.nombreTotalDeProduit +=1;
        context.state.prixTotal = context.state.prixTotal + produitSauvegarder.price;
    },

    supprimerDuPanier( context,produit) {

        let index = context.state.produitsPanier.findIndex(p => p.id === produit.id)

        if (index > -1) {
            context.commit('SUPPRIMER_ARTICLE_PANIER',index);
        }

        context.commit('METTRE_A_JOUR_PRIX_TOTAL',produit.prix);
        context.commit('METTRE_A_JOUR_NOMBRE_PRODUITS',produit.nombre);
    },


}

export default actions;




const incrementerNombre = (state, produit) => {
    if (state.produitsPanier.length === 0) {
        return 1;
    } else {
        let produitsPanier = [...state.produitsPanier];
        let index = produitsPanier.findIndex(p => p.id === produit.id);
        return index > -1 ? produitsPanier[index].nombre += 1 : 1;
    }
}

const calculerPrix = (state, produit) => {

    if (state.produitsPanier.length === 0) {
        return produit.price;
    } else {
        let produitsPanier = [...state.produitsPanier];
        let index = produitsPanier.findIndex(p => p.id === produit.id)
        return index > -1 ? produitsPanier[index].prix = produitsPanier[index].price * (produitsPanier[index].nombre) : produit.price;

    }

}
