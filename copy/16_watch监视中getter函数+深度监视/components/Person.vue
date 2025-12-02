<template>
    <div class="person">
        <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的【某个属性】</h1>
        <!--
            1.若该属性值不是【对象类型】，需要写成函数形式；
            2.若该属性值依然是【对象类型】，可以直接编写，也可以写成函数，不过建议写成函数；
        -->
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

    //监视
    // watch(person,(newValue,oldValue)=>{
    //     console.log("person对象整体被修改了");
    //     console.log("新值：",newValue);
    //     console.log("旧值：",oldValue);
    // },{deep:true});

    //监视reactive中的name属性（某个属性），name属性是一个字符串（基本类型的），不是一个对象类型，所以用getter函数（不用this，直接箭头函数即可），能返回具体的某一个属性值
    // watch(()=>person.name,(newValue,oldValue)=>{
    //     console.log("name属性被修改了");
    //     console.log("新值：",newValue);
    //     console.log("旧值：",oldValue);
    // });
    

    /*
    监视响应式对象中的某个属性，且该属性是对象类的，可以直接写（如例1），也可写函数（如例2），但更推荐函数（然后加深度监视）；
    即：监视的要是对象里的属性，那么最好写函数式的，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视；
    */ 
    //例1：监视car，c1和c2修改可以监听,但是修改整个车不可以（未监听到）
    // watch(person.car,(newValue,oldValue)=>{
    //     console.log("car属性被修改了");
    //     console.log("新值：",newValue);
    //     console.log("旧值：",oldValue);
    // },{deep:true});

    //例2：监视car，可以修改整个车，不加深度监视的话，c1和c2未监听到；只有加上深度监视（deep:true）才可以监听到c1和c2的修改
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log("car属性被修改了");
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