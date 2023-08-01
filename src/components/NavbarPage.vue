<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end" id="NavbarPage">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/AboutView">About</router-link> |
            </li>
            <li class="nav-item">
                <router-link to="/admin">Admin</router-link>  
            </li>
        </ul>
    </nav>
</template>

<script>
    export default{
        name: 'NavbarPage'
    }

</script>

<style>


</style>