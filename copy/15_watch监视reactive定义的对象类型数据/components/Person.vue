<template>
    <div class="person">
        <h1>情况三：监视【reactive】定义的【对象类型】数据，且默认开启深度监视</h1>
        <ul>
            <li>姓名：{{person.name}}</li>
            <li>年龄：{{person.age}}</li>
        </ul>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>

        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="test">修改obj.a.b.c</button>




    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {reactive,watch} from "vue";
    //数据
    let person = reactive({
        name:"张三",
        age:18
    });
    let obj = reactive({
        a:{
            b:{
                c:123
            }
        }
    });

    //方法
    function changeName(){
        person.name += '*';
    }
    function changeAge(){
        person.age += 1;
    }
    //reactive不能直接替换对象，需要修改对象的属性值，需要用Object.assign方法，才可以修改
    function changePerson(){
        //person的地址没有变化，只是修改了属性值，所以下面监视的时候会遇到情况二中的oldVal和newVal是相同的
        Object.assign(person,{
            name:"李四",
            age:20
        });
    }
    function test(){
        obj.a.b.c += 1;
    }

    //监视person对象，默认是深度监视，这个深度监视无法关闭
    watch(person,(newVal,oldVal)=>{
        console.log("person对象发生变化了");
        console.log("变化前：",oldVal);
        console.log("变化后：",newVal);
    });

    //验证测试深度监视
    watch(obj,(newVal,oldVal)=>{
        console.log("obj对象发生变化了");
        console.log("变化前：",oldVal);
        console.log("变化后：",newVal);
    });
  
  

   
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