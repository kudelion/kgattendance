<template>
  <div class="" id="AboutView">
    <h1>This is an about page</h1>
  <router-link to="/">
      <button>Home</button>
    </router-link>  
  </div>

  <div class="row gx-1 justify-content-center">
      <!-- Sidebnav Starts -->
      <div class="col-md-2 py-2 px-2 bg-light shadow-5-strong" style="border-radius: 1rem;">
          <div>
            <h3>Juan Dela Cruz</h3>
            <h6>KG-01012020-01</h6>
          </div>
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <button v-on:click="name='Robin'">HOME</button>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                DASHBOARD
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                REQUEST
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                CONTACTS US
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                FUNCTION 1
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                FUNCTION 2
              </a>
            </li>
          </ul>
          <hr>
      </div>
      <!-- Sidebnav end -->

      <div class="col-md-10 py-5 bg-body-tertiarys" id="DisplaySection">
          {{ add(7, 5, 6 ) }}
          {{ add(6, 7, 8 ) }}
          {{  mydsiplay() }}
          {{ names }}
          <testing-page/>
      </div>
  </div>
</template>

<script>

  import TestingPage from '@/components/TestingPage.vue';

  export default{
    name: "AboutView",
    components: { 
      TestingPage, 
    },

    data(){
      return{
        name:'Batman'
      }
    },
    methods: {
      add (a, b, C){
        return a+b+C
      },

      mydsiplay(){
        return "Ben Francis"
      },
    }
  }
</script>