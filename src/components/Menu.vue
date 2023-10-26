<template>
  <v-app-bar color="primary" flat class="border-b">
    <v-app-bar-title class="d-flex justify-center">
      <v-btn icon="mdi mdi-theme-light-dark" @click="toggleTheme"> </v-btn>
      <v-btn prepend-icon="mdi-home" to="/"> Home </v-btn>
      <v-btn prepend-icon="mdi-account-group" to="/equipe"> Team </v-btn>
      <v-btn prepend-icon="mdi-login"> Login </v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
onMounted(() => {
  theme.global.name.value = localStorage.getItem('darkTheme');
});

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  localStorage.setItem('darkTheme', theme.global.name.value.toString());
}
</script>
