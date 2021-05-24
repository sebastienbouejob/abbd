<template>
    <div class="header">
        <div class="logo">
            <img src="../../../assets/logo.png">
        </div>
        <div class="titre">
            <div class="couleur-bleu-fonce">Market</div>
            <div class="couleur-bleu-clair">Place</div>
        </div>
        <div class="menu-header">
            <abbd-menu></abbd-menu>
        </div>
    </div>
</template>

<script>

    import './header.css'
    import AbbdMenu from "../menu/AbbdMenu";



    export default {
        name: 'abbd-header',
        components: {
            AbbdMenu,
        },
        props: {

        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

