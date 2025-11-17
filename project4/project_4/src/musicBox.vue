<script setup>
// computed is apparently useful for quickly loading in stuff like the songs I'm using
import { ref, computed } from 'vue';
import dragMusic from './dragMusic.vue';

// Replace with your own icon and track paths
const playIcon = '/images/boomBox.png';
const pauseIcon = '/images/boomBox.gif';

const tracks = [
  { name: "Foreigner in Zeal", src: "/audio/F_in_Z.mp3" },
  { name: "Paradise, Paradise", src: "/audio/Paradise_Paradise.mp3" },
  { name: "Hanging with the Boys", src: "/audio/Hanging_with_the_Boys.mp3" },
  { name: "Volume Adjustment", src: "/audio/volume_Adjustment.mp3" },
  { name: "WATER WORLD", src: "/audio/waterWorld.mp3" }
];

// Variable for keeping track of what song I'm at
const currentIndex = ref(0);
// Variables for different states of play
const isPlaying = ref(false);
const justPaused = ref(false);

//Variables for the audio tracks themselves
const audio = new Audio(tracks[currentIndex.value].src);
const currentTrack = computed(() => tracks[currentIndex.value]);

// Function to control the music
function toggleMusic() {
  // If the audio is playing, pause it and remember that it was just paused.
  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
    justPaused.value = true;
  } else {
    // If the audio was just paused, go to the next track
    if (justPaused.value) {
      nextTrack();
      justPaused.value = false;
    }
    //Otherwise just play the song
    audio.src = tracks[currentIndex.value].src;
    audio.play();
    isPlaying.value = true;
  }
}

// When the track ends, play the next one
audio.addEventListener('ended', () => {
  nextTrack();
  if (isPlaying.value) audio.play();
});

// Load up the next song in the queue
function nextTrack() {
  currentIndex.value = (currentIndex.value + 1) % tracks.length;
  audio.src = tracks[currentIndex.value].src;
}
</script>

<template>
  <dragMusic>
    <img :src="isPlaying ? pauseIcon : playIcon" class="button-icon" @click.stop="toggleMusic"/>
    <p>Now Playing:<br>{{ currentTrack.name }}</p>
  </dragMusic>
</template>

<style scoped>
  .button-icon {
    object-fit: contain;

    cursor: pointer;
  }
  p {
    margin-top: 10px;
    font-weight: bold;
  }
</style>