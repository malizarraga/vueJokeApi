<script setup lang="ts">
const emit = defineEmits(["buttonClick"]);

function buttonClick() {
  emit("buttonClick");
}
</script>

<template>
  <div class="button-wrapper">
    <a id="get_joke" @click="buttonClick" class="btn get-joke parallelogram">
      <span class="joke-text">Get Jokes</span>
      <span class="joke-text--plus">+</span>
    </a>
  </div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.get-joke > * {
  margin: auto;
}

.get-joke {
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 4px 4px 4px 3px gray;
  background-color: white;
  border-color: transparent;
  color: var(--app-blue);
}

.get-joke:hover {
  background-color: var(--app-blue);
  color: white;
}

.get-joke:active {
  box-shadow: none;
  top: 5px;
}

.get-joke span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-shadow: none;
  transform: skewX(20deg);
}

.get-joke span.joke-text {
  flex: 0 0 50%;
  text-transform: uppercase;
  text-align: right;
}

.get-joke span.joke-text--plus {
  flex: 0 0 50%;
  color: var(--app-cyan);
  border-color: gray;
  font-size: 38px;
  line-height: 38px;
}

.parallelogram {
  position: relative;
  width: 180px;
  height: 48px;
  border-style: solid;
  transform: skewX(-20deg);
  border-radius: 5px;
}
</style>
