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

<script setup lang="ts" name="Person">//配置组合式API的,安装了VueSetupExtend插件，并在viter.config.ts中配置
    import { ref } from "vue";
    /*引入上面的improt语句，如果想要让某个数据变为响应式，那么用ref(某个数据)即可，然后在script中变为“某个数据.value”*/


    //数据
    let name = ref("张三");
    let age = ref(18);   
    let tel = "13800138000";
    let address = "北京市朝阳区";

    console.log(1,name);
    console.log(2,age);
    console.log(3,tel);
    console.log(4,address);

    //方法
    function changeName() {
        name.value = "李四";
        console.log("名字修改成功" + name.value);
    }
    function changeAge() {
        age.value += 1;
        console.log("年龄修改成功" + age.value);
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