<template>
    <div class="container">
        <h1>Categories</h1>
        <hr>
        <p class="mb-5">
            <NuxtLink to="/categories/create">Create a New Category</NuxtLink>
        </p>
        <div class="card mb-5" v-for="category in categories" :key="category.id">
            <div class="card-body">
                <h5 class="card-title"><NuxtLink :to="{name: 'categories-id', params: {id: category.id}}">
                    {{ category.name }}
                </NuxtLink></h5>
                <p class="text-muted">{{ category.created_at }} by {{ category.user.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //auth: false,
    data() {
        return {
            categories: [],
            errors: ''
        }
    },
    // TODO: change to state
    async asyncData({ $axios }) {
        let {data} = await $axios.$get('/categories')
        return {
            categories: data
        }
    }
}
</script>
