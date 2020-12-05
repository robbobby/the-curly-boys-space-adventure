<template>
  <div id="app">
    <div class="nav">
      <h1>List of Planets!</h1>
      <planet-list :planets="planets"></planet-list>
      <planet-detail v-if="selectedPlanet" :moons="moons" :planet="selectedPlanet" :getMoons="getMoons()"></planet-detail>

      <!-- // here we are displaying planets -->
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
    eventBus.$on('planet-selected', planet => (this.selectedPlanet = planet));
  },

  methods: {
    getPlanets: function(){
      let planetTemp = []
      fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(res => res.json())
      // .then(planets => planets = planets.bodies)
      .then(planets => planetTemp = planets.bodies)
      .then(() => {
        if(planetTemp.length) {
          for (let body of planetTemp){
            if (body.isPlanet) {
              this.planets.push(body)
            }
            else {
              this.moons.push(body);
          }
        }}
      });
    },
    getMoons: function(){
      // check for each selectedplanets.moons
      // check the rel
      //compare it to (planet) moons.rel
      return this.planets.filter((planet) => {
        return this.selectedPlanet.moons.includes(planet.rel);
      })
    }
  }
  
}
</script>









<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding: 30px;
  margin: 0;
  background-color: #2c3e50;
}

h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px; 
}
a {
  color: #42b983;
}
</style>