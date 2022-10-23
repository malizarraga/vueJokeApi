<script setup lang="ts">
import type { IJoke } from "../interfaces/joke-interface";
defineProps({
  jokes: {
    type: Array<IJoke>,
  },
});
</script>

<template>
  <div class="results-container">
    <div class="joke-list">
      <div class="joke" v-for="(joke, index) in jokes" :key="joke.id">
        <div class="index">
          <div class="index-box">
            <p>
              {{ String(index + 1).padStart(2, "0") }}
            </p>
          </div>
        </div>
        <div class="setup">
          {{ joke.setup }}
        </div>
        <div class="delivery">
          {{ joke.delivery }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.joke {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 10px;
}

.joke .index {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  grid-row: 1 / span 2;
}

.joke .index .index-box {
  padding: 10px;
  background-color: #08233a;
  color: #41d8c4;
  border-radius: 8px;
  line-height: 1;
}

.joke:hover {
  background-color: lightgray;
  border-radius: 15px;
}

.joke:hover .index .index-box {
  transform: rotate(45deg);
  transition: ease-in 300ms;
}

.joke:hover .index .index-box p {
  transform: rotate(-45deg);
  transition: ease-in 300ms;
}

.delivery {
  color: transparent;
  font-size: smaller;
}

.joke:hover .delivery {
  color: inherit;
  grid-column: 2 / span 2;
}
</style>
