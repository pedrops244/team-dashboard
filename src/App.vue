<script setup>
import ThisMenu from '@/components/Menu.vue';
</script>
<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column align-center" fluid>
        <ThisMenu />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<style></style>
