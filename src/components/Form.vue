<script setup>
import { ref, onMounted, computed } from 'vue';

const pessoa = ref({});
const userCode = ref('');

onMounted(async () => {
  pessoa.value = await searchInformations(1);
});

const showBtn = computed(() => userCode.value > 0);

const handleInformations = async () => {
  pessoa.value = await searchInformations(userCode.value);
};

const searchInformations = async (code) => {
  const req = await fetch(`https://reqres.in/api/users/${code}`);
  const json = await req.json();
  return json.data;
};
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="purple-darken-1" class="border-b d-flex flex-column align-center">
      <v-img width="100" class="rounded-circle mt-4" cover :src="pessoa.avatar" alt="Perfil"></v-img>
      <v-card-title> {{ pessoa.first_name }} {{ pessoa.last_name }} </v-card-title>
      <v-card-text> {{ pessoa.email }} </v-card-text>
    </v-card>
  </v-col>

  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="orange-darken-2" class="border-b">
      <v-text-field v-model="userCode" type="number" min="0" max="12" label="User Code (1 - 12)"></v-text-field>
      <v-card-actions>
        <v-btn elevation="5" :disabled="!showBtn" @click="handleInformations">Buscar</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
