<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DefaultNavbar from '@/components/navbar/DefaultNavbar.vue'
import DefaultTerminal from '@/components/terminal/DefaultTerminal.vue'
import ButtonHelp from '@/components/help/ButtonHelp.vue'
import HelpArea from '@/components/help/HelpArea.vue'
import projetosJson from '@/assets/projetos.json'
const route = useRoute()
const openHelpArea = ref(false)
function openArea() {
  openHelpArea.value = !openHelpArea.value
}
const commands = {
  info: '/',
  'cd ..': '/projetos'
}

const helpCommands = [
  { comando: 'info', nome: 'informações' },
  { comando: 'cd ..', nome: 'Página anterior' }
]

const projetoInfo = ref([])
for (const projeto of projetosJson) {
  if (projeto.nome == route.params.id) {
    projetoInfo.value.push(projeto)
  }
}
console.log(projetoInfo.value)
</script>
<template>
  <div class="tela">
    <!-- Menu navegavel -->
    <DefaultNavbar />
    <main>
      <!-- Prompt de comando -->
      <DefaultTerminal
        :comando="commands"
        :json-info="projetoInfo"
        :terminal-route="route.fullPath"
      />
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
