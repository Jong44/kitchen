<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import myHeader from './views/partials/navbar.vue'
import myFooter from './views/partials/footer.vue'
</script>

<template>
  <myHeader></myHeader>
  <RouterView />
  <myFooter></myFooter>
</template>



