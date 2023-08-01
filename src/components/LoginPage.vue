<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-5-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-4">Sign in</h3>

            <div class="form-outline mb-4 shadow-2-strong">
              <input type="email" id="typeStudentEmail" 
                class="form-control form-control-lg" />
              <label class="form-label" 
                for="typeStudentEmail">
                Email
              </label>
            </div>

            <div class="form-outline mb-4 shadow-2-strong" >
              <input type="password" id="typeStudentPassword" 
                class="form-control form-control-lg" />
              <label class="form-label" 
                for="typeStudentPassword">
                Password
              </label>
            </div>

              <div class="row mb-2">
                
                <!-- Checkbox -->
                <div class="col d-flex justify-content-center">
                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" 
                      type="checkbox" value="" id="StudentPassword" />
                    <label class="form-check-label" 
                      for="StudentPassword"> 
                      Remember password 
                    </label>
                  </div>
                </div>
           
                <!-- Simple link -->
                <div class="col">
                    <a href="#!">Forgot password?</a>
                </div>
              </div>

              <router-link to="/StudentView">
                <button class="btn btn-lg btn-block" 
                  id="Login" type="submit">
                  Login
                </button>
              </router-link>
              
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default{
        name: 'LoginPage'
    }

</script>

<style scoped>
    #Login{
        background-color: #284265;
        border-bottom: #284265;
        color: aliceblue;
    }   

</style>