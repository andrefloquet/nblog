<template>
    <div class="container"> 
        <h2>Register</h2>
        <hr class="mb-5">
        <form @submit.prevent="register">
            <div class="mb-3">
                <label class="form-label">Full Name</label>
                <input v-model="form.name" type="text" class="form-control">
                <!-- <small class="form-text text-danger">Show errors here</small> -->
            </div>            
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input v-model="form.email" type="email" class="form-control">
                <!-- <small class="form-text text-danger">Show errors here</small> -->
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input v-model="form.password" type="password" class="form-control">
                <!-- <small class="form-text text-danger">Show errors here</small> -->
            </div>    
            <input type="submit" class="btn btn-primary mt-3" value="Register" />        
        </form>
        <br>
        <p>Do you already have an account? <nuxt-link to="login">Login</nuxt-link></p>
    </div>
</template>

<script>
//import axios from 'axios'
export default {

    auth: false,
    //middleware: 'guest',
    // created(context) {
    //      console.log(context.store.state)
    //     if (context.store.state.auth.loggedIn) {
           
    //         return context.redirect('/')
    //     }
    // },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() { 

            console.log('got  1');

            //let {data} = await this.$axios.$post('/test', this.form)

            //console.log(data)

            // this.$axios.post('/test', {},{
            //     'Content-Type': 'application/json', 
            //     'Accept': 'application/json'
            // })
            
            //await 

            // this.$axios.$get('http://localhost:8000/sanctum/csrf-cookie').then(res => {
            //     console.log(res)
            //     this.$auth.setUserToken(true).then(() => {
            //         this.$axios.$post('/test').then(() => {
            //     //$axios.post('/test').then(() => {
            //     //     // Set token flag and fetch user
            //     //     this.$auth.setUserToken(true).then(() => {
            //     //         this.$router.push('/about')
            //     //     })
            //     //      console.log('test')
            //         }).catch((errors) => {
            //     //     // Registration failed
            //     //     console.log(errors)
            //         })
            //     }).catch((errors) => {
            //         // Registration failed
            //         console.log(errors)
            //     })
            // })   

        }
    }
}
</script>