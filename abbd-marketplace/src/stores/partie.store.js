import mutationsPlateau from './partie/partie.mutations'
import actionsPlateau from './partie/partie.actions'
import gettersPlateau from './partie/partie.getters'
import statePlateau from './partie/partie.state'

const PartieStore=  {
    namespaced:true,
    state :statePlateau,
    getters :gettersPlateau,
    mutations :mutationsPlateau,
    actions : actionsPlateau
}

export default PartieStore;