<script setup lang="ts">
// import { ref ,onMounted } from 'vue'
defineProps<{ msg: string }>()
onMounted(() => {
 count.value = 1000
 console.log('onMounted called')
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
