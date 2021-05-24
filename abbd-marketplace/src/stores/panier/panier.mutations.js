const mutations = {
    ajouterProduit(state, produit) {
        let produitSauvegarder = {
            id: produit.id,
            title: produit.title,
            price: produit.price,
            description: produit.description,
            category: produit.category,
            image: produit.image,
            nombre: incrementerNombre(state, produit),
            prix: calculerPrix(state, produit),
        }

        let index = state.produitsPanier.findIndex(p => p.id === produit.id)

        if (index > -1) {
            state.produitsPanier[index] = produitSauvegarder;
        } else {
            state.produitsPanier = [...state.produitsPanier, produitSauvegarder]
        }

        state.nombreTotalDeProduit +=1;
        state.prixTotal = state.prixTotal + produitSauvegarder.price;
    },

    supprimerDuPanier(state, produit) {

        let index = state.produitsPanier.findIndex(p => p.id === produit.id)

        if (index > -1) {
            state.produitsPanier.splice(index,1);
        }

        state.prixTotal = state.prixTotal - produit.prix;
        state.nombreTotalDeProduit = state.nombreTotalDeProduit - produit.nombre;
    },
}

export default mutations;

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
