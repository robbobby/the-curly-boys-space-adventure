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
    margin-top: 30px;

    background-color: RGBA(255, 105, 180, 0.1);
    padding: 10px;
    box-shadow: 5px 10px rgba(255, 255, 255, 0.342);
    border-radius: 6px;
    margin-bottom: 10px;
    padding-bottom: 10px;

}

</style>