import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useStorage } from '@vueuse/core';

export const useCargos = defineStore('cargos', () => {
  const cargos = useStorage('cargo', []);

  const addCargo = (employee) => {
    cargos.value = cargos.value.filter((x) => x.id !== employee.id);
    cargos.value.push(employee);
  };
  const removeCargo = (id) => {
    cargos.value = cargos.value.filter((x) => x.id !== id);
    alert('Position removed successfully');
    location.reload();
  };

  return {
    addCargo,
    cargos,
    removeCargo,
  };
});
