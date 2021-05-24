<template>
    <div class="article">
        <div class="titre-article">{{articlePanier.title}}</div>
        <div class="image-article"><img  v-bind:src="articlePanier.image"></div>
        <div class="description-article" v-bind:title="articlePanier.description"> {{articlePanier.description}}</div>
        <div class="prix-article">x {{articlePanier.nombre}} </div>
        <div class="prix-article">{{articlePanier.prix}} $</div>
        <button title="Delete article" class="abbd-bouton bouton-supprimer" v-on:click="supprimerDuPanier(articlePanier)"><CartRemove title=""/></button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import CartRemove from 'vue-material-design-icons/CartRemove';
    import './articlePanier.css'
    export default {
        name: 'article-panier',
        components: {
            CartRemove
        },
        props: {
            articlePanier: Object,
        },
        methods: {

            supprimerDuPanier(articlePanier){
                this.supprimerDuPanier(
                    articlePanier
                )
            },

            ...mapMutations('PanierStore',[
                'supprimerDuPanier'
            ]),

        },
    }
</script>
