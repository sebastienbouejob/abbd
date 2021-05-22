import Vue from 'vue';
import Vuex from 'vuex'
import PartieStore from './stores/partie.store'
import PreferencesStore from "./stores/preferences.store";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        PartieStore,
        PreferencesStore
    },
});

export default store;