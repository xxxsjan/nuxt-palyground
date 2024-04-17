<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <NuxtLink to="/">Home</NuxtLink>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "rotate",
  },
  // layout: "default",
  // layoutTransition: {
  //   name: "slide-in",
  // },
});
</script>
