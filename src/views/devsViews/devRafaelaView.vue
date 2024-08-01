<script setup>
import { ref } from 'vue'
import DefaultNavbar from '@/components/navbar/DefaultNavbar.vue'
import DefaultTerminal from '@/components/terminal/DefaultTerminal.vue'
import ButtonHelp from '@/components/help/ButtonHelp.vue'
import HelpArea from '@/components/help/HelpArea.vue'
const openHelpArea = ref(false)
function openArea() {
  openHelpArea.value = !openHelpArea.value
}
const commands = {
  info: '/',
  'cd ..': '/developers',
}
</script>
<template>
  <div class="tela">
    <!-- Menu navegavel -->
    <DefaultNavbar />
    <main>
      <!-- Prompt de comando -->
      <DefaultTerminal :comando="commands" membroId="5" terminalRoute="/developers/Rafaela" />
      <!-- Area de ajuda -->
      <ButtonHelp @openArea="openArea" />
    </main>
    <HelpArea v-if="openHelpArea" @openArea="openArea" />
  </div>
</template>
<style scoped>
.tela {
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: black;
}
.tela main {
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-between;
}
</style>
