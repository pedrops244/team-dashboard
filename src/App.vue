<template>
  <v-app>
    <v-app-bar>
      <TheHeader v-if="showHeader" />
    </v-app-bar>

    <v-main class="mt-5 d-flex flex-column">
      <div v-show="showName">
        <h1>Nome: {{ firstName }}</h1>
        <h1>Sobrenome: {{ lastName }}</h1>
      </div>
      <div v-if="acessLevel === 'admin'">Admin</div>
      <div v-else-if="acessLevel === 'marketing'">Marketing</div>
      <div v-else>User</div>
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from '@/components/Header.vue';

const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
  showName: {
    type: Boolean,
    default: true,
  },
  firstName: {
    type: String,
    default: 'Pedr1n',
  },
  lastName: {
    type: String,
    default: 'Souzaa',
  },
  acessLevel: {
    type: String,
    default: '',
  },
});
</script>
