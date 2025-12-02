<template>
    <!--写html结构-->

    <!--这里如果也用id="title2"，这里的渲染先于Person.vue，id冲突
    所以会在控制台输出App组件这个h2元素，而不是Person.vue中的h2元素
    加的标签都在html标签，没有在组件标签上加
    -->
    <!-- <h2 id = "title2">App组件</h2> -->
     <h2 ref = "title2">App组件</h2>
     <button @click="showLog">测试</button>
    <Person ref="ren"/><!--这个是组件标签-->
</template>

<script lang="ts" setup name="App">
    import Person from "./components/Person.vue";
    //写JS或TS逻辑
    import {ref} from "vue";

    //与Person.vue中的title2没有任何关系，两者是隔离的
    let title2 = ref();

    let ren = ref();

    function showLog(){
        console.log(title2.value);
        console.log(ren.value);//但是看不到person组件中的内容（a、b、c）
    }
</script>

