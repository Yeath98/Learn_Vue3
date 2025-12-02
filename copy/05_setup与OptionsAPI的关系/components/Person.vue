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

        <hr>
        <h2>测试1:{{ a }}</h2>
        <h2>测试2:{{ c }}</h2>
        
        <button @click="b">
            测试方法b
        </button>
        
    </div>

</template>

<script lang="ts">
export default {
    /*
    setup和data、methods的关系：
    data和methods中的内容不可以被setup中获取，但是他们可以获取setup中返回的数据和方法
    setup中不能使用this，vue3中的setup可以和vue2中的data、methods共存，并且早于data和methods执行
    */



     //VUE2选项式配置API即Options API
    name: "Person",
    data() {
        return {
            a:100,
            c:this.name
            // name: "张三",
            // age: 18
        }
    },
    methods: {
        b() {
            console.log("b" + this.a);
        }
        // changeName() {
        //     this.name = "李四";
        // },
        // changeAge() {
        //     this.age = 20;
        // },
        // showTel() {
        //     alert("联系方式：13800138000");
        // }
    },
    setup() {
        //console.log(this); //setup函数中的this是undefined，Vue3中弱化this的使用
        //VUE3组合式配置API即Composition API 
        //数据，原来写在data中
        let name = "张三"; //此时的name，age，tel不是响应式的数据
        let age = 18;
        let tel = "13800138000";
        //let x = a;  //报错，setup中不能直接访问data中的数据

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