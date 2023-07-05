<script setup lang="ts">
  import type { Alert } from '../../models/Alert';

  const props = defineProps<{ details: Alert }>();

</script>

<template>
    <v-alert
        :title="props.details.title"
        :text="props.details.text"
        :type="props.details.type"
        variant="tonal"
    ></v-alert>
</template>