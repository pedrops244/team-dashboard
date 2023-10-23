<script setup>
import { ref, onMounted, watchEffect, provide } from 'vue';
import User from './User.vue';

const pessoas = ref([]);
const idsSelect = ref([]);
const selectPerson = ref([]);
const alert = 'Em caso de dúvidas, contate o suporte.';

const searchInformations = async (code) => {
  const req = await fetch(`https://reqres.in/api/users?page=1`);
  const json = await req.json();
  return json.data;
};

onMounted(async () => {
  pessoas.value = await searchInformations();
});

const addSelect = (event) => {
  if (idSelect(event)) {
    idsSelect.value = idsSelect.value.filter((x) => x !== event);
    return;
  }
  idsSelect.value.push(event);
};

watchEffect(() => {
  selectPerson.value = pessoas.value.filter((x) =>
    idsSelect.value.includes(x.id),
  );
});

const idSelect = (id) => {
  return idsSelect.value.includes(id);
};

provide('alert', alert);
</script>

<template>
  <div class="text-center">
    <v-chip
      v-for="pm in selectPerson"
      :key="pm.id"
      class="ma-1"
      variant="elevated"
      color="primary"
      cols="12"
      >{{ pm.first_name }}</v-chip
    >
  </div>
  <v-row class="mt-1">
    <User
      v-for="pessoa in pessoas"
      :key="pessoa.id"
      :select-person="idSelect(pessoa.id)"
      :person="pessoa"
      @select="addSelect"
    />
  </v-row>
</template>
