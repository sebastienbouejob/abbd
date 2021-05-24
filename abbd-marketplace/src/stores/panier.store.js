import mutationsPanier from './panier/panier.mutations'
import actionsPanier from './panier/panier.actions'
import gettersPanier from './panier/panier.getters'
import statePanier from './panier/panier.state'

const PanierStore=  {
    namespaced:true,
    state :statePanier,
    getters :gettersPanier,
    mutations :mutationsPanier,
    actions : actionsPanier
}

export default PanierStore;
