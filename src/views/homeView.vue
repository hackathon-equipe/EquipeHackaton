<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
const comandInput = ref('');
const openHelpArea = ref(false);
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
    <div class="tela">        
        <!-- Menu navegavel -->
        <header class="bg-Black">
            <ul class="menu color-gray">
                <li class="active">HOME</li>
                <li>DEVELOPERS</li>
                <li>PROJECTS</li>   
                <li>SOBRE</li>
            </ul>
        </header>
        <!-- Prompt de comando -->
        <main>
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
            <!-- Area de ajuda -->
            <div class="botao-help">
                <button @click="openHelpArea = !openHelpArea">Help</button>
            </div>       
        </main>
        <div class="help-area" v-if="openHelpArea">
            <div>
                <ul>
                    <li class="help-titulo">DIGITE</li>
                    <li>cd /devs</li>
                    <li>cd /projetos</li>
                    <li>cd /sobre</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="help-titulo">PARA VER</li>
                    <li>membros</li>
                    <li>projetos</li>
                    <li>sobre</li>
                </ul>
            </div>
            <span @click="openHelpArea = !openHelpArea">X</span>
        </div>
    </div>
</template>
<style scoped>
.help-area{
    padding: 75px;
    display: flex;
    width: 100vw;
    background-color: #181818;
    position: absolute;
    bottom: 0;
    color: #989B95;
    font-weight: 600;
    gap: 50px;
    height: 250px;
}
.help-area span{
    cursor: pointer;
    font-size: 18px;
    position: absolute;
    right: 40px;
    bottom: 200px;
}
.help-area ul{
    list-style: none;
}
.help-titulo{
    font-weight: 300;
}
.tela{
    width: 100vw;
    height: 100vh;
    background-color: black;
}
.tela main{
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-between;
}
.tela header li{
    cursor: pointer;
}
.menu{
    padding: 100px 0px 0px 150px;
    display: flex;
    list-style: none;
    gap: 50px;
    font-weight: 200;
}
.bg-Black{
    background-color: black;
}
.active{
    font-weight: 700;
    border-bottom: 2px solid #09548D;
}
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
.color-white{
    color: white;
}
.color-blue{
    color: #367ECE;
}
.color-gray{
    color: #989B95;
}
.botao-help button{
    color: white;
    background-color: transparent;
    border: 1px solid #22C187;
    padding: 5px;
    border-radius: 3rem;
    width: 140px;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 150px;
    justify-self: end;
    transition: 0.4s ease;
    cursor: pointer;
}
.botao-help button:hover{
    background-color: #22C187;
    color: black;
    transform: translateY(-3px);
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