<template>
  <div />
</template>

<script setup lang="ts">
import { onActivated, onMounted, unref } from 'vue';
import { useRouter } from 'vue-router';

const { currentRoute, push } = useRouter();

console.log('123123');
const gotoNext = () => {
  const { params, query } = unref(currentRoute);
  const { path } = params;
  const _path = Array.isArray(path) ? path.join('/') : path;
  push({
    path: `/ ${_path}`,
    query
  });
};
onActivated(() => {
  gotoNext();
});

onMounted(() => {
  gotoNext();
});
</script>
