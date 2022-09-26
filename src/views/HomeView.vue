<script setup lang="ts">
import JokeButton from "@/components/JokeButton.vue";
import JokeResults from "@/components/JokeResults.vue";
import { ref } from "vue";

const hidden = ref(false);
</script>

<template>
  <main class="container">
    <div class="body-wrapper">
      <div class="top-wrapper">
        <JokeButton />
      </div>
      <div v-if="hidden" class="results-wrapper">
        <JokeResults />
      </div>
    </div>
  </main>
</template>

<style scoped>
.top-wrapper {
  width: 100%;
}

.body-wrapper {
  width: 40%;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 25px;
  flex-direction: column;
  gap: 25px;
}
</style>
