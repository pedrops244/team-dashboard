<script setup>
import { ref, onMounted } from 'vue';

const pessoa = ref({});

onMounted(async () => {
  pessoa.value = await searchInformations();
});

const searchInformations = async () => {
  const req = await fetch('https://reqres.in/api/users/7');
  const json = await req.json();
  return json.data;
};
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="primary" class="border-b d-flex flex-column align-center">
      <v-img width="100%" :src="pessoa.avatar" cover alt="Perfil"></v-img>
      <v-card-text> {{ pessoa.first_name }} {{ pessoa.last_name }} </v-card-text>
      <v-card-text> {{ pessoa.email }} </v-card-text>
    </v-card>
  </v-col>
</template>
