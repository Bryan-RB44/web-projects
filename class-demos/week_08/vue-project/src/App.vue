<script setup>
  import { ref } from "vue"

  const myVariable = ref('hi')

  const greetings = () =>{
    console.log("hi")
  }

  // onMounted ( ()=>{
  //   console.log(document.getElementById('blue-paragraph'))
  // })
</script>

<template>
  <h1>You did it!</h1>
  <button @click="greetings">{{ myVariable }}</button>
  <p id="blue-paragraph">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
