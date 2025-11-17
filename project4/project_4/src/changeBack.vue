<script setup>
import {ref} from 'vue'

// Variable containing the background colors and names.
const backGround = [
  { name: 'Default Space', value: 'linear-gradient(30deg, #000000 0%, #050505 100%)' },
  { name: 'Tulips', value: 'linear-gradient(180deg, #ffafbd, #ffc3a0)' },
  { name: 'Luna', value: 'linear-gradient(30deg, #f0f2f0, #000c40)' },
  { name: 'Golden Sunrise', value: 'linear-gradient(-30deg, #fcff9e 0%, #FDBB2D 50%, #c67700 100%)' },
  { name: 'Sinking Feeling', value: 'linear-gradient(45deg, #020024 0%, #090979 35%, #00D4FF 100%)' },
  { name: 'Berry Flavor Zone', value: 'linear-gradient(120deg, #3a0061 0%, #001BA3 25%, #62008c 50%, #00257d 75%, #500c7d 100%)' },
  { name: 'Post-Snow Afternoon', value: 'linear-gradient(230deg, #cc95c0 0%, #dbd4b4 50%, #7aa1d2 100%)' },
  { name: 'Summer Day', value: 'linear-gradient(135deg, #377d8c 0%, #5ab3d1 50%, #ffffff 100%)' },
  { name: 'Sour Taste', value: 'linear-gradient(160deg, #0cc747 0%, #93f9b9 45%, #e1f993 70%, #def229 100%)' },
  { name: '4pm in Autumn', value: 'linear-gradient(220deg,#000000 0%, #9e0606 50%, #ff9500 100%)' },
  { name: 'Galactic Dust', value: 'linear-gradient(348deg,#0a0038 0%, #3b0066 50%, #9d4edd 100%)' }
];

// Index variable to keep track of what background we're on
const index = ref(0);
// differentBack is the new background gradient
const differentBack = ref(backGround[index.value].value);
// currentBack_Name is the new background's name
const currentBack_Name = ref(backGround[index.value].name);

// Function to cycle through backgrounds
function changeBack() {
  index.value = (index.value + 1) % backGround.length;
  const { name, value } = backGround[index.value];
  
  differentBack.value = value;
  currentBack_Name.value = name;
  // console.log('This should work')
}
</script>

<template>
  <div :style="{ background: differentBack, height: '100vh', margin: '0' }" class="centerThis">
    <button @click="changeBack">Click Me to Change your Background</button>

    <div class="wordColor">
      <p><strong>Current background:</strong> {{ currentBack_Name }}</p>
    </div>
  </div>
</template>

<style>
  .wordColor {
    width: fit-content;
    background-color: #ffffff;
    border: solid #282857;
  }
  p {
    margin: 2px;
  }

</style>