<script setup lang="ts">
 import type { Anime } from '../models/AnimeModel';

 interface Props {
    animeData: Anime
 }

 const reveal = false
 const props = defineProps<Props>()

 console.log(props.animeData)

</script>
<template>
  <v-card
    class="mx-auto mr-3"
    max-width="344"
  >
    <v-img
        src="http://localhost:5173/hxh.jpg"
        cover
        height="100%"
    >
    </v-img>
    <v-card-text>
      <div class="text-h6 font-weight-bold">{{ props.animeData.title }}</div>
      <p class="text--primary">
        {{ props.animeData.status }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h6 text--primary">
            Synopsis
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>


