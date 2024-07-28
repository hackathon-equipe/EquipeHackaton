<template>
        <div class="help-area">
            <div class="help-blocoTexto">
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
            <span class="x" @click="$emit('openArea')">X</span>
        </div>
</template>
<style scoped>
@keyframes animationHelp {
    0% {
        height: 0px;
        padding: 0px;
    }
    100% {
        height: 250px;
    }
}
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
    animation: animationHelp 2s;
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
.help-blocoTexto{
    margin-left: 4%;
}
.x{
    margin-right: 20%;
}
</style>