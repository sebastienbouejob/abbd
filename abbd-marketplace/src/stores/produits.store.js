import mutationsProduits from './produits/produits.mutations'
import actionsProduits from './produits/produits.actions'
import gettersProduits from './produits/produits.getters'
import stateProduits from './produits/produits.state'

const ProduitsStore=  {
    namespaced:true,
    state :stateProduits,
    getters :gettersProduits,
    mutations :mutationsProduits,
    actions : actionsProduits
}

export default ProduitsStore;
