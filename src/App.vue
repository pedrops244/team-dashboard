<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column justify-center">
        <v-text-field v-model="name"></v-text-field><br />
        <p>{{ name }}</p>

        <v-select v-model="sports" label="Sports" :items="['Futebol', 'Basquete', 'Skate']"> </v-select>

        <v-radio-group v-model="newsletter" label="Newsletter" inline>
          <v-radio label="Sim" value="Sim"></v-radio>
          <v-radio label="Não" value="Não"></v-radio>
        </v-radio-group>
        {{ newsletter }}
      </v-container>
    </v-main>
  </v-app>
</template>
s
<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      sports: '',
      newsletter: '',
    };
  },
};
</script>
