//App.vue

<template>
   
  <div class="container">
      
    <nav class="navbar navbar-expand-sm bg-red rounded-bottom">  
      <ul class="navbar-nav">  
        <img class="nav-item" src="@/assets/ALT_F4_Logo.png" style="width 130px;height:80px; border-radius: 10px;" />  
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Part</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list" class="nav-link">Parts List</router-link>
        </li>
      
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>

   .nav-item{
  font-family: Arial; 
  font-size: 40px; 
  font-weight: bold;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  width: 25%;
  border-radius: 10px;

   }
   .navbar navbar-expand-sm bg-dark navbar-dark{
     width: 100%;
   }
</style>

<script>
    export default{
    }
</script>