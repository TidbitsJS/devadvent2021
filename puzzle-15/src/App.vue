<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Countdown from './components/Countdown.vue'
</script>

<template>
  <main>
    <Countdown name="Christmas" :date="new Date('2021-12-25')" />
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merienda&display=swap");

:root {
  --bg: #ffffff;
  --red: #c55045;
  --green: #6db29c;
}
body {
  background: var(--bg);
  font-family: "Merienda", sans-serif;
}
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
