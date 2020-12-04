<template>
  <div id="app">
    <div class="nav">
      <h1>List of Planets!</h1>
      <planet-list></planet-list>

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
      selectedPlanet: null
    }
  },
  mounted(){
    this.getPlanets();
    eventBus.$on('planet-selected', planet => (this.selectedPlanet = planet));
  },

  methods: {
    getPlanets: function(){
      fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(res => res.json())
      .then(planets => this.planets = planets.bodies)
    }
  }
  
}
</script>
































<style scoped>
h3 {
  margin: 40px 0 0;
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