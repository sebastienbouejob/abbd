import Vue from 'vue'
import VueRouter from 'vue-router'
import Panier from "./views/AbbdPanier";
import Produits from "./views/AbbdProduits";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'produits',
            path: '/produits',
            component: Produits,
        },
        {
            name: 'panier',
            path: '/panier',
            component: Panier,
        } ,{
            name: 'nouvelle-selection',
            path: '*',
            component: Produits,
        },
    ],
});

export default router;
