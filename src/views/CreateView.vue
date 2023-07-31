<template>
    <main class="create">
      <div class="container ">
        <div class="row justify-content-center" >
          <div class="col-lg-8">
            <h1 class="p-2">Tambah Produk</h1>
            <div class="card border rounded-3">
              <div class="card-body">
                <form @submit.prevent="addData">
              <div class="mb-3">
                <label for="productName" class="form-label d-flex">Nama Produk</label>
                <input type="text" v-model="productName" class="form-control" id="productName" >
              </div>
              <div class="mb-3">
                <label for="productCode" class="form-label d-flex">Kode Produk</label>
                <input type="text" v-model="productCode" class="form-control" id="productCode" >
              </div>
              <label for="category" class="form-label d-flex">Kategori</label>
              <select class="form-select" aria-label="Default select example" v-model="categoryID" >
                <option selected disabled value>Pilih Kategori</option>
                <option v-for="cat in category" :key="cat.id" :value="cat.id">{{ cat.categoryName }}</option>
              </select>
              <br>
              <label for="brand" class="form-label d-flex">Merk</label>
              <select class="form-select" aria-label="Default select example" v-model="brandID" >
                <option selected disabled value>Pilih Merk</option>
                <option v-for="br in brand" :key="br.id" :value="br.id" >{{ br.brandName }}</option>
              </select>
              <br>
              <div class="mb-3">
                <label for="stock" class="form-label d-flex">Stok</label>
                <input type="number" v-model="stock" class="form-control" id="stock" >
              </div>
              <div class="mb-3">
                <label for="price" class="form-label d-flex">Harga</label>
                <input type="number" v-model="price" class="form-control" id="price" >
              </div>
              <div class="mb-3">
                <label for="description" class="form-label d-flex">Deskripsi</label>
                <textarea class="form-control" v-model="description" id="description" rows="3"></textarea>
              </div>
              <br>
              <button type="submit" class="btn btn-primary d-flex">Submit</button>
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
      productName: '',
      productCode: '',
      stock: '',
      price: '',
      description: '',
      categoryID: [],
      brandID: [],
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
      axios.get('http://localhost:8080/api/brands')
      .then(response => {
        this.brand = response.data
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
    },

    addData() {
      const addProduct = {
          productName: this.productName,
          productCode: this.productCode,
          price: this.price,
          stock: this.stock,
          description: this.description,
          category: {id : this.categoryID},
          brand: {id : this.brandID},
        };
      axios.post("http://localhost:8080/api/products", addProduct)
      Swal.fire({
        icon: 'success',
        title: 'Product Created!',
        text: 'Produk Berhasil di Tambah',
      });
      this.$router.push({ path: '/' })
    }
    
   
  },
  computed: {
   
  },
  watch: {
   
  },

}
</script>