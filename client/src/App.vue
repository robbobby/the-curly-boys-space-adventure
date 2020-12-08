<template>
  <div id="app">
    <div class=header>
      <div class=logo>
        <h1>Cosmodex</h1>
        <h4> By <span style="color: #940000">{{</span>The Curly Boys<span style="color: #940000">}}</span></h4>
      </div>
      <div class="main-menu">
        <button class="main-button" v-on:click="show = showPlanets">   View Cosmodex <span> </span></button>
        <button class="main-button" v-on:click="show = showAnimation"> Solar System In Action <span> </span></button>
        <button class="main-button" v-on:click="show = showGlossary"> What Does That Mean?! <span> </span></button>

      </div>
    </div>
        <div class="glossary">
        <glossary :descriptions="descriptions" v-show="show === showGlossary"></glossary>
      </div>
      <div class="planet-animation">
        <planet-animation :planets="planets" v-show="show === showAnimation"></planet-animation>
      </div>
      <div class="planet-list" v-if="planets.length">
        <planet-list :planets="planets" v-show="show === showPlanets"></planet-list>

      <!-- // here we are displaying planets -->
      </div>
      <div v-if="!showMoon">
        <planet-detail v-if="isSelected" :moons="moons" :planet="isSelected" :getMoons="getMoons()" :descriptions="descriptions" v-show="show === showPlanets"></planet-detail>
      </div>

      <div v-if="showMoon">
        <moon-detail :moon="selectedMoon" :isSelected="isSelected" :planets="planets" :planet="isSelected"></moon-detail>
      </div>

  </div>
</template>

<script>
import PlanetAnimation from './components/PlanetAnimation.vue'
import ListedPlanet from './components/ListedPlanet.vue'
import PlanetList from './components/PlanetList.vue'
import PlanetDetail from './components/PlanetDetail.vue'
import MoonList from './components/MoonList.vue'
import HubbleServices from './services/HubbleServices.js'
import MoonDetails from '@/components/MoonDetails';
import Glossary from '@/components/Glossary.vue';
import { eventBus } from '@/main.js'


export default {
  name: 'App',
  components: {
    'planet-list': PlanetList,
    'moon-list': MoonList,
    'planet-detail': PlanetDetail,
    'planet-animation': PlanetAnimation,
    'moon-detail': MoonDetails,
    'glossary' : Glossary
  },
  data(){
    return {
      planets: [],
      moons: [],
      isSelected: null,
      selectedMoon: null,
      descriptions: [],
      show: null,
      showPlanets: true,
      showAnimation: false,
      showMoon: false,
      showGlossary: null
    }
  },
  mounted(){
    this.getPlanets();
    this.getDescriptions();
    eventBus.$on('planet-selected', planet => {
      if (this.isSelected !== planet) {
        this.isSelected = planet;
        this.showMoon = false
      } else {
        this.isSelected = null;
      }
    });

    eventBus.$on('moon-selected', moon => {
      this.selectedMoon = moon;
      this.showMoon = true;
      this.isSelected = null;
      });
    
    eventBus.$on('return-planet', orbitsPlanet => {
      this.isSelected = this.planets.find(planet => planet.rel === orbitsPlanet);
      this.showMoon = false;
      
    });

  },

  methods: {
    getPlanets: function(){
      let planetTemp = []
      fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(res => res.json())
      .then(planets => planetTemp = planets.bodies)
      .then(() => {
        if(planetTemp.length) {
          for (let body of planetTemp){
            if (body.isPlanet && body.gravity >=1) {
              this.planets.push(body)
            }
            else if (!body.isPlanet) {
              this.moons.push(body);
          }
        }}
      });
    },

    // Filters through moon list for the planet?
    getMoons: function(){
      if (this.isSelected.moons) {
      let planetsRel = this.isSelected.moons.map(planetsMoon => planetsMoon.rel); 
      return this.moons.filter(function(moon) {
        return planetsRel.indexOf(moon.rel) != -1;
        });
        console.log(this.description);
      }
    },
    getDescriptions: function(){
      HubbleServices.getDescriptions()
      .then(data => this.descriptions = data)
    }
  }   
}
</script>

<style>

html {
  height: 100%;
}

body {
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  border: 0;
  padding: 0;
  height: 940px;
  overflow: scroll;
  background-color: black;
  background-image: url('../src/assets/images/d099fbe1334992232264f479a516983e.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-content: center;
}
/* } //  background-image: url("paper.gif"); */
.header {
  display: flex;
  align-items: center;
}

h1 {
  color: black;
  text-shadow: 0 2px 10px rgb(0, 89, 255), 0 2px 30px rgba(255, 255, 255, 0.733);
  align-content: center;
  font-family: 'Gugi', cursive;
  position: relative;
  border: 0;
  margin: 0;
  margin-top: 30px;
  margin-left: 30px;
  position: relative;
  align-content: left;
  align-content: top;
  font-size: 100px;

  /* -webkit-text-fill-color: transparent;
  background-clip: text;
  background-color: black;
  background-image: linear-gradient(60deg, black, white); */
  
}

h4 {
  color: black;
  text-shadow: 0 2px 10px rgb(0, 89, 255), 0 2px 20px rgba(255, 255, 255, 0.863);
  border: 0;
  margin: 0;
  padding-top: 5px;
  margin-left: 40px;
  top: -25px;
  position: relative;
  align-content: left;
  align-content: top;
  
  font-size: 20px;
  /* -webkit-text-fill-color: transparent;
  background-clip: text;
  background-color: black;
  background-image: linear-gradient(100deg, blue, white); */
}

#app {
  margin: 0;
  padding: 0;
  border: 0;
  /* display: flex; */
  /* flex-direction: row;
  align-items: center; */
  width:90%;
  height: 100%;
  margin:auto;
}

.planet-list {
  margin: 0;
  margin-top: 10px;
  margin-left: 5%;
  border: 0;
  padding: 0;
  width: 90%;
  /* margin: auto; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;  
}

.main-menu {
  margin-left: 30px;
}

.main-button {
  padding: 10px;
  padding-right: 20px;
  margin: 10px;
  text-decoration: none;
  border: none;  
  border-radius: 4px;
  transition-duration: 0.1s;
  cursor: pointer;
  color: white;
  background-image: linear-gradient(60deg, black, darkblue, blue, grey, white);
  
  
}

.main-button:hover {
  color: crimson;
  background-color: black;
  cursor: pointer;
}

.main-button:active, .main-button:active {
  color: crimson;
  border: none;
  background-color: black;
}

.main-button span {
  color: rgb(192, 17, 52);
  width: auto;
  border: none;
  cursor: pointer;
  display: inline;
  position: relative;
  transition: 0.1s;
}

.main-button span:after {
  color: rgb(192, 17, 52);
  width: auto;
  border: none;
  content: "Click Me";
  display: inline;
  position: relative;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.1s;
}

.main-button:hover span {
  padding-right: 15px;
}

.main-button:hover span:after {
  opacity: 1;
  right: 0;
}

  
</style>