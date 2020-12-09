<template>
    <div id="moons-display">
        <button id="moons-button" class="main-button" v-on:click="showMoons = !showMoons">Moons ({{numberOfMoons()}}):        <span>       </span></button>
        <ul v-show="showMoons">
            <li v-for="(moon, index) in getMoons"  v-on:click="moonSelected(moon)" :key="index">
                <button class="moons-button"> {{moonName(moon)}} </button>
            </li>
        </ul>
    </div>
</template>

<script>
import {eventBus} from '@/main';

export default {
  name: 'moon-list',
  props: ['getMoons'],
  data() {
    return {
      showMoons: false,
      showMoonDetail: false,
      selectedMoon: ''
    }
  },
  methods: {
    moonName: function(moon){
        if (moon.englishName !== "") {
          return moon.englishName
        } else {
          return moon.name
        }
      },
    numberOfMoons: function () {
      return Object.keys(this.getMoons).length
    },
    moonSelected: function (moon) {
      eventBus.$emit('moon-selected', moon)
    }
  }
}
</script>

<style scoped>

#moons-button {
  position: relative;
  right: 120px;
}

#moons-button span {
  color: rgb(192, 17, 52);
  width: auto;
  border: none;
  cursor: pointer;
  display: inline;
  position: relative;
  transition: 0.1s;
}

#moons-button span:after {
  color: rgb(192, 17, 52);
  width: auto;
  border: none;
  content: "       Click Me";
  text-shadow: 5px 2px 20px rgba(0, 26, 73, 0.404);
  display: inline;
  position: relative;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.1s;
}

#moons-button:hover span {
  padding-right: 15px;
}

#moons-button:hover span:after {
  opacity: 1;
  right: 0;
}
.moons-button {
  width: 140px;
  padding: 5px;
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


#moons-display {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    width: 160px;
    text-align: center;
}

#monns-display > h3 {
    text-align: center;
    color: white;
}
ul {
  list-style-type: none;
  padding-inline-start: 0;
  height: 400px;
  overflow: scroll;
}

</style>