const axios = require('axios').default;
const actions = {
    chargerProduits(context) {
        axios.get('https://fakestoreapi.com/products')
            .then(
                res=>{
                    context.commit('MAJ_PRODUIT',res.data);
                }
            )
            .catch(
                erreur=>{
                    console.log(erreur)
                }
            )
    },
}

export default actions;
