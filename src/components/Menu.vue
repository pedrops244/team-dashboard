<template>
  <v-app-bar color="primary" class="border-b">
    <v-app-bar-title class="d-flex justify-center">
      <v-btn icon="mdi mdi-theme-light-dark" @click="toggleTheme"> </v-btn>
      <v-btn prepend-icon="mdi-home" to="/"> Home </v-btn>
      <v-btn prepend-icon="mdi-account-group" to="/equipe"> Team </v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify';

const darkMode = ref(false);
const theme = useTheme();
onMounted(() => {
  theme.global.name.value = localStorage.getItem('darkTheme');
});

function toggleTheme() {
  theme.global.name.value = darkMode.value ? 'light' : 'dark';
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkTheme', theme.global.name.value.toString());
}
</script>
