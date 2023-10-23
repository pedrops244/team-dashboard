<script setup>
import { ref, onMounted } from 'vue';
import User from './User.vue';

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
  <User v-for="pessoa in pessoas" :key="pessoa.id" :person="pessoa" />
</template>
