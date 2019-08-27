<template>
    <div>{{`扫描ID为${scan.log_id}`}}</div>
</template>

<script>
import Vue from 'vue';

export default {
    props: ['scan'],
}
</script>

<style lang="less" scoped>
    .footer {
        display: flex;
        justify-content: end;
    }
</style>