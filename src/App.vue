<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
<v-layout>
  <v-app-bar>
    <v-app-bar-title>My bias anime list</v-app-bar-title>
  </v-app-bar>
  <FooterItem/>
  <RouterView />
</v-layout>
</template>
