<template>
        <div class="help-area">
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
            <span @click="$emit('openArea')">X</span>
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
</style>