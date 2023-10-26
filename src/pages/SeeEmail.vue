<script setup>
import UserDetailed from '@/components/UserDetailed.vue';
import { useFetch } from '@/composables/fetch';
import { useRoute } from 'vue-router';
const router = useRoute();
const id = router.params.id;
const { data: pessoa, loading } = useFetch(`https://reqres.in/api/users/${id}`);
</script>
<template>
  <v-progress-circular
    v-if="loading"
    color="primary"
    indeterminate
    :size="180"
    :width="10"
  ></v-progress-circular>
  <UserDetailed v-else :person="pessoa" />
</template>
