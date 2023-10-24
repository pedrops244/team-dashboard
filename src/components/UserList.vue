<script setup>
import { ref, computed } from 'vue';
import User from './User.vue';
import { useFetch } from '../composables/fetch';

const {
  data: pessoas,
  error,
  loading,
} = useFetch('https://reqres.in/api/users?delay=1');
const idsSelect = ref([]);

const addSelect = (event) => {
  if (idSelect(event)) {
    idsSelect.value = idsSelect.value.filter((x) => x !== event);
    return;
  }
  idsSelect.value.push(event);
};

const selectPerson = computed(() => {
  if (!pessoas.value) return [];
  return pessoas.value.filter((x) => idsSelect.value.includes(x.id));
});

const idSelect = (id) => {
  return idsSelect.value.includes(id);
};
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
  <v-progress-circular
    v-if="loading"
    color="primary"
    indeterminate
    :size="180"
    :width="10"
  ></v-progress-circular>
  <v-row v-else class="mt-1">
    <User
      v-for="pessoa in pessoas"
      :key="pessoa.id"
      :select-person="idSelect(pessoa.id)"
      :person="pessoa"
      @select="addSelect"
    />
    <v-alert v-if="error" closable title="Error" type="error" variant="tonal">{{
      error
    }}</v-alert>
  </v-row>
</template>
