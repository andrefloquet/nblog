<template>
    <div class="container">
        <h2>Post - Create</h2>
        <hr class="mb-5">
        <form @submit.prevent="create">
            <div class="mb-3">
                <label class="form-label">Title: </label>
                <input v-model="form.title" type="text" class="form-control">
                <small class="form-text text-danger" v-if="errors.title">{{ errors.title[0] }}</small>
            </div>
            <div class="mb-3">
                <label class="form-label">Body: </label>
                <textarea v-model="form.body" class="form-control"></textarea>
                <small class="form-text text-danger" v-if="errors.body">{{ errors.body[0] }}</small>
            </div>  
            <select v-model="form.category_id" class="form-select" aria-label="Default select example">
                <option selected disabled value="">Category</option>
                <option v-for="category in categories" 
                        :key="category.id" 
                        :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select> 
            <button type="submit" class="btn btn-primary mt-3">Create</button>        
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '',
                body: '',
                category_id: ''
            },
            categories: [],
            errors: ''
        }
    }, 
    async asyncData({$axios}) {
        let {data} = await $axios.$get('/categories')
        return {
            categories: data
        }
    },
    methods: {
        create(){
            this.$axios.$post('/posts', this.form)
            .then(() => {
                this.$router.push('/posts')
            }).catch(() => {
                this.errors = this.$store.state.error.errors
            })
        }
    }
}
</script>