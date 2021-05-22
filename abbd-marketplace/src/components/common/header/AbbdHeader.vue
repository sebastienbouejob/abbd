@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

<template>
    <div class="header">
        <div class="logo">
            <img src="../../../assets/logo.png">
        </div>
        <div class="titre">
            <div class="couleur-bleu-fonce">Market</div>
            <div class="couleur-bleu-clair">Place</div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import './header.css'


    export default {
        name: 'abbd-header',
        components: {
        },
        props: {
            numeroDeLaColonne:Number,
            numeroDeLaligne: Number,
        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapGetters('PartieStore',[
                'partie'
            ]),
            jeton(){
                return {
                    ligne:this.numeroDeLaColonne,
                    colonne:this.numeroDeLaColonne,
                    valeur:this.partie.plateau[this.numeroDeLaligne-1][this.numeroDeLaColonne-1]
                }
            }
        }
    }
</script>

