<template>
    <div class="ligneTableau">
        <case v-for="numeroDeLaColonne in nombreDeCasesParLigneDuTableau"
              :key="numeroDeLaColonne" :numeroDeLaligne="numeroDeLaligne" :numeroDeLaColonne="numeroDeLaColonne" >
        </case>
    </div>
</template>

<script>
    import Case from "./Case";
    import {mapGetters} from "vuex";

    export default {
        name: 'ligne-case',
        components: {
            Case
        },
        props: {
            numeroDeLaligne:Number,
        },
        data() {
            return {}
        },
        methods: {

        },
        computed: {
            ...mapGetters(
                'PartieStore',['nombreDeCasesParLigneDuTableau']
            ),
        },
    }
</script>


<style lang="css" scoped>
    .ligneTableau {
        display: flex;
    }

</style>
