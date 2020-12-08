<template>
  <div>
  <div class="selected-moon">
    <div>
      <button v-on:click="setMoonShowFalse()" class="main-button">Back To Moon</button>
      <h2>{{ moon.englishName }}</h2>
      <img v-bind:src="require(`../assets/images/Moon.png`)" title="picture" alt="picture of chosen planet" height="300px" />
    </div>
    <div class="moon-container">
    <div class="moon-label">
    </div>
    <div class="listed-moon-details">
      <p><b>Orbits</b> {{ isSelected.englishName}}</p>
    <p><b>Mass:</b> {{ moon.mass.massValue}}</p>
<!--    <p><b>Volume</b>{{ moon.vol.volValue }}</p>-->
    <p><b>Gravity:</b>{{ moon.gravity }}</p>
    <p><b>Size</b>{{ moon.meanRadius }}</p>
    </div>
  </div>
  </div>
  </div>
  
</template>

<script>
  import {eventBus} from '@/main';

  export default {
    name: 'moon-detail',
    props: ['moon', 'isSelected'],
    methods: {
      setMoonShowFalse: function() {
        eventBus.$emit('set-moon-show-false', false);
      }
    }
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