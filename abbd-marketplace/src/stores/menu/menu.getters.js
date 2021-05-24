const getters = {
    itemProduit(state) {
        return  state.itemsMenu.find(item=>item.nom === 'produits');
    },
    itemPanier(state) {
        return  state.itemsMenu.find(item=>item.nom === 'panier');
    },

}

export default getters;
