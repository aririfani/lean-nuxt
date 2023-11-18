<template>
    <div>
        <p>{{ data.title }}</p>
    </div>
</template>
<script setup>
    const route = useRoute()
    const { data } = await useFetch('/api/post/' + route.params.id)
    console.log(route.params.id)
</script>