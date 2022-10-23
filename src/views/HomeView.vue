<script setup lang="ts">
import JokeButton from "@/components/JokeButton.vue";
import JokeResults from "@/components/JokeResults.vue";
import { ref } from "vue";
import axios from "axios";

const jokes = ref([]);
const jokesRequest = async () => {
  jokes.value = await axios
    .get("https://v2.jokeapi.dev/joke/Any?safe-mode&amount=5&type=twopart")
    .then((res) => res.data.jokes);
};

const hidden = ref(false);
function changeVisibility() {
  hidden.value = true;
  jokesRequest();
}
</script>

<template>
  <main class="container">
    <div class="body-wrapper">
      <div class="top-wrapper">
        <JokeButton @button-click="changeVisibility" />
      </div>
      <div v-if="hidden" class="results-wrapper">
        <JokeResults :jokes="jokes" />
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
