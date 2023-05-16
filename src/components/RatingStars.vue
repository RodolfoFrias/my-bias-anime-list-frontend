<script lang="ts">
import { defineComponent, ref } from 'vue'

// It does not work for some reason
export default defineComponent({
    setup() {
        const rating = ref<Number>(0)
        return { rating }
    },
})
</script>

<template>
  <div class="text-center">
    <p>How many stones?</p>
    <v-rating
        v-model="rating"
        color="white"
        active-color="yellow-accent-4"
        half-increments
        hover
        size="18"
    ></v-rating>
    <pre>{{ rating }}</pre>
  </div>
</template>

<style scoped>
    
</style>