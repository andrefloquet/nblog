<template>
    <div class="container"> 
        <h2>Login</h2>
        <hr class="mb-5">
        <form @submit.prevent="login">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input v-model="form.email" type="email" class="form-control">
                <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input v-model="form.password" type="password" class="form-control">
                <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
            </div>    
            <button type="submit" class="btn btn-primary mt-3">Login</button>        
        </form>
        <br>
        <p>Do not have an account? <nuxt-link to="register">Register</nuxt-link></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: 'andrefloquet@gmail.com',
                password: 'success'
            },
            errors: ''
        }
    },
    methods: {
        login() {            
            //try {
                this.$auth.loginWith('laravelSanctum', {data: this.form})
                .then(() => {
                    this.$router.push('/')
                })
                .catch(e => {
                    this.errors = this.$store.state.error.errors
                })
        }
    }
}
</script>