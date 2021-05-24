<template>
    <div class="liste-articles">

        <div class="titre-liste-articles">
            My Cart
            <div class="titre-nombre-articles">{{nombreTotalDeProduit}} article(s)</div>
        </div>
        <div v-if="produitsPanier.length>0" class="conteneur-article">
            <article-panier v-for="articlePanier in produitsPanier"
                     :key="articlePanier.id" :articlePanier="articlePanier">
            </article-panier>
            <div class="prix-total">
                Total : {{prixTotal.toFixed(2)}} $
            </div>
        </div>

    </div>
</template>

<script>
    import './panier.css'
    import {mapGetters, mapMutations} from "vuex";
    import ArticlePanier from "./article-panier/ArticlePanier";

    export default {
        name: 'abbd-panier',
        components: {
            ArticlePanier
        },
        mounted() {
            this.chargerProduits
        },
        computed: {
            ...mapMutations(
                'ProduitsStore', ['chargerProduits']
            ),

            ...mapGetters(
                'PanierStore', ['produitsPanier','nombreTotalDeProduit','prixTotal']
            ),
        },
    }
</script>
