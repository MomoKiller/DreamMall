import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index.vue'
import Cart from '@/pages/cart.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        }
    ]
})