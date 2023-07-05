<template>
  <v-footer class="footer">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Rodolfo Frias</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
    .footer {
        position: fixed;
        bottom: 0;
        width: 85%;
        height: 60px;   /* Height of the footer */
    }
</style>