<template>
    <div class="page-produits">
        <abbd-header></abbd-header>
        <abbd-liste-produits></abbd-liste-produits>
    </div>
</template>

<script>
    import AbbdHeader from "../components/common/header/AbbdHeader";
    import AbbdListeProduits from "../components/liste-produits/AbbdListeProduits";
    import {mapActions} from 'vuex'


    export default {
        components: {
            AbbdHeader,
            AbbdListeProduits
        },
        data() {
            return {
                nomUtilisateur: '',
            }
        },
        mounted() {
            this.chargerProduits();
        },
        methods: {
            ...
                mapActions('ProduitsStore', [
                        'chargerProduits'
                    ]
                ),

        },
        computed: {


        }
    }
</script>


<style lang="css" scoped>
    .page-produits {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

</style>
