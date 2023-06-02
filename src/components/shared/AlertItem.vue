<script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Alert } from '../../models/Alert';

  const props = defineProps<{
    errorDetails: Alert
  }>();

</script>

<template>
    <v-alert
        :title="props.errorDetails.title"
        :text="props.errorDetails.text"
        :type="props.errorDetails.type"
        variant="tonal"
    ></v-alert>
</template>