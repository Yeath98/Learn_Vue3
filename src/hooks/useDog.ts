    import { onMounted, reactive } from 'vue'
    import axios from 'axios';


export default function () {
        //数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_7038.jpg'
    ])

    //方法  
    async function getDog() {
        //await关键字：等待一个异步操作完成，拿到结果之后再向下执行(只能等到成功，等不到失败的情况)，所以使用try...catch捕获错误
        try {
            let res = await axios.get('https://dog.ceo/api/breeds/image/random')
            //console.log(res);
            dogList.push(res.data.message)
        } catch (error) {
            //alert(error)
            alert('请求狗狗图片失败了')
            //console.log('请求狗狗图片失败了', error);
        }
    }

    //钩子
    onMounted(() => {
        getDog()
    })


    //向外暴露数据和方法
    return {
        dogList,
        getDog
    }

}