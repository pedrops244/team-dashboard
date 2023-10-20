<script setup>
import { ref, reactive } from 'vue';
let nome = ref('');
let date = ref('');
let age = ref(29);
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="primary" class="border-b">
      <v-text-field v-model="nome" type="text" label="Name"></v-text-field>
      <v-text-field v-model="date" type="number" label="Date"></v-text-field>

      <v-card-text>
        {{ nome }} <br />
        {{ date }}
      </v-card-text>

      <v-card-actions>
        <v-btn variant="elevated" color="secondary"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
