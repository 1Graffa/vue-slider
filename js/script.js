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
      pikachu
    ],
    nomi : [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
      "squirtle",
      "wartortle",
      "blastoise",
      "pikachu"
    ],
    tipo : [
      "erba",
      "erba",
      "erba",
      "fuoco",
      "fuoco",
      "fuoco",
      "acqua",
      "acqua",
      "acqua",
      "elettro"
    ],
    descrizione: [
      "Fin dalla nascita questo Pokémon ha sulla schiena un seme che cresce lentamente.",
      "Il bulbo sulla schiena è cresciuto così tanto da impedirgli di alzarsi in piedi sulle zampe posteriori.",
      "Il fiore sboccia assorbendo energia solare. Si muove continuamente in cerca di luce.",
      "Ama le cose calde. Si dice che quando piove gli esca vapore dalla punta della coda.",
      "Ha un'indole feroce. Usa la coda fiammeggiante come una frusta e lacera l'avversario con gli artigli affilati.",
      "Sputa fiamme incandescenti in grado di fondere le rocce. A volte causa incendi boschivi.",
      "Quando ritrae il lungo collo dentro la corazza sputa un vigoroso getto d'acqua.",
      "È considerato un simbolo di longevità. Se c'è del muschio sul suo guscio, significa che è molto anziano.",
      "Mette KO gli avversari schiacciandoli sotto il corpo possente. Se è in difficoltà, può ritrarsi nella corazza.",
      "Più potente è l'energia elettrica prodotta dal Pokémon, più le sacche sulle sue guance sono morbide ed elastiche."
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
