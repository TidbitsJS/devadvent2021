<script setup>
import { computed, ref } from 'vue'
import { countdown, formatCountdown } from '../utils/date-format'

const now = ref(new Date())
const props = defineProps({ name: String, date: Date })
const text = computed(() => formatCountdown(countdown(props.date, now.value)))

setInterval(() => now.value = new Date(), 1000);
</script>

<template>
  <div class="countdown">
    <h1>{{ text }}</h1>
    <h2>Until {{ name }}</h2>
  </div>
</template>

<style lang="scss">
.countdown {
  text-align: center;
  h1 {
    color: var(--red);
    font-size: 3rem;
  }
  h2 {
    color: var(--green);
    font-size: 2rem;
  }
}
</style>
