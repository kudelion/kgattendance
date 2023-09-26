<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark text-white justify-content-end" id="NavbarPage">
        <!-- Navbar items start-->
        <!-- <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/AboutView">About </router-link> |
            </li>
            <li class="nav-item">
                <router-link to="/admin"> Admin</router-link>  
            </li>
        </ul> -->
        <!--Navbar items end-->

        <!-- Navbar items start Vue Directives-->
        <ul class="navbar-nav">
            <!-- <li class="nav-item" v-for="items in navItem" :key="items">
                <router-link :to="`/items/${items.list}`">
                    {{items.list}} 
                </router-link>
            </li> -->
             <li class="nav-item" v-for="items in navItem" :key="items">
                <router-link :to="{path:`/items/${items.AdminView}`}">
                    {{items.AdminView}} 
                </router-link>
            </li>           
        </ul>
        <!--Navbar items end using Vue Directives-->
    </nav>
</template>

<script>

// import AdminView from '../views/AdminView.vue'


    export default{
        name: 'NavbarPage',
        components: {
            // AdminView,
        },
        data(){
            return{
                navItem:[
                    {id:'1',list:'About', path:'AboutView'},
                    {id:'2',list:'Admin', path:'admin'}
                ] 
            }
        }
    }
</script>

<style>


</style>