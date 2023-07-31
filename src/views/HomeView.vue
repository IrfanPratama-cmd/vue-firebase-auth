<template>
  <!-- <main class="home">
   <h1>Home</h1>
   <div>
    <Button>Click me!</Button>
    
  </div>
  </main> -->
  <section style="background-color: #eee;">
    <h2 class="py-2">Search Product</h2>
    <div class="row justify-content-center mb-3 py-3">
      <div class="col-md-6">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search.." v-model="searchKeyword" >
            <!-- <button class="btn btn-primary" type="button" @click="searchData" >Search</button> -->
          </div>

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><button class="dropdown-item" v-for="cat in category" :key="cat.id">
                <router-link :to="{  name: 'category', params:{category : cat}}"  type="button" aria-current="page">{{ cat.categoryName }}</router-link></button>
              </li>
            </ul>
          </div>

      </div>
    </div>
    <pre>
     Page : {{ currentPage }}
     Size : {{ currentSize }}
     TotalProduct : {{ this.countProduct }}
     TotalPage : {{ this.totalPages }}
    </pre>
        <div class="cek" v-if="countProduct == 0">
            <h2>Product Not Found !</h2>
        </div>
        
  
    <div class="container">
      <div class="row">
        <div class="col-md-11 d-flex">
          <router-link :to="{ name: 'create'}"  class="btn btn-primary" type="button" aria-current="page">Tambah Produk</router-link>
        </div>
        <div class="col-md-1 d-flex justify-content-end">
          <select class="form-select" v-model="currentSize" @click="changePerPage()" aria-label="Default select example">
            <option :value="2">2</option>
            <option :value="5">5</option>
            <option :value="10">10</option>
          </select>
        </div>
       
      </div>
    </div>
  <div class="container py-2" v-for="product in products" :key="product.id">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-12">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img width="200" :src="'https://source.unsplash.com/1200x400/?'+ product.productName"  height="160" 
                    class="w-100" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>{{ product.productName }}</h5>
               
                <div class="mt-1 mb-0 text-muted small">
                  <span class="text-primary">Category : </span>
                  <span >{{ product.category.categoryName }}</span>
                  <span class="text-primary"> • </span>
                  <span class="text-primary">Brand : </span>
                  <span>{{ product.brand.brandName }}</span>
                </div>
                <div class="mb-2 text-muted small">
                  <span>Stock : {{ product.stock }}</span>
                </div>
                <p >
                  {{product.description}}
                </p>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <h3 class="text-success">{{ convertToRupiah(product.price) }}</h3>
                <div class="d-flex flex-column mt-4">
                  <router-link :to="{ name: 'detail', params:{id : product.id}}"  class="btn btn-primary btn-sm" type="button" aria-current="page">Details</router-link>
                  <router-link :to="{ name: 'edit', params:{id : product.id}}"  class="btn btn-success btn-sm mt-2" type="button" aria-current="page">Edit</router-link>
                  <button class="btn btn-danger btn-sm mt-2" @click="deleteProduct(product.id)" type="button" >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>  
          
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" @click="previousPage" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" @click="nextPage" href="#">Next</a></li>
  </ul>
</nav>
</section>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Swal from 'sweetalert2';
export default { 
  data() {
    return {
      products: [],
      category: [],
      searchKeyword : '',
      currentPage: 0, // Halaman saat ini
      currentSize : 10,
      // totalPages : 0
      // itemsPerPage: 10 // Jumlah item per halaman
    }
  },
  mounted (){
      console.log(this.currentSize);
      this.fetchData();
  },

  methods: {
    fetchData(){
    axios.get('http://localhost:8080/api/products?', {
        params: {
          keyword: this.searchKeyword,
          page : this.currentPage,
          size : this.currentSize,
        },
      }).then((response) => {
        this.products = response.data.content
      });
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        this.category = response.data
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
    },

    changePerPage(){
      this.fetchData();
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

    deleteProduct(productID){
      axios.delete(`http://localhost:8080/api/products/${productID}`)
      .then(() => {
          // Jika berhasil dihapus, perbarui daftar data
          this.fetchData();
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
        });
        Swal.fire({
          icon: 'success',
          title: 'Product Deleted!',
          text: 'Produk Berhasil di Hapus',
        });
    },
    
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.fetchData();
      }
    },
    nextPage() {
        this.currentPage++;
        this.fetchData();
      
    }
  },
  computed: {
    countProduct() {
      return this.products.length;
    },

    totalPages() {
      return Math.ceil(this.products.length / this.currentSize);
    },

  },
  watch: {
    searchKeyword(){
      this.fetchData();
    }
  },

}
</script>
