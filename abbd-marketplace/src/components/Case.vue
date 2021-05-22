<template>
    <div class="caseTableau">
        <Jeton v-if=" jeton.valeur !== 0" :jeton="jeton"></Jeton>
    </div>
</template>

<script>
    import Jeton from "./Jeton";
    import {mapGetters} from 'vuex'

    export default {
        name: 'case',
        components: {
            Jeton
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


<style lang="css" scoped>
    .caseTableau {
        height: 136px;
        width: 136px;
        background: #AAA;
        border: 1px solid #AAA;
        border-radius: 10px;
        margin:6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
