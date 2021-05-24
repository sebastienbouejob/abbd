const mutations = {
    activerItem(state, itemSelectionne) {
        state.itemsMenu.forEach((item )=> {
            item.actif = item.nom === itemSelectionne.nom;
        })
    },
}


export default mutations;

