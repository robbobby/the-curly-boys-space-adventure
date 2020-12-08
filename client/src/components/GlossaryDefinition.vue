<template lang="html">
    <div id="selected_description">
        <h2>Title: {{selectedDescription.name}}</h2>
        <p> Definition: {{selectedDescription.definition}}</p>

    </div>
</template>

<script>
export default {
    name: "glossary-definition",
    props: ["selectedDescription"], 
}
</script>

<style>

</style>