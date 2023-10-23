<script setup>
import { inject } from 'vue';

const alert = inject('alert');
</script>

<template>
  <v-card-text>
    {{ alert }}
  </v-card-text>
</template>
