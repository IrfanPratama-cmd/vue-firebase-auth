<template>
    <!-- <main class="home">
     <h1>Home</h1>
     <div>
      <Button>Click me!</Button>
      
    </div>
    </main> -->
    <section style="background-color: #eee;">
      <h2 class="py-2">Category : {{ this.$route.params.category }}</h2>
      <div class="row justify-content-center mb-3 py-3">
        <div class="col-md-6">
            
  
            <!-- <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button class="dropdown-item" v-for="cat in category" :key="cat.id">
                  <router-link :to="{  name: 'category', params:{category : cat}}"  type="button" aria-current="page">{{ cat }}</router-link></button>
                </li>
              </ul>
            </div> -->
  
            <!-- <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ selectedOption || 'Category' }}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" v-for="options in option" :key="options.id" @click="selectOption(option)">{{ option.name }}</a>
              </div>
            </div> -->
        </div>
      </div>
      <!-- <pre>
        {{ products }}
      </pre> -->
    <div class="container py-2" v-for="product in products" :key="product.id">
      <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img width="200" height="160" :src="product.thumbnail"
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>{{ product.title }}</h5>
                 
                  <div class="mt-1 mb-0 text-muted small">
                    <span class="text-primary">Category : </span>
                    <span >{{ product.category }}</span>
                    <span class="text-primary"> • </span>
                    <span class="text-primary">Brand : </span>
                    <span>{{ product.brand }}</span>
                  </div>
                  <div class="mb-2 text-muted small">
                    <span>Stock : {{ product.stock }}</span>
                    <span></span>
                    <span class="text-primary"> || </span>
                    <span>Rating {{ product.rating }}<br /></span>
                  </div>
                  <p >
                    {{product.description}}
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <h2 class="text-success">${{ product.price }}</h2>
                  <div class="d-flex flex-column mt-4">
                    <router-link :to="{ name: 'detail', params:{id : product.id}}"  class="btn btn-primary btn-sm" type="button" aria-current="page">Details</router-link>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </section>
  </template>
  
  <script>
  import axios from 'axios';
  export default { 
    data() {
      return {
        products: [],
      }
    },


    mounted (){
        console.log("category = ", this.$route.params.category);
        axios.get('https://dummyjson.com/products/category/' + this.$route.params.category)
      .then( response => {
        this.products = response.data.products
        console.log(this.products)
    })
        .catch(error => {
          this.error = error;
        });
    }
    
  }
  </script>
  