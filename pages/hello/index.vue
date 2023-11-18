<script setup lang="ts">
const { data } = await useFetch('/api/post')
</script>

<template>
  <pre>{{ data }}</pre>
</template>