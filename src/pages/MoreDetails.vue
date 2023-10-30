<script setup>
import { ref, watch, onMounted } from 'vue';
import UserDetailed from '@/components/UserDetailed.vue';
import { useFetch } from '@/composables/fetch';
import { useRoute } from 'vue-router';
import { useCargos } from '../store/cargos';

import { storeToRefs } from 'pinia';
import { get } from '@vueuse/core';

const store = useCargos();
const { cargos } = storeToRefs(store);

const { addCargo } = useCargos();
const router = useRoute();
const id = router.params.id;
const { data: pessoa, loading } = useFetch(`https://reqres.in/api/users/${id}`);
const selectCargo = ref(getCargo(Number(id)));

watch(selectCargo, (newCargo) => {
  const { id, first_name: nome } = pessoa.value;
  const employee = { id, nome, cargo: newCargo };
  addCargo(employee);
});
function getCargo(id) {
  return cargos.value.find((cargo) => cargo.id === id)?.cargo;
}
</script>
<template>
  <v-col cols="12" sm="6" md="4" lg="4">
    <v-progress-circular
      v-if="loading"
      color="primary"
      indeterminate
      :size="180"
      :width="10"
    ></v-progress-circular>
    <UserDetailed v-else :person="pessoa" />
    <v-select
      v-model="selectCargo"
      class="mt-3"
      label="Select the employee"
      :items="['Manager', 'Supervisor', 'Employee']"
      variant="outlined"
    ></v-select>
  </v-col>
</template>
