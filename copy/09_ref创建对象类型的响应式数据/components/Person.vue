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
    import {reactive, ref} from "vue";   
    /**
     * 表面上使用ref把一个对象变为响应式的对象，但实际上底层上使用的是reactive来实现的
     * console.log(car);其打印的信息中的value就是Proxy(Object)
     */


    //数据
    let car = ref({brand: "宝马", price: 80000});
    let car2 = {brand: "奔驰", price: 90000};

    let games = ref([
        {id:'1',name: "王者荣耀"},
        {id:'2',name: "和平精英"},
        {id:'3',name: "英雄联盟"}
    ]);

    let obj = reactive({x:999});
    console.log(obj);//其打印的信息中的就是Proxy(Object){x: 999}
    console.log(car);

    //方法
    function changePrice() {
        car.value.price += 5000;
        console.log("修改后的价格是：" + car.value.price);
    }
    function changeFirstGame() {
        games.value[0].name = "魔兽世界";
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