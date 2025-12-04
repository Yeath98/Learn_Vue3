<template>
    <div class="person">
        <!-- <h2>{{ a }}</h2>
        <h2>{{ list }}</h2> -->
        <ul>
            <li v-for="item in list" :key="item.id"><!-- 使用v-for循环遍历数组,key最好要加上，否则就是索引值0、1、2自动的，但会出现问题 -->
                编号：{{ item.id }}，姓名：{{ item.name }}，年龄：{{ item.age }}
            </li>
        </ul>
    </div>

</template>


<script setup lang="ts" name="Person"> 
    //import {a} from '@/types';//引入变量
    import {type PersonInterface} from '@/types'; //引入接口
    import {type Persons } from '@/types';//引入接口（类型别名）
    //import { defineProps } from 'vue';
    import { withDefaults } from 'vue';

    //defineProps(['a']);接收a
    
    //接收a，同时props保存起来
    // let x = defineProps(['a']);
    // console.log(x.a);

    //只接收list，如果APP.vue传过来的是一个数组，那么这里的list就是一个数组，如果是是一个数字，他也会变成数字
    //let x = defineProps(['list']);
    

    //接收a和list，并且限制类型
    //let { a, list } = defineProps<{ a: string; list: Persons }>();

    //接收a和list，并且限制类型，还要限制必要性，以及默认值
    let { a, list } = withDefaults(defineProps<{ a?: string; list?: Persons }>(), {
        a: '默认发送',
        list:()=> [
            { id: '004', name: '张三', age: 180 },
            { id: '005', name: '李四', age: 200 },
            { id: '006', name: '王五', age: 220 },
        ]
    });



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