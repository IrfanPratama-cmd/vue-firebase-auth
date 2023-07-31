<template>
    <main class="create">
      <div class="container ">
        <div class="row justify-content-center" >
          <div class="col-lg-8">
            <h1 class="p-2">Edit Produk</h1>
            <div class="card border rounded-3">
              <div class="card-body">
                <form @submit.prevent="addData">
              <div class="mb-3">
                <label for="productName" class="form-label d-flex">Nama Produk</label>
                <input type="text" v-model="products.productName" class="form-control" id="productName"  >
              </div>
              <div class="mb-3">
                <label for="productCode" class="form-label d-flex">Kode Produk</label>
                <input type="text" v-model="products.productCode" class="form-control" id="productCode" >
              </div>
              <label for="category" class="form-label d-flex">Kategori</label>
              <select class="form-select" aria-label="Default select example" v-model="products.category.id" >
                <!-- <option selected >{{ products.category}}</option> -->
                <option selected disabled value>Pilih Kategori</option>
                <option v-for="cat in category" :key="cat.id" :value="cat.id">{{ cat.categoryName }}</option>
              </select>
              <br>
              <label for="brand" class="form-label d-flex">Merk</label>
              <select class="form-select" aria-label="Default select example" v-model="products.brand.id" >
                <option selected disabled value>Pilih Merk</option>
                <option v-for="br in brand" :key="br.id" :value="br.id" >{{ br.brandName }}</option>
              </select>
              <br>
              <div class="mb-3">
                <label for="stock" class="form-label d-flex">Stok</label>
                <input type="number" v-model="products.stock" class="form-control" id="stock" >
              </div>
              <div class="mb-3">
                <label for="price" class="form-label d-flex">Harga</label>
                <input type="number" v-model="products.price" class="form-control" id="price" >
              </div>
              <div class="mb-3">
                <label for="description" class="form-label d-flex">Deskripsi</label>
                <textarea class="form-control" v-model="products.description" id="description" rows="3"></textarea>
              </div>
              <br>
              <button type="submit" @click="editData(products.id)" class="btn btn-primary d-flex">Submit</button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  </template>
  

  <script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Swal from 'sweetalert2';
export default { 
  data() {
    return {
      brand: [],
      category: [],
      products: {
          category: {id:""},
          brand: {id:""}
        },
      productName: '',
      productCode: '',
      stock: '',
      price: '',
      description: '',
    }
  },
  mounted (){
      this.fetchData();
  },

  methods: {
    fetchData(){
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        this.category = response.data
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      });

    axios.get('http://localhost:8080/api/products/' + this.$route.params.id)
      .then( response => {
        this.products = response.data
        })
        .catch(error => {
          this.error = error;
        });
      
    axios.get('http://localhost:8080/api/brands')
      .then(response => {
        this.brand = response.data
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
    },

    editData(productID) {
      const editProduct = {
          productName: this.products.productName,
          productCode: this.products.productCode,
          price: this.products.price,
          stock: this.products.stock,
          description: this.products.description,
          category: {id : this.products.category.id},
          brand: {id : this.products.brand.id},
        };
      axios.put(`http://localhost:8080/api/products/${productID}`, editProduct).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Product Updated!',
            text: 'Edit Product Berhasil',
          });
          this.$router.push({ path: '/' })
        })
        .catch((error) => {
          console.error('Error update product:', error);
        });
      
    }
    
   
  },
  computed: {
   
  },
  watch: {
   
  },

}
</script>