<template>
  <!-- <nav v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="$store.dispatch('logout')">Logout</button>
  </nav> -->

 
    <div class="col-lg">
      <div class="row">
        <nav class="navbar navbar-expand navbar-dark bg-primary" aria-label="Second navbar example" v-if="$store.state.user">
          <div class="container-fluid">
            <a class="navbar-brand px-4" href="#">My Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample02">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <router-link to="/"  class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/createProduct" class="nav-link">Product</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/" @click="$store.dispatch('logout')">Logout</a>
              </li>
              </ul>
             
                <!-- <button class="nav-item" @click="$store.dispatch('logout')">Logout</button> -->
              
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  setup(){
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
