<template>
    <div class="person">
        <h2>汽车信息：</h2>
        <p>车的品牌：{{car.brand}}</p>
        <p>车的价格：{{car.price}}</p>
        <button @click="changeBrand">修改汽车品牌</button>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeCar">修改汽车</button>

        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="value in games" :key="value.id">{{ value.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>

        <hr>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">求和+1</button>

        
    </div>

</template>



<script setup lang="ts" name="Person">
    /**
    ref 对比 reactive
    宏观角度看:
    1. ref用来定义:基本类型数据、对象类型数据;
    2. reactive用来定义:对象类型数据。

    区别:
    1. ref创建的变量必须使用.value (可以使用volar插件自动添加.value ) 。
    2. reactive重新分配一个新对象，会失去响应式(可以使用0bject.assign去整体替换)。

    使用原则:
    1．若需要一个基本类型的响应式数据，使用ref。
    2．若需要一个响应式对象，层级不深，ref、reactive都可以。
    3．若需要一个响应式对象，且层级较深(如表单相关，表单数据回检)，推荐使用reactive。

    */
    import {reactive, ref} from "vue";   

    //数据
    let car = reactive({brand: "宝马", price: 80000});
    let car2 = {brand: "奔驰", price: 90000};
    let sum = ref(0);

    let games = ref([
        {id:'1',name: "王者荣耀"},
        {id:'2',name: "和平精英"},
        {id:'3',name: "英雄联盟"}
    ]);

    //方法
    function changeCar() {
        //整体替换对象
        Object.assign(car, car2);//一样的效果Object.assign(car, {brand: "雅迪", price: 85000});可以更新
        //car = {brand: "雅迪", price: 85000}; //这样写会失去响应式
        //car = reactive({brand: "雅迪", price: 85000});//这样写更不可以
        //console.log("修改后的汽车信息是：" + JSON.stringify(car));

        //如果是let car = ref({brand: "宝马", price: 80000});
        //car = {brand: "雅迪", price: 85000};//这样写可以，如果动了ref的value这个属性，必是响应式的

    }
    function changeBrand() {
        car.brand = "奥迪";
        //console.log("修改后的品牌是：" + car.brand);
    }
    function changePrice() {
        car.price += 5000;
        //console.log("修改后的价格是：" + car.price);
    }
    function changeFirstGame() {
        games.value[0].name = "魔兽世界";
    }
    function changeSum() {
        sum.value += 1;
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
    li {
        font-size: 20px;
        margin-bottom: 5px;
    }

</style>