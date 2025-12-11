<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我+1</button>

    </div>

</template>


<script setup lang="ts" name="Person"> 
    import { ref } from 'vue'
    import { onBeforeMount } from 'vue'
    import { onMounted } from 'vue'
    import { onBeforeUpdate } from 'vue'
    import { onUpdated } from 'vue'
    import { onBeforeUnmount } from 'vue'
    import { onUnmounted } from 'vue'

    //数据  
    let sum = ref(0)

    //方法
    function add() {
        sum.value++
    }

    //创建，vue2是beforeCreate和created；vue3是setup函数
    console.log('Person组件创建了');

    //挂载，vue2是beforeMount和mounted；vue3是onBeforeMounth和onMounted生命周期钩子函数
    //挂载前
    onBeforeMount(() => {
        console.log('Person组件挂载前');
    })
    //挂载完毕
    onMounted(() => {
        console.log('Person组件挂载完毕');
    })
    

    //更新，vue2是beforeUpdate和updated；vue3是onBeforeUpdate和onUpdated生命周期钩子函数
    //更新前
    onBeforeUpdate(() => {
        console.log('Person组件更新前');
    })
    //更新完毕
    onUpdated(() => {
        console.log('Person组件更新完毕');
    })

    
    //卸载，vue2（是叫 销毁）是beforeDestroy和destroyed；vue3是onBeforeUnmount和onUnmounted生命周期钩子函数
    //卸载前
    onBeforeUnmount(() => {
        console.log('Person组件卸载前');
    })
    //卸载完毕 
    onUnmounted(() => {
        console.log('Person组件卸载完毕');
    })
   
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

</style>