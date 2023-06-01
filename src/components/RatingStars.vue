<script setup lang="ts">
  import { ref, defineEmits } from 'vue';

  const colors = ['red', 'orange', 'grey', 'cyan', 'green']
  const labels = ['bad', 'so so', 'ok', 'good', 'great']
  const rating = ref<number>(0);

  const emit = defineEmits(['ratingChanged'])

  function ratingChanged ():void {
    emit('ratingChanged', rating.value)
  }

</script>

<template>
  <div class="text-center">
    <p class="mb-3">How many stones?</p>
    <v-rating
      v-model="rating"
      :item-labels="labels"
      @click="ratingChanged"
    >
      <template v-slot:item-label="props">
        <span
          class="font-weight-black text-caption"
          :class="`text-${colors[props.index]}`"
        >
          {{ props.label }}
        </span>
      </template>
    </v-rating>
    <pre>{{ rating }}</pre>
  </div>
</template>