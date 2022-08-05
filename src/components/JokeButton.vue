<script setup lang="ts">
</script>

<template>
  <div class="button-wrapper">
    <a id="get_joke" class="btn get-joke parallelogram">
      <span class="joke-text">Get Joke</span>
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

.get-joke {
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 5px 5px 5px gray;
}

.get-joke:hover {
  background-color: darkblue;
  border-color: darkblue;
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
  color: cyan;
  border-color: gray;
  font-size: 38px;
  line-height: 38px;
}

.parallelogram {
  position: relative;
  width: 210px;
  height: 64px;
  border-style: solid;
  transform: skewX(-20deg);
}
</style>
