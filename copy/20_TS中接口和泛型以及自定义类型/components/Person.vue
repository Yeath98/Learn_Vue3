<template>
    <div class="person">
        ???
    </div>

</template>


<script setup lang="ts" name="Person"> 
    import {a} from '@/types';//引入变量
    import {type PersonInterface} from '@/types'; //引入接口
    import {type Persons } from '@/types';//引入接口（类型别名）

    //定义一个person对象，使用接口进行类型限制
    let person: PersonInterface = {
        id: '001',
        name: '张三',
        age: 18
    };


    //定义一个数组，数组中存放的对象使用接口进行类型限制
    let persons: PersonInterface[] = [
        {id: '001', name: '张三', age: 18},
        {id: '002', name: '李四', age: 20},
        {id: '003', name: '王五', age: 22},
    ];

    //或者使用泛型：定义一个数组，数组中存放的对象使用接口进行类型限制
    let persons2: Array<PersonInterface> = [
        {id: '001', name: '张三', age: 18},
        {id: '002', name: '李四', age: 20},
        {id: '003', name: '王五', age: 22},
    ];



</script>


 <!--style scoped这个scoped是局部样式，无脑加比较好 
 作用是：让当前组件中的样式只作用于当前组件，不影响其他组件
 -->
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