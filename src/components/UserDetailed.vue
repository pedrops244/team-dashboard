<script setup>
import { useCargos } from '@/store/cargos';
const store = useCargos();
defineProps({
  person: {
    type: Object,
    default: () => ({
      id: 0,
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
    }),
  },

  selectPerson: Boolean,
});
</script>

<template>
  <h1 class="d-flex justify-center">User Details</h1>

  <v-card flat color="orange" class="border-b d-flex flex-column align-center">
    <v-img
      width="130"
      class="rounded-circle mt-4"
      cover
      :src="person.avatar"
      alt="Perfil"
    ></v-img>
    <v-card-title>
      {{ person.first_name }} {{ person.last_name }}
    </v-card-title>

    <v-card-text>
      <a href="mailto:" style="color: black">{{ person.email }}</a></v-card-text
    >
    <v-card-actions>
      <v-btn variant="outlined" @click="store.removeCargo(person.id)"
        >Remove position</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
