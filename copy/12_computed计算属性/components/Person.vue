<template>
    <div class="person">
        <!--“:value”是单向绑定，只能从数据流向页面，页面无法流向数据，就是改页面不会改数据
        所以用v-model双向绑定，可以实现数据和页面的同步变化
        -->
        姓：<input type="text" v-model="lastName"/> <br>
        名：<input type="text" v-model="firstName"/> <br>
        <button @click="changeFullName">全名修改</button>
        <!-- 全名：<span>{{ lastName }}·{{ firstName }}</span> -->
        全名：<span>{{fullName}}</span> <br>
    </div>

</template>


<script setup lang="ts" name="Person">
    import {ref,computed} from "vue";
    let firstName = ref("sa");
    let lastName = ref("zhang");
    //计算属性，他有缓存，可以不用每次都计算
    //这么定义的fullname是一个计算属性，且只读
    let fullName = computed({
        get() {
            //这里只显示一次，说明只  计算了一次，无论在页面用多少次fullName，但是function不行，每次都会执行
            console.log("计算fullName");
            return lastName.value + "·" + firstName.value;
        },
        set(value: string) {
            const parts = value.split("·");
            console.log(parts);
            if (parts.length === 2) {
                lastName.value = parts[0];
                firstName.value = parts[1];
            }
        }
    });

    function changeFullName(){
        console.log(fullName.value);
        fullName.value = "li·si"; //现在可以正常修改
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