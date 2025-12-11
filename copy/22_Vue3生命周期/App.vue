<template>
 
    <Person v-if="isShow"/>

</template>

<script lang="ts" setup name="App">
    import Person from "./components/Person.vue";
    import { ref } from "vue";
    import { onMounted } from "vue";
    /**
     * Person子组件先挂在完毕，然后App父组件挂在完毕
     * 原因：入口在index.html，其中引入了main.ts，main.ts中引入了App.vue，App.vue中引入了Person.vue
     * 
     */

    let isShow = ref(true);

    //挂载完毕
    onMounted(() => {
        console.log('App组件挂载完毕');
    })

</script>

 