import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: `/`,
        name: `HomePage`,
        component: Home
    },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
