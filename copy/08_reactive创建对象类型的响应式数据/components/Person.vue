<template>
    <div class="person">
        <h2>汽车信息：</h2>
        <p>车的品牌：{{car.brand}}</p>
        <p>车的价格：{{car.price}}</p>
        <button @click="changePrice">修改汽车价格</button>

        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="value in games" :key="value.id">{{ value.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>

        
    </div>

</template>

<script setup lang="ts" name="Person">
     import {reactive} from "vue";   
    /**
     * {brand: "宝马", price: 80000}为原对象，加上reactive()后，变成了响应式对象
     * 当响应式对象的属性值发生变化时，视图会自动
     * reactive()：只能定义对象类型的响应式数据
     * 
     */
    
    //数据
    let car = reactive({brand: "宝马", price: 80000});
    let car2 = {brand: "奔驰", price: 90000};
    // console.log(car);//打印信息为“Proxy(Object){brand: "宝马", price: 80000}”
    // console.log(car2);

    let games = reactive([
        {id:'1',name: "王者荣耀"},
        {id:'2',name: "和平精英"},
        {id:'3',name: "英雄联盟"}
    ]);

    //方法
    function changePrice() {
        car.price += 5000;
        console.log("修改后的价格是：" + car.price);
    }
    function changeFirstGame() {
        games[0].name = "魔兽世界";
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