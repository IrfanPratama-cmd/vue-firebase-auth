<template>
   <main class="register">
    <br><br><br><br>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-lg-5">
                        <div class="card">

                            <!-- Logo -->
                            <div class="card-header pt-4 pb-4 text-center bg-primary">
                               <h2 class="text-light">My Store</h2>
                            </div>

                            <div class="card-body p-4">
                                
                                <div class="text-center w-75 m-auto">
                                    <h4 class="text-dark-50 text-center mt-0 fw-bold">Register</h4>
                                    <p class="text-muted mb-4">Create your email address and password </p>
                                </div>

                                <form class="register"  @submit.prevent="register">

                                    <div class="mb-3">
                                        <label for="emailaddress" class="form-label">Email address</label>
                                        <input class="form-control"  v-model="register_form.email" type="email" id="emailaddress" required="" placeholder="Enter your email">
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" v-model="register_form.password" class="form-control" placeholder="Enter your password">
                                            <div class="input-group-text" data-password="false">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="mb-3 mb-0 text-center">
                                        <input type="submit" class="btn btn-primary" value="Register">
                                        <!-- <button class="btn btn-primary" type="submit"> Log In </button> -->
                                    </div>

                                </form>
                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card -->

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <router-link to="/login" >Sudah Punya Akun</router-link>
                                <!-- <p class="text-muted">Belum Punya Akun? <a href="pages-register.html" class="text-muted ms-1"><b>Sign Up</b></a></p> -->
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
  </main>   
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    setup (){
        const register_form = ref({});
        const store = useStore();

        const register = () => {
            store.dispatch('register',register_form.value)
        }

        return {
            register_form,
            register
        }
    }
}
</script>

<style>

</style>