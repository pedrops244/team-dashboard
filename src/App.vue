<template>
  <v-app>
    <v-app-bar>
      <TheHeader />
    </v-app-bar>

    <v-main class="mt-5 d-flex flex-column text-no-wrap text-capitalize">
      <div v-for="(obj, idx) in toDos" :key="obj.id">
        <p class="mb-2 ml-10">{{ idx }} - {{ obj.title }}</p>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from '@/components/Header.vue';

const props = defineProps({
  toDos: {
    type: Object,
    default() {
      return [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: 'et porro tempora',
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false,
        },
      ];
    },
  },
});
</script>
