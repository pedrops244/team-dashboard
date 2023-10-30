<script setup>
import { useRouter } from 'vue-router';
defineProps({
  person: {
    type: Object,
    default: () => ({
      id: 0,
      first_name: '',
      last_name: '',
      avatar: '',
    }),
  },
  selectPerson: Boolean,
});
const emit = defineEmits(['select']);

const sendEmit = (id) => {
  emit('select', id);
};
const router = useRouter();
const showDetails = (id) => {
  router.push(`/equipe/${id}`);
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

      <v-card-actions class="mb-2">
        <v-btn
          v-if="!selectPerson"
          color="primary"
          variant="elevated"
          @click="(e) => sendEmit(person.id)"
          >Select</v-btn
        >
        <v-btn
          v-else
          color="red-accent-4"
          variant="elevated"
          @click="(e) => sendEmit(person.id)"
          >Deselect</v-btn
        >
        <v-btn
          color="grey-lighten-1"
          variant="elevated"
          @click="showDetails(person.id)"
          >More details</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>
