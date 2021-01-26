const bulbasaur = "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
const ivysaur = "https://projectpokemon.org/images/normal-sprite/ivysaur.gif";
const venusaur ="https://projectpokemon.org/images/normal-sprite/venusaur.gif";
const charmender = "https://projectpokemon.org/images/normal-sprite/charmander.gif";
const charmeleon = "https://projectpokemon.org/images/normal-sprite/charmeleon.gif";
const charizard = "https://projectpokemon.org/images/normal-sprite/charizard.gif";
const squirtle = "https://projectpokemon.org/images/normal-sprite/squirtle.gif";
const wartortle = "https://projectpokemon.org/images/normal-sprite/wartortle.gif";
const blastoise = "https://projectpokemon.org/images/normal-sprite/blastoise.gif";
const pikachu = "https://projectpokemon.org/images/normal-sprite/pikachu.gif";
const krabby = "https://projectpokemon.org/images/normal-sprite/krabby.gif";
const kingler = "https://projectpokemon.org/images/normal-sprite/kingler.gif";
const dratini = "https://projectpokemon.org/images/normal-sprite/dratini.gif";
const dragonair = "https://projectpokemon.org/images/normal-sprite/dragonair.gif";
const dragonite = "https://projectpokemon.org/images/normal-sprite/dragonite.gif";
const mew = "https://projectpokemon.org/images/normal-sprite/mew.gif";
const mewtwo = "https://projectpokemon.org/images/normal-sprite/mewtwo.gif";


var app = new Vue({
  el: "#container",
  data : {
    contatore: 0,
    immagini : [
      bulbasaur,
      ivysaur,
      venusaur,
      charmender,
      charmeleon,
      charizard,
      squirtle,
      wartortle,
      blastoise,
      pikachu,
      krabby,
      kingler,
      dratini,
      dragonair,
      dragonite,
      mew,
      mewtwo
    ],
    intervallo : ""
  },
  created(){
    this.intervallo = setInterval(this.nextPoke,4000);

  },
  methods : {
    nextPoke(){
      this.contatore++;
      if(this.contatore > (this.immagini.length -1)){
        this.contatore = 0
      }
    },
    prevPoke(){
      this.contatore--;
      if(this.contatore < 0){
        this.contatore = (this.immagini.length -1)
      }
    },
    cambiaPoke(indice){
      this.contatore = indice;
      clearInterval(this.intervallo);
    }
  }
});
