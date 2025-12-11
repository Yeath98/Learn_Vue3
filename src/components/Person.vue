<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}----放大10倍后{{ bigSum }}</h2>
        <button @click="add">+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index" >
        <br>
        <button @click="getDog">再来一只狗</button>
    


    </div>

</template>


<script setup lang="ts" name="Person"> 
    import useSum from "@/hooks/useSum";
    import useDog from "@/hooks/useDog";

    const { sum, add ,bigSum } = useSum();
    const { dogList, getDog } = useDog();

    
</script>


 <!--style scoped这个scoped是局部样式，无脑加比较好 
 作用是：让当前组件中的样式只作用于当前组件，不影响其他组件
 -->
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

    img {
        height: 100px;
        margin-right: 10px;
    }

</style>