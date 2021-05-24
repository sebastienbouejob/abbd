import Vue from 'vue';
import Vuex from 'vuex'
import MenuStore from "./stores/menu.store";
import ProduitsStore from "./stores/produits.store";
import PanierStore from "./stores/panier.store";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        MenuStore,
        ProduitsStore,
        PanierStore
    },
});

export default store;
