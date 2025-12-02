<template>
    <div class="person">
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}，{{ nianling }}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        

        
    </div>

</template>



<script setup lang="ts" name="Person">
    import { reactive , toRefs , toRef} from 'vue';

    let person = reactive({
        name: 'John Doe',
        age: 30
    });

    //let {name, age} = person;等同于let name = person.name; let age = person.age;
    let {name, age} = toRefs(person);
    //toRefs可以将reactive对象的属性转换为响应式引用，从而保持响应性。
    console.log(name, age);

    let nianling = toRef(person,'age');
    console.log(nianling);
    console.log("123+"+nianling.value);
    //toRef可以将reactive对象的单个属性转换为响应式引用,但是得从里面一个一个的去取数据来设置。
    

    function changeName() {
        // person.name = person.name === 'John Doe' ? 'Jane Smith' : 'John Doe';
        name.value += '!';
        console.log(name.value,person.name);
    }
    function changeAge() {
        // person.age = person.age === 30 ? 25 : 30;
        age.value += 1;
        console.log(age.value,person.age);
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