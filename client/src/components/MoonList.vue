<template>
    <div>
        <h3> Moons ({{ numberOfMoons() }}):</h3>
      <label> Select a Moon:
        <select v-model="selectedMoon" @change="moonSelected">
            <option v-for="moon in getMoons" :key="moon.id" :value="moon" >
                {{moon.englishName}}
            </option>
        </select>
      </label>
    </div>
</template>

<script>
import {eventBus} from '@/main';

export default {
  name: 'moon-list',
  props: ['getMoons'],
  data() {
    return {
      showMoonDetail: false,
      selectedMoon: ''
    }
  },
  methods: {
    numberOfMoons: function () {
      return Object.keys(this.getMoons).length
    },
    moonSelected: function () {
      eventBus.$emit('moon-selected', this.selectedMoon)
    }
  }
}
</script>

<style>

</style>