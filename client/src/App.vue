<template>
  <div id="app">
      <h1>Cosmodex</h1>
      <h4>By {The Curly Boys}</h4>
      <div class="nav">
      <planet-list :planets="planets"></planet-list>
      <!-- // here we are displaying planets -->
      </div>
      <div>
        <planet-detail v-if="selectedPlanet" :moons="moons" :planet="selectedPlanet" :getMoons="getMoons()"></planet-detail>
      </div>
  </div>
</template>

<script>
import ListedPlanet from './components/ListedPlanet.vue'
import PlanetList from './components/PlanetList.vue'
import PlanetDetail from './components/PlanetDetail.vue'
import MoonList from './components/MoonList.vue'

import { eventBus } from '@/main.js'


export default {
  name: 'App',
  components: {
    'planet-list': PlanetList,
    'moon-list': MoonList,
    'planet-detail': PlanetDetail,
  },
  data(){
    return {
      planets: [],
      moons: [],
      selectedPlanet: null,
    }
  },
  mounted(){
    this.getPlanets()
    eventBus.$on('planet-selected', planet => ( this.selectedPlanet = planet));
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
            else {
              this.moons.push(body);
          }
        }}
      });
    },
    getMoons: function(){
      if (this.selectedPlanet.moons) {
      let planetsRel = this.selectedPlanet.moons.map(planetsMoon => planetsMoon.rel); 
      return this.moons.filter(function(moon){
        return planetsRel.indexOf(moon.rel) != -1
        });
      }
      
    },
    
  }   
}


</script>









<style>
h1 {
  align-content: center;
  font-family: 'Gugi', cursive;
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
  


  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-color: black;
  background-image: linear-gradient(60deg, blue, white);

}

h4 {
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
  border: 0;
  margin: 0;
  padding-top: 5px;
  margin-left: 40px;
  top: -25px;
  position: relative;
  align-content: left;
  align-content: top;
  color: white;
  font-size: 20px;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-color: black;
  background-image: linear-gradient(100deg, blue, white);
}

html {
  height: 100%;
}

body {
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  border: 0;
  padding: 0;
  height: 100%;
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

h1 {
  position: relative;
  border: 0;
  margin: 0;
  margin-top: 30px;
  margin-left: 30px;
  position: relative;
  align-content: left;
  align-content: top;
  color: white;
  font-size: 100px;
  
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

.nav {
  margin: 0;
  margin-top: 40px;
  margin-left: 5%;
  border: 0;
  padding: 0;
  width: 90%;
  /* margin: auto; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  
  
}
  

#planet-list {
  display: flex;
    flex-direction: row;
      position: relative;
        justify-content: center;
}
  
</style>