<template>
    <div class="person">
        <!--需求，水温达到60，或水位达到80，给服务器发送请求-->
        <h2>当前水温：{{ temp }}℃</h2>
        <h2>当前水位：{{ height }}㎝</h2>
        <button @click="changeTemp">水温上升</button>
        <button @click="changeHeight">水位上升</button>

    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {ref,watch,watchEffect} from "vue";

    //数据
    let temp = ref(10);
    let height = ref(0);


    //方法
    function changeTemp(){
        temp.value += 10;
    }
    function changeHeight(){
        height.value += 10;
    }

    //监听水温和水位的变化，使用watch完成需求；  
    // watch([temp,height],([newTemp,newHeight], [oldTemp,oldHeight])=>{
    //     //console.log(newTemp,newHeight);
    //     if(newTemp >= 60 || newHeight >= 80){
    //         console.log("发送请求给服务器，水温或水位达到预警值");
    //     }
    // })

    //使用watchEffect完成需求；
    //不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）
    watchEffect(()=>{
        //console.log("watchEffect执行了");
        if(temp.value >= 60 || height.value >= 80){
            console.log("发送请求给服务器，水温或水位达到预警值");
        }
    })
   
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