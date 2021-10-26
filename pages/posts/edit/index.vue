<template>
    <div class="container"> 
        <h2>Post - Update</h2>
        <hr class="mb-5">
        <form @submit.prevent="update">
            <div class="mb-3">
                <label class="form-label">Title: </label>
                <input v-model="title" type="text" class="form-control">
                <small class="form-text text-danger" v-if="errors.title">{{ errors.title[0] }}</small>
            </div>
            <div class="mb-3">
                <label class="form-label">Body: </label>
                <textarea v-model="body" class="form-control"></textarea>
                <small class="form-text text-danger" v-if="errors.body">{{ errors.body[0] }}</small>
            </div>  
            <select v-model="category_id" class="form-select" aria-label="Default select example">
                <!-- <option selected disabled value="">Category</option> -->
                <option v-for="category in categories" 
                        :key="category.id" 
                        :value="category.id"
                        :selected="category.id === category_id ? true : false"
                >
                    {{ category.name }}
                </option>
            </select>     
            <button type="submit" class="btn btn-primary mt-3">Update</button>        
        </form>
        <NuxtLink class="btn btn-link mt-3" to="/posts">&lt; Back</NuxtLink>
    </div>        
</template>

<script>
export default {
    data(){
        return {
            title: '',
            body: '',
            category_id: '',
            categories: []
        }
    }, 
    async asyncData({$axios, params}) {
        let {data} = await $axios.$get(`/posts/${params.id}`)
        let res    = await $axios.$get("/categories")
        return {
            title: data.title,
            body: data.body,
            category_id: data.category.id,
            categories: res.data,
            errors: ''
        }
    },
    methods: {
        update() {
            this.$axios.$patch(`/posts/${this.$route.params.id}`, {
                title: this.title,
                body:  this.body,
                category_id:  this.category_id,
            })   
            .then(() => {
                this.$router.push('/posts')
            })
            .catch(e => {
                this.errors = this.$store.state.error.errors
            })
        }
    }
}
</script>