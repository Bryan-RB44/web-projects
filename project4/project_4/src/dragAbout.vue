<script setup>
// "reactive" is another function which is used for reactive elements (or at least that's what I'm understanding from this)
import { ref, reactive} from 'vue';

const dragElement = ref(null);

// Default position of the element
const position = reactive({ x: 100, y: 100 });
let offset = { x: 0, y: 0 };
let isDragging = false;

function startTo_Drag(event) {
  isDragging = true;
  offset = {
    x: event.clientX - position.x,
    y: event.clientY - position.y
  };
  document.addEventListener('pointermove', onDrag);
  document.addEventListener('pointerup', stopDrag);
}

function onDrag(event) {
  if (isDragging) {
    let newX = event.clientX - offset.x;
    let newY = event.clientY - offset.y;

    const el = dragElement.value;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    newX = Math.min(winWidth - elWidth, Math.max(0, newX));
    newY = Math.min(winHeight - elHeight, Math.max(0, newY));

    position.x = newX;
    position.y = newY;
  }
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener('pointermove', onDrag);
  document.removeEventListener('pointerup', stopDrag);
}
</script>

<template>
  <div ref="dragElement" class="draggable" @pointerdown="startTo_Drag" :style="{ top: position.y + 'px', left: position.x + 'px' }">
    <slot></slot>
  </div>
</template>

<style scoped>
.draggable {  
  cursor: grab;

  background: #ffffff7a;
  padding: 1rem;
  
  border: 1px solid #ccc;
  border-radius: 8px;

  user-select: none;
  position: absolute;
  width: 250px;
  max-width: 300px;
}
.draggable:active {
  cursor: grabbing;
}
</style>