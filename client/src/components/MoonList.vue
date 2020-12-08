<template>
    <div id="moons-display">
        <h3 v-on:click="showMoons = !showMoons">Moons ({{numberOfMoons()}}):</h3>
        <ul v-show="showMoons">
            <li v-for="(moon, index) in getMoons"  v-on:click="moonSelected(moon)" :key="index">
                <p> {{moon.englishName}} </p>
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