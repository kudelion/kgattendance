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

          <!-- Notifications -->
          <!-- <div class="dropdown">
            <a
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
            <i class="fa-sharp fa-solid fa-bell" style="color: #ebebeb;"></i>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </div> -->
          <!-- Avatar -->
          <!-- <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>

              </li>
            </ul>
          </div> -->
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
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link" aria-current="page">
                  HOME
                </a>
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

        <div class="col-md-10 py-5">
          <!-- Punch In and Out Card Start -->
          <div class="card text-center mt-5 container-fluid" style="width: 18rem;">
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
          </div>
          <!-- Punch In and Out Card End -->
        </div>
    </div>
  </div>
  <!-- <DashboardPage/> -->
</template>

<script>

  // import DashboardPage from '@/components/DashboardPage.vue'

  export default{
    name:'StudentView',
    components: {
    // DashboardPage
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
