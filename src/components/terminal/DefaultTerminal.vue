<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const route = useRoute()
const props = defineProps({
  comando: {
    type: Object,
    required: true
  },
  jsonNomes: {
    type: Array,
    required: true
  },
  jsonInfo: {
    type: Number,
    required: false
  },
  terminalRoute: {
    type: String,
    required: true
  }
})
const comandInput = ref('')
const status = ref('normal')
const circuloVerificacaoStyles = ref('null')
const style = ref('naoAparece')
const validCommands = props.comando
function ComandLs() {
  status.value = 'carregando'
  setTimeout(function () {
    style.value = 'opacity'
    status.value = 'normal'
    comandInput.value = ''
  }, 4000)
}

function ComandInfo() {
  status.value = 'carregando'
  setTimeout(function () {
    style.value = 'opacity'
    status.value = 'normal'
    comandInput.value = ''
  }, 4000)
}

function ComandGeral() {
  status.value = 'carregando'
  setTimeout(function () {
    router.push(validCommands[comandInput.value])
  }, 4000)
}

function terminal() {
  if (validCommands[comandInput.value]) {
    circuloVerificacaoStyles.value = 'sucess'
    if (comandInput.value == 'ls') {
      ComandLs()
    } else if (comandInput.value == 'info') {
      ComandInfo()
    } else {
      ComandGeral()
    }
  } else {
    circuloVerificacaoStyles.value = 'fail'
    comandInput.value = ''
  }
}
</script>
<template>
  <!-- Prompt de comando -->
  <div class="bg-Black org-geral" :class="status">
    <h1 class="titulo-equipe">Nossa Equipe Hackathon</h1>
    <div class="org-caminho-terminal">
      <div
        class="circulo-verificacao"
        :class="circuloVerificacaoStyles"
        name="circulo-verificacao"
        id="circulo-verificacao"
      ></div>
      <span class="caminho-terminal"
        >Inimigos.do.terminal@lab1{{ props.terminalRoute }}<span class="color-white">:</span>
        <span class="color-blue">~</span><span class="color-gray">$</span></span
      >
      <div class="color-white linha-comando">
        <span>{{ comandInput }}</span>
        <input
          type="text"
          maxlength="22"
          class="color-gray"
          autofocus
          v-model="comandInput"
          @keydown.enter="terminal()"
        />
        <div class="barra-Digitacao"></div>
      </div>
    </div>
    <div :class="[style]">
      <div v-for="nome in props.jsonNomes" :key="nome.id">
        <router-link class="linkMembros" :to="`${route.fullPath + '/' + nome}`">{{
          `/${nome}`
        }}</router-link>
      </div>
    </div>
    <div :class="[style]">
      <div v-if="route.fullPath == '/sobre'">
        Essa aplicação apresenta os membros da nossa equipe hackathon. Nosso design é inspirado em
        um terminal fazendo referência a materia de projeto integrador
      </div>
      <div v-else v-for="info in props.jsonInfo" :key="info.id">
        <div v-if="route.fullPath == '/developers' + '/' + info.nome.primeiro">
          <div v-if="info.nome.primeiro == route.params.id" class="infoDev">
            <span>nome: "{{ info.nome.completo }}"</span>
            <span>turma: "{{ info.turma }}"</span>
            <span>projetos: {{ info.projetos }}</span>
          </div>
        </div>
        <div v-if="route.fullPath == '/projetos' + '/' + info.nome">
          <div v-if="info.nome == route.params.id" class="infoDev">
            <span>nome: "{{ info.nome }}"</span>
            <span>descrição: "{{ info.descricao }}"</span>
            <span>participantes: {{ info.participantes }}</span>
            <span>link: {{ info.link }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.naoAparece {
  display: none;
}
.infoDev,
.infoAbout {
  display: flex;
  flex-direction: column;
}
.info {
  display: flex;
  flex-direction: column;
}

.linkMembros {
  text-decoration: none;
  color: #676767;
}

div .opacity {
  display: flex;
  gap: 15px;
  color: #989b95;
  font-size: 32px;
}
.titulo-equipe {
  user-select: none;
  font-size: 46px;
  color: #676767;
}
.circulo-verificacao {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 15px;
  height: 15px;
  border-radius: 100%;
}
.caminho-terminal {
  color: #22c187;
  font-size: 32px;
}
.org-geral {
  padding: 150px;
}
.carregando::after {
  padding: 10px;
  font-size: 32px;
  color: #989b95;
  content: ':::';
  animation: carregando 4s linear;
}
@keyframes carregando {
  10%,
  30%,
  40%,
  60%,
  80%,
  100% {
    content: '...';
  }
  0%,
  20%,
  30%,
  50%,
  70%,
  90% {
    content: ':::';
  }
}
.org-caminho-terminal {
  user-select: none;
  display: flex;
  gap: 20px;
  align-items: center;
}
.org-caminho-terminal input {
  width: 500px;
  z-index: 20;
  opacity: 0;
  position: absolute;
  border: none;
  font-size: 32px;
}
.org-caminho-terminal input:focus {
  outline: 0;
}
.org-caminho-terminal input:focus + .barra-Digitacao {
  opacity: 1;
}
.linha-comando {
  flex-wrap: nowrap;
  display: flex;
  text-align: center;
  font-size: 32px;
}
.linha-comando span {
  color: #989b95;
}
.barra-Digitacao {
  z-index: 10;
  opacity: 0;
  transform: translateX(5px);
  width: 16px;
  height: 48px;
  background-color: #989b95;
  animation: barraDigitar 1s infinite linear;
}
.sucess {
  border: 1px solid #1b81a8;
  background-color: #1b81a8;
}
div.fail {
  content: 'x';
  border: 2px solid red;
  background-color: red;
}
@keyframes barraDigitar {
  0% {
    opacity: 0;
  }
  100% {
    display: block;
  }
}
</style>
