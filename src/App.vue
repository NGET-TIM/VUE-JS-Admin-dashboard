<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import DashboardLayout from "@/views/Dashboard/Dashboard.vue";


</script>

<template>
    <main>
    <DashboardLayout/>

     <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="container-xl">
              <h1 class="app-page-title mt-5"><svg width="1em" height=".7em" viewBox="0 0
                                 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M.5 9.9a.5.5
                                    0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0
                                    1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2
                                    2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path fill-rule="evenodd" d="M7.646
                                    11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0
                                    0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1
                                    0v8.793L5.354 8.146a.5.5 0 1
                                    0-.708.708l3 3z"></path></svg> Overview > {{ page_title }} </h1>
              <!-- Body Here -->
              <RouterView />
          </div>
          <!--//container-fluid-->
        </div>
        <!--//app-content-->
        <footer class="app-footer green">
          <div class="container text-center py-3">
              <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
              <small class="copyright"
                >Designed with <i class="fas fa-heart" style="color: #fb866a"></i> by
              <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank"
                >Xiaoying Riley</a
                >
              for developers</small
                >
          </div>
        </footer>
        <!--//app-footer-->
    </div>
   </main>
  
</template>

<style>
@import "@/assets/base.css";


a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
.app-wrapper .app-content{
  background: #fff ! important;
}
.table tbody tr:hover 
{
  background: #edfdf6 ! important;
  cursor: pointer;
}
.table tbody tr:hover td
{
  color: #15a362 ! important;
}
.table.custom tbody tr td {
border: 1px solid #abb ! important;
}

.app-branding .logo-icon,
.app-user-dropdown img {
  border-radius: 50%;
}

</style>
