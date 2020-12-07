<template>
  <div>
    <h4>{{ moon.englishName }}</h4>
    <p><b>Orbits</b> {{ selectedPlanet.englishName}}</p>
    <p><b>Mass:</b> {{ moon.mass.massValue}}</p>
<!--    <p><b>Volume</b>{{ moon.vol.volValue }}</p>-->
    <p><b>Gravity:</b>{{ moon.gravity }}</p>
    <p><b>Size</b>{{ moon.meanRadius }}</p>
  </div>
</template>

<script>
  export default {
    name: 'planet-detail',
    props: ['moon', 'selectedPlanet']
  }
</script>

<style>
</style>