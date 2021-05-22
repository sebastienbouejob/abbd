<template>
    <div class="panier ">
        <abbd-header></abbd-header>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import AbbdHeader from "../components/common/header/AbbdHeader";

    export default {
        props: {},
        components: {
            AbbdHeader
        },
        mounted() {
            if (this.$route.params.id || this.$route.params.id===0) {
                let partieAChargee = this.parties[this.$route.params.id]
                this.nomUtilisateur = partieAChargee.nom;
                this.$store.commit('PartieStore/chargerPartie',partieAChargee);
            } else {
                this.chargerNouvellePartie();
            }
        },
        data() {
            return {
                nomUtilisateur: '',
            }
        }
        ,
        methods: {
            verifierEtSauvegarder(){
                if(this.nomUtilisateur===''){
                    alert("nom d'utilisateur obligatoire !")
                }else{
                    this.sauvegarderPartie({
                        score : this.partie.score,
                        tour:this.partie.tour,
                        plateau: this.partie.plateau,
                        nom : this.nomUtilisateur});
                }

            },
            lancerUneNouvellePartie() {
                this.nomUtilisateur = '';
                this.chargerNouvellePartie();
            }
            ,
            afficherLesproduits() {
                this.$router.push({
                    name: 'produits',
                })
            }
            ,
            ...
                mapMutations('PartieStore', [
                        'deplacerLesJetons',
                        'chargerNouvellePartie'
                    ]
                ),
            ...
                mapMutations(
                    'PreferencesStore', [
                        'sauvegarderPartie',
                    ]
                )
        }
        ,
        computed: {
            ...
                mapGetters('PartieStore', [
                    'partie'
                ]),
            ...
                mapGetters('PreferencesStore', [
                    'parties'
                ]),

        }
    }
</script>


<style lang="css" scoped>

    .panier {
        width: 100%;
        display: flex;
    }


</style>
