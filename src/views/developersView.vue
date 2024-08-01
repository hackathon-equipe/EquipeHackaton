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
  'cd/Ana': '/developers/Ana',
  'cd/Isabelli': '/developers/Isabelli',
  'cd/Julia': '/developers/Julia',
  'cd/Juliana': '/developers/Juliana',
  'cd/Rafaela': '/developers/Rafaela',
  'cd/Vinicius': '/developers/Vinicius',
  'cd/sobre': '/sobre',
  'cd ..': '/',
  ls: '/'
}

const helpCommands = [
  { comando:'cd/Ana', nome:'Ana'},
  { comando:'cd/Isabelli', nome:'Isabelli'},
  { comando:'cd/Julia', nome:'Julia'},
  { comando:'cd/Juliana', nome:'Juliana'},
  { comando:'cd/Rafae comando:la', nome:'Rafaela'},
  { comando:'cd/Vinicius', nome:'Vinicius'},
  { comando:'cd/sobre', nome:'sobre'},
  { comando:'ls', nome:'listar membros'}
]

</script>
<template>
  <div class="tela">
    <!-- Menu navegavel -->
    <DefaultNavbar />
    <main>
      <!-- Prompt de comando -->
      <DefaultTerminal :comando="commands" />
      <!-- Area de ajuda -->
      <ButtonHelp @openArea="openArea" />
    </main>
    <HelpArea v-if="openHelpArea" @openArea="openArea" :comando="helpCommands" />
  </div>
</template>
<style scoped>
.tela {
  width: 100vw;
  height: 100vh;
  background-color: black;
}
.tela main {
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-between;
}
</style>
