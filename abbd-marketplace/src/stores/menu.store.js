import mutationsMenu from './menu/menu.mutations'
import actionsMenu from './menu/menu.actions'
import gettersMenu from './menu/menu.getters'
import stateMenu from './menu/menu.state'

const MenuStore=  {
    namespaced:true,
    state :stateMenu,
    getters :gettersMenu,
    mutations :mutationsMenu,
    actions : actionsMenu
}

export default MenuStore;
