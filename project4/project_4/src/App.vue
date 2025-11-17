<script setup>
import {onMounted, ref} from 'vue'
import changeBack from './changeBack.vue'
import dragAbout from './dragAbout.vue';
import dragImg from './dragImage.vue';
import dragText from './dragText.vue';
import dragCreate from './dragCreate.vue';
import dragPost from './dragPost.vue';
import musicBox from './musicBox.vue';

onMounted( ()=>{
  console.log("The component has mounted, or added to the dom")
})

// Variables to handle an array of posts
const posts = ref([]);
const newPost_Text = ref('');

function addPost() {
  if (newPost_Text.value.trim()) {
    posts.value.push(newPost_Text.value.trim());
    newPost_Text.value = '';
  }
}

</script>

<template>
  <div class="container">
    <!-- Background Change Div -->
    <changeBack />

    <!-- About Div -->
    <div>
      <dragAbout>
        <h3>About Your Space!</h3>
        <hr></hr>
        <p>
          Welcome to your space, sandbox, void, garden, whatever you want to make it out to be!
        </p>
        <p>
          This site is all about freedom and going against conventional "standards" to web design, in which case feel free to design <strong>YOUR</strong> space however you want!
        </p>
        <p>
          Whether its the background or element placement, the choice is yours!
        </p>
        <p>
          (WARNING: Images are sticky!)
        </p>
      </dragAbout>

      <!-- Writing Place Div -->
      <dragText>
          <div class="seeMe">
              <p><strong>Temporary Writing Hub</strong></p>
              <p>Warning: Expanding your ideas is a slippery slope</p>
          </div>
          <form>
            <textarea placeholder="Speak your mind."></textarea>
          </form>
          <div class="seeMe">
            <p>
              <i>For writing temporary thoughts, poetry, or just nonsense.</i>
            </p>
          </div>
      </dragText>

      <!-- Logo Div -->
      <dragImg>
        <img src="/images/YourSpaceLogo.png"></img>
      </dragImg>

      <musicBox />

      <!-- Post Creator Div -->
      <dragCreate>
        <div class="seeMe2">
          <h2>Create a Sticky Note</h2>
        </div>
        <textarea v-model="newPost_Text" placeholder="Type Something" rows="3" style="width: 100%; resize: none;"></textarea>
        <button @click="addPost">Post</button>
      </dragCreate>

      <!-- Post-it Div -->
      <div v-for="(post, index) in posts" :key="index">
        <dragPost>
          <p>{{ post }}</p>
        </dragPost>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .seeMe {
    color: #fff;
    width: 200px;
    margin-bottom: 10px;
  }
  .seeMe2 {
    color: #fff;
    width: 200px;
    margin-bottom: 10px;
    text-align: center;
  }
  .container {
    margin: 0;
  }
  hr {
    border: solid #350132;
  }
</style>
<!-- For global styles -->
<style>
  body {
    margin: 0;
    overflow: hidden;
  }
</style>