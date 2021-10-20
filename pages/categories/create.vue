<template>
    <div class="container"> 
        <h2>Create Category</h2>
        <hr class="mb-5">
        <form @submit.prevent="create">
            <div class="mb-3">
                <label class="form-label">Name: </label>
                <input v-model="form.name" type="text" class="form-control">
                <small class="form-text text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
            </div>  
            <button type="submit" class="btn btn-primary mt-3">Create</button>        
        </form>
    </div>
</template>

<script>
export default {
    auth: false,
    data() {
        return {
            form: {
                name: ''
            },
            errors: ''
        }
    },
    methods: {
        create() {            
            this.$axios.$post('/categories', this.form)
            .then(() => {
                this.$router.push('/categories')
            })
            .catch(e => {
                this.errors = this.$store.state.error.errors
            })
        }
    }
}
</script>