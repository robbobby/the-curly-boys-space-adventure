<template>
    <div class="glossary_item">
               <label>Pick a topic to find out more:</label>
        <div class="custom_select">
            
     <select v-model="selectedDescription">
        =<option disabled value="">Pick a topic to find out more:</option>
        <option v-for="description in descriptions" :key="description._id" :value="description">

        {{description.name}} </option>
        </select>
        </div>


 
        <glossary-item v-if="selectedDescription" :selectedDescription="selectedDescription"></glossary-item>
        
    </div>
</template>
<script>

import GlossaryItem from './GlossaryItem.vue'

export default {
    name: 'glossary',
        data(){
        return {
            selectedDescription: null
        }
    },
    props: ['descriptions'],
    components: {
        'glossary-item' : GlossaryItem
    }


}
</script>

<style lang="css" scoped>
select{
        width: 220px;
        height: 45px;
        border: 1px solid #999;
        font-size: 15px;
        color: white;
        background-color: #eee;
        border-radius: 10px;
        border-style: groove;
        border-width: 5px;
        /* box-shadow: 4px 4px #ccc; */
        margin-bottom:40px;
        background-image: linear-gradient(60deg, black, darkblue, blue, grey, white);
}
select:hover{
    color: crimson;
    cursor: pointer;
    }
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}
.select-items {
   background-color:RGBA(255, 105, 180, 0.3);
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
}
.glossary_item {
    position: relative;
    text-align: center;
    top:50px;
    color:white;
    padding-right: 5px;
    padding-left: 10px;
    padding-bottom:20px;
  
}

</style>