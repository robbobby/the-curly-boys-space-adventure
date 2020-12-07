<template>
    <div id="moons-display">
        <h3 v-on:click="showMoons = !showMoons">Moons ({{numberOfMoons()}}):</h3>
        <ul v-show="showMoons">
            <li v-for="(moon, index) in getMoons" :key="index">
                <p> {{moon.englishName}} </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'moon-list',
    props: ['getMoons'],
    data(){
        return {
            showMoons: false
        }
    },
    methods: {
        numberOfMoons: function(){
            return Object.keys(this.getMoons).length
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
}
ul {
  list-style-type: none;
  padding-inline-start: 0;
  height: 340px;
  overflow: scroll;
}

</style>