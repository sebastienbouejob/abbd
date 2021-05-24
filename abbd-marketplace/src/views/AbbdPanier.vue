<template>
    <div class="page-panier ">
        <abbd-header></abbd-header>
        <abbd-panier></abbd-panier>
    </div>
</template>

<script>
    import AbbdHeader from "../components/common/header/AbbdHeader";
    import AbbdPanier from "../components/panier/AbbdPanier";

    export default {
        props: {},
        components: {
            AbbdHeader,
            AbbdPanier
        },
        mounted() {

        },
        data() {
            return {
                nomUtilisateur: '',
            }
        }
        ,
        methods: {

        }
        ,
        computed: {

        }
    }
</script>


<style lang="css" scoped>

    .page-panier {
        width: 100%;
        display: flex;
        flex-direction: column;
    }


</style>
