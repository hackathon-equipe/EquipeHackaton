<script setup>
import { useRouter } from 'vue-router'
import membrosJson from '@/assets/membros.json'
import { ref } from 'vue'
const props = defineProps({
  comando: {
    type: Object,
    required: true
  },
  membros: {
    type: Array,
    required: true
  }
})
const comandInput = ref('')
const status = ref('normal')
const router = useRouter()
const circuloVerificacaoStyles = ref('null')
// const m = props.membros;
const style = ref('naoAparece')
const validCommands = props.comando
// document.addEventListener('keypress', function (event) {
//   if (event.key === 'Enter') {
//     if (validCommands[comandInput.value]) {
//       if(comandInput.value == 'ls'){
//       circuloVerificacaoStyles.value = 'sucess'
//       status.value = 'carregando'
//       setTimeout(function () {
//         style.value == 'opacity'
//         // document.write('hi')
//       }, 4000)
//       }
//       circuloVerificacaoStyles.value = 'sucess'
//       status.value = 'carregando'
//       setTimeout(function () {
//         router.push(validCommands[comandInput.value])
//       }, 4000)
//       // if(comandInput.value == 'ls'){
//       //   for (const m of membrosJson) {
//       //     membros.push(m.nome.primeiro)
//       //   }
//       // }
//     } else {
//       circuloVerificacaoStyles.value = 'fail'
//       comandInput.value = ''
//     }
//   }
// })

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    if (validCommands[comandInput.value]) {
      circuloVerificacaoStyles.value = 'sucess'
      // status.value = 'carregando'
      if (comandInput.value == 'ls') {
        status.value = 'carregando'
        setTimeout(function () {
          style.value = 'opacity'
        }, 4000)
      } else {
        status.value = 'carregando'
        setTimeout(function () {
          router.push(validCommands[comandInput.value])
        }, 4000)
      }
    } else {
      circuloVerificacaoStyles.value = 'fail'
      comandInput.value = ''
    }
  }
})

console.log(style.value)
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
        >Inimigos.do.terminal@lab1<span class="color-white">:</span>
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
          @focusout="mostrar"
        />
        <div class="barra-Digitacao"></div>
      </div>
    </div>
    <div v-if="comandInput == 'ls'" :class="[style]">
      <div v-for="membro in membrosJson" :key="membro.id">
        {{ membro.nome.primeiro }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.naoAparece {
  display: none;
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
