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
  selectPerson: Boolean,
});
</script>

<template>
  <v-col cols="6">
    <v-card
      flat
      color="orange"
      class="border-b d-flex flex-column align-center"
    >
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
        <a href="mailto:" style="color: black">{{
          person.email
        }}</a></v-card-text
      >
    </v-card>
  </v-col>
</template>
