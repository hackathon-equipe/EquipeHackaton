<script setup>
import { ref } from 'vue'
import DefaultNavbar from '@/components/navbar/DefaultNavbar.vue'
import DefaultTerminal from '@/components/terminal/DefaultTerminal.vue'
import ButtonHelp from '@/components/help/ButtonHelp.vue'
import HelpArea from '@/components/help/HelpArea.vue'
import projetosJson from '@/assets/projetos.json'
const openHelpArea = ref(false)
function openArea() {
  openHelpArea.value = !openHelpArea.value
}
const commands = {
  'cd/TPInterativa': '/projetos/TPInterativa',
  'cd/Poeirao': '/projetos/Poeirao',
  'cd/FabricaNode': '/projetos/FabricaNode',
  'cd/Arthisto': '/projetos/Arthisto',
  'cd/FabricaClass': '/projetos/FabricaClass',
  'cd ..': '/',
  ls: '/'
}

const helpCommands = [
  { comando: 'cd/TPInterativa', nome: 'TPInterativa' },
  { comando: 'cd/Poeirao', nome: 'Poeirao' },
  { comando: 'cd/FabricaNode', nome: 'FabricaNode' },
  { comando: 'cd/Arthisto', nome: 'Arthisto' },
  { comando: 'cd/FabricaNode', nome: 'FabricaNode' },
  { comando: 'cd/FabricaClass', nome: 'FabricaClass' },
  { comando: 'cd ..', nome: 'Página anterior' },
  { ls: '/' }
]

const projetos = ref([])
for (const projeto of projetosJson) {
  projetos.value.push(projeto.nome)
}
</script>
<template>
  <div class="tela">
    <!-- Menu navegavel -->
    <DefaultNavbar />
    <main>
      <!-- Prompt de comando -->
      <DefaultTerminal :comando="commands" terminalRoute="/projetos" :json-nomes="projetos" />
      <!-- Area de ajuda -->
      <ButtonHelp @openArea="openArea" />
    </main>
    <HelpArea v-if="openHelpArea" @openArea="openArea" :comando="helpCommands" />
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
