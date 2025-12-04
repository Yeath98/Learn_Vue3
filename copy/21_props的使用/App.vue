<template>
    <!--写html结构-->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">测试</h2> -->
    <Person a="发送" :list="personList"/>
    <!-- <Person a="发送" /> -->
</template>

<script lang="ts" setup name="App">
    import Person from "./components/Person.vue";
    import { reactive } from "vue";
    import { type PersonInterface, type Persons } from "@/types";

    let x = 100;

    let personList = reactive<Persons>([
        {id: '001', name: '张三', age: 18},
        {id: '002', name: '李四', age: 20},
        {id: '003', name: '王五', age: 22},
        //{id: '003', name: '王五', age: 22,x: 100},
    ]);
    
    console.log(personList);

</script>

