<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Accumulation, Multiplication } from '@relaxed/utils'
import { useComputed } from '@relaxed/hook'
import { ref, watch, computed } from 'vue'
const a = ref(1)
const res = Accumulation(1, 2, 3, 4, 5)
const result = Multiplication(1, 2, 3, 4, 5)
console.log(res)
const w = useComputed(a)
console.log(w)
const e = computed(() => {
  return a.value + 999
})
const r = a.value + 999
console.log(result)
</script>

<template>
  <div>
    {{ w }}
    {{ e }}
    {{ r }}
    <input v-model="a" type="text" />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
