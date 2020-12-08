<template>
  <div class="selected-moon">
    <div class="moon-container">
    <div class="moon-label">
      <h2>{{ moon.englishName }}</h2>
    </div>
    <div class="listed-moon-details">
      <p><b>Orbits</b> {{ moon.aroundPlanet.planet}}</p>
    <p><b>Mass:</b> {{ moon.mass.massValue}}</p>
<!--    <p><b>Volume</b>{{ moon.vol.volValue }}</p>-->
    <p><b>Gravity:</b>{{ moon.gravity }}</p>
    <p><b>Size</b>{{ moon.meanRadius }}</p>
    </div>
  </div>
  </div>
  
</template>

<script>
  export default {
    name: 'planet-detail',
    props: ['moon', 'isSelected']
  }
</script>

<style>
.selected-moon {
  margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: RGBA(255, 105, 180, 0.1);
    padding: 10px;
    box-shadow: 5px 10px rgba(255, 255, 255, 0.342);
    border-radius: 6px;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

.moon-container {
  display: flex;
}
.moon-label {
  width: 310px;
}
.listed-moon-details {
  margin-left: 30px;
  margin-top: 20px;
  width: 500px;
}
</style>