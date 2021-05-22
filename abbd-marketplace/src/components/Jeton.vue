<template>
    <div class="jeton" :style="styleEnFonctionDeLaValeurDuJeton">
        <div class="valeurJeton" >
            {{jeton.valeur}}
        </div>
    </div>
</template>


<script>

    export default {
        name: 'jeton',
        components: {},
        props: {
            jeton: Object,
        },
        data() {
            return {}
        },
        methods: {},
        computed: {
            styleEnFonctionDeLaValeurDuJeton(){


                let rouge = Math.floor(couleurRefRouge * this.jeton.valeur % 250);
                let vert = Math.floor(couleurRefVert * this.jeton.valeur % 250);
                let bleu = Math.floor(couleurRefBleu * this.jeton.valeur % 250);

                return `background:rgb( ${rouge} , ${vert} , ${bleu}); brightness(1);`
            }
        }

    }
    const couleurRefRouge = Math.random() * 250 ;
    const couleurRefVert = Math.random() * 250 ;
    const couleurRefBleu = Math.random() * 250 ;
</script>


<style lang="css" scoped>
    .jeton {
        height: 120px;
        width: 120px;
        border-radius: 80px;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .valeurJeton{
        font-size: 2em;
        text-align: center;
    }

</style>
