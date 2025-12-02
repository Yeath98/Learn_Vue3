<template>
    <div class="person">
        <h2>个人信息</h2>
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
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

<script lang="ts">
export default {
     //VUE2选项式配置API即Options API
    name: "Person",
    setup() {
        //console.log(this); //setup函数中的this是undefined，Vue3中弱化this的使用
        //VUE3组合式配置API即Composition API 
        //数据，原来写在data中
        let name = "张三"; //此时的name，age，tel不是响应式的数据
        let age = 18;
        let tel = "13800138000";

        //方法
        function changeName() {
            name = "李四";//这样修改name，页面不会更新
            console.log("名字修改成功" + name);//name确实改了，但name不是响应式的，下同
        }
        function changeAge() {
            age = 20;
            console.log("年龄修改成功" + age);
        }
        function showTel() {
            alert("联系方式：" + tel);
        }
         
        return {
            name,
            age,
            changeName,
            changeAge,
            showTel
        };

        //steup函数中也可以直接返回一个渲染函数
        // return() => '哈哈哈'

    }
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