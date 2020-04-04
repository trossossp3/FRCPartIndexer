//App.vue

<template>
  
  <div class="container">
 <img src="@/assets/ALT_F4_Logo.png" />
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Part</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list" class="nav-link">List Parts</router-link>
        </li>
        
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
   
</style>

<script>
    export default{
    }
</script>