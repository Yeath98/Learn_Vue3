<template>
    <div class="person">
        <h2>个人信息</h2>

        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <p>地址：{{ address }}</p>

        <button @click="changeName">
            修改名字
        </button> 
        <button @click="changeAge">
            修改年龄
        </button> 
        <button @click="showTel">
            查看联系方式
        </button>
        
    </div>

</template>

<!-- <script lang="ts">//配置组件名称的
export default {
    name: "Person",
}
</script>  -->


<script setup lang="ts" name="Person124">//配置组合式API的,安装了VueSetupExtend插件，并在viter.config.ts中配置
    //数据
    let name = "张三";
    let age = 18;   
    let tel = "13800138000";
    let address = "北京市朝阳区";
    //方法
    function changeName() {
        name = "李四";
        console.log("名字修改成功" + name);
    }
    function changeAge() {
        age = 20;
        console.log("年龄修改成功" + age);
    }
    function showTel() {
        alert("联系方式：" + tel);
    }
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

</style>