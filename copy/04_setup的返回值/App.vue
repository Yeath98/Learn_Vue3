<template>
    <!--写html结构-->
    <Person/>
</template>

<script lang="ts">
    import Person from "./components/Person.vue";
    //写JS或TS逻辑
    export default {
        name: "App", //组件名
        components: {Person}  //注册组件
    };
</script>

