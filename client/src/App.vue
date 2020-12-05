<template>
  <div id="app">
      <h1>Cosmodex</h1>
      <h4>By {The Curly Boys}</h4>
      <div class="nav">
      
      <planet-list :planets="planets"></planet-list>

      <!-- // here we are displaying planets -->
    </div>
  </div>
</template>

<script>
import ListedPlanet from './components/ListedPlanet.vue'
import PlanetList from './components/PlanetList.vue'

import { eventBus } from '@/main.js'

export default {
  name: 'App',
  components: {
    'planet-list': PlanetList,
  },
  data(){
    return {
      planets: [],
      moons: [],
      selectedPlanet: null,
      planetTemp: []
    }
  },
  mounted(){
    this.getPlanets()
    eventBus.$on('planet-selected', planet => (this.selectedPlanet = planet));
  },

  methods: {
    getPlanets: function(){
      fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(res => res.json())
      .then(planets => this.planets = planets.bodies)
      // .then(planets => this.planetTemp = planets.bodies)
      // .then(() => {
      //   if(this.planetTemp.length) {
      //     for (body in this.planetTemp){
      //       if (body.isPlanet) {
      //         this.planets.push(body)
      //       }
      //       else {
      //         this.moons.push(body);
      //     }
      //   }}
      // });
    }
  }
  
}
</script>









<style>
h1 {
  align-content: center;
}

h4 {
  
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
}

html {
  height: 100%;
}

body {
  margin: 0;
  border: 0;
  padding: 0;
  height: 100%;
  background-color: black;
  background-image: url('../src/assets/images/d099fbe1334992232264f479a516983e.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
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
  margin-top: 100px;
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