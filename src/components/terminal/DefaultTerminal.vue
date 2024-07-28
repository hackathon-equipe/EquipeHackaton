<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const comandInput = ref('');
const status = ref('normal')
const router = useRouter()
const circuloVerificacaoStyles = ref('null');

document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    if(comandInput.value == 'cd /devs' || comandInput.value == 'cd /projetos' || comandInput.value == 'cd /sobre'){
        circuloVerificacaoStyles.value = 'sucess'
        status.value = 'carregando'
        setTimeout(function() {        
            if(comandInput.value == 'cd /devs'){
                router.push('/developers')
            }else if(comandInput.value == 'cd /projetos'){
                router.push('/projetos')
            }else if(comandInput.value == 'cd /sobre'){
                router.push('/sobre')
            }
        }, 4000)

    }
    else{
        circuloVerificacaoStyles.value = 'fail'
        comandInput.value = ''
    }
  }
});

</script>
<template>       
        <!-- Prompt de comando -->
            <div class="bg-Black org-geral" :class="status">
                <h1 class="titulo-equipe">Nossa Equipe Hackathon</h1>
                <div class="org-caminho-terminal">
                    <div class="circulo-verificacao" :class="circuloVerificacaoStyles" name="circulo-verificacao" id="circulo-verificacao"></div>
                    <span class="caminho-terminal">Inimigos.do.terminal@lab1<span class="color-white">:</span> <span class="color-blue">~</span><span class="color-gray">$</span></span>
                    <div class="color-white linha-comando">
                        <span>{{ comandInput }}</span>
                        <input type="text" maxlength="22" class="color-gray" autofocus v-model="comandInput" @focusout="mostrar">
                        <div class="barra-Digitacao"></div>
                    </div>
                </div>
            </div>
</template>
<style scoped>
.titulo-equipe{
    user-select: none;
    font-size: 46px;
    color: #676767;
}
.circulo-verificacao{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    width: 15px;
    height: 15px;
    border-radius: 100%;
}
.caminho-terminal{
    color: #22C187;
    font-size: 32px;
}
.org-geral{
    padding: 150px;
}
.carregando::after{
    padding: 10px;
    font-size: 32px;
    color: #989B95;
    content: ':::';
    animation: carregando 1s 0s infinite linear;
}
@keyframes carregando{
    0%{
        content: '...';
    },
    100%{
        content: ':::';
    }
}
.org-caminho-terminal{
    user-select: none;
    display: flex;
    gap: 20px;
    align-items: center;
}
.org-caminho-terminal input{
    width: 500px;
    z-index: 20;
    opacity: 0;
    position: absolute;
    border: none;
    font-size: 32px;
}
.org-caminho-terminal input:focus{
    outline: 0;
}
.org-caminho-terminal input:focus + .barra-Digitacao{
    opacity: 1;
}
.linha-comando{
    flex-wrap: nowrap;
    display: flex;
    text-align: center;
    font-size: 32px;
}
.linha-comando span{
    color: #989B95;
}
.barra-Digitacao{
    z-index: 10;
    opacity: 0;
    transform: translateX(5px);
    width: 16px;
    height: 48px;
    background-color: #989B95;
    animation: barraDigitar 1s infinite linear;
}
.sucess{
    border: 1px solid #1B81A8;
    background-color: #1B81A8;
}
div.fail{
    content: 'x';
    border: 2px solid red;
    background-color: red;
}
@keyframes barraDigitar {
    0%{
        opacity: 0;
    }
    100%{
        display: block;
    }
}
</style>