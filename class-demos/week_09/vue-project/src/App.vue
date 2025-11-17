<script setup>
import {onMounted} from 'vue'
import MyButton from './MyButton.vue'



onMounted( ()=>{
  console.log("The component has mounted, or added to the dom")
})

// const buttonClick = () =>{

// }
// Both the top and bottom parts are the same basically, just slightly different syntax
</script>

<template>
  <!-- @ symbol is shorthand for event -->
  <MyButton />
</template>

<style scoped>
button {
  border: 3px solid cyan;
}
</style>
