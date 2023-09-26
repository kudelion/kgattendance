<template>
  <div class="" id="AboutView">
    <h1>This is an about page</h1>
  </div>

  <div class="row gx-1 justify-content-center">
      <!-- Sidebnav Starts -->
      <div class="col-md-2 py-2 px-2 bg-light shadow-5-strong" style="border-radius: 1rem;">
          <div>
            <h3>Juan Dela Cruz</h3>
            <h6>KG-01012020-01</h6>
          </div>
          <hr>
            <ul class="list-group">
              <li class="list-group-item" 
                v-for="selection in FunctionList" :key="selection"
                v-on:click="SidebarFunctions = selection.display">
                  {{selection.list}}
              </li>
            </ul>
          <hr>
      </div>
      <!-- Sidebnav end -->

      <div class="col-md-10 py-5 bg-body-tertiarys justify-content-center" id="DisplaySection">
        {{SidebarFunctions}}
      </div>
  </div>
</template>

<script>
  export default{
    name: "AboutView",
    data(){
      return{
        SidebarFunctions:'Function1',
        FunctionList: [
          {list:'Funstion1', display:'display one'},
          {list:'Funstion2', display:'display two'},
          {list:'Funstion3', display:'display three'},
          {list:'Funstion4', display:'display four'},
        ] 
      }
    }
  }
</script>