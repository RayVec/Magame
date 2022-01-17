import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component:Home
    }
    ,
    {
        path:'/helloworld',
        component:HelloWorld
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router