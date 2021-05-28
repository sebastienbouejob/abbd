<template>
    <div class="liste-produits">

        <div class="titre-liste-produits">
            All our products
            <div class="titre-nombre-produits">{{produits.length}} article(s)</div>
        </div>
        <div  v-if="produits.length===0" class="conteneur-loader">
            <div class="loader"></div>
        </div>
        <div class="conteneur-produits">
            <produit v-for="produit in produits"
                     :key="produit.id" :produit="produit">
                {{produit.id}}
            </produit>
        </div>
    </div>
</template>

<script>
    import './liste-produits.css'
    import {mapGetters, mapActions} from "vuex";
    import Produit from "./produit/Produit";

    export default {
        name: 'abbd-liste-produits',
        components: {
            Produit
        },
        mounted() {
            this.chargerProduits
        },
        computed: {
            ...mapActions(
                'ProduitsStore', ['chargerProduits']
            ),

            ...mapGetters(
                'ProduitsStore', ['produits']
            ),
        },
    }
</script>

