<template>
    <!-- <main class="home">
     <h1>Home</h1>
     <div>
      <Button>Click me!</Button>
      
    </div>
    </main> -->
     <!-- <pre>
      {{ products }}
    </pre> -->
    <section style="background-color: #eee;">
      <h2 class="py-2">Detail Product</h2>
      
    <div class="container py-2">
      <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img width="200" height="160" :src="'https://source.unsplash.com/1200x400/?'+ products.productName"
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>{{ products.productName }}</h5>
                 
                  <div class="mt-1 mb-0 text-muted small">
                    <span>{{ products.category.categoryName }}</span>
                    <span class="text-primary"> • </span>
                    <span>{{ products.brand.brandName }}</span>
                  </div>
                  <div class="mb-2 text-muted small">
                    <span>Stock : {{ products.stock }}</span>
                    <span></span>
                  </div>
                  <p >
                    {{products.description}}
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <h2 class="text-success">{{convertToRupiah(products.price)}}</h2>
                  <div class="d-flex flex-column mt-4">
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
        products: {
          category: {categoryName:""},
          brand: {brandName:""}
        },
      }
    },


    mounted (){
        this.fetchData();
    },

    methods: {
      fetchData(){
        axios.get('http://localhost:8080/api/products/' + this.$route.params.id)
      .then( response => {
        this.products = response.data
        })
        .catch(error => {
          this.error = error;
        });
      },

      convertToRupiah(value) {
            // value = value.toString()
            value = parseFloat(value)
            let rupiah = ''
            let valueRev = value.toString().split('').reverse().join('')
            for (let i = 0; i < valueRev.length; i++) {
                if (i % 3 === 0) rupiah += `${valueRev.substr(i, 3)}.`
            }

            const rp = rupiah
                .split('', rupiah.length - 1)
                .reverse()
                .join('')
            // console.log('rupiah', isNaN(rp), rupiah.length, rp, rupiah)
            if (rupiah === 'NaN.' || rupiah === 'NaN') {
                return '...'
            }
            return `Rp ${rp}`
        },

    }
    
  }
  </script>
  