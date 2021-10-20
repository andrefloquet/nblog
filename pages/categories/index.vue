<template>
    <div class="container">
        <h1>Categories</h1>
        <hr>
        <p class="mb-5">
            <NuxtLink to="/categories/create">Create a New Category</NuxtLink>
        </p>
        <div class="card mb-5" v-for="category in categories" :key="category.id">
            <div class="card-body">
                <h5 class="card-title">{{ category.name }}</h5>
                <a href="#" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    data() {
        return {
            categories: []
        }
    },
    async asyncData({ $axios }) {
        let {data} = await $axios.$get('/categories')
        return {
            categories: data
        }
    },
}
</script>
