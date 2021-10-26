<template>
    <div class="container">
        <h2>Category - Show</h2>
        <hr class="mb-5">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ category.name }}</h5>
                <p class="text-muted">{{ category.created_at }} by {{ category.user.name }}</p>
                <NuxtLink class="btn btn-primary" :to="{name: 'categories-edit', params: {id: category.id}}">Edit</NuxtLink>
                <button @click="deleteCategory(category.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
        <NuxtLink class="btn btn-link mt-3" to="/categories">&lt; Back</NuxtLink>
    </div>
</template>

<script>
export default {
    data(){
        return {
            category: ''
        }
    }, 
    async asyncData({$axios, params}) {
        let {data} = await $axios.$get("/categories/" + params.id)
        // console.log(data)
        return {
           category: data,
           errors: ''
        }
    },
    methods: {
        deleteCategory(id) {
            this.$axios.$delete(`/categories/${id}`)
            .then(() => {
                console.log
                this.$router.push("/categories")
            }).catch(error => {
                this.errors = this.$store.state.error.errors
            })
        }
    }
}
</script>