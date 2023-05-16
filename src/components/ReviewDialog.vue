<script  lang="ts">
import { defineComponent, ref } from 'vue';
import RatingStars from './RatingStars.vue';

export default defineComponent({
    // components: { RatingStars },
    props: {
        animeName: String,
        animeId: String,
    },
    setup() {
        const dialog = ref<boolean>(false)

        return {
            dialog
        }
    },
    methods: {
        sendReview() {
            alert('OK')
        }
    }
})
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
        ></v-textarea>
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