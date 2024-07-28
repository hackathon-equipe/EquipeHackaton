<script setup>
import { ref, computed } from 'vue';
const comandInput = ref('');
</script>
<template>
    <div class="tela">        
        <header class="bg-Black">
            <ul class="menu color-gray">
                <li class="active">HOME</li>
                <li>DEVELOPERS</li>
                <li>PROJECTS</li>   
                <li>SOBRE</li>
            </ul>
        </header>
        <main>
            <div class="bg-Black org-geral">
                <h1 class="titulo-equipe">Nossa Equipe Hackathon</h1>
                <div class="org-caminho-terminal">
                    <div class="circulo-verificacao"></div>
                    <span class="caminho-terminal">Inimigos.do.terminal@lab1<span class="color-white">:</span> <span class="color-blue">~</span><span class="color-gray">$</span></span>
                    <div class="color-white linha-comando">
                        <span>{{ comandInput }}</span>
                        <input type="text" maxlength="22" class="color-gray" v-model="comandInput" @focusout="mostrar">
                        <div class="barra-Digitacao"></div>
                    </div>
                </div>
            </div>
            <div class="botao-help">
                <button>Help</button>
            </div>       
        </main>
    </div>
</template>
<style scoped>
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
    font-size: 46px;
    color: #676767;
}
.circulo-verificacao{
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
.org-caminho-terminal{
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

@keyframes barraDigitar {
    0%{
        opacity: 0;
    }
    100%{
        display: block;
    }
}
</style>