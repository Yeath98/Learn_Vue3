    import { computed, onMounted, ref, } from 'vue'


export default function () {
    //数据
    let sum = ref(0)
    let bigSum = computed(() => sum.value * 10)


    //方法
    function add() {
        sum.value++
    }

    //钩子
    onMounted(() => {
        add()
    })

    //向外暴露数据和方法
    return {
        sum,
        add,
        bigSum
    }
}