<template>
    <div class="conteneur-menu">

        <div v-bind:class="[ itemProduit.actif ? 'actif' : '', 'item-menu']"
             @click="afficherPage(itemProduit)">
            Products
        </div>
        <div class="spacer">|</div>

        <div class="item-menu"
             @click="afficherPage (itemPanier)"
             v-bind:class="[ itemPanier.actif ? 'item-menu actif' : 'item-menu']">
            {{nombreTotalDeProduit ===0 ? "Your cart is empty" : `Cart ( ${nombreTotalDeProduit} article(s))`}}
        </div>
    </div>
</template>
<script>
    import './menu.css'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: 'abbd-menu',
        methods: {
            afficherPage(itemMenu) {
                if(!itemMenu.actif && this.nombreTotalDeProduit>0){
                    this.$router.push({
                        name: itemMenu.nom
                    })
                    this.activerItem(itemMenu);
                }
            },
            ...
                mapMutations('MenuStore', [
                        'activerItem',
                    ]
                ),

        },
        computed: {
            ...
                mapGetters('MenuStore', [
                        'itemProduit',
                        'itemPanier'
                    ]
                ),
            ... mapGetters('PanierStore', [
                    'nombreTotalDeProduit'
                ]
                ),

        },
        watch:{
            nombreTotalDeProduit: function(val){
                if(val===0){
                    this.$router.push({
                        name: this.itemProduit.nom
                    })
                    this.activerItem(this.itemProduit);
                }
            }
        }
    }
</script>

