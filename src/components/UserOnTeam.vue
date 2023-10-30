<!-- eslint-disable vue/require-default-prop -->
<script setup>
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
  cargo: {
    type: String,
    default: 'No positions selected',
  },
  selectPerson: Boolean,
});
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="4">
    <v-card
      flat
      color="primary"
      class="border-b d-flex flex-column align-center"
    >
      <v-img
        width="150"
        class="rounded-circle mt-4"
        cover
        :src="person.avatar"
        alt="Perfil"
      ></v-img>
      <v-card-title>
        {{ person.first_name }} {{ person.last_name }}
      </v-card-title>
      <v-card-title>
        {{ cargo }}
      </v-card-title>
      <v-card-subtitle class="mb-3">
        Badge number:
        {{ person.id + Math.floor(Math.random() * 20) || '0' }}
      </v-card-subtitle>
    </v-card>
  </v-col>
</template>
