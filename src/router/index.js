import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/auth',
        name: 'auth',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile/Profile.vue'),
        children: [
            {
                path: 'edit',
                name: 'profileEdit',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "profile-edit" */ '../views/Profile/ProfileEdit.vue'),
            },
            {
                path: 'pet/:id',
                name: 'pet',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "pet" */ '../views/Profile/Pet/ProfilePet.vue'),
            },
            {
                path: 'pet/:id/edit',
                name: 'petEdit',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "pet-edit" */ '../views/Profile/Pet/ProfilePetEdit.vue'),
            },
            {
                path: 'pet/add',
                name: 'petCreate',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "pet-create" */ '../views/Profile/Pet/ProfilePetCreate.vue'),
            },
        ],
    },
    {
        path: '/walk/create',
        name: 'walkCreate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "walk-create" */ '../views/Walk/WalkCreate.vue'),
    },
    {
        path: '/walk/:id',
        name: 'walk',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "walk" */ '../views/Walk/Walk.vue'),
    },
    {
        path: '/here-map',
        name: 'hareMap',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "here-map" */ '../views/HereMap.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
