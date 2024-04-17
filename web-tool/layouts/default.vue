<template>
  <div>
    <BackHomeBtn v-show="route.path !== '/'" class="m-4" />
    <!-- <AppHeader /> -->
    <slot />
    <!-- <AppFooter /> -->
  </div>
</template>

<script setup >
import BackHomeBtn from "~/components/BackHomeBtn.vue";
const route = useRoute()
</script>
