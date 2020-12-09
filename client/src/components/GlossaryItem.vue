<template lang="html">
    <div id="selected-description">
        <h2>{{selectedDescription.name}}</h2>
        <h3> Definition</h3>
        <p> {{selectedDescription.definition}}</p>
        

    </div>
</template>

<script>
export default {
    name: "glossary-item",
    props: ["selectedDescription"], 
}
</script>

<style lang='css' scoped>

#selected-description {
    font-size: 25px;
    margin-top: 30px;
    
    background-color: RGBA(255, 105, 180, 0.3);
    box-shadow: 5px 10px rgba(255, 255, 255, 0.342);
    border-radius: 6px;
    
    margin:auto;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top:30px;
    width:50%;
}

</style>