<script setup>
import { ref, computed, onMounted } from 'vue';
import UserOnTeam from '@/components/UserOnTeam.vue';
import { useFetch } from '@/composables/fetch';

const userCode = ref('');
const showBtn = computed(() => userCode.value > 0);

const { data: pessoa, loading } = useFetch(
  `https://reqres.in/api/users?delay=0`,
);
onMounted(async () => {
  pessoa.value = await searchInformations(1);
});
const handleInformations = async () => {
  pessoa.value = await searchInformations(userCode.value);
};
const searchInformations = async (code) => {
  const req = await fetch(`https://reqres.in/api/users/${code}`);
  const json = await req.json();
  return json.data;
};
</script>
<template>
  <h1>Team</h1>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="orange-darken-2" class="border-b">
      <v-text-field
        v-model="userCode"
        type="number"
        min="0"
        max="12"
        label="User Code (1 - 12)"
      ></v-text-field>
      <v-card-actions>
        <v-btn elevation="5" :disabled="!showBtn" @click="handleInformations"
          >Buscar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
  <v-progress-circular
    v-if="loading"
    color="primary"
    indeterminate
    :size="180"
    :width="10"
  ></v-progress-circular>
  <UserOnTeam v-else :person="pessoa" />
</template>
