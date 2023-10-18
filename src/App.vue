<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column justify-center">
        <h1 :class="{ title, 'title-home': isHome }">Curso vue3</h1>

        <p :class="['text', { 'text-home': isHome }]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti aut optio dolorem officiis
          assumenda, maxime pariatur beatae voluptatibus cupiditate unde laboriosam maiores sequi recusandae, totam
          dolorum! Error, ipsa aliquid.
        </p>

        <div v-for="(obj, idx) in toDos" :key="obj.id" class="mb-2 ml-10 text-wrap text-capitalize">
          <v-img v-if="obj.imgSrc" :src="obj.imgSrc" width="150px" />
          {{ idx }} - {{ obj.title }}
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from '@/components/Header.vue';

const props = defineProps({
  title: {
    type: Boolean,
    default: true,
  },

  isHome: {
    type: Boolean,
    default: true,
  },
  toDos: {
    type: Object,
    default() {
      return [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
          imgSrc: 'https://via.placeholder.com/150',
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
          imgSrc: 'https://via.placeholder.com/150',
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
<style>
.title {
  color: purple;
}

.text {
  color: blue;
}
.text-home {
  color: greenyellow;
  font-size: 20px;
}

.title-home {
  color: red;
  font-size: 40px;
}
</style>
