<template>
    <div class="produit">
        <div class="titre-produit">{{produit.title}}</div>
        <div class="image-produit"><img  v-bind:src="produit.image"></div>
        <div class="description-produit" v-bind:title="produit.description"> {{produit.description}}</div>
        <div class="prix-produit">{{produit.price}} $</div>
        <button title="Add to cart" class="abbd-bouton" v-on:click="ajouterAuPanier"><CartPlus title=""/></button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import CartPlus from 'vue-material-design-icons/CartPlus.vue';
    import './produit.css'
    export default {
        name: 'produit',
        components: {
            CartPlus
        },
        props: {
            produit: Object,
        },
        data() {
            return {

            }
        },
        methods: {

            ajouterAuPanier(){
                this.ajouterProduit(
                    this.produit
                )
            },

            ...mapMutations('PanierStore',[
                'ajouterProduit'
            ]),

        },
        computed: {
        }
    }
</script>

