<template>
    <div class="container">
        <h2>{{ post.title }}</h2>
        <p class="text-muted">{{ post.created_at }} by {{ post.user.name }}</p>
        <p>{{ post.body }}</p>
        <div>
            <NuxtLink class="btn btn-primary" :to="{name: 'posts-edit', params: {id: post.id}}">
                Edit
            </NuxtLink>
            <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button> 
        </div>
        <NuxtLink class="btn btn-link mt-3" to="/posts">&lt; Back</NuxtLink>
    </div>
</template>

<script>
export default {
    data(){
        return {
            post: ''
        }
    }, 
    async asyncData({$axios, params}) {
        let {data} = await $axios.$get("/posts/" + params.id)
        console.log(data)
        return {
           post: data,
           errors: ''
        }
    },
    methods: {
        deletePost(id) {
            this.$axios.$delete(`/posts/${id}`)
            .then(() => {
                console.log
                this.$router.push("/posts")
            }).catch(error => {
                this.errors = this.$store.state.error.errors
            })
        }
    }
}
</script>