<template>
  <v-app-bar color="primary" flat class="border-b">
    <v-app-bar-title>Menu of app</v-app-bar-title>

    <v-btn icon="mdi mdi-theme-light-dark" @click="toggleTheme"> </v-btn>
    <v-btn prepend-icon="mdi-home"> Home </v-btn>
    <v-btn prepend-icon="mdi-information-outline"> Sobre </v-btn>
    <v-btn prepend-icon="mdi-login"> Login </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>
