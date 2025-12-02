<template>
    <div class="person">
        <h1>中国</h1>
        <!-- 项目中不建议使用id，从App.vue中去找原因 -->
        <h2 ref="title2">北京</h2><!-- 打一个标记标识 -->
        <h3>朝阳区</h3>
        <button @click="showLog">输出h2这个元素</button>

    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {ref,defineExpose} from "vue";

    /*标签的ref属性：用于注册模板引用；
    用于在普通DOM标签上，获取的是DOM节点；
    用于在组件标签上，获取的是组件实例对象；
    */

    //创建一个title2，用于存储ref标记的内容
    let title2 = ref();

    let a = ref(10);
    let b = ref(20);
    let c = ref(30);


    function showLog(){
        //通过JS获取h2这个元素
        //console.log(document.getElementById("title2"));
        console.log(title2.value);
    }

    // 通过defineExpose暴露a、b和c，让外部可以访问到
    defineExpose({
        a,
        b,
        c
    });

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