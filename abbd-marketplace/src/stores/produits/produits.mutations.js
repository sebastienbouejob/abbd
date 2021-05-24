const axios = require('axios').default;
const mutations = {
    chargerProduits(state) {
        console.log({...this.form});
        axios.get('https://fakestoreapi.com/products')
            .then(
                res=>{
                    state.produits = res.data;
                }
            )
            .catch(
                erreur=>{
                    console.log(erreur)
                }
            )
    },
}


export default mutations;

