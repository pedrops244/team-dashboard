<template>
  <div class="d-flex">
    <p>Header</p>
    <p>{{ props.msg }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
});
</script>
