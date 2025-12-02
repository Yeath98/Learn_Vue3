<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <ul>
            <li>姓名：{{person.name}}</li>
            <li>年龄：{{person.age}}</li>
        </ul>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>



    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {ref,watch} from "vue";
    //数据
    let person = ref({
        name:"张三",
        age:18
    });
    //方法
    function changeName(){
        person.value.name += '*';
    }
    function changeAge(){
        person.value.age += 1;
    }
    function changePerson(){
        person.value = {
            name:"李四",
            age:20
        }
    }

    //监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要添加deep:true选项（深度监视）
    //watch的第一个参数：被监视的数据；
    //watch的第二个参数：监视的回调函数，数据变化时执行的函数，函数有两个参数newVal和oldVal，分别表示新值和旧值；
    //watch的第三个参数：选项（可配置的）对象（deep、immediate等）；
    watch(person,(newVal,oldVal)=>{
        console.log("person数据被修改了");
        console.log("修改前的数据：",oldVal);
        console.log("修改后的数据：",newVal);
    },{deep:true});

    /*
    当只点修改年龄或者名称的时候，newVal和oldVal打印的内容是一样的，因为对象的地址值没有变化；
    只有当点击修改人按钮时，newVal和oldVal才会不一样，因为对象的地址值发生了变化；

    具体来说就是若修改的ref定义的对象内部属性，则对象的地址值不变，newVal和oldVal一样，都是新值，因为他们是同一个对象；
    若修改的是ref定义的对象本身，则对象的地址值发生变化，newVal和oldVal不一样，newVal是新对象，oldVal是旧对象，因为不是同一个对象了；

    实际开发中不管oldVal，只写一个value，就是newVal；
    */

  

   
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