<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<v-layout>
  <v-app-bar>
    <v-app-bar-title>My bias anime list</v-app-bar-title>
  </v-app-bar>
  <RouterView />
</v-layout>
</template>
