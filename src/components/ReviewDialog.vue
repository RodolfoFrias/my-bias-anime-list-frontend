<script setup lang="ts">
  import { ref } from 'vue';
  import RatingStars from './RatingStars.vue';
  import { AnimeReview } from '../models/AnimeReview';
  import saveAnimeReview from '../helpers/SaveAnimeReview';

  const dialog = ref<boolean>(false)
  const textReview = ref<string>('')
  let rating = 0

  const props = defineProps({
      animeName: String,
      animeId: String,
  })

  async function sendReview(): Promise<void> {
      const reviewToSend: AnimeReview = {
        externalId: props.animeId,
        name: props.animeName,
        textReview: textReview.value,
        stars: rating
      }

    await saveAnimeReview(reviewToSend);
  }

  function setRating(updatedRating) {
    rating = updatedRating
  }

</script>


<template>
  <v-row class="ma-1">
    <v-dialog
      v-model="dialog"
      persistent
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          variant="tonal"
          color="primary"
          v-bind="props"
        >
          Add and review
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Review {{ animeName }}
        </v-card-title>
        <v-textarea
            name="input-7-1"
            variant="filled"
            label="Comment"
            auto-grow
            v-model="textReview"
        ></v-textarea>

        <!-- It is not working, maybe a Vuetify issue? -->
        <RatingStars @ratingChanged="setRating" />
  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="sendReview"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>