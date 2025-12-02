<template>
    <div class="person">
        <h1>情况四：监视上述多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：</h2>
        <ul>
            <li>车1：{{ person.car.c1 }}</li>
            <li>车2：{{ person.car.c2 }}</li>   
        </ul>

        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改车1</button>
        <button @click="changeC2">修改车2</button>
        <button @click="changeCar">修改整车</button>





    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {reactive,ref,watch} from "vue";

    //数据
    let person = reactive({
        name:"张三",
        age:18,
        car:{
            c1:"奔驰",
            c2:"宝马"
        }
    });

    //方法
    function changeName(){
        person.name += "*";
    }
    function changeAge(){
        person.age += 1;
    }
    function changeC1(){
        person.car.c1="奥迪";
    }
    function changeC2(){
        person.car.c2="大众";
    }
    function changeCar(){
        person.car={
            c1:"特斯拉",
            c2:"福特"
        }
    }

    //监视上述多个数据
    // watch([()=>person.name , ()=>person.car.c1],(newValue,oldValue)=>{
    //     console.log("属性被修改了");
    //     console.log("新值：",newValue);
    //     console.log("旧值：",oldValue);
    // },{deep:true});

    watch([()=>person.name , person.car],(newValue,oldValue)=>{
        console.log("属性被修改了");
        console.log("新值：",newValue);
        console.log("旧值：",oldValue);
    },{deep:true});
   
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