import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCargos = defineStore('cargos', () => {
  const cargos = ref([]);

  const addCargo = (employee) => {
    cargos.value = cargos.value.filter((x) => x.id !== employee.id);
    cargos.value.push(employee);
  };
  const removeCargo = (id) => {
    cargos.value = cargos.value.filter((x) => x.id !== id);
  };

  const totalCargos = computed(() => cargos.value.length);

  return {
    addCargo,
    totalCargos,
    cargos,
    removeCargo,
  };
});
