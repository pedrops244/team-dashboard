<script setup>
import { reactive } from 'vue';

const pessoa = reactive({
  nome: '',
  date: '',
  age: 25,
});
</script>

<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat color="primary" class="border-b">
      <v-text-field v-model="pessoa.nome" type="text" label="Name"></v-text-field>
      <v-text-field v-model="pessoa.date" type="number" label="Date"></v-text-field>

      <v-card-text>
        {{ pessoa.nome }} <br />
        {{ pessoa.date }} <br />
        A idade padrão é: {{ pessoa.age }}
      </v-card-text>

      <v-card-actions>
        <v-btn variant="elevated" color="secondary"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
