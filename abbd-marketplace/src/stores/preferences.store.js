import mutationsPreferences from './preferences/preferences.mutations'
import actionsPreferences from './preferences/preferences.actions'
import gettersPreferences from './preferences/preferences.getters'
import statePreferences from './preferences/preferences.state'

const PreferencesStore=  {
    namespaced:true,
    state : statePreferences,
    getters : gettersPreferences,
    mutations : mutationsPreferences,
    actions : actionsPreferences
}

export default PreferencesStore;