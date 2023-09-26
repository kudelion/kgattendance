<template>
  <div class="" id="StudentView">
    <!-- Navbar Start-->
  <nav class="navbar navbar-expand-lg mb-2 navbar-dark bg-dark">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <!-- Logo -->
          <div class="navbar-brand mt-2 mt-lg-0">
            <img
              src="../assets/ico-logo.png"
              height="35"
              alt="KodeGo Logo"
              loading="lazy"
            />
          </div>
          <!-- Logo -->
          <div class="px-5" id="time">
            <h2> 09:00 am </h2>
          </div>
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
            <router-link to="/">
              <!-- <button> -->
                Log out
              <!-- </button> -->
            </router-link> 
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>

    
    <div class="row gx-1 justify-content-center">
        <!-- Sidebnav Starts -->
        <div class="col-md-2 py-2 px-2 bg-light shadow-5-strong" style="border-radius: 1rem;">
            <div>
              <h4>Juan Dela Cruz</h4>
              <h6>KG-01012020-01</h6>
            </div>
            <hr>
            <ul class="list-group nav nav-pills flex-column mb-auto">
              <li class="list-group-item" 
                v-for="select in FunctionList" :key="select" 
                v-on:click="FunctionDisplay = select.display">
                {{select.list}}
              </li>
            </ul>
            <hr>
        </div>
        <!-- Sidebnav end -->

        <div class="col-md-10 py-5 bg-light shadow-5-strong" style="border-radius: 1rem;">
          <!-- Punch In and Out Card Start -->
          <!-- <div class="card text-center mt-5 container-fluid" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">
                Punch In and Out
              </h5>
              <p class="card-text">
                Please do not forget to PUNCH IN and Out
              </p>
              <div class="d-grid gap-2">
                <button class="btn" type="button" id="buttonio">
                  PUNCH IN
                </button>
                <button class="btn" type="button" id="buttonio">
                  PUNCH OUT
                </button>
              </div>  
            </div>
          </div> -->
          <!-- Punch In and Out Card End -->
          {{FunctionDisplay}}
        </div>
    </div>
  </div>
  <!-- <DashboardPage/> -->
</template>

<script>
  export default{
    name:'StudentView',
    components: {
      },
    data(){
      return{
        FunctionDisplay:'Bundy Clock',
        FunctionList: [
          {list:'Bundy Clock', display: 'This part will display the PUNCH IN/OUT function' },
          {list:'Time Sheet', display: 'This will display the IN and OUT history' },
          {list:'My Profile', display:'This part will display the PROFILE of student'},
          {list:'Services', display:'This part will display REQUEST function'}, 
          {list:'Funstion5', display:'display five'},
          {list:'Funstion6', display:'display six'},
        ]        
      }
    }
  }
</script>


<style scoped>
  #time{
    color: aliceblue;
  }

  #buttonio{
        background-color: #284265;
        border-bottom: #284265;
        color: aliceblue;
    } 
</style>
