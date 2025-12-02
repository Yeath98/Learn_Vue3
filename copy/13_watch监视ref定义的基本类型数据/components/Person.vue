<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>

    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {ref,watch} from "vue";
    //数据
    let sum = ref(0);
    //方法
    function changeSum(){
        sum.value++;
    } 
    //监听watch(谁，回调函数)监视【ref】定义的【基本类型】数据
    const stopwatch = watch(sum,(newVal,oldVal)=>{
        console.log(`sum的值由${oldVal}变为了${newVal}`);
        if(newVal >= 10){
            console.log('sum到10了，停止监听');
            stopwatch();//调用返回的函数，停止监听
        }

    })  
    console.log(stopwatch);//返回一个函数，调用该函数可以停止监听

   
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px ;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
    li {
        font-size: 20px;
        margin-bottom: 5px;
    }

</style>