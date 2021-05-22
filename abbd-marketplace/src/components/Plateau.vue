<template>
    <div class="plateau" id="plateau">
        <ligne-case v-for="numeroligne in nombreDeLignesDuTableau" :key="numeroligne" :numeroDeLaligne="numeroligne">
        </ligne-case>
    </div>
</template>

<script>
    import LigneCase from "./LigneCases";
    import {mapGetters} from 'vuex';


    export default {
        name: 'plateau',
        components: {
            LigneCase
        },
        data() {
            return {}
        },


        computed: {
            ...mapGetters(
                'PartieStore', ['nombreDeLignesDuTableau']
            ),
        },
    }
</script>


<style lang="css" scoped>
    .plateau {
        background: #528690;
    }

</style>
