<script setup>
import { ref } from 'vue';
let name = ref('');
let date = ref('');
let age = ref('');
let newAge = ref('');

const calcAge = () => {
  age.value = 2023 - date.value;
};
const calcTwoAge = (value) => {
  newAge.value = age.value + value;
};
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="primary" class="border-b">
      <v-text-field v-model="name" type="text" label="Name"></v-text-field>
      <v-text-field v-model="date" type="number" label="Year of birth"></v-text-field>

      <v-card-text v-if="name && age"> {{ name }} is {{ age }} years old </v-card-text>
      <v-card-text v-if="name && age"> {{ name }} is {{ newAge }} years old </v-card-text>

      <v-card-actions>
        <v-btn variant="elevated" color="secondary" @click="calcAge"> Calculate age </v-btn>
        <v-btn variant="elevated" color="secondary" @click="calcTwoAge(2)"> +2 Age </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
