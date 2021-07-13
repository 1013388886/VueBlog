import BaseModule from '@/components/Base/BaseModule.vue'
import BaseBack from '@/components/Base/BaseBack.vue'
const component = {
    install:function(Vue){
        Vue.component('Login',BaseModule),
        Vue.component('Back',BaseBack)
    }  //'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法 component-name 是自定义的，我们可以按照具体的需求自己定义名字
    
}
export default component