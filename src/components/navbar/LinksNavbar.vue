<script setup>
import { RouterLink } from 'vue-router';
defineProps(['title', 'link'])
</script>
<template>
    <RouterLink  class="router-link" :to="link">
        <li class="color-gray" :class="[$route.fullPath==link? 'active':'']">{{ title }}</li>
    </RouterLink>
</template>
<style scoped>
li{
    cursor: pointer;
}
.active{
    font-weight: 700;
    border-bottom: 2px solid #09548D;
}
</style>