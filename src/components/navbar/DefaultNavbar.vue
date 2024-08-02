<script setup>
import LinksNavbar from '@/components/navbar/LinksNavbar.vue'
const titles = [
  {
    text: 'HOME',
    link: '/'
  },
  {
    text: 'DEVELOPERS',
    link: '/developers'
  },
  {
    text: 'PROJECTS',
    link: '/projetos'
  },
  {
    text: 'SOBRE',
    link: '/sobre'
  }
]
</script>
<template>
  <!-- Menu navegavel -->
  <header class="bg-Black">
    <ul class="menu color-gray">
      <LinksNavbar
        class="router-link"
        v-for="(text, index) in titles"
        :key="index"
        :title="text.text"
        :link="text.link"
      />
    </ul>
  </header>
</template>
<style scoped>
.menu {
  padding: 100px 0px 0px 150px;
  display: flex;
  list-style: none;
  gap: 25px;
  font-weight: 200;
}
</style>
