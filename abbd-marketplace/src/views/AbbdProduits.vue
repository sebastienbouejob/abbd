<template>
    <div class="panelPartie">
        <h1 class="titreSauvegarde">Listes des sauvegardes</h1>
        <div class="containerDesParties">
            <div class="containerEnteteDesParties">
                <div class="itemEnteteDesParties">Numero de partie</div>
                <div class="itemEnteteDesParties">Nom du joueur</div>
                <div class="itemEnteteDesParties">Score</div>
                <div class="itemEnteteDesParties">Tour</div>
            </div>
            <div class="containerPartieSauvegardees">
                <div @click="chargerPartie(index)" v-for="(partie,index) in parties" :key="index"
                     class="itemPartieSauvegardees">
                    <div class="containerInfoDesParties">
                        <div class="itemInfoDesParties">{{index}}</div>
                        <div class="itemInfoDesParties">{{partie.nom}}</div>
                        <div class="itemInfoDesParties">{{partie.score}}</div>
                        <div class="itemInfoDesParties">{{partie.tour}}</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        components: {},
        data() {
            return {
                nomUtilisateur: '',
            }
        },
        methods: {
            chargerPartie(index) {
                this.$router.push({
                    name: 'partieChargee',
                    params: {
                        id: index,
                    },
                })
            }

        },
        computed: {
            ...mapGetters('PreferencesStore', [
                'parties'
            ]),
        }
    }
</script>


<style lang="css" scoped>
    .titreSauvegarde {
        text-align: center;
        margin: 2%;
    }

    .containerDesParties {
        margin-bottom: 20px;
    }

    .containerEnteteDesParties {
        display: flex;
        border: 1px solid;
    }

    .itemEnteteDesParties {
        width: 100%;
        border-top: 1px solid;
        border-right: 1px solid;
        border-left: 1px solid;
        text-align: center;
        font-size: 2em;

    }

    .containerInfoDesParties:nth-child(2n-1) {
        display: flex;
        border: 1px solid;

    }

    .containerInfoDesParties {
        display: flex;
        border: 1px solid;

    }

    .itemPartieSauvegardees:nth-child(2n+1) {
        background: #8ee5f5;
    }

    .itemPartieSauvegardees:nth-child(2n) {
        background: #eafcff;
    }

    .itemInfoDesParties {
        width: 100%;
        border-bottom: 1px solid;
        border-right: 1px solid;
        border-left: 1px solid;
        text-align: center;
        font-size: 1.5em;
    }

    .panelPartie {
        width: 100%;
        padding: 5%;
    }


</style>
