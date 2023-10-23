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
const emit = defineEmits(['select']);

const sendEmit = (id) => {
  emit('select', id);
};
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="4">
    <v-card
      flat
      color="secondary"
      class="border-b d-flex flex-column align-center"
    >
      <v-img
        width="100"
        class="rounded-circle mt-4"
        cover
        :src="person.avatar"
        alt="Perfil"
      ></v-img>
      <v-card-title>
        {{ person.first_name }} {{ person.last_name }}
      </v-card-title>

      <v-card-text> {{ person.email }}</v-card-text>

      <v-card-actions>
        <v-btn
          v-if="!selectPerson"
          color="primary"
          variant="elevated"
          @click="($event) => sendEmit(person.id)"
          >Selecionar</v-btn
        >
        <v-btn
          v-else
          color="red"
          variant="elevated"
          @click="($event) => sendEmit(person.id)"
          >Desmarcar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>
