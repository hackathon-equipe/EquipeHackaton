<script setup>
</script>
<template>
            <div class="botao-help">
                <button @click="$emit('openArea')">Help</button>
            </div>       
</template>
<style scoped>
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
</style>