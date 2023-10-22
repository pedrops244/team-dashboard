<script setup>
import { ref, onMounted } from 'vue';

const pessoas = ref([]);

const searchInformations = async (code) => {
  const req = await fetch(`https://reqres.in/api/users?page=1`);
  const json = await req.json();
  return json.data;
};

onMounted(async () => {
  pessoas.value = await searchInformations();
});
</script>

<template>
  <v-col v-for="pessoa in pessoas" :key="pessoa.id" cols="12" sm="6" md="4" lg="3">
    <v-card flat color="purple-darken-1" class="border-b d-flex flex-column align-center">
      <v-img width="100" class="rounded-circle mt-4" cover :src="pessoa.avatar" alt="Perfil"></v-img>
      <v-card-title> {{ pessoa.first_name }} {{ pessoa.last_name }} </v-card-title>
      <v-card-subtitle v-if="pessoa.first_name === 'George'">Gerente</v-card-subtitle>
      <v-card-subtitle v-else>Visitante</v-card-subtitle>
      <v-card-text> {{ pessoa.email }} </v-card-text>
    </v-card>
  </v-col>
</template>
